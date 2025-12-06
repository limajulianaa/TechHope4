// src/authentication.ts
import { app } from './firebase.js'; // <-- ADICIONADO .js
import { db } from './firebase.js'; // <-- ADICIONADO .js
// Import necessary Firebase Authentication functions for Email/Password
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, } from 'firebase/auth';
// Import Firestore functions
import { doc, setDoc } from 'firebase/firestore'; // <-- ADD THIS LINE: Import Firestore functions
// Get the Auth instance for your Firebase app
export const auth = getAuth(app);
// --- 1. User Registration (Email/Password) ---
// Now also accepts a displayName to save to Firestore
export async function registerUser(email, password, displayName) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // <-- ADD THIS BLOCK: Save additional user info to Firestore -->
        if (user) {
            await setDoc(doc(db, "users", user.uid), {
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
    }
    catch (error) {
        console.error("Error registering user:", error.message);
        throw error;
    }
}
// --- 2. User Sign-in (Email/Password) ---
export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user);
        return userCredential.user;
    }
    catch (error) {
        console.error("Error logging in:", error.message);
        throw error;
    }
}
// --- 3. User Sign-out ---
export async function logoutUser() {
    try {
        await signOut(auth);
        console.log("User logged out successfully.");
    }
    catch (error) {
        console.error("Error logging out:", error.message);
        throw error;
    }
}
// --- 4. Observe Auth State Changes (crucial for knowing if a user is logged in) ---
export function subscribeToAuthChanges(callback) {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        callback(user);
    });
    return unsubscribe;
}
//# sourceMappingURL=authentication.js.map