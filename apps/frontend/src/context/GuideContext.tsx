'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { GuideContextType } from 'shared-types';
import { SocketContext } from './SocketContext';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { GuideStatus } from 'database/enums';
import { toast } from 'sonner';
import { ParamsContext } from '@/context/ParamsContext';
import { GuideModel } from 'database/models';
import { fetchGuide } from '@/utils/guideApiActions';
import { useClientHandleApiError } from '@/utils/apiErrorsHandler';
import { GuideNotFound } from '@/components/custom-ui/GuideNotFound';
import { GuideLoader } from '@/components/custom-ui/GuideLoader';
import {
  getCompletedSteps,
  getQuestionsCount,
  getStepsCount,
} from '@/utils/guideInfo';

export const GuideContext = createContext<GuideContextType>(null!);

export default function GuideContextProvider({
  guideId,
  children,
  autoQueryStatus,
}: {
  guideId: string;
  children: ReactNode;
  autoQueryStatus: boolean;
}) {
  const queryClient = useQueryClient();
  const { queryKey } = useContext(ParamsContext);
  const { socketGuideData } = useContext(SocketContext);
  const { clientHandleApiError } = useClientHandleApiError();
  const requestBody: RequestInit = {
    method: 'GET',
  };
  const { data, isLoading } = useQuery({
    queryKey: ['guide', guideId],
    queryFn: async () => {
      const result = await fetchGuide({
        guideId,
        requestBody,
      });

      if (result.isErr()) {
        clientHandleApiError({
          error: result.error,
          redirect: false,
        });
        throw result.error;
      }

      return result.value.data;
    },
    enabled: autoQueryStatus,
    retry: false,
  });

  useEffect(() => {
    if (socketGuideData && data && data.id === socketGuideData.id) {
      queryClient.setQueryData(['guide', guideId], socketGuideData);

      const currentGuidesCache =
        queryClient.getQueryData<[GuideModel[], number]>(queryKey);

      if (currentGuidesCache) {
        const currentGuidesData = currentGuidesCache[0];
        const currentGuidesCount = currentGuidesCache[1];

        const newGuidesData = currentGuidesData.map((guide) => {
          if (guide.id === data.id) {
            return socketGuideData;
          }
          return guide;
        });

        const newGuidesCache = [newGuidesData, currentGuidesCount];

        queryClient.setQueryData(queryKey, newGuidesCache);
      }
      if (socketGuideData.status === 'FAILED') {
        toast.error('Failed to create guide');
      }
    }
  }, [socketGuideData]);

  if (isLoading) {
    return <GuideLoader />;
  }

  if (!data) {
    return <GuideNotFound />;
  }

  let context: GuideContextType;

  switch (data.status) {
    case GuideStatus.QUESTIONS_GENERATED:
      context = {
        guide: data,
        status: data.status,
        questionsCount: getQuestionsCount(data),
      };
      break;
    case GuideStatus.GUIDE_GENERATED:
      context = {
        guide: data,
        status: data.status,
        completedSteps: getCompletedSteps(data),
        stepsCount: getStepsCount(data),
      };
      break;
    default:
      context = {
        guide: data,
        status: data.status,
      };
  }

  return <GuideContext value={context}>{children}</GuideContext>;
}
