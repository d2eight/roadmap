import { createAuthClient } from 'better-auth/react';
import { clientEnv } from 'env/client';

export const authClient = createAuthClient({
  baseURL: clientEnv.BETTER_AUTH_URL,
  fetchOptions: {
    credentials: 'include',
  },
});
