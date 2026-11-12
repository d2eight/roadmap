import { NextRequest, NextResponse } from 'next/server';
import verifySearchParams from './middlewares/searchParams';
import verifySession from './middlewares/auth';

export default async function proxy(request: NextRequest) {
    const sessionResponse = await verifySession({ request });

    if (!sessionResponse.success) {
        return sessionResponse.redirect;
    }

    if (request.nextUrl.pathname === '/guides') {
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
        '/((?!api|auth|.*\\.png$|_next/static|_next/image|favicon.ico).*)',
        '/prompting/:path*',
        '/guides/:path*',
    ],
};
