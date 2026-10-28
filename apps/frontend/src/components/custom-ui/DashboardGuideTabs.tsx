import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { DashboardGuideCard } from '@/components/custom-ui/DashboardGuideCard';
import { DashboardGuideDoneCard } from '@/components/custom-ui/DashboardGuideDoneCard';
import { CurrentGuideContextProvider } from '@/context/CurrentGuideContext';
import { DoneGuideContextProvider } from '@/context/DoneGuideContext';

export default function DashboardGuideTabs() {
    return (
        <Card className="w-full h-auto max-h-[400px] overflow-hidden">
            <Tabs
                defaultValue="inwork"
                className="flex flex-col justify-between h-full"
            >
                <CardHeader className="mb-3">
                    <CardTitle>Latest activities</CardTitle>
                    <CardDescription>
                        Information about your latest progress
                    </CardDescription>
                    <CardAction>
                        <TabsList>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span>
                                        <TabsTrigger value="inwork">
                                            Current
                                        </TabsTrigger>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    Your current unfinished guide
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span>
                                        <TabsTrigger value="done">
                                            Done
                                        </TabsTrigger>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    Your last finished guide
                                </TooltipContent>
                            </Tooltip>
                        </TabsList>
                    </CardAction>
                </CardHeader>
                <Separator />
                <CardContent className="h-full pt-3.75">
                    <TabsContent value="inwork" className="h-full">
                        <CurrentGuideContextProvider>
                            <DashboardGuideCard />
                        </CurrentGuideContextProvider>
                    </TabsContent>
                    <TabsContent value="done" className="h-full">
                        <DoneGuideContextProvider>
                            <DashboardGuideDoneCard />
                        </DoneGuideContextProvider>
                    </TabsContent>
                </CardContent>
            </Tabs>
        </Card>
    );
}
