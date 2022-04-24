import { db, auth } from "./config";
import { doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

export const useAuthListener = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        onSnapshot(doc(db, "users", authUser.uid), (doc) =>
          setUser(doc.data().id)
        );
      } else setUser(null);
    });

    return () => listener();
  }, []);

  return { user };
};
