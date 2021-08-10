import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBTs5bN-KU53f9MZLyOmUaCfjCTpsUh9y0",
    authDomain: "linkedin-clone-yt-4cb29.firebaseapp.com",
    projectId: "linkedin-clone-yt-4cb29",
    storageBucket: "linkedin-clone-yt-4cb29.appspot.com",
    messagingSenderId: "961529805770",
    appId: "1:961529805770:web:cb264df3d28bea85d52d33"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };