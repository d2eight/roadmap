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
import { AuthContext } from '@/context/AuthContext';
import { getGuideNEXT } from '@/utils/guide';

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
  const { data, refetch } = useQuery({
    queryKey: ['guide', guideId],
    queryFn: () =>
      getGuideNEXT({
        guideId: guideId,
      }),
    enabled: autoQueryStatus,
  });
  const { socketGuideData } = useContext(SocketContext);
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (socketGuideData && data && data.id === socketGuideData.id) {
      (async () => {
        await queryClient.invalidateQueries({
          queryKey: ['guide', guideId],
        });
        await refetch();
      })();
    }
  }, [socketGuideData]);

  let context: GuideContextType | null = null;

  if (!data) {
    return children;
  }

  const getCompletedSteps = () =>
    data.steps.reduce((acc, curr) => {
      return curr.status === 'DONE' ? (acc += 1) : acc;
    }, 0);

  const getQuestionsCount = () =>
    data.questions
      ? Object.keys(JSON.parse(data.questions.toString())).length
      : 0;

  switch (data.status) {
    case 'INIT':
    case 'QUESTIONS_GENERATION':
    case 'GUIDE_GENERATION':
      context = {
        guide: data,
        status: data.status,
      };
      break;
    case 'QUESTIONS_GENERATED':
      context = {
        guide: data,
        status: data.status,
        questionsCount: getQuestionsCount(),
      };
      break;
    case 'GUIDE_GENERATED':
      context = {
        guide: data,
        status: data.status,
        completedSteps: getCompletedSteps(),
      };
      break;
  }

  return <GuideContext value={context}>{children}</GuideContext>;
}
