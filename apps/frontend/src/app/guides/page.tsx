import { getUserIdFromHeaders } from '../../utils/getUserId';
import { headers } from 'next/headers';
import { getGuides } from 'utils';
import { GuidesContextProvider } from '@/context/GuidesContext';
import { GuidesFilter } from '@/components/custom-ui/GuidesFilter';
import { Guides } from '@/components/custom-ui/Guides';
import { GuidesPagination } from '@/components/custom-ui/GuidesPagination';
import { QueryKeyType } from 'shared-types';
import { FormProcessor } from '@/components/wrappers/FormProcessor';
import { getQueryClient } from '@/query/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ParamsContextProvider } from '@/context/ParamsContext';
import { pageSize } from '@/constants/constants';
import { getGuidesNEXT } from '@/utils/guide';

export default async function DashboardServerPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const headersList = await headers();
  const params = await searchParams;
  const queryClient = getQueryClient();

  const userId = getUserIdFromHeaders({ headersList });
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

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FormProcessor>
          <div className="min-h-[calc(100vh-200px)] flex flex-col gap-[60px]">
            <ParamsContextProvider>
              <GuidesFilter />
              <GuidesContextProvider>
                <Guides />
                <GuidesPagination pageSize={pageSize} />
              </GuidesContextProvider>
            </ParamsContextProvider>
          </div>
        </FormProcessor>
      </HydrationBoundary>
    </>
  );
}
