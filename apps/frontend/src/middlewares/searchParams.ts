import { parseSearchParams } from '@/utils/parseSearchParams';
import { paramsSchema, paramsSchemaType } from 'shared-types';
import { NextRequest, NextResponse } from 'next/server';
import { searchParamsDefaultValues } from '@/app/constants/searchParamsDefaults';

export default async function verifySearchParams({
  request,
}: {
  request: NextRequest;
}) {
  const params = Object.fromEntries(request.nextUrl.searchParams.entries());

  try {
    paramsSchema.parse(params);
    return;
  } catch (e) {
    const url = request.nextUrl.clone();

    url.searchParams.set('page', searchParamsDefaultValues.page.toString());
    url.searchParams.set('sortBy', searchParamsDefaultValues.sortBy);
    url.searchParams.set(
      'progressStatus',
      searchParamsDefaultValues.progressStatus.join(','),
    );

    return NextResponse.redirect(url);
  }
}
