import { paramsSchemaType } from 'shared-types';
import { Prisma } from 'database';

export const guidesResetData = {
    status: 'INIT',
    progressStatus: 'PENDING',
    steps: {
        deleteMany: {},
    },
} satisfies Prisma.GuideUpdateInput;

export const searchParamsDefaultValues: paramsSchemaType = {
    orderBy: 'createdAt',
    progressStatus: ['PENDING', 'INWORK', 'DONE', 'REJECTED'],
    page: 1,
};

export const guidesPageDefaultUrlString =
    '/guides?page=1&orderBy=createdAt&progressStatus=PENDING%2CINWORK%2CDONE';

export const getGuideStepProperties = {
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
} satisfies Prisma.Guide$stepsArgs;
