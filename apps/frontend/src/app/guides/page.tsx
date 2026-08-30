import { getUserIdFromHeaders } from '../../utils/getUserId';
import { Guides } from '../../components/custom-ui/Guides';
import { GuidesContext, GuidesContextProvider } from '@/context/GuidesContext';
import { SearchParams } from 'next/dist/server/request/search-params';
import { GuidesPagination } from '@/components/custom-ui/GuidesPagination';
import { getGuidesInPagination } from 'utils';
import { GuidesFilter } from '@/components/custom-ui/GuidesFilter';
import { paramsSchema, paramsSchemaType } from 'shared-types';
import { parseSearchParams } from '@/utils/parseSearchParams';

export default async function DashboardServerPage({
  searchParams,
}: {
  searchParams: Promise<paramsSchemaType>;
}) {
  const userId = await getUserIdFromHeaders();
  const params = await searchParams;

  const resolvedParams = parseSearchParams({
    params,
  });

  const pageSize = 9;

  const [guides, guidesCount] = await getGuidesInPagination({
    currentPage: resolvedParams.page,
    pageSize,
    userId,
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
