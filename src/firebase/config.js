import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Name your server
export const SERVERNAME = "Laser Chat v2.0";
//

const firebaseConfig = {
  // Hello. Please look over the README for full instructions for setting up a chat server.
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { db, auth };
