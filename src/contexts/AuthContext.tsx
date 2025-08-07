'use client';

import { createContext } from 'react';
import { User } from '@firebase/auth';

export interface AuthContextType {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => void;
  authLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
