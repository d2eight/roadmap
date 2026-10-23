import { GuideModel } from '@/libs/db/generated/prisma/models/Guide';
import { prisma } from 'database';
import { generateText, Output } from 'ai';
import { openai } from '@ai-sdk/openai';
import { aiQuestionsSchema } from 'shared-types';
import { getIO } from '../../socket';

export async function aiCreateGuideQuestions(guide: GuideModel) {
  const guideId = guide.id;
  const userId = guide.userId;
  const io = getIO();

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

  const promptData = {
    instructions:
      'Generate a questions, which will improve our understanding for the user prompt. We will use them, to ask a user for more deep understanding of his purposes, competencies about requested topic. Do not create any questions about timestamps. You must create four questions. Question with A B C D answers, where the only one can be chosen. Question with range answer, where user answers on the question by choosing some number from 1 to 100. Question, where user answers with text input. Question with checkboxes, where user can choose multiple answers. Follow the schema for generation such a questions.',
    prompt: guide.prompt,
  };

  const { output } = await generateText({
    model: openai('gpt-5.4-mini'),
    output: Output.object({
      schema: aiQuestionsSchema,
    }),
    ...promptData,
  });

  const secondGuideUpdate = await prisma.guide.update({
    where: {
      id: guideId,
      userId: userId,
    },
    data: {
      status: 'QUESTIONS_GENERATED',
      questions: output,
    },
  });

  io.to(userId).emit('guide_update', {
    ...secondGuideUpdate,
  });
}
