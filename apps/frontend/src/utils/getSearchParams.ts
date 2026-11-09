import { paramsSchema, ProcessedSearchParamsInfo, SearchParamsNext } from 'shared-types';
import { getDefaultSearchParams } from './getDefaultSearchParams';
import { searchParamsDefaultValues } from 'shared-constants';

export default async function getSearchParamsAndParse({
    searchParams,
}: {
    searchParams: SearchParamsNext;
}): Promise<ProcessedSearchParamsInfo> {
    const parsedParams = paramsSchema.safeParse(await searchParams);

    if (!parsedParams.success) {
        return {
            processedSearchParams: getDefaultSearchParams({
                searchParams: new URLSearchParams(),
            }),
            page: searchParamsDefaultValues.page,
            progressStatus: searchParamsDefaultValues.progressStatus,
            orderBy: searchParamsDefaultValues.orderBy,
        };
    }

    const processedSearchParams = new URLSearchParams();
    const { orderBy, page, progressStatus } = parsedParams.data;

    processedSearchParams.set('orderBy', orderBy);
    processedSearchParams.set('page', page.toString());
    processedSearchParams.set('progressStatus', progressStatus.join(','));

    return {
        processedSearchParams,
        orderBy,
        page,
        progressStatus,
    };
}
