import { paramsSchemaType } from 'shared-types';
import { searchParamsDefaultValues } from 'shared-constants';

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
