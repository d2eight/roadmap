'use client';

import { createContext, ReactNode, useContext, useEffect } from 'react';
import { GuideModelWithRelations, QueryKeyType } from 'shared-types';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ParamsContext } from '@/context/ParamsContext';
import { getGuidesNEXT } from '@/utils/guide';
import { pageSize } from '@/constants/constants';

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
    queryFn: async () => {
      const result = await getGuidesNEXT({
        pageSize: pageSize,
        params: parsedParams,
      });
      result?.[0].forEach((guide) => {
        queryClient.setQueryData<GuideModelWithRelations>(
          ['guide', guide.id],
          (cachedGuide) => {
            if (!cachedGuide) return guide;
            return new Date(guide.updatedAt).getTime() >
              new Date(cachedGuide.updatedAt).getTime()
              ? guide
              : undefined;
          },
        );
      });
      return result;
    },
  });

  const guides = data?.[0] || [];
  const guidesCount = data?.[1] || 0;

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
