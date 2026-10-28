import { GuidesContextProvider } from '@/context/GuidesContext';
import { Guides } from '@/components/custom-ui/Guides';
import { GuidesPagination } from '@/components/custom-ui/GuidesPagination';
import {
    GuideModelWithRelations,
    paramsSchema,
    QueryKeyType,
    SearchParamsNext,
} from 'shared-types';
import { FormProcessor } from '@/context/FormProcessor';
import { getQueryClient } from '@/query/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { pageSize } from '@/constants/constants';
import { Filter } from '@/components/custom-ui/Filter';
import { getGuides, getSession } from 'utils';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

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

    const userId = session.user.id;
    const params = await searchParams;
    const parsedParams = paramsSchema.safeParse(params);

    if (!parsedParams.success) {
        return null;
    }

    const queryClient = getQueryClient();

    const orderBy = parsedParams.data.orderBy;
    const page = parsedParams.data.page;
    const progressStatus = parsedParams.data.progressStatus;
    const queryKey: QueryKeyType = ['guides', page, orderBy, progressStatus];

    await queryClient.prefetchQuery({
        queryKey,
        queryFn: () =>
            getGuides({
                pageSize,
                userId,
                params: parsedParams.data,
            }),
    });

    const result =
        queryClient.getQueryData<[GuideModelWithRelations[], number]>(queryKey);

    result?.[0].forEach((guide: GuideModelWithRelations) => {
        queryClient.setQueryData<GuideModelWithRelations>(
            ['guide', guide.id],
            guide,
        );
    });

    return (
        <>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <FormProcessor>
                    <div className="flex flex-col gap-5 xl:gap-15">
                        <Filter />
                        <GuidesContextProvider>
                            <Guides />
                            <GuidesPagination />
                        </GuidesContextProvider>
                    </div>
                </FormProcessor>
            </HydrationBoundary>
        </>
    );
}
