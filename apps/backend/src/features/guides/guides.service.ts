import express from 'express';
import { answeredQuestionsSchemaType, promptSchemaType } from 'shared-types';
import { prisma } from 'database';
import { GuideModel } from '@/libs/db/generated/prisma/models/Guide';
import {
  guideGenerationQueue,
  guideGenerationWithAnsweredQuestionsQueue,
  guideQuestionsGenerationQueue,
} from '../../main';
import { createEmptyGuide } from 'utils';
import { GuideStepModel } from '@/libs/db/generated/prisma/models/GuideStep';
import { GuideProgressStatus } from '@/libs/db/prisma/generated/schemas';

export async function create(prompt: string, userId: string): Promise<string> {
  const newGuide = await createEmptyGuide(prompt, userId);

  await guideGenerationQueue.add(
    'newGuide',
    {
      guideId: newGuide.id,
      userId: userId,
      prompt: prompt,
    },
    { jobId: newGuide.id },
  );

  return newGuide.id;
}

export async function createQuestions(
  prompt: string,
  userId: string,
): Promise<string> {
  const newGuide = await createEmptyGuide(prompt, userId);

  await guideQuestionsGenerationQueue.add(
    'newGuide_Questions',
    {
      guideId: newGuide.id,
      userId: userId,
      prompt: prompt,
    },
    { jobId: newGuide.id },
  );

  return newGuide.id;
}

export async function createWithAnsweredQuestions(
  prompt: string,
  answeredQuestions: answeredQuestionsSchemaType,
  guideId: string,
  userId: string,
) {
  await guideGenerationQueue.add(
    'newGuide_withAnsweredQuestions',
    {
      prompt: prompt,
      answeredQuestions: answeredQuestions,
      userId: userId,
      guideId: guideId,
    },
    { jobId: guideId },
  );
}

export async function remove(guideId: string, userId: string) {
  await prisma.guide.delete({
    where: {
      id: guideId,
      userId: userId,
    },
  });
}

function defineGuideProgressStatus(
  steps: GuideStepModel[],
): GuideProgressStatus {
  if (isGuideDone(steps)) {
    return 'DONE';
  }

  if (isGuideInWork(steps)) {
    return 'INWORK';
  }

  return 'PENDING';
}

const isGuideDone = (steps: GuideStepModel[]): boolean => {
  return steps.every((step) => step.status === 'DONE');
};

const isGuideInWork = (steps: GuideStepModel[]): boolean => {
  return steps.some(
    (step) => step.status === 'DONE' || step.status === 'INWORK',
  );
};

export async function update(
  guideId: string,
  userId: string,
  steps: GuideStepModel[],
) {
  const progressStatus: GuideProgressStatus = defineGuideProgressStatus(steps);

  const stepsUpdateOperations = steps.map((step: GuideStepModel) => {
    return prisma.guideStep.update({
      where: {
        id: step.id,
        guideId: guideId,
      },
      data: {
        status: step.status,
      },
    });
  });

  const guideUpdateOperation = prisma.guide.update({
    where: {
      id: guideId,
      userId: userId,
    },
    data: {
      progressStatus: progressStatus,
    },
  });

  const operations = [...stepsUpdateOperations, guideUpdateOperation];

  await prisma.$transaction(operations);
}
