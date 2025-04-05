import { NavigationMenu as RadixNavigationMenu } from 'radix-ui';
import Link from 'next/link';
import { HomeIcon, PersonIcon } from '@radix-ui/react-icons';
import AccountMenu from '@/components/Layout/AccountMenu';
import * as React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { clsx } from 'clsx';
import Button from '@/components/Components/Button/Button';

interface Props {
  setIsNavigationMenuOpen: (isOpen: boolean) => void;
}

const NavigationMenuList = ({ setIsNavigationMenuOpen }: Props) => {
  const { user, logout } = useAuth();

  const onNavMenuItemClick = () => {
    setIsNavigationMenuOpen(false);
  };
  return (
    <RadixNavigationMenu.List
      className={clsx(
        'fixed top-0 left-0 w-[85%] h-full bg-white z-2',
        'flex flex-col items-start justify-start gap-10 pl-10 pt-30',
        'text-md font-medium tracking-wide',

        'lg:static lg:w-auto lg:h-auto lg:bg-transparent',
        'lg:flex-row lg:items-center lg:p-0',
      )}
    >
      <p
        className="lg:hidden"
        aria-label="User account email address"
      >
        {user?.email}
      </p>
      <ul className="flex lg:flex-row flex-col lg:items-center items-start gap-10">
        <RadixNavigationMenu.Item>
          <Link
            href="/"
            onClick={onNavMenuItemClick}
            className="flex items-start gap-3 transition-colors duration-300 hover:text-[#0045DB]"
          >
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
        </RadixNavigationMenu.Item>
        <RadixNavigationMenu.Item>
          <Link
            href="/about"
            onClick={onNavMenuItemClick}
            className="flex items-start gap-3 transition-colors duration-300 hover:text-[#0045DB]"
          >
            {' '}
            <PersonIcon className="h-5 w-5" />
            About
          </Link>
        </RadixNavigationMenu.Item>
      </ul>
      {user && (
        <Button
          onClick={logout}
          className="lg:hidden"
          aria-label="Logout"
        >
          Logout
        </Button>
      )}

      {user ? (
        <AccountMenu />
      ) : (
        <ul className="flex lg:flex-row flex-col items-center gap-4 py-1">
          <RadixNavigationMenu.Item>
            <Link
              href="/signup"
              onClick={onNavMenuItemClick}
              className="flex items-start gap-3 text-[#0045DB] border-2 px-6 py-2 rounded-3xl"
            >
              Sign up
            </Link>
          </RadixNavigationMenu.Item>
          <RadixNavigationMenu.Item>
            <Link
              href="/signin"
              onClick={onNavMenuItemClick}
              className="flex items-center gap-2 text-white bg-[#0045DB] px-7 py-2 rounded-3xl"
            >
              Sign in
            </Link>
          </RadixNavigationMenu.Item>
        </ul>
      )}
    </RadixNavigationMenu.List>
  );
};

export default NavigationMenuList;
