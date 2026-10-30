import { NextRequest, NextResponse } from 'next/server';
import verifySession from '@/middlewares/auth';
import { getUsersActivity } from 'utils';
import { daysAmountSchema } from 'shared-types';

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

    const searchParam = daysAmountSchema.safeParse(
        request.nextUrl.searchParams.get('daysAmount'),
    );

    const daysAmount = searchParam.success ? searchParam.data : 15;

    const userId = sessionResponse.data.user.id;

    try {
        const activity = await getUsersActivity({ userId, daysAmount });

        return NextResponse.json(
            {
                success: true,
                data: activity,
            },
            {
                status: 200,
            },
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: 'Something went wrong, unable to fetch guides',
            },
            {
                status: 500,
            },
        );
    }
}
