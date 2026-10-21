'use client';

import { createContext, ReactNode, useContext, useEffect } from 'react';
import { GuideModelWithRelations, QueryKeyType } from 'shared-types';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ParamsContext } from '@/context/ParamsContext';
import { getGuidesNEXT } from '@/utils/guide';
import { pageSize } from '@/constants/constants';
import { getGuides } from 'utils';
import { fetchGuides } from '@/utils/guideApiActions';
import { toast } from 'sonner';
import { useClientHandleApiError } from '@/utils/apiErrorsHandler';
import { GuidesLoader } from '@/components/custom-ui/GuidesLoader';

export const GuidesContext = createContext<{
  guides: GuideModelWithRelations[];
  guidesCount: number;
  isLoading: boolean;
}>(null!);

export function GuidesContextProvider({ children }: { children: ReactNode }) {
  const { searchParams, queryKey } = useContext(ParamsContext);
  const queryClient = useQueryClient();
  const { clientHandleApiError } = useClientHandleApiError();

  const requestBody: RequestInit = {
    method: 'GET',
  };
  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: async () => {
      const result = await fetchGuides({
        requestBody,
        searchParams,
      });

      if (result.isErr()) {
        clientHandleApiError({
          error: result.error,
        });
        throw result.error;
      }

      result.value.data[0].forEach((guide) => {
        queryClient.setQueryData<GuideModelWithRelations>(
          ['guide', guide.id],
          (cachedGuide) => {
            if (!cachedGuide) return guide;
            return new Date(guide.updatedAt).getTime() >
              new Date(cachedGuide.updatedAt).getTime()
              ? guide
              : cachedGuide;
          },
        );
      });
      return result.value.data;
    },
  });

  const guides = data?.[0] || [];
  const guidesCount = data?.[1] || 0;

  if (isLoading) {
    return <GuidesLoader />;
  }

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
