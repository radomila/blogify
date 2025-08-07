'use client';

import { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Menu from '@/components/layout/Menu';
import OverlayLoadingWrapper from '@/components/core/OverlayLoading/OverlayLoadingWrapper';
import '../../app/globals.css';

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const { authLoading } = useAuth();

  if (authLoading) {
    return <OverlayLoadingWrapper />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Menu />
      <div className="flex-grow mt-10 mb-10">{children}</div>
    </div>
  );
};

export default AppLayout;
