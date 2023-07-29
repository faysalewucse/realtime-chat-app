import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <button
      onClick={signInWithGoogle}
      className="bg-indigo-50 shadow-md py-2 px-6 rounded flex items-center gap-2 hover:shadow hover:bg-gray-200 trasition-all duration-200"
    >
      <FcGoogle className="text-2xl" />
      Sign in with Google
    </button>
  );
};

export default SignIn;
