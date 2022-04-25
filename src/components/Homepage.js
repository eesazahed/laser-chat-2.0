import Messages from "./Messages";
import Settings from "./Settings";
import Textbox from "./Textbox";
import { SERVERNAME } from "../firebase/config";
import Members from "./Members";
import Swal from "sweetalert2";

import { useAuthListener } from "../firebase/useAuthListener";

import { db } from "../firebase/config";
import { doc, addDoc, collection, updateDoc, getDoc } from "firebase/firestore";

export default function Homepage() {
  const current = useAuthListener();

  document.title = SERVERNAME;

  if (current.user) {
    (async function () {
      const docSnap = await getDoc(doc(db, "users", current.user));

      if (!docSnap.data().changedName) {
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
          await updateDoc(doc(db, "users", current.user), {
            name: name,
            changedName: true,
          });
          addDoc(collection(db, "messages"), {
            content: `${name} has joined the chat.`,
            timestamp: new Date().getTime(),
            sender: name,
            senderID: current.user,
          });
        }
      }
    })();
  }

  return (
    <div className="homepage">
      <aside>
        <h1>{SERVERNAME}</h1>
        <details>
          <summary>Settings</summary>
          <Settings />
        </details>
      </aside>
      <main>
        <Messages />
        <Textbox />
      </main>
      <aside>
        <Members />
      </aside>
    </div>
  );
}
