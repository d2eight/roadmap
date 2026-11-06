'use client';

import { GuideCard } from './GuideCard';
import { GuideModelWithRelations } from 'shared-types';
import { useGuidesContext } from '../../context/GuidesContext';
import { GuideContextProvider } from '../../context/GuideContext';

export function Guides() {
    const { guides } = useGuidesContext();

    return (
        <div className="grid xl:grid-cols-3 xl:gap-10 grid-cols-1 auto-rows-[200px] gap-5">
            {guides.map((guide: GuideModelWithRelations) => (
                <GuideContextProvider
                    key={guide.id}
                    guideId={guide.id}
                >
                    <GuideCard />
                </GuideContextProvider>
            ))}
        </div>
    );
}
