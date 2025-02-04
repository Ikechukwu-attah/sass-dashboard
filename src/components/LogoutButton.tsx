"use client";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const LogoutButton = () => {
  const auth = useContext(AuthContext);

  return (
    <button
      onClick={auth?.logout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
