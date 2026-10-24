'use client';

import { PaginationEllipsis, PaginationItem } from '@/components/ui/pagination';

export function EllipsisPaginationItem() {
    return (
        <PaginationItem>
            <PaginationEllipsis />
        </PaginationItem>
    );
}
