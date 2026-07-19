'use client';

import { GuideModel } from '@/libs/db/generated/prisma/models/Guide';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { GuideContextType, GuideModelWithRelations } from 'shared-types';
import { Prisma } from '@/libs/db/generated/prisma/client';
import { SocketContext } from './SocketContext';

export const GuideContext = createContext<GuideModelWithRelations>(null!);

export default function GuideContextProvider({
  guideProps,
  children,
}: {
  guideProps: GuideModelWithRelations;
  children: ReactNode;
}) {
  const [guide, setGuide] = useState<GuideModelWithRelations>(guideProps);
  const { socketGuideData } = useContext(SocketContext);

  useEffect(() => {
    if (socketGuideData && guide.id === socketGuideData.id) {
      setGuide({
        ...guide,
        ...socketGuideData,
      });
    }
  }, [socketGuideData]);

  return <GuideContext value={guide}>{children}</GuideContext>;
}
