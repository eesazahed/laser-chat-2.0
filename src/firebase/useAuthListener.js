/*
Thanks to Karl Hadwen for this (https://github.com/karlhadwen/instagram/blob/master/src/hooks/use-auth-listener.js)
*/

import { auth } from "./config";
import { useState, useEffect } from "react";

export const useAuthListener = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser.uid);
      } else setUser(null);
    });

    return () => listener();
  }, []);

  return { user };
};
