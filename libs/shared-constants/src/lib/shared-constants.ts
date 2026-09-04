import { paramsSchemaType } from 'shared-types';

export const searchParamsDefaultValues: paramsSchemaType = {
  orderBy: 'createdAt',
  progressStatus: ['PENDING', 'INWORK', 'DONE'],
  page: 1,
};

export const guidesPageDefaultUrlString =
  '/guides?page=1&orderBy=createdAt&progressStatus=PENDING%2CINWORK%2CDONE';
