import { app } from './firebase.js';
import { db } from './firebase.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  Auth,
} from 'firebase/auth';

import { doc, setDoc } from 'firebase/firestore';

export const auth: Auth = getAuth(app);

export async function registerUser(email: string, password: string, displayName: string): Promise<User | null> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user) {
      await setDoc(doc(db, "users", user.uid), {
        displayName: displayName,
        email: user.email,
        createdAt: new Date(),
      });
      console.log("User profile saved to Firestore for UID:", user.uid);
    }

    console.log("User registered:", user);
    return user;
  } catch (error: any) {
    console.error("Error registering user:", error.message);
    throw error;
  }
}

export async function loginUser(email: string, password: string): Promise<User | null> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    return userCredential.user;
  } catch (error: any) {
    console.error("Error logging in:", error.message);
    throw error;
  }
}

export async function logoutUser() {
  try {
    await signOut(auth);
    console.log("User logged out successfully.");
  } catch (error: any) {
    console.error("Error logging out:", error.message);
    throw error;
  }
}

export function subscribeToAuthChanges(callback: (user: User | null) => void): () => void {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    callback(user);
  });
  return unsubscribe;
}
