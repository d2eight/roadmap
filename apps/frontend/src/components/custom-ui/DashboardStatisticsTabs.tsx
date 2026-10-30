'use client';

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { UsersStatistics } from 'shared-types';
import { fetchStatistics } from '@/utils/guideApiActions';
import { useClientHandleApiError } from '@/utils/apiErrorsHandler';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { CurrentGuideLoader } from '@/components/custom-ui/CurrentGuideLoader';
import { DataTable } from '@/components/custom-ui/DataTable';

export default function DashboardStatisticsTabs() {
    const { clientHandleApiError } = useClientHandleApiError();

    const requestBody: RequestInit = {
        method: 'GET',
    };
    const { data, isLoading } = useQuery<UsersStatistics>({
        queryKey: ['statistics'],
        queryFn: async () => {
            const result = await fetchStatistics({ requestBody });

            if (result.isErr()) {
                clientHandleApiError({
                    error: result.error,
                    redirect: false,
                });
                throw result.error;
            }

            return result.value.data;
        },
    });

    if (isLoading) {
        return <CurrentGuideLoader />;
    }

    if (!data) return null;

    return (
        <Card className="w-full">
            <Tabs defaultValue="guides">
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
                    <TabsContent value="guides">
                        <DataTable data={data.guidesCounts} />
                    </TabsContent>
                    <TabsContent value="steps">
                        <DataTable data={data.stepsCounts} />
                    </TabsContent>
                </CardContent>
            </Tabs>
        </Card>
    );
}
