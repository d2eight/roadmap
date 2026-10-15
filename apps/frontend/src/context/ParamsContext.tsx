'use client';

import { createContext, ReactNode } from 'react';
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { paramsSchema, paramsSchemaType, QueryKeyType } from 'shared-types';
import { searchParamsDefaultValues } from 'shared-constants';
import { getDefaultSearchParams } from '@/utils/getDefaultSearchParams';

export const ParamsContext = createContext<{
  searchParams: ReadonlyURLSearchParams;
  parsedParams: paramsSchemaType;
  queryKey: QueryKeyType;
  newSearchParams: URLSearchParams;
  resetParams: () => void;
}>(null!);

export function ParamsContextProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams);
  const router = useRouter();
  const pathname = usePathname();

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

  const resetParams = () => {
    const defaultParams = getDefaultSearchParams({
      searchParams,
    });

    const isNotDefaultSearchParams =
      defaultParams.toString() !== searchParams.toString();

    if (isNotDefaultSearchParams) {
      return router.replace(`${pathname}?${defaultParams}`);
    }
  };

  return (
    <ParamsContext
      value={{
        searchParams,
        parsedParams,
        queryKey,
        newSearchParams,
        resetParams,
      }}
    >
      {children}
    </ParamsContext>
  );
}
