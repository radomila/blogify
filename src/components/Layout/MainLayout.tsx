'use client';

import Menu from '@/components/Layout/Menu';
import { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import OverlayLoading from '@/components/Components/Loading/OverlayLoading';
import '../../app/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  const { authLoading } = useAuth();

  if (authLoading) {
    return <OverlayLoading />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Menu />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default MainLayout;
