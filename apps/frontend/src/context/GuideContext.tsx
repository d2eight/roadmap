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
import { GuideStatus } from 'database/enums'

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

  const getCompletedSteps = () => guide.steps.reduce((acc, curr) => {
    return curr.status === "DONE" ? (acc += 1) : acc;
  }, 0);

  const getQuestionsCount = () =>
    guide.questions ? Object.keys(JSON.parse(guide.questions.toString())).length : 0;

  let context: GuideContextType;

  // const createContext = ({guide, setGuide, completedSteps, questionsCount}: GuideContextType): GuideContextType => {
  //   guide
  // };



  //
  // const context: GuideContextType = {
  //   guide: guide,
  //   setGuide: setGuide,
  //   ...(guide.status === 'GUIDE_GENERATED' && {
  //     completedSteps: getCompletedSteps(),
  //   }),
  //   ...(guide.status === 'QUESTIONS_GENERATED' && {
  //     questionsCount: getQuestionsCount()
  //   })
  // };

  // if(guide.status === 'QUESTIONS_GENERATED') {
  //   const context: GuideContextType = {
  //     guide: guide,
  //     setGuide: setGuide,
  //     questionsCount: getQuestionsCount(),
  //     completedSteps: 4
  //   };
  // }

  // switch (guide.status) {
  //   case 'INIT':
  //   case 'QUESTIONS_GENERATION':
  //   case 'GUIDE_GENERATION':
  //     context = {
  //       guide: guide as GuideModelWithRelations & {
  //         status: 'INIT' | 'QUESTIONS_GENERATION' | 'GUIDE_GENERATION',;
  //       },
  //       setGuide: setGuide,
  //     };
  //     break;
  //   case 'QUESTIONS_GENERATED':
  //     context = {
  //       guide: guide as GuideModelWithRelations & {
  //         status: 'QUESTIONS_GENERATED';
  //       },
  //       setGuide: setGuide,
  //       questionsCount: getQuestionsCount(),
  //     };
  //     break;
  //   case 'GUIDE_GENERATED':
  //     context = {
  //       guide: guide as GuideModelWithRelations & {
  //         status: 'GUIDE_GENERATED';
  //       },
  //       setGuide: setGuide,
  //       completedSteps: getCompletedSteps(),
  //     };
  //     break;
  // }

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
