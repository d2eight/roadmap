import { NextRequest, NextResponse } from 'next/server';
import verifySession from '@/middlewares/auth';
import { getUsersStatistics } from 'utils';

export async function GET(request: NextRequest) {
    const sessionResponse = await verifySession({ request });

    if (!sessionResponse.success) {
        return NextResponse.json(
            {
                success: false,
                message: 'Unauthorized user, please sign in',
            },
            {
                status: 401,
            },
        );
    }

    const userId = sessionResponse.data.user.id;

    try {
        const statistics = await getUsersStatistics({ userId });

        return NextResponse.json(
            {
                success: true,
                data: statistics,
            },
            {
                status: 200,
            },
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: 'Something went wrong, unable to fetch info',
            },
            {
                status: 500,
            },
        );
    }
}
