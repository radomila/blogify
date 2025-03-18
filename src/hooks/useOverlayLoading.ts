import { useContext } from 'react';
import { OverlayLoadingContext, OverlayLoadingContextType } from '@/context/OverlayLoadingContext';

export const useOverlayLoading = (): OverlayLoadingContextType => {
  const context = useContext(OverlayLoadingContext);
  if (!context) {
    throw new Error('useOverlayLoading must be used within an OverlayLoadingProvider');
  }
  return context;
};
