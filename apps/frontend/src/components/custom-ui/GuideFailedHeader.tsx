import { useGuideContext } from '@/context/GuideContext';
import {
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { DeleteGuideButton } from '@/components/custom-ui/DeleteGuideButton';
import { Button } from '@/components/ui/button';
import { RecreateGuideMenu } from '@/components/custom-ui/RecreateGuideMenu';
import { LucideRefreshCcw } from 'lucide-react';

export function GuideFailedHeader({ title }: { title?: string }) {
    const { guide } = useGuideContext();
    const icon = <LucideRefreshCcw />;

    return (
        <>
            <CardHeader className="px-0">
                <CardTitle className="flex flex-row justify-between items-center truncate">
                    <h1>{title || guide.title}</h1>
                </CardTitle>
                <CardAction className="flex items-center gap-2">
                    <DeleteGuideButton redirect={true} />
                </CardAction>
            </CardHeader>
            <CardContent className="px-0">
                <p>Something went wrong, guide was not created</p>
            </CardContent>
            <CardFooter className="px-0 cursor-pointer">
                <Button variant="destructive" asChild>
                    <div className="w-full">
                        <RecreateGuideMenu
                            icon={icon}
                            className="flex items-center gap-2 w-full justify-center"
                        >
                            Try again
                        </RecreateGuideMenu>
                    </div>
                </Button>
            </CardFooter>
        </>
    );
}
