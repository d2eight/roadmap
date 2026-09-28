'use client';

import { Button } from '../ui/button';
import Link from 'next/link';
import { authClient } from '../../lib/auth-client';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'sonner';

export function AuthButtons() {
  const router = useRouter();
  const { data, error } = useContext(AuthContext);

  const handleSignOut = async () => {
    await authClient.signOut();
    if (error) {
      toast.error('Something went wrong, try again.');
    } else {
      toast.info('You have successfully logged out.');
      router.push('auth/sign-in');
    }
  };

  return (
    <>
      {data ? (
        <Button onClick={handleSignOut} variant="destructive">
          Sign Out
        </Button>
      ) : (
        <>
          <Button asChild variant="outline">
            <Link href="/auth/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/sign-up">Sign Up</Link>
          </Button>
        </>
      )}
    </>
  );
}
