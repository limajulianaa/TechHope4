import { app } from './firebase.js';
import { db } from './firebase.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export const auth = getAuth(app);

export async function registerUser(email, password, displayName) {
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
    }
    catch (error) {
        console.error("Error registering user:", error.message);
        throw error;
    }
}

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

export function subscribeToAuthChanges(callback) {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        callback(user);
    });
    return unsubscribe;
}
