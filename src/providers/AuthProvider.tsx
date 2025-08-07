'use client';

import { ReactNode, useEffect, useState } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { signUp, signIn, logOut, subscribeToAuthChanges } from '@/services/AuthService';
import { useLocalStorage } from 'usehooks-ts';
import { User } from '@firebase/auth';
import { useError } from '@/hooks/useError';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [storedUser, setStoredUser, removeValue] = useLocalStorage<User | null>('user', null);
  const [user, setUser] = useState<User | null>(storedUser);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const { setError } = useError();

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      setUser(user);
      setStoredUser(user);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignUp = async (email: string, password: string) => {
    setAuthLoading(true);
    try {
      const signedUpUser = await signUp(email, password);
      setUser(signedUpUser.user);
      setStoredUser(signedUpUser.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown sign up error');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    setAuthLoading(true);
    try {
      const signedInUser = await signIn(email, password);
      setUser(signedInUser.user);
      setStoredUser(signedInUser.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown sign in error');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
      setUser(null);
      removeValue();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown logout error');
    }
  };

  return <AuthContext.Provider value={{ user, signUp: handleSignUp, signIn: handleSignIn, logout: handleLogout, authLoading }}>{children}</AuthContext.Provider>;
};
