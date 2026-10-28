'use client';

import { useGuideContext } from '@/context/GuideContext';
import { CompletedSteps } from '@/components/custom-ui/CompletedSteps';
import { GuideDate } from '@/components/custom-ui/GuideDate';
import { CardContent } from '@/components/ui/card';
import { QuestionsCount } from '@/components/custom-ui/QuestionsCount';
import { GuideProgressBadge } from '@/components/custom-ui/GuideProgressBadge';

export function GuideCardContent({ className }: { className?: string }) {
    const { guide, status, questionsCount, completedSteps, stepsCount } =
        useGuideContext();

    switch (status) {
        case 'INIT':
        case 'GUIDE_GENERATION':
        case 'QUESTIONS_GENERATION':
            return (
                <CardContent className={`${className && className}`}>
                    <div className="flex items-center gap-2">
                        <p className="shimmer text-sm text-muted-foreground">
                            Please wait&hellip;
                        </p>
                    </div>
                </CardContent>
            );
        case 'QUESTIONS_GENERATED':
            return (
                <CardContent className={`${className && className}`}>
                    <QuestionsCount questionsCount={questionsCount} />
                </CardContent>
            );
        case 'GUIDE_GENERATED':
            return (
                <CardContent className={`${className && className}`}>
                    <div className="flex items-center justify-between gap-2">
                        <GuideProgressBadge
                            progressStatus={guide.progressStatus}
                        />
                        <CompletedSteps
                            stepsCount={stepsCount}
                            completedSteps={completedSteps}
                        />
                        <GuideDate guideDate={guide.createdAt} />
                    </div>
                </CardContent>
            );
        default:
            return (
                <CardContent className={`${className && className}`}>
                    <div className="flex items-center justify-between gap-2">
                        <GuideProgressBadge progressStatus={guide.status} />
                        <GuideDate guideDate={guide.createdAt} />
                    </div>
                </CardContent>
            );
    }
}
