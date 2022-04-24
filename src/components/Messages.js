import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { userTheme } from "./SetTheme";

export default function Messages(props) {
  const [messages, setMessages] = useState([]);

  userTheme();

  useEffect(() => {
    onSnapshot(collection(db, "messages"), (querySnapshot) => {
      const allMessages = [];
      querySnapshot.forEach((doc) => {
        const addedMessage = {
          id: doc.id,
          sender: doc.data().sender,
          content: doc.data().content,
          timestamp: doc.data().timestamp,
          sentByMe: doc.data().senderID === props.user,
        };
        allMessages.push(addedMessage);
      });
      allMessages.sort(
        (a, b) => parseFloat(b.timestamp) - parseFloat(a.timestamp)
      );
      setMessages(allMessages);
    });
  }, []);

  return (
    <div className="messages">
      {messages
        ? messages.map((message) => (
            <div
              id={message.id}
              key={message.id}
              className={message.sentByMe ? "msg sentByYou" : "msg sentByOther"}
            >
              <div className="msg-left">
                <div className="msg-info">{message.sender}</div>
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
