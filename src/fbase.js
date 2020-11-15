import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
<<<<<<< HEAD

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
=======
export default firebase.initializeApp(firebaseConfig);
>>>>>>> a8941ebaf35da6dec5083bb81ea524226f5e2ec5

export const authService = firebase.auth();
