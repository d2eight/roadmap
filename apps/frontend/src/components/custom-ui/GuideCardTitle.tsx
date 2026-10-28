'use client';

import { useGuideContext } from '@/context/GuideContext';
import { CardTitle } from '@/components/ui/card';

export function GuideCardTitle({ className }: { className?: string }) {
    const { guide } = useGuideContext();

    switch (guide.status) {
        case 'GUIDE_GENERATED':
            return (
                <CardTitle className={`${className && className} truncate`}>
                    {guide.title}
                </CardTitle>
            );
        default:
            return (
                <CardTitle className={`${className && className} truncate`}>
                    {guide.prompt}
                </CardTitle>
            );
    }
}
