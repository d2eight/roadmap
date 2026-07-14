import verifySession from '@/apps/frontend/src/middlewares/auth';
import { notFound, redirect } from 'next/navigation';
import { getGuide } from 'utils';
import GuideContextParent from '@/apps/frontend/src/app/guides/[id]/GuideContextParent';
import GuidePage from '@/apps/frontend/src/app/guides/[id]/GuidePage';
import { authClient } from '../../../lib/auth-client';
import { headers } from 'next/headers';
import { getUserIdFromHeaders } from '../../../utils/getUserId';
import GuideContextProvider from '@/apps/frontend/src/app/guides/[id]/GuideContextParent';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GuideServerPage({ params }: PageProps) {
  const userId = await getUserIdFromHeaders();

  const resolvedParams = await params;

  const guide = await getGuide(userId, resolvedParams.id);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <GuideContextProvider guideProps={guide}>
        <GuidePage />
      </GuideContextProvider>
    </>
  );
}
