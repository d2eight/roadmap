'use client';

import { PaginationItem, PaginationPrevious } from '../ui/pagination';
import { Button } from '../ui/button';

export function PreviousPagePaginationItem({
    navigateToPage,
    currentPage,
    firstPage,
    className = '',
}: {
    navigateToPage: (page: number) => void;
    currentPage: number;
    firstPage: number;
    className?: string;
}) {
    return (
        <PaginationItem className={`${className} list-none`}>
            <Button disabled={currentPage === firstPage} variant="ghost">
                <PaginationPrevious
                    onClick={() => {
                        const previousPage = currentPage - 1;
                        navigateToPage(previousPage);
                    }}
                />
            </Button>
        </PaginationItem>
    );
}
