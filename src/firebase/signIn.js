import { auth, db } from "./config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

export const signIn = async () => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let currentEmail = localStorage.getItem("emailForSignIn");
    await signInWithEmailLink(auth, currentEmail, window.location.href)
      .then(async (result) => {
        const docSnap = await getDoc(doc(db, "users", result.user.uid));
        if (!docSnap.exists()) {
          setDoc(doc(db, "users", result.user.uid), {
            name: "New User",
            status: "Hello",
            email: currentEmail,
            id: result.user.uid,
          });
        }
        localStorage.removeItem("emailForSignIn");
      })
      .catch((error) => error);
  }
};
