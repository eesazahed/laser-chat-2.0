import { useState } from "react";
import { db } from "../firebase/config";
import { collection, doc, getDoc, addDoc } from "firebase/firestore";

export default function Textbox(props) {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    const docSnap = await getDoc(doc(db, "users", props.user.id));
    if (message.length > 0) {
      await addDoc(collection(db, "messages"), {
        content: message,
        timestamp: new Date().getTime(),
        sender: docSnap.data().name,
        senderID: docSnap.data().id,
      });
      setMessage("");
    }
  };

  return (
    <div className="textbox">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        onKeyDown={(e) => (e.keyCode === 13 ? sendMessage() : null)}
      />
      <br />
      <br />
    </div>
  );
}
