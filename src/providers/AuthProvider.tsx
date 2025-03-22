'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from '@firebase/auth';
import { AuthContext } from '@/context/AuthContext';
import { firebaseAuth } from '@/clients/firebase';
import { useLocalStorage } from 'usehooks-ts';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [storedUser, setStoredUser, removeValue] = useLocalStorage<User | null>('user', null);
  const [user, setUser] = useState<User | null>(storedUser);
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
      setStoredUser(user);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(firebaseAuth);
    setUser(null);
    removeValue();
  };

  return <AuthContext.Provider value={{ user, logout, authLoading }}>{children}</AuthContext.Provider>;
};
