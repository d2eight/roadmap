'use client';

import { useGuideContext } from '@/context/GuideContext';
import { CardTitle } from '@/components/ui/card';

export function GuideCardTitle() {
    const { guide } = useGuideContext();

    switch (guide.status) {
        case 'GUIDE_GENERATED':
            return <CardTitle className="truncate">{guide.title}</CardTitle>;
        default:
            return <CardTitle className="truncate">{guide.prompt}</CardTitle>;
    }
}
