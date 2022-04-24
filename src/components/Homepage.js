import { useEffect } from "react";
import Messages from "./Messages";
import Settings from "./Settings";
import Textbox from "./Textbox";
import { SERVERNAME } from "../firebase/config";
import Members from "./Members";
import Swal from "sweetalert2";

import { db } from "../firebase/config";
import { doc, addDoc, collection, updateDoc, getDoc } from "firebase/firestore";

export default function Homepage(props) {
  document.title = SERVERNAME;

  useEffect(() => {
    const ifNewUser = async () => {
      const docSnap = await getDoc(doc(db, "users", props.user.id));

      if (docSnap.data().name === "New User") {
        const { value: name } = await Swal.fire({
          title: "Enter your name please",
          input: "text",
          inputLabel: "Your Name",
          inputPlaceholder: "Name",
          showCancelButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          inputValidator: (value) => {
            if (value.length >= 16 || value.length <= 2) {
              return "Please enter a name between 3-15 characters.";
            }
          },
        });
        if (name) {
          await updateDoc(doc(db, "users", props.user.id), {
            name: name,
          });
          addDoc(collection(db, "messages"), {
            content: `${name} has joined the chat.`,
            timestamp: new Date().getTime(),
            sender: name,
            senderID: props.user.id,
          });
        }
      }
    };
    ifNewUser();
  }, []);

  return (
    <div className="homepage">
      <aside>
        <h1>{SERVERNAME}</h1>
        <details>
          <summary>Settings</summary>
          <Settings user={props.user} />
        </details>
      </aside>
      <main>
        <Messages user={props.user} />
        <Textbox user={props.user} />
      </main>
      <aside>
        <Members user={props.user} />
      </aside>
    </div>
  );
}
