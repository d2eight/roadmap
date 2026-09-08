'use client';

import { createContext, ReactNode } from 'react';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { paramsSchema, paramsSchemaType, QueryKeyType } from 'shared-types';
import { searchParamsDefaultValues } from 'shared-constants';

export const ParamsContext = createContext<{
  searchParams: ReadonlyURLSearchParams;
  parsedParams: paramsSchemaType;
  queryKey: QueryKeyType;
}>(null!);

export function ParamsContextProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();

  const pageParsed = paramsSchema.shape.page.safeParse(
    searchParams.get('page'),
  );

  const progressStatusParsed = paramsSchema.shape.progressStatus.safeParse(
    searchParams.get('progressStatus'),
  );

  const orderByParsed = paramsSchema.shape.orderBy.safeParse(
    searchParams.get('orderBy'),
  );

  const page = pageParsed.success
    ? pageParsed.data
    : searchParamsDefaultValues.page;

  const orderBy = orderByParsed.success
    ? orderByParsed.data
    : searchParamsDefaultValues.orderBy;

  const progressStatus = progressStatusParsed.success
    ? progressStatusParsed.data
    : searchParamsDefaultValues.progressStatus;

  const parsedParams: paramsSchemaType = {
    page: page,
    orderBy: orderBy,
    progressStatus: progressStatus,
  };

  const queryKey: QueryKeyType = [
    'guides',
    parsedParams.page,
    parsedParams.orderBy,
    parsedParams.progressStatus,
  ];

  return (
    <ParamsContext
      value={{
        searchParams,
        parsedParams,
        queryKey,
      }}
    >
      {children}
    </ParamsContext>
  );
}
