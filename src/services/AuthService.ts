import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from '@firebase/auth';
import { firebaseAuth } from '@/clients/firebase';

export const signUp = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const signIn = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const logOut = async () => {
  return await signOut(firebaseAuth);
};

export const subscribeToAuthChanges = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(firebaseAuth, callback);
};
