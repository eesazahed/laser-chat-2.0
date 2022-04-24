import { useState } from "react";
import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

export default function RequestName(props) {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const setUserStatus = async () => {
    if (status.length >= 3 && status.length <= 15) {
      await updateDoc(doc(db, "users", props.user.id), {
        status: status,
      });
      setStatus("");
      setError("");
    } else setError("Please enter a status between 3-15 characters.");
  };

  return (
    <div>
      <p>Status:</p>
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Status"
      />
      <button onClick={() => setUserStatus(props.user, status)}>Done</button>
      <br />
      <p className="error">{error}</p>
    </div>
  );
}
