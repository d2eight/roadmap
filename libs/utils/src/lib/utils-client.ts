export function searchParamsToObj(searchParams: URLSearchParams) {
    return Object.fromEntries(searchParams.entries());
}
