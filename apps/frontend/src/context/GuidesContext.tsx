'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { GuideModelWithRelations } from 'shared-types';

export const GuidesContext = createContext<{
  guides: GuideModelWithRelations[];
  setGuides: Dispatch<SetStateAction<GuideModelWithRelations[]>>;
  guidesCount: number;
  setGuidesCount: Dispatch<SetStateAction<number>>;
}>(null!);

export function GuidesContextProvider({
  children,
  guidesProps,
  guidesCountProps,
}: {
  children: ReactNode;
  guidesProps: GuideModelWithRelations[];
  guidesCountProps: number;
}) {
  const [guides, setGuides] = useState<GuideModelWithRelations[]>(guidesProps);
  const [guidesCount, setGuidesCount] = useState<number>(guidesCountProps);

  return (
    <GuidesContext
      value={{
        guides,
        setGuides,
        guidesCount,
        setGuidesCount,
      }}
    >
      {children}
    </GuidesContext>
  );
}
