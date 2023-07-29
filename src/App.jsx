import "./index.css";
import { useAuth } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import Sidebar from "./components/Sidebar";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <Navbar />
      <div className="bg-sky-50 p-20">
        <div className="max-w-7xl mx-auto flex gap-5 bg-indigo-50 rounded-2xl">
          {user && <Sidebar />}
          <div
            className={`flex-grow bg-white min-h-[70vh] rounded-2xl shadow-md ${
              !user && "flex items-center justify-center"
            }`}
          >
            {user ? <ChatRoom /> : <SignIn />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
