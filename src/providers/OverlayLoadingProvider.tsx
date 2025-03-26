'use client';

import { FC, ReactNode, useState } from 'react';
import OverlayLoading from '@/components/Components/Loading/OverlayLoading';
import { OverlayLoadingContext } from '@/context/OverlayLoadingContext';

interface OverlayLoadingProviderType {
  children: ReactNode;
}

export const OverlayLoadingProvider: FC<OverlayLoadingProviderType> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const showOverlay = () => setLoading(true);

  const hideOverlay = () => setLoading(false);

  return (
    <OverlayLoadingContext.Provider value={{ showOverlay, hideOverlay }}>
      {loading && <OverlayLoading />}
      {children}
    </OverlayLoadingContext.Provider>
  );
};
