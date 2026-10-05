import { Job, UnrecoverableError } from 'bullmq';
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
import { google } from '@ai-sdk/google';

export async function aiCreateGuide(job: Job<GuideJob>) {
  const guideId: string = job.data.guideId;
  const userId: string = job.data.userId;

  const guide = await prisma.guide.findUnique({
    where: {
      id: guideId,
      userId: userId,
    },
  });

  if (!guide) {
    throw new UnrecoverableError('Unknown error');
  }

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

  const userPrompt = guide.prompt;

  const aiPrompt: string = guide.answeredQuestions
    ? `Generate a new guide, for this user prompt: ${userPrompt}. Generate it, like you are a expert in requested topic. We've asked our user questions, and he answered them. Create a highly personalized guide based on these answers: ${JSON.stringify(guide.answeredQuestions)}. Inside the description field(for guide in general), provide general information about the guide: what it is about, its goal, and what knowledge and skills the user will gain. Follow the output schema`
    : `Generate a new guide, for this user prompt: ${userPrompt}. Generate it, like you are a expert in requested topic. Inside the description field(for guide in general), provide general information about the guide: what it is about, its goal, and what knowledge and skills the user will gain. Follow the output schema`;

  console.log(aiPrompt);

  const { output } = await generateText({
    model: openai('gpt-5.4-mini'),
    output: Output.object({
      schema: aiGuideGenerationSchema,
    }),
    prompt: aiPrompt,
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
