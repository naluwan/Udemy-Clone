'use client';

import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

const NavbarRoutes = () => {
  const pathName = usePathname();

  const isTeacherPage = pathName?.startsWith('/admin');
  const isPlayerPage = pathName?.startsWith('/chapter');

  return (
    <div className='ml-auto flex gap-x-2'>
      {isTeacherPage || isPlayerPage ? (
        <Link href='/'>
          <Button size='sm' variant='ghost'>
            <LogOut className='mr-2 h-4 w-4' />
            離開
          </Button>
        </Link>
      ) : (
        <Link href='/admin/courses'>
          <Button size='sm' variant='ghost'>
            管理者後台
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default NavbarRoutes;
