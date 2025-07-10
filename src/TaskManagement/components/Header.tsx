import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

const Header = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login-task");
  };
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">Task Management System</h1>

      <button
        onClick={handleLogout}
        className="text-red-500 ml-4 hover:text-red-700"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
