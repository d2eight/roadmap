
export function getUserIdFromHeaders({
    headersList,
}: {
    headersList: Headers;
}) {
    const userId = headersList.get('x-user-id');

    if (!userId) {
        return;
    }

    return userId;
}
