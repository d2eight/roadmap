import { generateText, Output } from 'ai';
import { prisma } from 'database';
import { aiGuideGenerationSchema } from 'shared-types';
import { openai } from '@ai-sdk/openai';
import { GuideStepCreateManyInput } from '@/libs/db/generated/prisma/models/GuideStep';
import { GuideModel } from '@/libs/db/generated/prisma/models/Guide';
import { getIO } from '../../socket';
import { env } from 'env';

export async function aiCreateGuide(guide: GuideModel) {
    const guideId = guide.id;
    const userId = guide.userId;
    const io = getIO();

    const firstGuideUpdate = await prisma.guide.update({
        where: {
            id: guideId,
            userId: userId,
        },
        data: {
            status: 'GUIDE_GENERATION',
        },
    });

    io.to(userId).emit('guide_update', {
        ...firstGuideUpdate,
    });

    const promptData = guide.answeredQuestions
        ? {
              instructions:
                  "Generate a new guide, for this user prompt. Generate it, like you are a expert in requested topic. We've asked our user questions, and he answered them. Create a highly personalized guide based on user answers. Inside the description field(for guide in general), provide general information about the guide: what it is about, its goal, and what knowledge and skills the user will gain. Follow the output schema",
              prompt: JSON.stringify({
                  userPrompt: guide.prompt,
                  questions: guide.questions,
                  answers: guide.answeredQuestions,
              }),
          }
        : {
              instructions:
                  'Generate a new guide, for this user prompt. Generate it, like you are a expert in requested topic. Inside the description field(for guide in general), provide general information about the guide: what it is about, its goal, and what knowledge and skills the user will gain. Follow the output schema',
              prompt: JSON.stringify({
                  userPrompt: guide.prompt,
              }),
          };

    const { output } = await generateText({
        model: openai(env.OPENAI_MODEL),
        output: Output.object({
            schema: aiGuideGenerationSchema,
        }),
        ...promptData,
    });

    const secondGuideUpdate = await prisma.guide.update({
        where: {
            id: guideId,
            userId: userId,
        },
        data: {
            title: output.title,
            description: output.description,
            status: 'GUIDE_GENERATED',
        },
    });

    const guideStepsBlank: GuideStepCreateManyInput[] = output.steps.map(
        (step) => {
            return {
                title: step.title,
                description: step.description,
                guideId: guideId,
            };
        },
    );

    const guideSteps = await prisma.guideStep.createManyAndReturn({
        data: guideStepsBlank,
        select: {
            id: true,
            guideId: true,
            title: true,
            description: true,
            status: true,
        },
    });

    io.to(userId).emit('guide_update', {
        ...secondGuideUpdate,
        steps: guideSteps,
    });
}
