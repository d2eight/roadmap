import {
    GuideModelWithRelations,
    paramsSchemaType,
    QueryKeyType,
} from 'shared-types';
import { getQueryClient } from '../../../query/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getGuides } from 'utils';
import { pageSize } from '../../../constants/constants';
import { GuidesContextProvider } from '../../../context/GuidesContext';
import { Guides } from '../../../components/custom-ui/Guides';
import { GuidesPagination } from '../../../components/custom-ui/GuidesPagination';

export async function GuidesSection({
    userId,
    params,
}: {
    userId: string;
    params: paramsSchemaType;
}) {
    const queryClient = getQueryClient();

    const { orderBy, page, progressStatus } = params;
    const queryKey: QueryKeyType = ['guides', page, orderBy, progressStatus];

    const [guides] = await queryClient.fetchQuery({
        queryKey,
        queryFn: () =>
            getGuides({
                pageSize,
                userId,
                params,
            }),
    });

    console.log(guides);

    guides.forEach((guide: GuideModelWithRelations) => {
        queryClient.setQueryData<GuideModelWithRelations>(
            ['guide', guide.id],
            guide,
        );
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <GuidesContextProvider>
                <Guides />
                <GuidesPagination />
            </GuidesContextProvider>
        </HydrationBoundary>
    );
}
