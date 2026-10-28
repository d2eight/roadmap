import { getQueryClient } from '@/query/getQueryClient';
import {
    getCurrentUsersGuide,
    getDoneUsersGuide,
    getSession,
    getUsersStatistics,
} from 'utils';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import DashboardGuideTabs from '@/components/custom-ui/DashboardGuideTabs';
import { DashboardGuidesIds } from 'shared-types';
import DashboardStatisticsTabs from '@/components/custom-ui/DashboardStatisticsTabs';

export default async function DashboardServerPage() {
    const session = await getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/auth/sign-in');
    }

    const queryClient = getQueryClient();
    const userId = session.user.id;

    await queryClient.prefetchQuery({
        queryKey: ['statistics'],
        queryFn: () => getUsersStatistics({ userId }),
    });

    const dashboardGuideIds: DashboardGuidesIds = {};

    const currentGuide = await getCurrentUsersGuide({
        userId,
    });

    const doneGuide = await getDoneUsersGuide({
        userId,
    });

    if (currentGuide) {
        queryClient.setQueryData(['guide', currentGuide.id], currentGuide);
        dashboardGuideIds.currentGuideId = currentGuide.id;
    }

    if (doneGuide) {
        queryClient.setQueryData(['guide', doneGuide.id], doneGuide);
        dashboardGuideIds.doneGuideId = doneGuide.id;
    }

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="flex w-full gap-30">
                <DashboardGuideTabs
                    currentGuideId={dashboardGuideIds.currentGuideId}
                    doneGuideId={dashboardGuideIds.doneGuideId}
                />
                <DashboardStatisticsTabs />
            </div>
        </HydrationBoundary>
    );
}
