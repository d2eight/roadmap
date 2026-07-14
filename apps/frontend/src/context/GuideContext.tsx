'use client';

import { GuideModel } from '@/libs/db/generated/prisma/models/Guide';
import { createContext, ReactNode, useState } from 'react';
import { GuideContextType, GuideModelWithRelations } from 'shared-types';
import { Prisma } from '@/libs/db/generated/prisma/client';

export const GuideContext = createContext<GuideContextType>(null!);

export default function GuideContextProvider({
  guideProps,
  children,
}: {
  guideProps: GuideModelWithRelations;
  children: ReactNode;
}) {
  const [guide, setGuide] = useState<GuideModelWithRelations>(guideProps);

  return (
    <GuideContext
      value={{
        guide,
        setGuide,
      }}
    >
      {children}
    </GuideContext>
  );
}
