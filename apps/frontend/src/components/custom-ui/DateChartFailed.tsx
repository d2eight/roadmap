import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@/components/ui/empty';
import { LucideChartColumn } from 'lucide-react';

export function DateChartFailed() {
    return (
        <Empty className="absolute w-full h-full top-0 flex items-center justify-center">
            <EmptyHeader>
                <EmptyMedia>
                    <LucideChartColumn color="red" />
                </EmptyMedia>
                <EmptyTitle>Something went wrong</EmptyTitle>
                <EmptyDescription>
                    Cant load graph, try again later
                    <br />
                </EmptyDescription>
            </EmptyHeader>
        </Empty>
    );
}
