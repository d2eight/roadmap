'use client';

import { GuideCard } from './GuideCard';
import GuideContextProvider, { GuideContext } from '../../context/GuideContext';
import { GuideModelWithRelations } from 'shared-types';
import { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../context/SocketContext';
import { GuidesContext } from '../../context/GuidesContext';

export function Guides({ guides }: { guides: GuideModelWithRelations[] }) {
  return (
    <div className="grid grid-cols-3">
      {guides.map((guide: GuideModelWithRelations) => (
        <GuideContextProvider key={guide.id} guideProps={guide}>
          <GuideCard />
        </GuideContextProvider>
      ))}
    </div>
  );
}
