import { paramsSchema, paramsSchemaType } from 'shared-types';

export function parseSearchParams({ params }: { params: paramsSchemaType }) {
  try {
    const processedParams = paramsSchema.parse(params);
    return processedParams;
  } catch (error) {
    const defaultParams: paramsSchemaType = {
      sortBy: 'createdAt',
      progressStatus: ['PENDING', 'DONE', 'INWORK'],
      page: 1,
    };

    return defaultParams;
  }
}
