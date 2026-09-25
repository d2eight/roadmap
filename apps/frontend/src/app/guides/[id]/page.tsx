import { notFound } from 'next/navigation';
import { getGuide, getGuides } from 'utils';
import { getUserIdFromHeaders } from '../../../utils/getUserId';
import GuideContextProvider from '../../../context/GuideContext';
import GuidePage from './GuidePage';
import { headers } from 'next/headers';
import { pageSize } from '@/constants/constants';
import { getQueryClient } from '@/query/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ParamsContextProvider } from '@/context/ParamsContext';
import { getGuideNEXT } from '@/utils/guide';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GuideServerPage({ params }: PageProps) {
  const headersList = await headers();
  const userId = getUserIdFromHeaders({ headersList });
  const queryClient = getQueryClient();

  const resolvedParams = await params;

  await queryClient.prefetchQuery({
    queryKey: ['guide', resolvedParams.id],
    queryFn: () =>
      getGuideNEXT({
        guideId: resolvedParams.id,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ParamsContextProvider>
        <GuideContextProvider
          autoQueryStatus={true}
          guideId={resolvedParams.id}
        >
          <GuidePage />
        </GuideContextProvider>
      </ParamsContextProvider>
    </HydrationBoundary>
  );
}
