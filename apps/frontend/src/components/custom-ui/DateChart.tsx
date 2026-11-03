'use client';

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { useQuery } from '@tanstack/react-query';
import { DaysAmountSchemaType, UsersActivity } from 'shared-types';
import { fetchUsersActivity } from '../../utils/guideApiActions';
import { useClientHandleApiError } from '../../utils/apiErrorsHandler';
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { handleDaysAmount } from 'utils/client';
import { Spinner } from '../ui/spinner';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { EmptyFailed } from './EmptyFailed';
import { LucideChartColumn, LucideHistory } from 'lucide-react';

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
    const [daysAmount, setDaysAmount] = useState<DaysAmountSchemaType>(15);
    const searchParams = new URLSearchParams();
    searchParams.set('daysAmount', daysAmount.toString());

    const selectOptions: {
        label: string;
        daysAmount: string;
    }[] = [
        {
            label: '15 days',
            daysAmount: '15',
        },
        {
            label: '30 days',
            daysAmount: '30',
        },
    ];

    const requestBody: RequestInit = {
        method: 'GET',
    };
    const { data, isLoading, isError } = useQuery<UsersActivity>({
        queryKey: ['activity', daysAmount],
        queryFn: async () => {
            const result = await fetchUsersActivity({
                requestBody,
                searchParams,
            });

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

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <p> Your activity for the last {daysAmount} days</p>
                    <LucideHistory size="20" />
                </CardTitle>
                <CardAction>
                    <Select
                        value={daysAmount.toString()}
                        onValueChange={(value) => {
                            const newDaysAmount = handleDaysAmount(value);
                            setDaysAmount(newDaysAmount);
                            return newDaysAmount.toString();
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Days</SelectLabel>
                                {selectOptions.map((option, index) => (
                                    <SelectItem
                                        key={index}
                                        value={option.daysAmount}
                                    >
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </CardAction>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="relative">
                    {isLoading && (
                        <Spinner className="size-20 inset-0 m-auto absolute" />
                    )}
                    {isError && (
                        <div className="absolute w-full h-full top-0 flex items-center justify-center">
                            <EmptyFailed
                                icon={<LucideChartColumn color="red" />}
                                description="Cant load graph, try again later"
                            />
                        </div>
                    )}
                    {data && (
                        <BarChart data={data}>
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
                    )}
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
