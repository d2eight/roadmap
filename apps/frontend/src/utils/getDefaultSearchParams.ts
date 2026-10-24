import { searchParamsDefaultValues } from 'shared-constants';

export function getDefaultSearchParams({
    searchParams,
}: {
    searchParams?: URLSearchParams;
}): URLSearchParams {
    const defaultSearchParams = new URLSearchParams(
        searchParams && searchParams.toString(),
    );

    defaultSearchParams.set('orderBy', searchParamsDefaultValues.orderBy);
    defaultSearchParams.set(
        'progressStatus',
        searchParamsDefaultValues.progressStatus.join(','),
    );
    defaultSearchParams.set('page', searchParamsDefaultValues.page.toString());

    return defaultSearchParams;
}
