'use client';

import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Suspense } from 'react';
import { SummaryLoader } from './SummaryLoader';
import { StatisticsTabsSection } from '../../app/home/_components/StatisticsTabsSection';
import { QueryErrorBoundary } from '../errors/QueryErrorBoundary';

export default function DashboardStatisticsTabs() {
    return (
        <Card className="w-full h-auto min-h-100 overflow-hidden">
            <Tabs defaultValue="guides" className="h-full">
                <CardHeader className="mb-3">
                    <CardTitle>Progress Summary</CardTitle>
                    <CardDescription>
                        Overall progress based on statuses
                    </CardDescription>
                    <CardAction>
                        <TabsList>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span>
                                        <TabsTrigger value="guides">
                                            Guides
                                        </TabsTrigger>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent>Guides statuses</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span>
                                        <TabsTrigger value="steps">
                                            Steps
                                        </TabsTrigger>
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent>Steps statuses</TooltipContent>
                            </Tooltip>
                        </TabsList>
                    </CardAction>
                </CardHeader>
                <Separator />
                <CardContent>
                    <QueryErrorBoundary>
                        <Suspense fallback={<SummaryLoader />}>
                            <StatisticsTabsSection />
                        </Suspense>
                    </QueryErrorBoundary>
                </CardContent>
            </Tabs>
        </Card>
    );
}
