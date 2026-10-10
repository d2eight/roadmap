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
import { GuideContextType, GuideModelWithRelations } from 'shared-types';
import { SocketContext } from './SocketContext';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getGuide } from 'utils';
import { getGuideNEXT } from '@/utils/guide';
import { GuideStatus } from 'database/enums';
import { toast } from 'sonner';

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
  const { data } = useQuery({
    queryKey: ['guide', guideId],
    queryFn: () =>
      getGuideNEXT({
        guideId: guideId,
      }),
    enabled: autoQueryStatus,
  });
  const { socketGuideData } = useContext(SocketContext);

  useEffect(() => {
    if (socketGuideData && data && data.id === socketGuideData.id) {
      (async () => {
        queryClient.setQueryData(['guide', guideId], socketGuideData);

        if (socketGuideData.status === 'FAILED') {
          toast.error('Failed to create guide');
        }
      })();
    }
  }, [socketGuideData]);

  if (!data) {
    return children;
  }

  const getCompletedSteps = () =>
    data.steps.reduce((acc, curr) => {
      if (curr.status === 'DONE') {
        acc += 1;
      }
      return acc;
    }, 0);

  const getQuestionsCount = () =>
    data.questions
      ? Object.keys(JSON.parse(data.questions as string)).length
      : 0;

  let context: GuideContextType;

  switch (data.status) {
    case GuideStatus.QUESTIONS_GENERATED:
      context = {
        guide: data,
        status: data.status,
        questionsCount: getQuestionsCount(),
      };
      break;
    case GuideStatus.GUIDE_GENERATED:
      context = {
        guide: data,
        status: data.status,
        completedSteps: getCompletedSteps(),
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
