import { getUserIdFromHeaders } from '../../utils/getUserId';
import { headers } from 'next/headers';
import { getParamsFromHeaders } from '@/utils/getParamsFromHeaders';
import { getGuides } from 'utils';
import { GuidesContextProvider } from '@/context/GuidesContext';
import { GuidesFilter } from '@/components/custom-ui/GuidesFilter';
import { Guides } from '@/components/custom-ui/Guides';
import { GuidesPagination } from '@/components/custom-ui/GuidesPagination';
import { paramsSchemaType, QueryKeyType } from 'shared-types';
import { GuideProgressStatus } from 'database/enums';
import { redirect } from 'next/navigation';
import { GuidesNotFound } from '@/components/custom-ui/ GuidesNotFound';
import { FormProcessor } from '@/components/wrappers/FormProcessor';
import { getQueryClient } from '@/query/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ParamsContextProvider } from '@/context/ParamsContext';
import { pageSize } from '@/constants/constants';
import { Guide } from '../../../../../libs/db/generated/prisma/client';
import { GuideModel } from '../../../../../libs/db/generated/prisma/models/Guide';

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
      getGuides({
        pageSize: pageSize,
        userId: userId!,
        params: {
          orderBy: orderBy,
          page: page,
          progressStatus: progressStatus,
        },
      }),
  });

  const queryData = queryClient.getQueriesData<[GuideModel[], number]>({
    queryKey,
  });

  const guidesExist = Boolean(queryData[0]?.[1]?.[0]?.length);

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FormProcessor>
          <div className="min-h-[calc(100vh-200px)] flex flex-col gap-[60px]">
            <ParamsContextProvider>
              <GuidesFilter />
              {guidesExist ? (
                <GuidesContextProvider>
                  <Guides />
                  <GuidesPagination pageSize={pageSize} />
                </GuidesContextProvider>
              ) : (
                <div>123</div>
                // <GuidesNotFound />
              )}
            </ParamsContextProvider>
          </div>
        </FormProcessor>
      </HydrationBoundary>
    </>
  );
}
