'use client';

import { GuideCard } from './GuideCard';
import GuideContextProvider, { GuideContext } from '../../context/GuideContext';
import { GuideModelWithRelations } from 'shared-types';
import { useContext, useEffect, useState } from 'react';
import { GuidesContext } from '@/context/GuidesContext';
import { FormProcessingContext } from '@/components/wrappers/FormProcessor';
import { GuidesNotFound } from '@/components/custom-ui/GuidesNotFound';

export function Guides() {
  const { guides, isLoading } = useContext(GuidesContext);
  const { setProcessingStatus } = useContext(FormProcessingContext);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    setProcessingStatus(false);
  }, [guides]);

  if (!guides.length) {
    return <GuidesNotFound />;
  }

  return (
    <div className="grid xl:grid-cols-3 xl:gap-10 grid-cols-1 auto-rows-[200px] gap-5">
      {guides.map((guide: GuideModelWithRelations) => (
        <GuideContextProvider
          autoQueryStatus={false}
          key={guide.id}
          guideId={guide.id}
        >
          <GuideCard />
        </GuideContextProvider>
      ))}
    </div>
  );
}
