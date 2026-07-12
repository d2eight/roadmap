import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { BetterAuthSession } from 'shared-types';
import { auth } from 'auth';

export default async function proxy(request: NextRequest) {
  const session: BetterAuthSession = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  request.headers.set('x-user-id', session.user.id);

  return NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
}

export const config = {
  matcher: [
    '/((?!api|auth|_next/static|_next/image|.*\\.png$).*)',
    '/prompting/:path*',
    '/guides/:path*',
  ],
};
