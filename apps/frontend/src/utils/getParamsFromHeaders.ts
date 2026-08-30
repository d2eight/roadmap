import { searchParamsDefaultValues } from '@/app/constants/searchParamsDefaults';
import { paramsSchemaType } from 'shared-types';

export function getParamsFromHeaders({
  headersList,
}: {
  headersList: Headers;
}): paramsSchemaType {
  const params = headersList.get('params');

  if (!params) {
    return searchParamsDefaultValues;
  }

  return JSON.parse(params);
}
