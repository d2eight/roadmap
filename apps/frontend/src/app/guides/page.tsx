import { SearchParamsNext } from 'shared-types';
import { getSession } from 'utils';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ParamsContextProvider } from '../../context/ParamsContext';
import { Filter } from '../../components/custom-ui/Filter';
import { QueryErrorBoundary } from '../../components/errors/QueryErrorBoundary';
import { GuidesLoader } from '../../components/custom-ui/GuidesLoader';
import { Suspense } from 'react';
import { GuidesSection } from './_components/GuidesSection';
import getSearchParamsAndParse from '../../utils/getSearchParams';

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

    const { processedSearchParams, orderBy, page, progressStatus } =
        await getSearchParamsAndParse({
            searchParams,
        });

    return (
        <div className="flex flex-col gap-5 xl:gap-15">
            <ParamsContextProvider
                processedSearchParams={processedSearchParams}
            >
                <Filter />
                <QueryErrorBoundary
                    key={`${page}-${orderBy}-${progressStatus}`}
                >
                    <Suspense fallback={<GuidesLoader />}>
                        <GuidesSection
                            userId={session.user.id}
                            params={{
                                orderBy,
                                page,
                                progressStatus,
                            }}
                        />
                    </Suspense>
                </QueryErrorBoundary>
            </ParamsContextProvider>
        </div>
    );
}
