import { authClient } from '@/lib/auth-client';
import { Result } from 'better-result';
import { userSignInSchemaType, userSignUpSchemaType } from 'shared-types';

export async function signInWithEmailAndPassword(data: userSignInSchemaType) {
  const response = await authClient.signIn.email({
    email: data.email,
    password: data.password,
  });

  if (response.error) {
    return Result.err(response.error);
  }

  return Result.ok(response.data);
}

export async function signUpWithEmailAndPassword(data: userSignUpSchemaType) {
  const response = await authClient.signUp.email({
    name: data.name,
    email: data.email,
    password: data.password,
  });

  if (response.error) {
    return Result.err(response.error);
  }

  return Result.ok(response.data);
}
