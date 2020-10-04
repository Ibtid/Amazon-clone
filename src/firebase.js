import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO5u_j6PkS2xLA3OJG5IMfIUFvF1WIQfo",
  authDomain: "e-clone-596cb.firebaseapp.com",
  databaseURL: "https://e-clone-596cb.firebaseio.com",
  projectId: "e-clone-596cb",
  storageBucket: "e-clone-596cb.appspot.com",
  messagingSenderId: "842891239375",
  appId: "1:842891239375:web:f44ff13d7df98cdb913cba",
  measurementId: "G-ZFEZM317XC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
