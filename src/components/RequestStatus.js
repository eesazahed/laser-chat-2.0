import { useState } from "react";
import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

import { useAuthListener } from "../firebase/useAuthListener";

export default function RequestName() {
  const current = useAuthListener();

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const setUserStatus = async () => {
    if (status.length >= 3 && status.length <= 15) {
      await updateDoc(doc(db, "users", current.user), {
        status: status,
      });
      setStatus("");
      setError("");
    } else setError("Please enter a status between 3-15 characters.");
  };

  return (
    <>
      <p>Status:</p>
      <div className="request">
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Status"
        />
        <button className="set" onClick={() => setUserStatus()}>
          Done
        </button>
        <br />
        <p className="error">{error}</p>
      </div>
    </>
  );
}
