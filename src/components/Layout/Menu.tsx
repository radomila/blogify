import { useState } from 'react';
import Logo from '@/components/Layout/Logo';
import NavigationMenu from '@/components/Layout/NavigationMenu/NavigationMenu';
import Link from 'next/link';
import Button from '@/components/Components/Button/Button';

const Menu = () => {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  const onNavigationMenuButtonClick = () => {
    setIsNavigationMenuOpen(!isNavigationMenuOpen);
  };

  return (
    <div
      className="flex justify-between items-center lg:px-15 py-6 bg-[#ffffff] shadow-md shadow-[#A6AAAD] px-5 h-[100px]"
      role="menubar"
      aria-label="Menu"
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
            src="/hamburger_menu.svg"
            alt=""
            className="w-8 cursor-pointer lg:hidden"
          />
        </Button>

        <NavigationMenu
          isNavigationMenuOpen={isNavigationMenuOpen}
          setIsNavigationMenuOpen={setIsNavigationMenuOpen}
        />
      </div>
    </div>
  );
};

export default Menu;
