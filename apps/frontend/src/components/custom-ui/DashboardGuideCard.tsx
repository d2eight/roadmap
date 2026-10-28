import { GuideCardTitle } from '@/components/custom-ui/GuideCardTitle';
import { GuideCardFooter } from '@/components/custom-ui/GuideCardFooter';
import { CardDescription, CardHeader } from '@/components/ui/card';
import { GuideCardStep } from '@/components/custom-ui/GuideCardStep';
import { DashboardGuideCardCompletedSteps } from '@/components/custom-ui/DashboardGuideCardCompletedSteps';

export function DashboardGuideCard() {
    return (
        <div className="flex flex-col h-full justify-between gap-(--card-spacing)">
            <CardHeader className="px-0">
                <GuideCardTitle />
                <CardDescription>Current step:</CardDescription>
                <DashboardGuideCardCompletedSteps />
            </CardHeader>
            <GuideCardStep />
            <GuideCardFooter className="px-0" label="Continue" />
        </div>
    );
}
