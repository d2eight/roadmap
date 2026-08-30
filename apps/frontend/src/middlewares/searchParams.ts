import { paramsSchema, paramsSchemaType } from 'shared-types';
import { NextRequest, NextResponse } from 'next/server';
import { searchParamsDefaultValues } from '@/app/constants/searchParamsDefaults';
import { getParamsFromHeaders } from '@/utils/getParamsFromHeaders';
import util from 'util';

export default async function verifySearchParams({
  request,
}: {
  request: NextRequest;
}) {
  const params = Object.fromEntries(request.nextUrl.searchParams.entries());

  try {
    const currentParams = paramsSchema.parse(params);
    const previousParams = getParamsFromHeaders({
      headersList: request.headers,
    });

    const headersParams: paramsSchemaType = { ...currentParams };

    if (isNewParams({ currentParams, previousParams })) {
      headersParams.page = 1;
    }

    setParamsInHeaders({ request, params: headersParams });
    return;
  } catch (e) {
    const url = request.nextUrl.clone();

    url.searchParams.set('page', searchParamsDefaultValues.page.toString());
    url.searchParams.set('orderBy', searchParamsDefaultValues.orderBy);
    url.searchParams.set(
      'progressStatus',
      searchParamsDefaultValues.progressStatus.join(','),
    );
    setParamsInHeaders({ request, params: searchParamsDefaultValues });

    return NextResponse.redirect(url);
  }
}

function setParamsInHeaders({
  request,
  params,
}: {
  request: NextRequest;
  params: paramsSchemaType;
}) {
  request.headers.set('params', JSON.stringify(params));
}

function isNewParams({
  currentParams,
  previousParams,
}: {
  currentParams: paramsSchemaType;
  previousParams: paramsSchemaType;
}): boolean {
  if (
    currentParams.orderBy !== previousParams.orderBy ||
    currentParams.progressStatus.length !== previousParams.progressStatus.length
  ) {
    return true;
  }

  return false;
}
