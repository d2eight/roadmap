import { getQueryClient } from '../../query/getQueryClient';
import {
    getCurrentUsersGuide,
    getDoneUsersGuide,
    getSession,
    getUsersActivity,
    getUsersStatistics,
} from 'utils';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import DashboardGuideTabs from '../../components/custom-ui/DashboardGuideTabs';
import DashboardStatisticsTabs from 'src/components/custom-ui/DashboardStatisticsTabs';
import DateChart from './_components/DateChart';

export default async function DashboardServerPage() {
    const session = await getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/auth/sign-in');
    }

    const queryClient = getQueryClient();
    const userId = session.user.id;
    const daysAmount = 15;

    queryClient.prefetchQuery({
        queryKey: ['statistics'],
        queryFn: () => getUsersStatistics({ userId }),
    });

    queryClient.prefetchQuery({
        queryKey: ['currentGuide'],
        queryFn: () =>
            getCurrentUsersGuide({
                userId,
            }),
    });

    queryClient.prefetchQuery({
        queryKey: ['doneGuide'],
        queryFn: () =>
            getDoneUsersGuide({
                userId,
            }),
    });

    queryClient.prefetchQuery({
        queryKey: ['activity', daysAmount],
        queryFn: () => getUsersActivity({ userId, daysAmount }),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="flex flex-col gap-15">
                <div className="flex w-full gap-15">
                    <DashboardGuideTabs />
                    <DashboardStatisticsTabs />
                </div>
                <DateChart />
            </div>
        </HydrationBoundary>
    );
}
