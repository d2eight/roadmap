import { GuidesContextProvider } from '@/context/GuidesContext';
import { Guides } from '@/components/custom-ui/Guides';
import { GuidesPagination } from '@/components/custom-ui/GuidesPagination';
import { GuideModelWithRelations, QueryKeyType } from 'shared-types';
import { FormProcessor } from '@/components/wrappers/FormProcessor';
import { getQueryClient } from '@/query/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ParamsContextProvider } from '@/context/ParamsContext';
import { getGuidesNEXT } from '@/utils/guide';
import { pageSize } from '@/constants/constants';
import { Filter } from '@/components/custom-ui/Filter';

export default async function DashboardServerPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const params = await searchParams;
  const queryClient = getQueryClient();

  const orderBy = params.orderBy;
  const page = parseInt(params.page);
  const progressStatus = params.progressStatus.split(',');
  const queryKey: QueryKeyType = ['guides', page, orderBy, progressStatus];

  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () =>
      getGuidesNEXT({
        pageSize: pageSize,
        params: {
          orderBy: orderBy,
          page: page,
          progressStatus: progressStatus,
        },
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
            <ParamsContextProvider>
              <Filter />

              <GuidesContextProvider>
                <Guides />
                <GuidesPagination />
              </GuidesContextProvider>
            </ParamsContextProvider>
          </div>
        </FormProcessor>
      </HydrationBoundary>
    </>
  );
}
