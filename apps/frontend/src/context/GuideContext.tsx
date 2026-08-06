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

export const GuideContext = createContext<{
  guide: GuideModelWithRelations;
  setGuide: Dispatch<SetStateAction<GuideModelWithRelations>>;
  completedSteps: number;
}>(null!);

export default function GuideContextProvider({
  guideProps,
  children,
}: {
  guideProps: GuideModelWithRelations;
  children: ReactNode;
}) {
  const [guide, setGuide] = useState<GuideModelWithRelations>(guideProps);
  const { socketGuideData } = useContext(SocketContext);
  const completedSteps = guide.steps.reduce((acc, curr) => {
    return curr.status ? (acc += 1) : acc;
  }, 0);

  useEffect(() => {
    if (socketGuideData && guide.id === socketGuideData.id) {
      setGuide({
        ...guide,
        ...socketGuideData,
      });
    }
  }, [socketGuideData]);

  return (
    <GuideContext
      value={{
        guide,
        setGuide,
        completedSteps,
      }}
    >
      {children}
    </GuideContext>
  );
}
