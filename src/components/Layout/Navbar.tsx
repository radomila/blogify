'use client';

import * as React from 'react';
import { NavigationMenu } from 'radix-ui';
import { HomeIcon, PersonIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { useAuth } from '@/hooks/useAuth';
import AccountMenu from '@/components/Layout/AccountMenu';
import Link from 'next/link';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex items-center gap-14 text-md font-medium tracking-wide">
        <NavigationMenu.Item>
          <Link
            href="/"
            className="flex items-start gap-3 text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link
            href="/about"
            className="flex items-start gap-3 text-gray-600 transition-colors duration-300 hover:text-blue-500"
          >
            {' '}
            <PersonIcon className="h-5 w-5" />
            About
          </Link>
        </NavigationMenu.Item>
        {user ? (
          <AccountMenu />
        ) : (
          <NavigationMenu.Item className="flex items-center gap-2 text-white bg-blue-500 px-4 py-2 rounded-3xl uppercase">
            <ArrowRightIcon className="h-5 w-5" />
            <Link href="/signin">Sign In</Link>
          </NavigationMenu.Item>
        )}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Navbar;
