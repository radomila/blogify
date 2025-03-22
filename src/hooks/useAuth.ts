import { useContext } from 'react';
import { AuthContext, AuthContextType } from '@/context/AuthContext';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth musí být použit uvnitř AuthProvider');
  }
  return context;
};
