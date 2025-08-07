import { NavigationMenu as RadixNavigationMenu } from 'radix-ui';
import Link from 'next/link';
import { HomeIcon, PersonIcon } from '@radix-ui/react-icons';
import { useAuth } from '@/hooks/useAuth';
import { clsx } from 'clsx';
import UserMenu from '@/components/layouts/UserMenu';
import Button from '@/components/core/Button/Button';

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
        'lg:flex-row lg:items-center lg:gap-5 lg:p-0',
      )}
    >
      {user && (
        <RadixNavigationMenu.Item>
          <p className="flex lg:hidden">{user?.email}</p>
        </RadixNavigationMenu.Item>
      )}
      <RadixNavigationMenu.Item>
        <Link
          href="/public"
          onClick={onNavMenuItemClick}
          className="flex items-start gap-4 transition-colors duration-300 hover:text-primary"
        >
          <HomeIcon className="h-5 w-5" />
          Home
        </Link>
      </RadixNavigationMenu.Item>
      <RadixNavigationMenu.Item>
        <Link
          href="/about"
          onClick={onNavMenuItemClick}
          className="flex items-start gap-4 md:pl-3 transition-colors duration-300 hover:text-primary"
        >
          {' '}
          <PersonIcon className="h-5 w-5" />
          About
        </Link>
      </RadixNavigationMenu.Item>

      {user && (
        <RadixNavigationMenu.Item>
          <Button
            onClick={logout}
            className="flex lg:hidden"
            aria-label="Logout"
          >
            Logout
          </Button>
        </RadixNavigationMenu.Item>
      )}

      {user ? (
        <RadixNavigationMenu.Item>
          <UserMenu />
        </RadixNavigationMenu.Item>
      ) : (
        <>
          <RadixNavigationMenu.Item>
            <Link
              href="/signup"
              onClick={onNavMenuItemClick}
              className="flex items-start text-primary border-2 px-6 py-2 rounded-3xl"
            >
              Sign up
            </Link>
          </RadixNavigationMenu.Item>
          <RadixNavigationMenu.Item>
            <Link
              href="/signin"
              onClick={onNavMenuItemClick}
              className="flex items-center text-white bg-primary px-7 py-2 rounded-3xl"
            >
              Sign in
            </Link>
          </RadixNavigationMenu.Item>
        </>
      )}
    </RadixNavigationMenu.List>
  );
};

export default NavigationMenuList;
