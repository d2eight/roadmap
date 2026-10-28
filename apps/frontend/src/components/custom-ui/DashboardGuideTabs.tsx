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
import GuideContextProvider from '@/context/GuideContext';
import { DashboardGuideCard } from '@/components/custom-ui/DashboardGuideCard';
import { DashboardGuidesIds } from 'shared-types';
import DashboardNoGuideCard from '@/components/custom-ui/DashboardNoGuideCard';
import { DashboardGuideDoneCard } from '@/components/custom-ui/DashboardGuideDoneCard';

export default function DashboardGuideTabs({
    currentGuideId,
    doneGuideId,
}: DashboardGuidesIds) {
    return (
        <Card className="w-full h-auto">
            <Tabs
                defaultValue="inwork"
                className="flex flex-col justify-between h-full"
            >
                <CardHeader>
                    <CardTitle>Latest activities</CardTitle>
                    <CardDescription>
                        Information about your latest progress
                    </CardDescription>
                    <CardAction>
                        <TabsList className="mb-5">
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
                        {currentGuideId ? (
                            <>
                                <GuideContextProvider
                                    guideId={currentGuideId}
                                    autoQueryStatus={true}
                                >
                                    <DashboardGuideCard />
                                </GuideContextProvider>
                            </>
                        ) : (
                            <DashboardNoGuideCard />
                        )}
                    </TabsContent>
                    <TabsContent value="done" className="h-full">
                        {doneGuideId ? (
                            <>
                                <GuideContextProvider
                                    guideId={doneGuideId}
                                    autoQueryStatus={true}
                                >
                                    <DashboardGuideDoneCard />
                                </GuideContextProvider>
                            </>
                        ) : (
                            <DashboardNoGuideCard />
                        )}
                    </TabsContent>
                </CardContent>
            </Tabs>
        </Card>

        // <Tabs defaultValue="inwork" className="w-full h-full">
        //     <Card className="h-full flex flex-col gap-3">
        //         <CardHeader>
        //             <CardTitle>Latest activities</CardTitle>
        //             <CardDescription>Your latest guides</CardDescription>
        //             <CardAction>
        //                 <TabsList className="mb-5">
        //                     <Tooltip>
        //                         <TooltipTrigger asChild>
        //                             <span>
        //                                 <TabsTrigger value="inwork">
        //                                     Current
        //                                 </TabsTrigger>
        //                             </span>
        //                         </TooltipTrigger>
        //                         <TooltipContent>
        //                             Your current, unfinished guide
        //                         </TooltipContent>
        //                     </Tooltip>
        //                     <Tooltip>
        //                         <TooltipTrigger asChild>
        //                             <span>
        //                                 <TabsTrigger value="done">
        //                                     Done
        //                                 </TabsTrigger>
        //                             </span>
        //                         </TooltipTrigger>
        //                         <TooltipContent>
        //                             Your last finished guide
        //                         </TooltipContent>
        //                     </Tooltip>
        //                 </TabsList>
        //             </CardAction>
        //         </CardHeader>
        //         <Separator />
        //         <CardContent className="h-full">
        //             <TabsContent value="inwork" className="h-full">
        //                 {currentGuideId ? (
        //                     <>
        //                         <GuideContextProvider
        //                             guideId={currentGuideId}
        //                             autoQueryStatus={true}
        //                         >
        //                             <DashboardGuideCard />
        //                         </GuideContextProvider>
        //                     </>
        //                 ) : (
        //                     <DashboardNoGuideCard />
        //                 )}
        //             </TabsContent>
        //             <TabsContent value="done">
        //                 {doneGuideId ? (
        //                     <>
        //                         <GuideContextProvider
        //                             guideId={doneGuideId}
        //                             autoQueryStatus={true}
        //                         >
        //                             <DashboardGuideCard />
        //                         </GuideContextProvider>
        //                     </>
        //                 ) : (
        //                     <DashboardNoGuideCard />
        //                 )}
        //             </TabsContent>
        //         </CardContent>
        //     </Card>
        // </Tabs>
    );
}
