import { useState } from "react";
import { SERVERNAME, auth, db } from "../firebase/config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function Register() {
  const [loading, setLoading] = useState(true);

  const register = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      const docSnap = await getDoc(doc(db, "users", result.user.uid));
      if (!docSnap.exists()) {
        setDoc(doc(db, "users", result.user.uid), {
          name: "New User",
          status: "Hello",
          id: result.user.uid,
          changedName: false,
        });
        console.log(result);
      }
    });
  };

  setInterval(() => setLoading(false), 3000);

  if (loading) {
    return (
      <div className="registeration">
        <h1>Loading...</h1>
        <img
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          width="100"
          alt="loading circle that rotates"
        />
      </div>
    );
  } else {
    return (
      <div className="registeration">
        <h1>Welcome to {SERVERNAME}</h1>
        <button onClick={register}>Sign in with your Google Account.</button>
      </div>
    );
  }
}
