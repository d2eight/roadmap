import { paramsSchema, SearchParamsNext } from 'shared-types';
import { Filter } from '../../components/custom-ui/Filter';
import { getSession } from 'utils';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { Suspense } from 'react'
import { GuidesLoader } from '../../components/custom-ui/GuidesLoader';
import { GuidesSection } from './_components/GuidesSection';
import { QueryErrorBoundary } from '../../components/errors/QueryErrorBoundary';

export default async function GuidesServerPage({
    searchParams,
}: {
    searchParams: SearchParamsNext;
}) {
    const session = await getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/auth/sign-in');
    }

    const parsedParams = paramsSchema.safeParse(await searchParams);

    if (!parsedParams.success) {
        redirect('/guides');
    }

    const { orderBy, page, progressStatus } = parsedParams.data;

    return (
        <div className="flex flex-col gap-5 xl:gap-15">
            <Filter />
            <QueryErrorBoundary key={`${page}-${orderBy}-${progressStatus}`}>
                <Suspense fallback={<GuidesLoader />}>
                    <GuidesSection
                        userId={session.user.id}
                        params={parsedParams.data}
                    ></GuidesSection>
                </Suspense>
            </QueryErrorBoundary>
        </div>
    );
}
