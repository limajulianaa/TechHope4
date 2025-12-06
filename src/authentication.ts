// src/authentication.ts
import { app } from './firebase.js'; // <-- ADICIONADO .js
import { db } from './firebase.js'; // <-- ADICIONADO .js
// Import necessary Firebase Authentication functions for Email/Password
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User, // Type for Firebase User object
  Auth, // Type for Auth instance
} from 'firebase/auth';

// Import Firestore functions
import { doc, setDoc } from 'firebase/firestore'; // <-- ADD THIS LINE: Import Firestore functions

// Get the Auth instance for your Firebase app
export const auth: Auth = getAuth(app);

// --- 1. User Registration (Email/Password) ---
// Now also accepts a displayName to save to Firestore
export async function registerUser(email: string, password: string, displayName: string): Promise<User | null> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // <-- ADD THIS BLOCK: Save additional user info to Firestore -->
    if (user) {
      await setDoc(doc(db, "users", user.uid), { // Create a document in 'users' collection with UID as ID
        displayName: displayName,
        email: user.email,
        createdAt: new Date(),
        // Add any other profile fields you need
      });
      console.log("User profile saved to Firestore for UID:", user.uid);
    }
    // <-- END ADDITION -->

    console.log("User registered:", user);
    return user;
  } catch (error: any) {
    console.error("Error registering user:", error.message);
    throw error;
  }
}

// --- 2. User Sign-in (Email/Password) ---
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

// --- 3. User Sign-out ---
export async function logoutUser(): Promise<void> {
  try {
    await signOut(auth);
    console.log("User logged out successfully.");
  } catch (error: any) {
    console.error("Error logging out:", error.message);
    throw error;
  }
}

// --- 4. Observe Auth State Changes (crucial for knowing if a user is logged in) ---
export function subscribeToAuthChanges(callback: (user: User | null) => void): () => void {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    callback(user);
  });
  return unsubscribe;
}
