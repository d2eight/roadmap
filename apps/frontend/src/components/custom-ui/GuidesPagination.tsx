'use client';

import { useContext, useEffect, useState } from 'react';
import { GuidesContext } from '@/context/GuidesContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useMutation } from '@tanstack/react-query';
import { getGuidesInPagination } from 'utils';
import { AuthContext } from '@/context/AuthContext';

export function GuidesPagination({
  currentPage,
  pageSize,
}: {
  currentPage: number;
  pageSize: number;
}) {
  const { setGuides, guidesCount, setGuidesCount } = useContext(GuidesContext);
  const { data } = useContext(AuthContext);

  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') as string);

  const router = useRouter();
  const pathName = usePathname();

  const params = new URLSearchParams(searchParams);
  const pagesCount = Math.ceil(guidesCount / pageSize);

  useEffect(() => {
    params.set('page', currentPage.toString());
    router.push(`${pathName}/?${params}`);
  }, []);

  async function getGuidesForPage(pageNumber: number) {
    try {
      const [newGuides, newGuidesCount] = await getGuidesInPagination({
        currentPage: pageNumber,
        pageSize: pageSize,
        userId: data?.user.id,
      });

      return {
        newGuides,
        newGuidesCount,
        pageNumber,
      };
    } catch (error) {
      throw Error('Something went wrong');
    }
  }

  const { mutate } = useMutation({
    mutationFn: getGuidesForPage,
    onSuccess: (response) => {
      const { newGuides, newGuidesCount, pageNumber } = response;
      setGuides(newGuides);
      setGuidesCount(newGuidesCount);
      params.set('page', pageNumber.toString());
      router.push(`${pathName}/?${params}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <Pagination>
      <PaginationItem>
        <PaginationPrevious />
      </PaginationItem>
      {Array.from({ length: pagesCount }).map((_, index) => (
        <PaginationItem>
          <PaginationLink
            onClick={async () => {
              mutate(index + 1);
            }}
            isActive={index + 1 === page}
          >
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
}
