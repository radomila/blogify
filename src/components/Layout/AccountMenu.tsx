'use client';

import { useAuth } from '@/hooks/useAuth';
import * as React from 'react';
import { Menubar } from 'radix-ui';
import { CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import Button from '@/components/Components/Button/Button';

const AccountMenu = () => {
  const { user, logout } = useAuth();
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleAccountMenu = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <Menubar.Root role="menuitem">
      <Menubar.Menu>
        <Menubar.Trigger
          onClick={handleToggleAccountMenu}
          className="hidden lg:flex items-center gap-2 cursor-pointer"
        >
          <p aria-label="User account email address">{user?.email}</p>
          {isOpened ? (
            <CaretUpIcon
              className="h-7 w-7"
              role="img"
              aria-label="Caret up icon"
            />
          ) : (
            <CaretDownIcon
              className="h-7 w-7"
              role="img"
              aria-label="Caret down icon"
            />
          )}
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content className="absolute mt-2 rounded-sm shadow-md border border-gray-200 bg-white font-medium w-[180px] max-w-[180px] p-4">
            <Menubar.Item>
              <Button
                variant="default"
                size="default"
                onClick={logout}
                aria-label="Logout"
              >
                Logout
              </Button>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

export default AccountMenu;
