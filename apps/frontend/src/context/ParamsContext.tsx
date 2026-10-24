'use client';

import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useMemo,
} from 'react';
import {
    ReadonlyURLSearchParams,
    usePathname,
    useRouter,
    useSearchParams,
} from 'next/navigation';
import { paramsSchema, paramsSchemaType, QueryKeyType } from 'shared-types';
import { searchParamsDefaultValues } from 'shared-constants';
import { getDefaultSearchParams } from '@/utils/getDefaultSearchParams';
import { searchParamsToObj } from 'utils/client';

export const ParamsContext = createContext<{
    searchParams: ReadonlyURLSearchParams;
    parsedParams: paramsSchemaType;
    queryKey: QueryKeyType;
    resetParams: () => void;
    defaultParams: URLSearchParams;
} | null>(null);

export const useParamsContext = () => {
    const context = useContext(ParamsContext);

    if (!context) {
        throw new Error('ParamsContext not set');
    }

    return context;
};

function getParsedParams(searchParams: URLSearchParams): paramsSchemaType {
    const result = paramsSchema.safeParse(searchParamsToObj(searchParams));

    if (!result.success) {
        return searchParamsDefaultValues;
    }

    return result.data;
}

export function ParamsContextProvider({ children }: { children: ReactNode }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const defaultParams = useMemo(() => {
        return getDefaultSearchParams({
            searchParams,
        });
    }, []);

    const resetParams = useCallback(() => {
        const isNotDefaultSearchParams =
            defaultParams.toString() !== searchParams.toString();

        if (isNotDefaultSearchParams) {
            return router.replace(`${pathname}?${defaultParams}`);
        }
    }, [searchParams, router, pathname]);

    const parsedParams = useMemo(
        () => getParsedParams(searchParams),
        [searchParams],
    );

    const queryKey: QueryKeyType = [
        'guides',
        parsedParams.page,
        parsedParams.orderBy,
        parsedParams.progressStatus,
    ];

    return (
        <ParamsContext
            value={{
                searchParams,
                parsedParams,
                queryKey,
                resetParams,
                defaultParams,
            }}
        >
            {children}
        </ParamsContext>
    );
}
