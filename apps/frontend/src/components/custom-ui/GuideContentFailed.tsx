import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@/components/ui/empty';
import { CircleMinus, LucideRefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RecreateGuideMenu } from '@/components/custom-ui/RecreateGuideMenu';

export function GuideContentFailed() {
    const icon = <LucideRefreshCcw />;

    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia>
                    <CircleMinus color="red" />
                </EmptyMedia>
                <EmptyTitle>Failure</EmptyTitle>
                <EmptyDescription>
                    {' '}
                    Unfortunately, guide was not created
                    <br /> Prompt and all related data has been saved, try again
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="flex flex-row justify-center">
                <Button variant="destructive" asChild className="px-0">
                    <div className="w-full">
                        <RecreateGuideMenu
                            icon={icon}
                            className="flex items-center gap-2 w-full justify-center cursor-pointer"
                        >
                            Try again
                        </RecreateGuideMenu>
                    </div>
                </Button>
            </EmptyContent>
        </Empty>
    );
}
