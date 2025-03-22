'use client';

import { createContext } from 'react';

export interface OverlayLoadingContextType {
  showOverlay: () => void;
  hideOverlay: () => void;
}

export const OverlayLoadingContext = createContext<OverlayLoadingContextType | undefined>(undefined);
