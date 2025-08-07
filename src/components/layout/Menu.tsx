import { useState } from 'react';
import Logo from '@/components/layout/Logo';
import NavigationMenu from '@/components/core/NavigationMenu/NavigationMenu';
import Link from 'next/link';
import Button from '@/components/core/Button/Button';

const Menu = () => {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  const onNavigationMenuButtonClick = () => {
    setIsNavigationMenuOpen(!isNavigationMenuOpen);
  };

  return (
    <header
      className="flex justify-between items-center lg:px-15 py-6 bg-background-light shadow-md shadow-shadow-medium px-5 h-[100px]"
      role="banner"
    >
      <Link
        href="/"
        role="link"
      >
        <Logo />
      </Link>
      <div>
        <Button
          variant="default"
          size="default"
          onClick={onNavigationMenuButtonClick}
          aria-label="Menu"
        >
          <img
            src="/icons/hamburger_menu.svg"
            alt=""
            className="w-8 cursor-pointer lg:hidden"
          />
        </Button>

        <NavigationMenu
          isNavigationMenuOpen={isNavigationMenuOpen}
          setIsNavigationMenuOpen={setIsNavigationMenuOpen}
        />
      </div>
    </header>
  );
};

export default Menu;
