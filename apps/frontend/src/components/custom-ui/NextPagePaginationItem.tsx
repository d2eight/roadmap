'use client';

import { PaginationItem, PaginationNext } from '../ui/pagination';
import { Button } from '../ui/button';

export function NextPagePaginationItem({
    navigateToPage,
    currentPage,
    lastPage,
    className = '',
}: {
    navigateToPage: (page: number) => void;
    currentPage: number;
    lastPage: number;
    className?: string;
}) {
    return (
        <PaginationItem className={`${className} list-none`}>
            <Button disabled={currentPage === lastPage} variant="ghost">
                <PaginationNext
                    onClick={() => {
                        const nextPage = currentPage + 1;
                        navigateToPage(nextPage);
                    }}
                />
            </Button>
        </PaginationItem>
    );
}
