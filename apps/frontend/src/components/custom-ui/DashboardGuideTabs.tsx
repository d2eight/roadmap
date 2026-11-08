import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Separator } from '../ui/separator';
import { LucideFlame } from 'lucide-react';
import { Suspense } from 'react';
import { CurrentGuideContextProvider } from '../../context/CurrentGuideContext';
import { DashboardGuideCard } from './DashboardGuideCard';
import { CurrentGuideLoader } from './CurrentGuideLoader';
import { DashboardGuideDoneCard } from './DashboardGuideDoneCard';
import { DoneGuideContextProvider } from '../../context/DoneGuideContext';

export default function DashboardGuideTabs() {
    return (
        <Card className="w-full h-auto min-h-100 overflow-hidden">
            <Tabs
                defaultValue="inwork"
                className="flex flex-col justify-between h-full"
            >
                <CardHeader className="mb-3">
                    <CardTitle className="flex items-start gap-1">
                        <p>Latest activities</p>
                        <LucideFlame fill="#FF9A00" size="20" />
                    </CardTitle>
                    <CardDescription>
                        Pick up where you left off
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
                        <Suspense fallback={<CurrentGuideLoader />}>
                            <CurrentGuideContextProvider>
                                <DashboardGuideCard />
                            </CurrentGuideContextProvider>
                        </Suspense>
                    </TabsContent>
                    <TabsContent value="done" className="h-full">
                        <Suspense fallback={<CurrentGuideLoader />}>
                            <DoneGuideContextProvider>
                                <DashboardGuideDoneCard />
                            </DoneGuideContextProvider>
                        </Suspense>
                    </TabsContent>
                </CardContent>
            </Tabs>
        </Card>
    );
}
