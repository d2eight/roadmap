import { daysAmountSchema } from 'shared-types';

export function searchParamsToObj(searchParams: URLSearchParams) {
    return Object.fromEntries(searchParams.entries());
}

export function handleDaysAmount(daysAmount: number | string) {
    const daysAmountParsed = daysAmountSchema.safeParse(daysAmount);

    if (!daysAmountParsed.success) {
        return 15;
    }

    return daysAmountParsed.data;
}
