import { BetterAuthSession, VerifySessionResponse } from 'shared-types';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from 'utils';

export default async function verifySession({
  request,
}: {
  request: NextRequest;
}): Promise<VerifySessionResponse> {
  const session: BetterAuthSession = await getSession({
    headers: request.headers,
  });

  if (!session) {
    return {
      success: false,
      redirect: NextResponse.redirect(new URL('/auth/sign-in', request.url)),
    };
  }

  return {
    success: true,
    data: session,
  };
}
