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
  updateGuideInGlobalContext: (data: GuideModelWithRelations) => void;
  addGuideToGlobalContext: (data: GuideModelWithRelations) => void;
}>(null!);

export function GuidesContextProvider({ children }: { children: ReactNode }) {
  const [guides, setGuides] = useState<GuideModelWithRelations[]>([]);

  function updateGuideInGlobalContext(data: GuideModelWithRelations) {
    const guideToUpdate = guides.find((guid) => guid.id === data.id);

    if (guideToUpdate) {
      const newGuidesArray = guides.map((guide) => {
        if (guide.id === guideToUpdate.id) {
          return {
            ...guide,
            ...data,
          };
        }
        return guide;
      });
      setGuides(newGuidesArray);
    } else {
      addGuideToGlobalContext(data);
    }
  }

  function addGuideToGlobalContext(data: GuideModelWithRelations) {
    console.log('addGuideToGlobalContext', data);
    setGuides((prev) => [...prev, data]);
  }

  return (
    <GuidesContext
      value={{
        guides,
        setGuides,
        updateGuideInGlobalContext,
        addGuideToGlobalContext,
      }}
    >
      {children}
    </GuidesContext>
  );
}
