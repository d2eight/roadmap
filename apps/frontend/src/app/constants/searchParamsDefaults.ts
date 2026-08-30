import { paramsSchemaType } from 'shared-types';

export const searchParamsDefaultValues: Required<paramsSchemaType> = {
  sortBy: 'createdAt',
  progressStatus: ['PENDING', 'INWORK', 'DONE'],
  page: 1
};
