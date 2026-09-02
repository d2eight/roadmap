export function searchParamsToObj(searchParams) {
  return Object.fromEntries(searchParams.entries());
}
