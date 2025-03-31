'use client';

import { useAuth } from '@/hooks/useAuth';
import * as React from 'react';
import { Menubar } from 'radix-ui';
import { CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

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
          className="flex items-center gap-2 cursor-pointer"
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
          <Menubar.Content className="absolute mt-2 rounded-lg shadow-md border border-gray-200 bg-white font-medium w-[180px] max-w-[180px] p-4">
            <Menubar.Item>
              <button
                onClick={logout}
                className="cursor-pointer"
                role="button"
                aria-label="Logout"
              >
                Logout
              </button>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

export default AccountMenu;
