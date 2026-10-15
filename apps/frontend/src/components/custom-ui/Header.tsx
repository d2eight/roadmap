import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { AuthButtons } from './AuthButtons';

export async function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-[70px] bg-white shadow-md z-9">
      <div className="px-[20px] flex items-center justify-between h-full">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
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
        <div className="flex items-center gap-2">{/*<AuthButtons />*/}</div>
      </div>
    </header>
  );
}
