import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Name your server
export const SERVERNAME = "Laser Chat v2.0.1";
//

const firebaseConfig = {
  // Hello. Please look over the README for full instructions for setting up a chat server.
  apiKey: "AIzaSyDlROHrhsayH2xRbWtCqHbnL4jostuCdzg",
  authDomain: "project-laser-36c53.firebaseapp.com",
  databaseURL: "https://project-laser-36c53-default-rtdb.firebaseio.com",
  projectId: "project-laser-36c53",
  storageBucket: "project-laser-36c53.appspot.com",
  messagingSenderId: "950500432563",
  appId: "1:950500432563:web:5258c1c13516aba0616ec6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { db, auth };
