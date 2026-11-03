'use client';

import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '../ui/empty';
import { SearchXIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { CreateGuideButton } from './CreateGuideButton';

export function GuidesNotFound() {
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
                    There are no guides, already created or fit with such a
                    filters. Create a guide, if you already hadn't or change
                    your filters.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <CreateGuideButton
                    button={createGuideCustomButton}
                    pushToGuideStatus={false}
                />
            </EmptyContent>
        </Empty>
    );
}
