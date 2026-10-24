import { paramsSchema } from 'shared-types';
import { NextRequest, NextResponse } from 'next/server';
import { searchParamsDefaultValues } from 'shared-constants';
import { searchParamsToObj } from 'utils/client';

export default async function verifySearchParams({
    request,
}: {
    request: NextRequest;
}) {
    const params = searchParamsToObj(request.nextUrl.searchParams);

    try {
        paramsSchema.parse(params);
        return;
    } catch (e) {
        const url = request.nextUrl.clone();
        url.searchParams.set('page', searchParamsDefaultValues.page.toString());
        url.searchParams.set('orderBy', searchParamsDefaultValues.orderBy);
        url.searchParams.set(
            'progressStatus',
            searchParamsDefaultValues.progressStatus.join(','),
        );

        return NextResponse.redirect(url);
    }
}
