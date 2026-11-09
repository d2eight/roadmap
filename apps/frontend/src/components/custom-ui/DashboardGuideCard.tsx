import { GuideCardTitle } from './GuideCardTitle';
import { CardDescription, CardHeader } from '../ui/card';
import { GuideCardStep } from './GuideCardStep';
import { DashboardGuideCardCompletedSteps } from './DashboardGuideCardCompletedSteps';
import { GuideCardFooter } from './GuideCardFooter';

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
