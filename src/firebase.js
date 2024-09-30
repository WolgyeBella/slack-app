// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB47LFlG8cQJyuGAfTmTto1a-ck1sm8czA",
  authDomain: "myfirebase-975d8.firebaseapp.com",
  databaseURL:
    " https://myfirebase-975d8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myfirebase-975d8",
  storageBucket: "myfirebase-975d8.appspot.com",
  messagingSenderId: "793460782522",
  appId: "1:793460782522:web:60d6f736a38ef46520d983",
  measurementId: "G-BF41BR94SE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

export const db = getDatabase(app);

// export const analytics = getAnalytics(app);
