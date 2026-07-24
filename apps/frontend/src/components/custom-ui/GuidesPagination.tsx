'use client';

import { useContext, useEffect, useState } from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { PaginationContext } from '@/context/PaginationContext';
import { GuidesContext } from '@/context/GuidesContext';
import { useRouter, useSearchParams } from 'next/navigation';

export function GuidesPagination({pageSize}: {pageSize: number}) {
  const { guidesCount } = useContext(GuidesContext);

  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = searchParams.get('page') ?? '1';
  const params = new URLSearchParams(searchParams);
  const pagesCount = Math.ceil(guidesCount / pageSize);

  function navigateToPage(page: string) {
    params.set('page', page);
    router.push(`/guides/?${params}`);
  }

  return (
    <Pagination>
      <PaginationItem>
        <PaginationPrevious />
      </PaginationItem>
      {Array.from({ length: pagesCount }).map((_, index) => (
        <PaginationItem key={index}>
          <PaginationLink
            onClick={() => {
              navigateToPage((index + 1).toString());
            }}
            isActive={index + 1 === parseInt(currentPage)}
          >
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
}
