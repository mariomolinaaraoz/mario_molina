import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyAb9v9dFhP5MvgWkv0fiKIiLINzyV_9D9U",
    authDomain: "mariomolinaaraozcom-datauser.firebaseapp.com",
    projectId: "mariomolinaaraozcom-datauser",
    storageBucket: "mariomolinaaraozcom-datauser.appspot.com",
    messagingSenderId: "275968871269",
    appId: "1:275968871269:web:51b502909d6e7b4455af8c",
    measurementId: "G-QWY60C9RFQ"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




