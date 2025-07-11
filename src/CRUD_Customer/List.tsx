import { useEffect, useState } from "react";
import Delete from "./Delete";
import Update from "./Update";

// Type of user
type User = {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: string;
  updatedAt: string;
};

const List = ({ reload = 0 }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [userSelected, setUserSelected] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUsers(data);
      } catch (e) {
        console.log(e);
      } finally {
        console.log("Fetch users completed");
        setLoading(false);
      }
    };
    fetchUsers();
  }, [reload]);

  const handleSelected = (user: User) => {
    setUserSelected(user);
  };

  const handleUpdated = (ur: any) => {
    setUsers((prevs) => prevs.map((user) => (user.id === ur.id ? ur : user)));
    // Reset the selected user after update
    setUserSelected(null);
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {loading && <div> Loading....</div>}
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Avatar</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item: User) => (
              <tr
                key={item.id}
                className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-3">{item.id}</td>
                <td className="px-6 py-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="object-cover w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-6 py-3">{item.name}</td>
                <td className="px-6 py-3">{item.email}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      item.role === "admin"
                        ? "bg-red-100 text-red-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {item.role}
                  </span>
                </td>
                <td className="px-6 py-3">
                  {new Date(item.creationAt).toLocaleDateString()}
                </td>
                <th>
                  <button
                    onClick={() => handleSelected(item)}
                    className="px-3 py-1 mr-2 text-white bg-green-500 rounded hover:bg-green-600"
                  >
                    Edit
                  </button>
                  <Delete userId={item.id} />
                </th>
              </tr>
            ))}
        </tbody>
      </table>
      {userSelected && (
        <Update
          productId={userSelected.id}
          onUpdate={handleUpdated}
          onClose={() => setUserSelected(null)}
        />
      )}
    </div>
  );
};

export default List;
