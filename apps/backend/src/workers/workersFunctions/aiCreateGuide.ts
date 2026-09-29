import { Job } from 'bullmq';
import { generateText, Output } from 'ai';
import { prisma } from 'database';
import {
  aiGuideGenerationSchema,
  answeredQuestionsSchemaType,
  GuideJob,
} from 'shared-types';
import { openai } from '@ai-sdk/openai';
import { GuideStepCreateManyInput } from '@/libs/db/generated/prisma/models/GuideStep';
import { io } from '../../main';

export async function aiCreateGuide(job: Job<GuideJob>) {
  const answeredQuestions: answeredQuestionsSchemaType =
    job.data.answeredQuestions;
  const guideId: string = job.data.guideId;
  const userId: string = job.data.userId;
  const prompt: string = job.data.prompt;

  console.log('hello');

  const firstGuideUpdate = await prisma.guide.update({
    where: {
      id: guideId,
      userId: userId,
    },
    data: {
      status: 'GUIDE_GENERATION',
      ...(answeredQuestions && { answeredQuestions: answeredQuestions }),
    },
  });

  console.log(firstGuideUpdate);

  io.to(userId).emit('guide_update', {
    ...firstGuideUpdate,
  });

  const aiPrompt: string = answeredQuestions
    ? `Generate a new guide, for this user prompt: ${prompt}. Generate it, like you are a expert in requested topic. We've asked our user questions, and he answered them. Create a highly personalized guide based on these answers: ${JSON.stringify(answeredQuestions)}. Inside the description field(for guide in general), provide general information about the guide: what it is about, its goal, and what knowledge and skills the user will gain. Follow the output schema`
    : `Generate a new guide, for this user prompt: ${prompt}. Generate it, like you are a expert in requested topic. Inside the description field(for guide in general), provide general information about the guide: what it is about, its goal, and what knowledge and skills the user will gain. Follow the output schema`;

  const { output } = await generateText({
    model: openai('gpt-5.4-mini'),
    output: Output.object({
      schema: aiGuideGenerationSchema,
    }),
    prompt: aiPrompt,
  });
  console.log(output);
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
