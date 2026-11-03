import { GuideCardTitle } from './GuideCardTitle';
import { GuideCardFooter } from './GuideCardFooter';
import { CardDescription, CardHeader } from '../ui/card';
import { GuideCardStep } from './GuideCardStep';
import { DashboardGuideCardCompletedSteps } from './DashboardGuideCardCompletedSteps';

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
