import { useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { userTheme } from "./SetTheme";

import { useAuthListener } from "../firebase/useAuthListener";

export default function Messages() {
  const current = useAuthListener();

  const [messages, setMessages] = useState([]);

  userTheme();
  if (current.user) {
    onSnapshot(collection(db, "messages"), (querySnapshot) => {
      const allMessages = [];
      querySnapshot.forEach((doc) => {
        const addedMessage = {
          id: doc.id,
          sender: doc.data().sender,
          content: doc.data().content,
          timestamp: doc.data().timestamp,
          sentByMe: doc.data().senderID === current.user,
        };
        allMessages.push(addedMessage);
      });
      allMessages.sort(
        (a, b) => parseFloat(b.timestamp) - parseFloat(a.timestamp)
      );
      setMessages(allMessages);
    });
  }

  return (
    <div className="messages">
      <span id="newest-feed"></span>
      <a id="down-button" href="#newest-feed">
        <i className="fa fa-arrow-down"></i>
      </a>
      {messages
        ? messages.map((message) => (
            <div
              id={message.id}
              key={message.id}
              className={message.sentByMe ? "msg sentByYou" : "msg sentByOther"}
            >
              <div className="msg-left">
                <div className="msg-sender">{message.sender}</div>
                <div className="msg-content">
                  <span>{message.content}</span>
                </div>{" "}
              </div>
              <div className="msg-right">
                {new Date(message.timestamp).toLocaleString()}
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}
