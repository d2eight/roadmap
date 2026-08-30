import { headers } from 'next/headers';
import { auth } from 'auth';
import { redirect } from 'next/navigation';
import { BetterAuthSession } from 'shared-types';
import { NextRequest, NextResponse } from 'next/server';

export default async function verifySession({
  request,
}: {
  request: NextRequest;
}) {
  const session: BetterAuthSession = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  request.headers.set('x-user-id', session.user.id);

  return;
}
