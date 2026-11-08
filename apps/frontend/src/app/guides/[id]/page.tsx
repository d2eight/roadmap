import { RouteIdParams } from 'shared-types';
import { getGuide, getSession } from 'utils';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { GuideLoader } from '../../../components/custom-ui/GuideLoader';
import { QueryErrorBoundary } from '../../../components/errors/QueryErrorBoundary';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { GuideContextProvider } from '../../../context/GuideContext';
import { FormProcessor } from '../../../context/FormProcessor';
import { GuidePageHeader } from '../../../components/custom-ui/GuidePageHeader';
import { GuidePageContent } from '../../../components/custom-ui/GuidePageContent';
import { GuidePageFooter } from '../../../components/custom-ui/GuidePageFooter';
import { getQueryClient } from '../../../query/getQueryClient';

export default async function GuideServerPage({ params }: RouteIdParams) {
    const session = await getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/auth/sign-in');
    }

    const guideId = (await params).id;
    const userId = session.user.id;

    const queryClient = getQueryClient();

    queryClient.prefetchQuery({
        queryKey: ['guide', guideId],
        queryFn: () =>
            getGuide({
                userId,
                guideId,
            }),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <QueryErrorBoundary>
                <Suspense fallback={<GuideLoader />}>
                    <GuideContextProvider guideId={guideId}>
                        <FormProcessor>
                            <GuidePageHeader />
                            <GuidePageContent />
                            <GuidePageFooter />
                        </FormProcessor>
                    </GuideContextProvider>
                </Suspense>
            </QueryErrorBoundary>
        </HydrationBoundary>
    );
}
