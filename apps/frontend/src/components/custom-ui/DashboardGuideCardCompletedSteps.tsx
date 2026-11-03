'use client';

import { useGuideContext } from '../../context/GuideContext';
import { CardAction } from '../ui/card';
import { CompletedSteps } from './CompletedSteps';

export function DashboardGuideCardCompletedSteps() {
    const guide = useGuideContext();

    if (guide.status !== 'GUIDE_GENERATED') {
        return null;
    }

    return (
        <CardAction>
            <CompletedSteps
                stepsCount={guide.stepsCount}
                completedSteps={guide.completedSteps}
            />
        </CardAction>
    );
}
