import { useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

import { useAuthListener } from "../firebase/useAuthListener";

export default function Members() {
  const current = useAuthListener();

  const [users, setUsers] = useState(null);

  if (current.user) {
    onSnapshot(collection(db, "users"), (querySnapshot) => {
      const allUsers = [];
      querySnapshot.forEach((doc) => {
        allUsers.push([
          allUsers.length,
          doc.data().name,
          doc.data().status,
          doc.data().id === current.user,
        ]);
      });
      setUsers(allUsers);
    });
  }

  return (
    <div className="members">
      <h1>Members</h1>
      <ul>
        {users
          ? users
              .map((user) => (
                <li key={user[0]} className={user[3] ? "you" : ""}>
                  {user[1]} - {user[2]} {user[3] ? " (You) " : ""}
                </li>
              ))
              .reverse()
          : ""}
      </ul>
    </div>
  );
}
