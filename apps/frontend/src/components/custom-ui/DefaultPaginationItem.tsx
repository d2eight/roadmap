'use client'

import { PaginationItem, PaginationLink } from '@/components/ui/pagination';

export function DefaultPaginationItem({
  thisPage,
  navigateToPage,
  currentPage,
}: {
  thisPage: number;
  navigateToPage: (page: number) => void;
  currentPage: number;
}) {
  return (
    <PaginationItem>
      <PaginationLink
        onClick={() => {
          navigateToPage(thisPage);
        }}
        isActive={thisPage === currentPage}
      >
        {thisPage}
      </PaginationLink>
    </PaginationItem>
  );
}
