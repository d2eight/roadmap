'use client';

import { GuideCard } from './GuideCard';
import GuideContextProvider, { GuideContext } from '../../context/GuideContext';
import { GuideModelWithRelations } from 'shared-types';
import { useContext, useState } from 'react';
import { GuidesContext } from '@/context/GuidesContext';
import { FormProcessingContext } from '@/components/wrappers/FormProcessor';
import { GuidesNotFound } from '@/components/custom-ui/ GuidesNotFound';

export function Guides() {
  const { guides, isLoading } = useContext(GuidesContext);

  if (isLoading) {
    return (
      <div className="h-[500px]">
        <div className="flex items-center space-x-1" aria-label="Loading">
          <div className="size-4 animate-bounce rounded-full bg-current [animation-delay:-0.3s]"></div>
          <div className="size-4 animate-bounce rounded-full bg-current [animation-delay:-0.15s]"></div>
          <div className="size-4 animate-bounce rounded-full bg-current"></div>
        </div>
      </div>
    );
  }

  if (!guides.length) {
    return <GuidesNotFound />;
  }

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
