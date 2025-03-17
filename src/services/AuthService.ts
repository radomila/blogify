import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { firebaseAuth } from '@/clients/firebase';

export const register = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const signIn = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
};
