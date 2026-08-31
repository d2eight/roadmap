'use client';

import { GuideCard } from './GuideCard';
import GuideContextProvider, { GuideContext } from '../../context/GuideContext';
import { GuideModelWithRelations } from 'shared-types';
import { useContext, useState } from 'react';
import { GuidesContext } from '@/context/GuidesContext';
import { FormProcessingContext } from '@/components/wrappers/FormProcessor';

export function Guides() {
  const { guides } = useContext(GuidesContext);

  return (
    <div className="grid grid-cols-3 gap-10 auto-rows-[200px]">
      {guides.map((guide: GuideModelWithRelations) => (
        <GuideContextProvider key={guide.id} guideProps={guide}>
          <GuideCard />
        </GuideContextProvider>
      ))}
    </div>
  );
}
