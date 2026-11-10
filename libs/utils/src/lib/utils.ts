import { GuideStatus, prisma } from 'database';
import {
    DaysAmountSchemaType,
    paramsSchemaType,
    UsersActivity,
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

function normalizeDate(date: Date) {
    return new Date(date.setHours(0, 0, 0, 0));
}

export function getDatesArray({
    startDate,
    endDate,
}: {
    startDate: Date;
    endDate: Date;
}) {
    const dates = [];
    const currentDate = new Date(startDate);
    currentDate.setHours(0, 0, 0, 0);

    const lastDate = new Date(endDate);
    lastDate.setHours(0, 0, 0, 0);

    while (currentDate <= lastDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
}

export async function getUsersActivity({
    userId,
    daysAmount = 15,
}: {
    userId: string;
    daysAmount?: DaysAmountSchemaType;
}): Promise<UsersActivity> {
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - daysAmount);
    const dates = getDatesArray({ startDate, endDate });

    const allGuidesForDates = await prisma.guide.findMany({
        where: {
            userId,
            OR: [
                { createdAt: { gte: startDate, lte: endDate } },
                {
                    updatedAt: { gte: startDate, lte: endDate },
                    progressStatus: 'DONE',
                },
            ],
        },
        select: {
            createdAt: true,
            updatedAt: true,
            progressStatus: true,
        },
    });

    const datesCountsInit = dates.map((item) => ({
        date: item,
        createdCount: 0,
        doneCount: 0,
    })) satisfies UsersActivity;

    const datesCounts = allGuidesForDates
        .reduce((acc, curr) => {
            const guideCreatedAtDate = new Date(
                curr.createdAt.getFullYear(),
                curr.createdAt.getMonth(),
                curr.createdAt.getDate(),
            );

            const guideUpdatedAtDate = new Date(
                curr.updatedAt.getFullYear(),
                curr.updatedAt.getMonth(),
                curr.updatedAt.getDate(),
            );

            const [dateWithNewCreatedGuide, dateWithNewDoneGuide] = [
                acc.find(
                    (item) =>
                        item.date.getTime() === guideCreatedAtDate.getTime(),
                ),

                acc.find(
                    (item) =>
                        item.date.getTime() === guideUpdatedAtDate.getTime(),
                ),
            ];

            if (dateWithNewCreatedGuide) {
                dateWithNewCreatedGuide.createdCount += 1;
            }

            if (dateWithNewDoneGuide && curr.progressStatus === 'DONE') {
                dateWithNewDoneGuide.doneCount += 1;
            }

            return acc;
        }, datesCountsInit)
        .map((item) => {
            return {
                ...item,
                date: item.date.toLocaleDateString(),
            };
        });

    return datesCounts;
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
            status: {
                not: GuideStatus.FAILED
            }
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
