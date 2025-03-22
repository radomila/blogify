import { addDoc, collection, doc, getDoc, getDocs, orderBy, query } from '@firebase/firestore';
import { firebaseDb } from '@/clients/firebase';
import { Post } from '@/types/posts';
import { serverTimestamp } from '@firebase/database';

const COLLECTION_NAME = 'posts';

export const getPosts = async (): Promise<Post[]> => {
  const postsRef = collection(firebaseDb, COLLECTION_NAME);
  const q = query(postsRef, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
    createdAt: doc.data().createdAt?.toDate(),
    updatedAt: doc.data().updatedAt?.toDate(),
  })) as Post[];
};

export const getPost = async (id: string): Promise<Post> => {
  const docRef = doc(firebaseDb, COLLECTION_NAME, id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error('Post not found');
  }

  const data = docSnap.data();
  return {
    id: docSnap.id,
    ...data,
    createdAt: data.createdAt?.toDate(),
    updatedAt: data.updatedAt?.toDate(),
  } as Post;
};

export const createPost = async (post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Promise<Post> => {
  const postsRef = collection(firebaseDb, COLLECTION_NAME);
  const docRef = await addDoc(postsRef, {
    ...post,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return await getPost(docRef.id);
};
