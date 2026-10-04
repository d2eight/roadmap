import { GuideModel } from '@/libs/db/generated/prisma/models/Guide';
import { prisma } from 'database';
import { generateText, Output } from 'ai';
import { openai } from '@ai-sdk/openai';
import { aiQuestionsSchema, GuideJob } from 'shared-types';
import { Job, UnrecoverableError } from 'bullmq';
import { io } from '../../main';

export async function aiCreateGuideQuestions(job: Job<GuideJob>) {
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
      status: 'QUESTIONS_GENERATION',
    },
  });

  io.to(userId).emit('guide_update', {
    ...firstGuideUpdate,
  });

  const userPrompt = guide.prompt;

  const aiPrompt = `Generate a questions, which will improve our understanding for this user prompt: ${userPrompt}. We will use them, to ask a user for more deep understanding of his purposes, competencies about requested topic. Do not create any questions about timestamps. You must create four questions. Question with A B C D answers, where the only one can be choosen. Question with range answer, where user answers on the question by choosing some number from 1 to 100. Question, where user answers with text input. Question with checkboxes, where user can choose multiple answers. Follow the schema for generation such a questions.`;

  const { output } = await generateText({
    model: openai('gpt-5.4-mini'),
    output: Output.object({
      schema: aiQuestionsSchema,
    }),
    prompt: aiPrompt,
  });

  const secondGuideUpdate = await prisma.guide.update({
    where: {
      id: guideId,
      userId: userId,
    },
    data: {
      status: 'QUESTIONS_GENERATED',
      questions: JSON.stringify(output),
    },
  });

  io.to(userId).emit('guide_update', {
    ...secondGuideUpdate,
  });
}
