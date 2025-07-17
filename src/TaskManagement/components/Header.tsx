import { useAuthStore } from "../../AuthLorin/stores/authStore";

const Header = () => {
  const { loggedInUser, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between ">
      <h1 className="text-2xl font-bold">Task Management System</h1>
      <div className="flex items-center">
        <span className="mr-4">Welcome, {loggedInUser?.email}</span>
      </div>
      <button
        onClick={handleLogout}
        className="text-white-500 ml-4 hover:text-red-700 py-2 px-4 bg-amber-400 hover:bg-amber-300 duration-200 ease-in-out rounded-3xl"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
