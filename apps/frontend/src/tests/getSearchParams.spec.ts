import getSearchParamsAndParse from '../utils/getSearchParams';
import { searchParamsDefaultValues } from 'shared-constants';

const parse = (params: Record<string, string>) =>
    getSearchParamsAndParse({ searchParams: Promise.resolve(params) });

describe('getSearchParamsAndParse', () => {
    it('keeps valid params', async () => {
        const result = await parse({
            page: '2',
            orderBy: 'updatedAt',
            progressStatus: 'DONE,INWORK',
        });

        expect(result.page).toBe(2);
        expect(result.orderBy).toBe('updatedAt');
        expect(result.progressStatus).toEqual(['DONE', 'INWORK']);
    });

    it.each([
        ['missing params', {}],
        [
            'unknown orderBy',
            { page: '1', orderBy: 'title', progressStatus: 'DONE' },
        ],
        [
            'unknown status',
            { page: '1', orderBy: 'createdAt', progressStatus: 'DONE,FOO' },
        ],
        [
            'non-numeric page',
            { page: 'abc', orderBy: 'createdAt', progressStatus: 'DONE' },
        ],
        [
            'zero page',
            { page: '0', orderBy: 'createdAt', progressStatus: 'DONE' },
        ],
        [
            'negative page',
            { page: '-1', orderBy: 'createdAt', progressStatus: 'DONE' },
        ],
        [
            'fractional page',
            { page: '1.5', orderBy: 'createdAt', progressStatus: 'DONE' },
        ],
    ])('falls back to defaults: %s', async (_, params) => {
        const result = await parse(params);

        expect(result.page).toBe(searchParamsDefaultValues.page);
        expect(result.orderBy).toBe(searchParamsDefaultValues.orderBy);
    });
});
