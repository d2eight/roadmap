import { notFound } from 'next/navigation';
import { getGuide } from 'utils';
import { getUserIdFromHeaders } from '../../../utils/getUserId';
import GuideContextProvider from '../../../context/GuideContext';
import GuidePage from './GuidePage';
import { headers } from 'next/headers';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GuideServerPage({ params }: PageProps) {
  const headersList = await headers();
  const userId = await getUserIdFromHeaders({ headersList });

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
