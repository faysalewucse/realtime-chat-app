import { BiSolidMessageSquareDots } from "react-icons/bi";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-5 text-white bg-indigo-500">
      <div className="flex justify-between items-center">
        <BiSolidMessageSquareDots className="text-4xl" />
        {user ? (
          <div className="flex items-center gap-2">
            <img
              src={user?.photoURL}
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <h1 className="font-semibold">{user.displayName}</h1>
            <button
              onClick={logout}
              className="bg-white text-indigo-500 py-1 px-6 rounded"
            >
              Log Out
            </button>
          </div>
        ) : (
          <button className="font-semibold bg-white text-indigo-500 py-2 px-6 rounded">
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
