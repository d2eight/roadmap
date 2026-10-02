import express from 'express';
import {
  answeredQuestionsSchemaType,
  GuideJob,
  GuideStepModelFetched,
  promptSchemaType,
} from 'shared-types';
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
import { getGuideStepProperties } from 'shared-constants';
import { Job } from 'bullmq';

export async function create(prompt: string, userId: string): Promise<string> {
  const newGuide = await createEmptyGuide(prompt, userId);

  await guideGenerationQueue.add(
    'newGuide',
    {
      guideId: newGuide.id,
      userId: userId,
      prompt: prompt,
    },
    { jobId: newGuide.id, removeOnComplete: true, removeOnFail: true },
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
    { jobId: newGuide.id, removeOnComplete: true, removeOnFail: true },
  );

  return newGuide.id;
}

export async function createWithAnsweredQuestions({
  prompt,
  answeredQuestions,
  guideId,
  userId,
}: {
  prompt: string;
  answeredQuestions: answeredQuestionsSchemaType;
  guideId: string;
  userId: string;
}) {
  await guideGenerationQueue.add(
    'newGuide_withAnsweredQuestions',
    {
      prompt: prompt,
      answeredQuestions: answeredQuestions,
      userId: userId,
      guideId: guideId,
    },
    { jobId: guideId, removeOnComplete: true, removeOnFail: true },
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
  const guideFirstUpdate = await prisma.guide.update({
    where: {
      id: guideId,
      userId: userId,
    },
    data: {
      steps: {
        update: steps.map((step: GuideStepModelFetched) => ({
          where: {
            id: step.id,
            guideId: guideId,
          },
          data: {
            status: step.status,
          },
        })),
      },
    },
    include: {
      steps: {
        ...getGuideStepProperties,
      },
    },
  });

  const progressStatus: GuideProgressStatus = defineGuideProgressStatus(
    guideFirstUpdate.steps,
  );

  if (guideFirstUpdate.progressStatus !== progressStatus) {
    const guideSecondUpdate = await prisma.guide.update({
      where: {
        id: guideId,
        userId: userId,
      },
      data: {
        progressStatus: progressStatus,
      },
      include: {
        steps: {
          ...getGuideStepProperties,
        },
      },
    });

    return guideSecondUpdate;
  }

  return guideFirstUpdate;
}

async function resetGuideStatus({
  guideId,
  userId,
  deleteAnsweredQuestions = false,
}: {
  guideId: string;
  userId: string;
  deleteAnsweredQuestions?: boolean;
}) {
  const guideStatusReset = prisma.guide.update({
    where: {
      id: guideId,
      userId: userId,
    },
    data: {
      progressStatus: 'PENDING',
      status: 'INIT',
      ...(deleteAnsweredQuestions && { answeredQuestions: {} }),
    },
  });

  const deleteSteps = prisma.guideStep.deleteMany({
    where: {
      guideId: guideId,
    },
  });

  await prisma.$transaction([guideStatusReset, deleteSteps]);
}

export async function recreate(guideId: string, userId: string) {
  const guide = await prisma.guide.findUnique({
    where: {
      id: guideId,
      userId: userId,
    },
  });

  if (!guide) {
    throw new Error();
  }

  await resetGuideStatus({ guideId, userId });

  const job: GuideJob = {
    prompt: guide.prompt,
    userId: userId,
    guideId: guideId,
    answeredQuestions: guide.answeredQuestions as answeredQuestionsSchemaType,
  };

  await guideGenerationQueue.add('guide_recreate', job, {
    jobId: guideId,
    removeOnComplete: true,
    removeOnFail: true,
  });
}

export async function recreateGuideWithQuestions({
  prompt,
  answeredQuestions,
  guideId,
  userId,
}: {
  prompt: string;
  answeredQuestions: answeredQuestionsSchemaType;
  guideId: string;
  userId: string;
}) {
  const guide = await prisma.guide.findUnique({
    where: {
      id: guideId,
      userId: userId,
    },
  });

  if (!guide) {
    throw new Error();
  }

  await resetGuideStatus({ guideId, userId, deleteAnsweredQuestions: true });

  await createWithAnsweredQuestions({
    prompt,
    answeredQuestions,
    guideId,
    userId,
  });
}
