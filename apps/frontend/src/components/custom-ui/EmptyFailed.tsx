import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@/components/ui/empty';
import { LucideCircleMinus } from 'lucide-react';
import { JSX } from 'react';

export function EmptyFailed({
    icon = <LucideCircleMinus color="red" />,
    title = 'Something went wrong',
    description = 'Cant load requested data',
}: {
    icon?: JSX.Element;
    title?: string;
    description?: string;
}) {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia>{icon}</EmptyMedia>
                <EmptyTitle>{title}</EmptyTitle>
                <EmptyDescription>{description}</EmptyDescription>
            </EmptyHeader>
        </Empty>
    );
}
