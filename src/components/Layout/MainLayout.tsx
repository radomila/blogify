'use client';

import Menu from '@/components/Layout/Menu';
import { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import OverlayLoading from '@/components/Components/OverlayLoading/OverlayLoading';

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  const { authLoading } = useAuth();

  if (authLoading) {
    return <OverlayLoading />;
  }

  return (
    <>
      <Menu />
      {children}
    </>
  );
};

export default MainLayout;
