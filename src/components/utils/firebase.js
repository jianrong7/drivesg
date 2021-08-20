import firebase from 'firebase/app'

import "firebase/firestore";
import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDpFt-L1WlMqHLv6GxaW1C2iSjJahYkbuI",
  authDomain: "drivesg-e90f1.firebaseapp.com",
  projectId: "drivesg-e90f1",
  storageBucket: "drivesg-e90f1.appspot.com",
  messagingSenderId: "118850678866",
  appId: "1:118850678866:web:05b1dc92a626d724cbaf8b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

export default db;
export { storage };