// src/firebase.ts

// Import core Firebase App initialization function and its type
import { initializeApp, FirebaseApp } from 'firebase/app';

// Import Firebase Authentication functions and its type
import { getAuth, Auth } from 'firebase/auth';

// Import Cloud Firestore functions and its type
import { getFirestore, Firestore } from 'firebase/firestore';

// Your Firebase project configuration
// This object connects your web app to your specific Firebase project
const firebaseConfig = {
  apiKey: "AIzaSyA4tgSTXHNhr5rcT19nm7lvm_34W31Svcw",
  authDomain: "academy-79749.firebaseapp.com",
  projectId: "academy-79749",
  storageBucket: "academy-79749.appspot.com",
  messagingSenderId: "84837784904", // Your Project Number for FCM
  appId: "1:84837784904:web:632da212f3f720e1f7a77d", // Your App ID for this web app
  measurementId: "G-514215003" // Your Google Analytics Measurement ID
};

// Initialize the Firebase app with your configuration
// This is the core application instance that other Firebase services will use
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
// This creates an Auth instance tied to your Firebase app
export const auth: Auth = getAuth(app);

// Initialize Cloud Firestore
// This creates a Firestore instance tied to your Firebase app
export const db: Firestore = getFirestore(app);

// >>>>>>>>>>>>>> THIS IS THE MISSING LINE <<<<<<<<<<<<<<
// Export the initialized Firebase App instance itself
// This allows other modules (like authentication.ts) to import and use the app object
export { app };
// >>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<

// You can add other Firebase services here if you initialize them.
// Example for Cloud Storage:
// import { getStorage, FirebaseStorage } from 'firebase/storage';
// export const storage: FirebaseStorage = getStorage(app);
