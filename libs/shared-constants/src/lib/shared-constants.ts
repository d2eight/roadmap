import { paramsSchemaType } from 'shared-types';

export const searchParamsDefaultValues: paramsSchemaType = {
  orderBy: 'createdAt',
  progressStatus: ['PENDING', 'INWORK', 'DONE'],
  page: 1,
};
