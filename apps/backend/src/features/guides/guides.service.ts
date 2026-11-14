import {
    answeredQuestionsSchemaType,
    guideQuestionsSchemaType,
    GuideStepModelFetched,
    promptSchemaType,
} from 'shared-types';
import { GuideProgressStatus, prisma, Prisma } from 'database';

import { getGuideStepProperties, guidesResetData } from 'shared-constants';
import { JobsOptions } from 'bullmq';
import {
    guideGenerationQueue,
    guideQuestionsGenerationQueue,
} from '../../queues';
import { defineGuideProgressStatus } from '../../utils';

const getJobOptions = (guideId: string): JobsOptions => {
    return {
        jobId: guideId,
        removeOnComplete: true,
        removeOnFail: true,
        attempts: 3,
        backoff: {
            type: 'fixed',
            delay: 1000,
        },
    };
};

export async function setGuideFailure({
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
            status: 'FAILED',
        },
    });
}

export async function createEmptyGuide({
    promptData,
    userId,
}: {
    promptData: promptSchemaType;
    userId: string;
}) {
    return prisma.guide.create({
        data: {
            prompt: promptData.prompt,
            externalAiQuestionsStatus: promptData.externalAiQuestionsStatus,
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

export function resetGuide({
    guideId,
    userId,
}: {
    guideId: string;
    userId: string;
}) {
    return prisma.guide.update({
        where: {
            id: guideId,
            userId: userId,
        },
        data: guidesResetData,
    });
}

export function resetGuideWithQuestions({
    guideId,
    userId,
    prompt,
}: {
    guideId: string;
    userId: string;
    prompt: string;
}) {
    return prisma.guide.update({
        where: {
            id: guideId,
            userId: userId,
        },
        data: {
            ...guidesResetData,
            prompt,
            answeredQuestions: Prisma.JsonNull,
            questions: Prisma.JsonNull,
        },
    });
}

export function resetGuideWithAnsweredQuestions({
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
            ...guidesResetData,
            answeredQuestions,
        },
    });
}

export function addGuideAnsweredQuestions({
    guideId,
    userId,
    answeredQuestions,
}: {
    guideId: string;
    userId: string;
    answeredQuestions: guideQuestionsSchemaType;
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
        getJobOptions(guideId),
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
        getJobOptions(guideId),
    );
}

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
            steps: getGuideStepProperties,
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
                steps: getGuideStepProperties,
            },
        });

        return guideSecondUpdate;
    }

    return guideFirstUpdate;
}
