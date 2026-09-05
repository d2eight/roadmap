import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';

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
