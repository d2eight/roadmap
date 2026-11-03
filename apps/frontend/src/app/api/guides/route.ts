import { NextRequest, NextResponse } from 'next/server';
import { paramsSchema } from 'shared-types';
import { getGuides } from 'utils';
import { pageSize } from '../../../constants/constants';
import { searchParamsToObj } from 'utils/client';
import verifySession from '../../../middlewares/auth';

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
    const searchParams = searchParamsToObj(request.nextUrl.searchParams);
    const parsedSearchParams = paramsSchema.safeParse(searchParams);

    if (!parsedSearchParams.success) {
        return NextResponse.json(
            {
                success: false,
                message: 'Unprocessable search params',
            },
            {
                status: 422,
            },
        );
    }

    try {
        const guides = await getGuides({
            pageSize,
            userId,
            params: parsedSearchParams.data,
        });

        return NextResponse.json(
            {
                success: true,
                data: guides,
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
