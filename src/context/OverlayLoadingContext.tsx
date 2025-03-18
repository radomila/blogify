'use client';

import { createContext, ReactNode, useState } from 'react';
import OverlayLoading from '@/components/Components/OverlayLoading/OverlayLoading';

export interface OverlayLoadingContextType {
  showOverlay: () => void;
  hideOverlay: () => void;
}
interface OverlayLoadingProviderType {
  children: ReactNode;
}

export const OverlayLoadingContext = createContext<OverlayLoadingContextType | undefined>(undefined);

export const OverlayLoadingProvider: React.FC<OverlayLoadingProviderType> = ({ children }) => {
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
