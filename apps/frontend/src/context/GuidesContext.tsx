'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { GuideModelWithRelations, QueryKeyType } from 'shared-types';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getGuides } from 'utils';
import { AuthContext } from '@/context/AuthContext';
import { ParamsContext } from '@/context/ParamsContext';
import { pageSize } from '@/constants/constants';
import { getGuidesNEXT } from '@/utils/guide';

export const GuidesContext = createContext<{
  guides: GuideModelWithRelations[];
  guidesCount: number;
  isLoading: boolean;
}>(null!);

export function GuidesContextProvider({ children }: { children: ReactNode }) {
  const { parsedParams, queryKey } = useContext(ParamsContext);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () =>
      getGuidesNEXT({
        pageSize: pageSize,
        params: parsedParams,
      }),
  });

  const guides = data?.[0] || [];
  const guidesCount = data?.[1] || 0;

  useEffect(() => {
    if (guides.length) {
      guides.forEach((guide) => {
        queryClient.setQueryData<GuideModelWithRelations>(
          ['guide', guide.id],
          (cachedGuide) => {
            if (!cachedGuide) {
              return guide;
            }

            if (guide.updatedAt === cachedGuide.updatedAt) {
              return cachedGuide;
            }

            return guide;
          },
        );
      });
    }
  }, [data]);

  return (
    <GuidesContext
      value={{
        guides,
        guidesCount,
        isLoading,
      }}
    >
      {children}
    </GuidesContext>
  );
}
