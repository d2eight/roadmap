import { GuideCardTitle } from './GuideCardTitle';
import { GuideCardFooter } from './GuideCardFooter';
import { CardDescription, CardHeader } from '../ui/card';
import { DashboardGuideCardCompletedSteps } from './DashboardGuideCardCompletedSteps';
import { GuideCardDoneInfo } from './GuideCardDoneInfo';

export function DashboardGuideDoneCard() {
    return (
        <div className="flex flex-col h-full justify-between gap-(--card-spacing)">
            <CardHeader className="px-0">
                <GuideCardTitle />
                <CardDescription className="text-green-500">
                    You have successfully accomplished this guide
                </CardDescription>
                <DashboardGuideCardCompletedSteps />
            </CardHeader>
            <GuideCardDoneInfo />
            <GuideCardFooter
                className="px-0"
                variant="outline"
                label="Look again"
            />
        </div>
    );
}
