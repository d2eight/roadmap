import { GuideCardTitle } from '@/components/custom-ui/GuideCardTitle';
import { GuideCardFooter } from '@/components/custom-ui/GuideCardFooter';
import { CardDescription, CardHeader } from '@/components/ui/card';
import { DashboardGuideCardCompletedSteps } from '@/components/custom-ui/DashboardGuideCardCompletedSteps';
import { GuideCardDoneInfo } from '@/components/custom-ui/GuideCardDoneInfo';

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
