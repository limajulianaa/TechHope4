import { initializeApp, FirebaseApp } from 'firebase/app';

import { getAuth, Auth } from 'firebase/auth';

import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4tgSTXHNhr5rcT19nm7lvm_34W31Svcw",
  authDomain: "academy-79749.firebaseapp.com",
  projectId: "academy-79749",
  storageBucket: "academy-79749.appspot.com",
  messagingSenderId: "84837784904",
  appId: "1:84837784904:web:632da212f3f720e1f7a77d",
  measurementId: "G-514215003"
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);

export const db: Firestore = getFirestore(app);

export { app };
