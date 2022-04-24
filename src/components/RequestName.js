import { useState } from "react";
import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

export default function RequestName(props) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const setUsername = async () => {
    if (name.length >= 3 && name.length <= 15) {
      await updateDoc(doc(db, "users", props.user), {
        name: name,
      });
      setName("");
      setError("");
    } else setError("Please enter a name between 3-15 characters.");
  };

  return (
    <div>
      <p>Name:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <button onClick={() => setUsername()}>Done</button>
      <br />
      <p className="error">{error}</p>
    </div>
  );
}
