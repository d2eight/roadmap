import { NextRequest, NextResponse } from 'next/server';
import verifySession from '@/middlewares/auth';
import verifySearchParams from '@/middlewares/searchParams';

export default async function proxy(request: NextRequest) {
    const sessionResponse = await verifySession({ request });

    if (!sessionResponse.success) {
        return sessionResponse.redirect;
    }

    if (request.nextUrl.pathname.startsWith('/guides')) {
        const paramsResponse = await verifySearchParams({ request });

        if (paramsResponse) {
            return paramsResponse;
        }
    }

    return NextResponse.next({
        request: {
            headers: request.headers,
        },
    });
}

export const config = {
    matcher: [
        '/((?!auth|_next/static|_next/image|.*\\.png$).*)',
        '/prompting/:path*',
        '/guides/:path*',
        '/api/guides/:path*',
    ],
};
