import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function getUserIdFromHeaders() {
  const headersList = await headers();
  const userId = headersList.get('x-user-id');
  if (!userId) {
    redirect('/auth/sign-in');
  }

  return userId;
}
