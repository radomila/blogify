'use client';

import { createContext } from 'react';
import { User } from '@firebase/auth';

export interface AuthContextType {
  user: User | null;
  logout: () => void;
  authLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
