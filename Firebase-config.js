// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCbwIQVMdltK9EnCVP7CYGcn-fJmhdFyHA',
  authDomain: 'baaaah-63710.firebaseapp.com',
  projectId: 'baaaah-63710',
  storageBucket: 'baaaah-63710.appspot.com',
  messagingSenderId: '1017353938146',
  appId: '1:1017353938146:web:89fed4c1b8ba276075aabb',
  measurementId: 'G-PR19MRFG1W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
