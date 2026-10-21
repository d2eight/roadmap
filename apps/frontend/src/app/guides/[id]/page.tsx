import GuideContextProvider from '../../../context/GuideContext';
import GuidePage from './GuidePage';
import { getQueryClient } from '@/query/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ParamsContextProvider } from '@/context/ParamsContext';
import { RouteIdParams } from 'shared-types';
import { getGuide, getSession } from 'utils';
import { headers } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import { GuideNotFound } from '@/components/custom-ui/GuideNotFound';

export default async function GuideServerPage({ params }: RouteIdParams) {
  const queryClient = getQueryClient();

  const session = await getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/auth/sign-in');
  }

  const guideId = (await params).id;
  const userId = session.user.id;

  const guide = await queryClient.fetchQuery({
    queryKey: ['guide', guideId],
    queryFn: () =>
      getGuide({
        userId,
        guideId,
      }),
  });

  if (!guide) {
    return (
      <ParamsContextProvider>
        <GuideNotFound />
      </ParamsContextProvider>
    );
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ParamsContextProvider>
        <GuideContextProvider autoQueryStatus={true} guideId={guideId}>
          <GuidePage />
        </GuideContextProvider>
      </ParamsContextProvider>
    </HydrationBoundary>
  );
}
