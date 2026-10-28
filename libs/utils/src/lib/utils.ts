import { prisma } from 'database';
import {
    paramsSchemaType,
    UsersGuidesStatistics,
    UsersStatistics,
    UsersStepsStatistics,
} from 'shared-types';
import { auth } from 'auth';
import { getGuideStepProperties } from 'shared-constants';
import { GuideStepStatus } from 'database/enums';
import { GuideProgressStatus } from 'database/enums';

export async function getSession({ headers }: { headers: Headers }) {
    return auth.api.getSession({
        headers,
    });
}

export async function getUsersStatistics({
    userId,
}: {
    userId: string;
}): Promise<UsersStatistics> {
    const stepsOperation = prisma.guideStep.groupBy({
        by: ['status'],
        where: {
            guide: {
                userId,
            },
        },
        _count: { _all: true },
    });

    const guidesOperation = prisma.guide.groupBy({
        by: ['progressStatus'],
        where: {
            userId,
        },
        _count: { _all: true },
    });

    const [stepsInfo, guidesInfo] = await prisma.$transaction([
        stepsOperation,
        guidesOperation,
    ]);

    const stepsCounts = Object.values(GuideStepStatus).reduce((acc, status) => {
        const count = stepsInfo.find((item) => item.status === status)?._count
            ._all;
        acc[status] = count ?? 0;
        return acc;
    }, {} as UsersStepsStatistics);

    const guidesCounts = Object.values(GuideProgressStatus).reduce(
        (acc, status) => {
            const count = guidesInfo.find((item) => {
                return item.progressStatus === status;
            })?._count._all;

            acc[status] = count ?? 0;
            return acc;
        },
        {} as UsersGuidesStatistics,
    );

    return {
        stepsCounts,
        guidesCounts,
    };
}

export async function getCurrentUsersGuide({ userId }: { userId: string }) {
    return prisma.guide.findFirst({
        where: {
            userId: userId,
        },
        orderBy: {
            updatedAt: 'desc',
        },
        include: {
            steps: {
                ...getGuideStepProperties,
            },
        },
    });
}

export async function getDoneUsersGuide({ userId }: { userId: string }) {
    return prisma.guide.findFirst({
        where: {
            userId: userId,
            progressStatus: 'DONE',
        },
        orderBy: {
            updatedAt: 'desc',
        },
        include: {
            steps: {
                ...getGuideStepProperties,
            },
        },
    });
}

export async function getGuide({
    userId,
    guideId,
}: {
    userId: string;
    guideId: string;
}) {
    return prisma.guide.findUnique({
        where: {
            id: guideId,
            userId: userId,
        },
        include: {
            steps: {
                ...getGuideStepProperties,
            },
        },
    });
}

export async function getGuides({
    pageSize,
    userId,
    params,
}: {
    pageSize: number;
    userId: string;
    params: paramsSchemaType;
}) {
    const currentPage = params.page;
    const orderBy = {
        [`${params.orderBy}`]: 'desc',
    };
    const progressStatus = params.progressStatus;

    return prisma.$transaction([
        prisma.guide.findMany({
            where: {
                userId: userId,
                progressStatus: {
                    in: progressStatus,
                },
            },
            include: {
                steps: {
                    select: {
                        id: true,
                        guideId: true,
                        title: true,
                        description: true,
                        status: true,
                    },
                    orderBy: {
                        id: 'asc',
                    },
                },
            },
            skip: (currentPage - 1) * pageSize,
            take: pageSize,
            orderBy,
        }),
        prisma.guide.count({
            where: {
                userId: userId,
                progressStatus: {
                    in: progressStatus,
                },
            },
        }),
    ]);
}
