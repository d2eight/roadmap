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

export const GuideContext = createContext<GuideContextType>(null!);

export default function GuideContextProvider({
  guideProps,
  children,
}: {
  guideProps: GuideModelWithRelations;
  children: ReactNode;
}) {
  const [guide, setGuide] = useState<GuideModelWithRelations>(guideProps);
  const { socketGuideData } = useContext(SocketContext);
  console.log(guide);
  const getCompletedSteps = () => guide.steps.reduce((acc, curr) => {
    return curr.status === "DONE" ? (acc += 1) : acc;
  }, 0);

  const getQuestionsCount = () =>
    guide.questions ? Object.keys(JSON.parse(guide.questions.toString())).length : 0;

  let context: GuideContextType;

  switch (guide.status) {
    case 'INIT':
    case 'QUESTIONS_GENERATION':
    case 'GUIDE_GENERATION':
      context = {
        guide: guide,
        setGuide: setGuide,
        status: guide.status
      };
      break;
    case 'QUESTIONS_GENERATED':
      context = {
        guide: guide,
        status: guide.status,
        setGuide: setGuide,
        questionsCount: getQuestionsCount(),
      };
      break;
    case 'GUIDE_GENERATED':
      context = {
        guide: guide,
        status: guide.status,
        setGuide: setGuide,
        completedSteps: getCompletedSteps(),
      };
      break;
  }

  useEffect(() => {
    if (socketGuideData && guide.id === socketGuideData.id) {
      setGuide({
        ...guide,
        ...socketGuideData,
        createdAt: guide.createdAt,
        updatedAt: new Date(guide.updatedAt),
      });
    }
  }, [socketGuideData]);

  return <GuideContext value={context}>{children}</GuideContext>;
}
