'use server';

import { headers } from 'next/headers';
import { getGuide, getSession } from 'utils';

export async function getGuideNEXT({ guideId }: { guideId: string }) {
  const session = await getSession({ headers: await headers() });

  if (!session) {
    return;
  }

  return getGuide({
    userId: session.user.id,
    guideId: guideId,
  });
}
