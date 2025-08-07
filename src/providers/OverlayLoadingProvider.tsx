'use client';

import { FC, ReactNode, useState } from 'react';
import OverlayLoadingWrapper from '@/components/core/OverlayLoading/OverlayLoadingWrapper';
import { OverlayLoadingContext } from '@/contexts/OverlayLoadingContext';

interface OverlayLoadingProviderType {
  children: ReactNode;
}

export const OverlayLoadingProvider: FC<OverlayLoadingProviderType> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const showOverlay = () => setLoading(true);

  const hideOverlay = () => setLoading(false);

  return (
    <OverlayLoadingContext.Provider value={{ showOverlay, hideOverlay }}>
      {loading && <OverlayLoadingWrapper />}
      {children}
    </OverlayLoadingContext.Provider>
  );
};
