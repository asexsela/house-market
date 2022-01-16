import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN9zHvqejGj62zoTBoNKcwukAmJKZUXFo",
  authDomain: "house-marketplace-app-57b90.firebaseapp.com",
  projectId: "house-marketplace-app-57b90",
  storageBucket: "house-marketplace-app-57b90.appspot.com",
  messagingSenderId: "769640614132",
  appId: "1:769640614132:web:c3194afae29459539cb6a1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()