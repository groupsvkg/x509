'use client';

import { UserButton } from '@clerk/nextjs';
import { Menu } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';
import MobileSidebar from '@/components/mobile-sidebar';

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
});

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              'hidden md:block text-xl md:text-3xl font-bold text-primary',
              font.className
            )}
          >
            x509
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
