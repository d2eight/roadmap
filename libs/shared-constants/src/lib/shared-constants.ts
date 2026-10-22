import { paramsSchemaType } from 'shared-types';
import { Prisma } from 'database';

export const searchParamsDefaultValues: paramsSchemaType = {
  orderBy: 'createdAt',
  progressStatus: ['PENDING', 'INWORK', 'DONE'],
  page: 1,
};

export const guidesPageDefaultUrlString =
  '/guides?page=1&orderBy=createdAt&progressStatus=PENDING%2CINWORK%2CDONE';

export const getGuideStepProperties: Prisma.Guide$stepsArgs = {
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
};
