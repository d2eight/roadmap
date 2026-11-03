'use client';

import { JSX } from 'react';
import { Pagination } from '../ui/pagination';
import { useGuidesContext } from '../../context/GuidesContext';
import { useRouter } from 'next/navigation';
import { EllipsisPaginationItem } from './EllipsisPaginationItem';
import { DefaultPaginationItem } from './DefaultPaginationItem';
import { PreviousPagePaginationItem } from './PreviousPagePaginationItem';
import { NextPagePaginationItem } from './NextPagePaginationItem';
import { useParamsContext } from '../../context/ParamsContext';
import { pageSize } from '../../constants/constants';

export function GuidesPagination() {
    const { guidesCount } = useGuidesContext();
    const { searchParams } = useParamsContext();

    const router = useRouter();
    const currentPage = Number(searchParams.get('page') ?? 1);
    const pagesCount = Math.ceil(guidesCount / pageSize);
    const firstPage = 1;
    const lastPage = pagesCount;
    const params = new URLSearchParams(searchParams);

    function navigateToPage(page: number) {
        params.set('page', page.toString());
        router.push(`/guides/?${params}`);
    }

    function generatePaginationArray(): ('...' | number)[] {
        if (pagesCount <= 5) {
            return Array.from({ length: pagesCount }, (_, index) => index + 1);
        }

        const paginationArray: number[] = Array(5);
        paginationArray[0] = firstPage;
        paginationArray[4] = lastPage;

        if (currentPage === firstPage) {
            for (let i = 1; i <= 3; i++) {
                paginationArray[i] = paginationArray[i - 1] + 1;
            }
            return generatePaginationDots(paginationArray);
        } else if (currentPage === lastPage) {
            for (let i = 3; i >= 1; i--) {
                paginationArray[i] = paginationArray[i + 1] - 1;
            }
            return generatePaginationDots(paginationArray);
        }

        const prevPage = currentPage - 1;
        const nextPage = currentPage + 1;

        if (prevPage !== firstPage && nextPage !== lastPage) {
            paginationArray[1] = prevPage;
            paginationArray[2] = currentPage;
            paginationArray[3] = nextPage;
        } else if (prevPage === firstPage) {
            paginationArray[1] = currentPage;
            paginationArray[2] = currentPage + 1;
            paginationArray[3] = currentPage + 2;
        } else if (nextPage === lastPage) {
            paginationArray[1] = currentPage - 2;
            paginationArray[2] = currentPage - 1;
            paginationArray[3] = currentPage;
        }

        return generatePaginationDots(paginationArray);
    }

    function generatePaginationDots(paginationArray: ('...' | number)[]) {
        const afterFirstPage = paginationArray[1] as number;
        const beforeLastPage = paginationArray[3] as number;

        if (afterFirstPage - firstPage >= 2) {
            paginationArray.splice(
                paginationArray.indexOf(firstPage) + 1,
                0,
                '...',
            );
        }

        if (lastPage - beforeLastPage >= 2) {
            paginationArray.splice(paginationArray.indexOf(lastPage), 0, '...');
        }

        return paginationArray;
    }

    function generatePaginationItems() {
        const paginationArray: ('...' | number)[] = generatePaginationArray();

        const paginationItemsArray: JSX.Element[] = paginationArray.map(
            (item, index) => {
                if (item === '...') {
                    return <EllipsisPaginationItem key={index} />;
                } else {
                    return (
                        <DefaultPaginationItem
                            key={index}
                            thisPage={item}
                            navigateToPage={navigateToPage}
                            currentPage={currentPage}
                        />
                    );
                }
            },
        );

        return paginationItemsArray;
    }

    return (
        <Pagination className={`${guidesCount ? 'flex' : 'hidden'} mt-auto`}>
            <PreviousPagePaginationItem
                navigateToPage={navigateToPage}
                currentPage={currentPage}
                firstPage={firstPage}
            />
            {generatePaginationItems()}
            <NextPagePaginationItem
                navigateToPage={navigateToPage}
                currentPage={currentPage}
                lastPage={lastPage}
            />
        </Pagination>
    );
}
