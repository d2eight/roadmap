'use client';

import { createContext, ReactNode } from 'react';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { paramsSchema, paramsSchemaType } from 'shared-types';
import { searchParamsDefaultValues } from 'shared-constants';

export const ParamsContext = createContext<{
  searchParams: ReadonlyURLSearchParams;
  parsedParams: paramsSchemaType;
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

  return (
    <ParamsContext
      value={{
        searchParams,
        parsedParams,
      }}
    >
      {children}
    </ParamsContext>
  );
}
