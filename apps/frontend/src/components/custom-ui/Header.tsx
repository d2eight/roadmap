// 'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { authClient } from '../../lib/auth-client';
import { headers } from 'next/headers';
import { AuthButtons } from './AuthButtons';
import { getUserIdFromHeaders } from '@/utils/getUserId';
import { getSession } from 'utils';

export async function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-[70px] bg-white shadow-md z-0">
      <div className="px-[20px] flex items-center justify-between h-full">
        <img alt="logo" />
        <div>
          <Button asChild variant="link">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/prompting">Prompting</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/guides">Dashboard</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}
