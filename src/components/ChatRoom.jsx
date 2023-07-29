import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
import ChatMessage from "./ChatMessage";
const firestore = firebase.firestore();

const ChatRoom = () => {
  const dummy = useRef();
  const { user } = useAuth();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = user;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[70vh]">
      <main className="p-10">
        {messages &&
          messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}

        <span ref={dummy}></span>
      </main>

      <form
        onSubmit={sendMessage}
        className="absolute bottom-0 w-full flex items-center p-5"
      >
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
          className="w-full p-3 rounded-l-xl bg-indigo-100"
        />

        <button
          type="submit"
          disabled={!formValue}
          className="bg-sky-400 py-3 px-8 rounded-r-xl"
        >
          🕊️
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;
