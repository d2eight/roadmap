import { getQueryClient } from '@/query/getQueryClient';
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
import DashboardGuideTabs from '@/components/custom-ui/DashboardGuideTabs';
import DashboardStatisticsTabs from '@/components/custom-ui/DashboardStatisticsTabs';
import DateChart from '@/components/custom-ui/DateChart';

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

    await queryClient.prefetchQuery({
        queryKey: ['statistics'],
        queryFn: () => getUsersStatistics({ userId }),
    });

    await queryClient.prefetchQuery({
        queryKey: ['activity', daysAmount],
        queryFn: () => getUsersActivity({ userId, daysAmount }),
    });

    const currentGuide = await getCurrentUsersGuide({
        userId,
    });

    const doneGuide = await getDoneUsersGuide({
        userId,
    });

    if (currentGuide) {
        queryClient.setQueryData(['currentGuide'], currentGuide);
        queryClient.setQueryData(['guide', currentGuide.id], currentGuide);
    }

    if (doneGuide) {
        queryClient.setQueryData(['doneGuide'], doneGuide);
        queryClient.setQueryData(['guide', doneGuide.id], doneGuide);
    }

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
