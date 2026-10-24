'use client';

import { GuideCard } from './GuideCard';
import GuideContextProvider from '../../context/GuideContext';
import { GuideModelWithRelations } from 'shared-types';
import { useEffect } from 'react';
import { useGuidesContext } from '@/context/GuidesContext';
import { useFormProcessingContext } from '@/context/FormProcessor';
import { GuidesNotFound } from '@/components/custom-ui/GuidesNotFound';

export function Guides() {
    const { guides, isLoading } = useGuidesContext();
    const { setProcessingStatus } = useFormProcessingContext();

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
