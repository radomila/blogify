'use client';

import { NavigationMenu as RadixNavigationMenu } from 'radix-ui';
import NavigationMenuList from '@/components/Layout/NavigationMenu/NavigationMenuList';
import { clsx } from 'clsx';
import Button from '@/components/Components/Button/Button';

interface Props {
  isNavigationMenuOpen: boolean;
  setIsNavigationMenuOpen: (isNavigationMenuOpen: boolean) => void;
}

const NavigationMenu = ({ isNavigationMenuOpen, setIsNavigationMenuOpen }: Props) => {
  return (
    <RadixNavigationMenu.Root
      role="navigation"
      aria-label="Navigation"
      className={clsx(
        'fixed top-0 left-0 w-full h-full bg-white z-2 transition-transform duration-300 ease-in-out flex flex-col',
        isNavigationMenuOpen ? 'translate-x-0' : '-translate-x-full',
        'lg:static lg:translate-x-0 lg:flex lg:w-auto lg:h-auto lg:bg-transparent',
      )}
    >
      <Button
        onClick={() => setIsNavigationMenuOpen(false)}
        className="absolute top-10 right-5 lg:hidden"
        aria-label="Close menu"
      >
        <img
          src="/close_public.svg"
          alt=""
          className="w-6 cursor-pointer lg:hidden"
        />
      </Button>
      <NavigationMenuList setIsNavigationMenuOpen={setIsNavigationMenuOpen} />
    </RadixNavigationMenu.Root>
  );
};

export default NavigationMenu;
