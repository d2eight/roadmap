'use client';

import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@/components/ui/empty';
import { SearchXIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { CreateGuideButton } from '@/components/custom-ui/CreateGuideButton';
import { useParamsContext } from '@/context/ParamsContext';
import Link from 'next/link';

export function GuideNotFound() {
    const { searchParams } = useParamsContext();

    const createGuideCustomButton = (
        <Button variant="outline">Create guide</Button>
    );

    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <SearchXIcon />
                </EmptyMedia>
                <EmptyTitle>Not found</EmptyTitle>
                <EmptyDescription>
                    {' '}
                    Such a guide, does not exist.
                    <br /> Create, a new guide, or go back to the dashboard
                    page.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="flex flex-row justify-center">
                <Button asChild>
                    <Link href={`/guides?${searchParams}`}>Dashboard</Link>
                </Button>
                <CreateGuideButton
                    button={createGuideCustomButton}
                    pushToGuideStatus={true}
                />
            </EmptyContent>
        </Empty>
    );
}
