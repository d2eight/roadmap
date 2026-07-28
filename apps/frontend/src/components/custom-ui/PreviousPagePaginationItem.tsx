'use client'

import {
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';

export function PreviousPagePaginationItem({
  navigateToPage,
  currentPage,
  firstPage,
}: {
  navigateToPage: (page: number) => void;
  currentPage: number;
  firstPage: number;
}) {
  return (
    <PaginationItem>
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