'use client';

import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import { useQuery } from '@tanstack/react-query';
import { UsersStatistics } from 'shared-types';
import { fetchStatistics } from '@/utils/guideApiActions';
import { useClientHandleApiError } from '@/utils/apiErrorsHandler';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const chartConfig = {
    createdCount: {
        label: 'Guides created',
        color: '#CBD5E1',
    },
    doneCount: {
        label: 'Guides done',
        color: '#4ADE80',
    },
} satisfies ChartConfig;

export default function DateChart() {
    const { clientHandleApiError } = useClientHandleApiError();

    const requestBody: RequestInit = {
        method: 'GET',
    };
    const { data } = useQuery<UsersStatistics>({
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

    if (!data) {
        return null;
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Your activity for the lat 15 days</CardTitle>
            </CardHeader>
            <ChartContainer config={chartConfig}>
                <span></span>
                <BarChart data={data.datesCounts}>
                    <CartesianGrid vertical={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <XAxis dataKey="date" />
                    <Bar
                        dataKey="createdCount"
                        fill="var(--color-createdCount)"
                        radius={4}
                    ></Bar>
                    <Bar
                        dataKey="doneCount"
                        fill="var(--color-doneCount)"
                        radius={4}
                    ></Bar>
                </BarChart>
            </ChartContainer>
        </Card>
    );
}
