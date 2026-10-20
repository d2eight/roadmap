'use server';

import { headers } from 'next/headers';
import { getGuide, getGuides, getSession } from 'utils';
import { paramsSchemaType } from 'shared-types';

export async function getGuideNEXT({ guideId }: { guideId: string }) {
  const session = await getSession({ headers: await headers() });

  if (!session) {
    return null;
  }

  return getGuide({
    userId: session.user.id,
    guideId: guideId,
  });
}

export async function getGuidesNEXT({
  pageSize,
  params,
}: {
  pageSize: number;
  params: paramsSchemaType;
}) {
  const session = await getSession({ headers: await headers() });

  if (!session) {
    return;
  }

  return getGuides({
    pageSize: pageSize,
    userId: session.user.id,
    params: params,
  });
}
