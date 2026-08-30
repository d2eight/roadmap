import { getUserIdFromHeaders } from '../../utils/getUserId';
import { paramsSchemaType } from 'shared-types';
import { headers } from 'next/headers';
import { getParamsFromHeaders } from '@/utils/getParamsFromHeaders';
import { getGuides } from 'utils';
import { GuidesContextProvider } from '@/context/GuidesContext';
import { GuidesFilter } from '@/components/custom-ui/GuidesFilter';
import { Guides } from '@/components/custom-ui/Guides';
import { GuidesPagination } from '@/components/custom-ui/GuidesPagination';

export default async function DashboardServerPage() {
  const headersList = await headers();

  const userId = getUserIdFromHeaders({ headersList });
  const params = getParamsFromHeaders({ headersList });
  const pageSize = 9;

  const [guides, guidesCount] = await getGuides({
    pageSize,
    userId,
    params,
  });

  return (
    <>
      <GuidesContextProvider
        guidesProps={guides}
        guidesCountProps={guidesCount}
      >
        <div className="min-h-[calc(100vh-200px)] flex flex-col gap-[60px]">
          <GuidesFilter />
          <Guides />
          <GuidesPagination pageSize={pageSize} />
        </div>
      </GuidesContextProvider>
    </>
  );
}
