import { NextRequest, NextResponse } from 'next/server';
import { RouteIdParams } from 'shared-types';
import verifySession from '@/middlewares/auth';
import { getGuide } from 'utils';

export async function GET(request: NextRequest, { params }: RouteIdParams) {
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

    const guideId = (await params).id;
    const userId = sessionResponse.data.user.id;

    try {
        const guide = await getGuide({
            userId,
            guideId,
        });

        if (!guide) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Such a guide does not exists',
                },
                {
                    status: 404,
                },
            );
        }

        return NextResponse.json(
            {
                success: true,
                data: guide,
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
