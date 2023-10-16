'use client';

import { BarChart, Compass, Layout, List } from 'lucide-react';
import React from 'react';
import SidebarItem from './sidebar-item';
import { usePathname } from 'next/navigation';

const guestRoutes = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: Compass,
    label: 'Browse',
    href: '/search',
  },
];

const adminRoutes = [
  {
    icon: List,
    label: 'Courses',
    href: '/admin/courses',
  },
  {
    icon: BarChart,
    label: 'Analytics',
    href: '/admin/analytics',
  },
];

const SidebarRoutes = () => {
  const pathName = usePathname();

  const isAdminPage = pathName?.includes('/admin');
  const routes = isAdminPage ? adminRoutes : guestRoutes;

  return (
    <div className='flex w-full flex-col'>
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
