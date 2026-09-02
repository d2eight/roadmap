import { getUserIdFromHeaders } from '../../utils/getUserId';
import { headers } from 'next/headers';
import { getParamsFromHeaders } from '@/utils/getParamsFromHeaders';
import { getGuides } from 'utils';
import { GuidesContextProvider } from '@/context/GuidesContext';
import { GuidesFilter } from '@/components/custom-ui/GuidesFilter';
import { Guides } from '@/components/custom-ui/Guides';
import { GuidesPagination } from '@/components/custom-ui/GuidesPagination';
import { paramsSchemaType } from 'shared-types';
import { GuideProgressStatus } from 'database/enums';
import { redirect } from 'next/navigation';
import { GuidesNotFound } from '@/components/custom-ui/ GuidesNotFound';
import { FormProcessor } from '@/components/wrappers/FormProcessor';

export default async function DashboardServerPage({
  searchParams,
}: {
  searchParams: Promise<
    Omit<paramsSchemaType, 'progressStatus'> & {
      progressStatus: string;
    }
  >;
}) {
  const headersList = await headers();
  const params = await searchParams;

  const userId = getUserIdFromHeaders({ headersList });
  const pageSize = 1;
  const orderBy = params.orderBy;
  const page = params.page;
  const progressStatus = params.progressStatus.split(
    ',',
  ) as GuideProgressStatus[];

  const [guides, guidesCount] = await getGuides({
    pageSize: pageSize,
    userId: userId,
    params: {
      orderBy: orderBy,
      page: page,
      progressStatus: progressStatus,
    },
  });

  return (
    <>
      <FormProcessor>
        <div className="min-h-[calc(100vh-200px)] flex flex-col gap-[60px]">
          <GuidesFilter />
          {guides.length ? (
            <GuidesContextProvider
              guidesProps={guides}
              guidesCountProps={guidesCount}
            >
              <Guides />
              <GuidesPagination pageSize={pageSize} />
            </GuidesContextProvider>
          ) : (
            <GuidesNotFound />
          )}
        </div>
      </FormProcessor>
    </>
  );
}
