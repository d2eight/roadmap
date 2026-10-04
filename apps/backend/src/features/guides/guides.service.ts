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
  guideQuestionsGenerationQueue,
} from '../../main';
import { GuideStepModel } from '@/libs/db/generated/prisma/models/GuideStep';
import { GuideProgressStatus } from '@/libs/db/prisma/generated/schemas';
import { getGuideStepProperties } from 'shared-constants';

export async function createEmptyGuide({
  prompt,
  userId,
}: {
  prompt: string;
  userId: string;
}) {
  return prisma.guide.create({
    data: {
      prompt,
      userId,
    },
  });
}

export async function deleteGuide({
  guideId,
  userId,
}: {
  guideId: string;
  userId: string;
}) {
  return await prisma.guide.delete({
    where: {
      id: guideId,
      userId: userId,
    },
  });
}

export async function resetGuideStatus({
  guideId,
  userId,
}: {
  guideId: string;
  userId: string;
}) {
  return await prisma.guide.update({
    where: {
      id: guideId,
      userId: userId,
    },
    data: {
      status: 'INIT',
      progressStatus: 'PENDING',
    },
  });
}

export async function deleteAllGuideSteps({ guideId }: { guideId: string }) {
  return await prisma.guideStep.deleteMany({
    where: {
      guideId: guideId,
    },
  });
}

export async function addNewPrompt({
  guideId,
  userId,
  newPrompt,
}: {
  guideId: string;
  userId: string;
  newPrompt: string;
}) {
  return await prisma.guide.update({
    where: {
      id: guideId,
      userId: userId,
    },
    data: {
      prompt: newPrompt,
    },
  });
}

export async function deleteCurrentQuestionsData({
  guideId,
  userId,
}: {
  guideId: string;
  userId: string;
}) {
  return await prisma.guide.update({
    where: {
      id: guideId,
      userId: userId,
    },
    data: {
      answeredQuestions: null,
      questions: null,
    },
  });
}

export async function addGuideAnsweredQuestions({
  guideId,
  userId,
  answeredQuestions,
}: {
  guideId: string;
  userId: string;
  answeredQuestions: answeredQuestionsSchemaType;
}) {
  return prisma.guide.update({
    where: {
      id: guideId,
      userId: userId,
    },
    data: {
      answeredQuestions: answeredQuestions,
    },
  });
}

export async function initiateAiStepsGeneration({
  guideId,
  userId,
}: {
  guideId: string;
  userId: string;
}) {
  await guideGenerationQueue.add(
    'newGuide',
    {
      guideId: guideId,
      userId: userId,
    },
    { jobId: guideId, removeOnComplete: true, removeOnFail: true },
  );
}

export async function initiateAiQuestionsGeneration({
  guideId,
  userId,
}: {
  guideId: string;
  userId: string;
}) {
  await guideQuestionsGenerationQueue.add(
    'newGuide_Questions',
    {
      guideId: guideId,
      userId: userId,
    },
    { jobId: guideId, removeOnComplete: true, removeOnFail: true },
  );
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

export async function updateGuide({
  guideId,
  userId,
  steps,
}: {
  guideId: string;
  userId: string;
  steps: GuideStepModelFetched[];
}) {
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
