'use client';

import Menu from '@/components/Layout/Menu';
import { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import OverlayLoading from '@/components/Components/Loading/OverlayLoading';

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  const { authLoading } = useAuth();

  if (authLoading) {
    return <OverlayLoading />;
  }

  return (
    <div role="main">
      <Menu />
      {children}
    </div>
  );
};

export default MainLayout;
