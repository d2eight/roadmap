'use client';

import { ChartConfig, ChartContainer } from '../ui/chart';
import { DaysAmountSchemaType } from 'shared-types';
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Suspense, useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { handleDaysAmount } from 'utils/client';
import { LucideHistory } from 'lucide-react';
import { ChartSection } from '../../app/home/_components/ChartSection';
import { Skeleton } from '../ui/skeleton';
import { QueryErrorBoundary } from '../errors/QueryErrorBoundary';

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
                <QueryErrorBoundary>
                    <Suspense fallback={<Skeleton className="w-full h-179" />}>
                        <ChartContainer
                            config={chartConfig}
                            className="relative"
                        >
                            <ChartSection
                                daysAmount={daysAmount}
                                searchParams={searchParams}
                            />
                        </ChartContainer>
                    </Suspense>
                </QueryErrorBoundary>
            </CardContent>
        </Card>
    );
}
