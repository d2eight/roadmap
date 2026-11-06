import { RouteIdParams } from 'shared-types';
import { getSession } from 'utils';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import GuideSection from './_components/GuideSection';
import { GuideLoader } from '../../../components/custom-ui/GuideLoader';
import { QueryErrorBoundary } from '../../../components/errors/QueryErrorBoundary';

export default async function GuideServerPage({ params }: RouteIdParams) {
    const session = await getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/auth/sign-in');
    }

    const guideId = (await params).id;
    const userId = session.user.id;

    return (
        <QueryErrorBoundary>
            <Suspense fallback={<GuideLoader />}>
                <GuideSection guideId={guideId} userId={userId} />
            </Suspense>
        </QueryErrorBoundary>
    );
}
