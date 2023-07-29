import { useAuth } from "../contexts/AuthContext";

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;
  const { user } = useAuth();
  const messageClass =
    uid === user?.uid ? "flex-row-reverse flex-end" : "received";

  return (
    <>
      <div className={`flex items-center ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p className="bg-sky-100 py-1 px-3  rounded-xl">{text}</p>
      </div>
    </>
  );
};

export default ChatMessage;
