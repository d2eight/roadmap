import { getUserIdFromHeaders } from '../../utils/getUserId';
import { Guides } from '../../components/custom-ui/Guides';
import { GuidesContext, GuidesContextProvider } from '@/context/GuidesContext';
import { SearchParams } from 'next/dist/server/request/search-params';
import { GuidesPagination } from '@/components/custom-ui/GuidesPagination';
import { getGuidesInPagination } from 'utils';

export default async function DashboardServerPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const userId = await getUserIdFromHeaders();
  const resolvedParams = await searchParams;
  const currentPage = resolvedParams.page
    ? parseInt(resolvedParams.page as string)
    : 1;
  const pageSize = 9;

  const [guides, guidesCount] = await getGuidesInPagination({
    currentPage,
    pageSize,
    userId,
  });

  return (
    <>
      <GuidesContextProvider
        guidesProps={guides}
        guidesCountProps={guidesCount}
      >
        <Guides />
        <GuidesPagination pageSize={pageSize} />
      </GuidesContextProvider>
    </>
  );
}
