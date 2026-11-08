import { UsersActivity } from 'shared-types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchUsersActivity } from '../../../utils/guideApiActions';
import { useClientHandleApiError } from '../../../utils/apiErrorsHandler';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from '../../../components/ui/chart';

export function ChartSection({
    daysAmount,
    searchParams,
}: {
    daysAmount: number;
    searchParams: URLSearchParams;
}) {
    const { clientHandleApiError } = useClientHandleApiError();

    const requestBody: RequestInit = {
        method: 'GET',
    };
    const { data } = useSuspenseQuery<UsersActivity>({
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
    );
}
