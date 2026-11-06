'use client';

import { GuideCard } from './GuideCard';
import GuideContextProvider from '../../context/GuideContext';
import { GuideModelWithRelations } from 'shared-types';
import { useGuidesContext } from '../../context/GuidesContext';
import { GuidesNotFound } from './GuidesNotFound';

export function Guides() {
    const { guides } = useGuidesContext();

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
