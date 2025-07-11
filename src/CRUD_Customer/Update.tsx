import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

const url = "https://api.escuelajs.co/api/v1/users/";

type Props = {
  productId: number;
  onUpdate?: (user: any) => void;
  onClose?: () => void;
};

const Update = ({ productId, onUpdate, onClose }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
    role: "customer",
  });
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${url}${productId}`);
        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();
        setFormData({
          name: data.name || "",
          email: data.email || "",
          password: "", // Don't prefill password for security
          avatar: data.avatar || "",
          role: data.role || "customer",
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (productId) {
      fetchUserData();
    }
  }, [productId]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    console.log(formData);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          avatar: formData.avatar,
          role: formData.role,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedUser = await response.json();
      console.log("Updated user:", updatedUser);

      alert("User updated successfully");

      if (onUpdate && typeof onUpdate === "function") {
        onUpdate(updatedUser);
      }
      setFormData({
        name: "",
        email: "",
        password: "",
        avatar: "",
        role: "customer",
      });
    } catch (e) {
      console.error("Update error:", e);
      alert(`Error updating user: ${(e as Error).message || "Unknown error"}`);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 ">
      {" "}
      {/* Modal Container */}
      <div className="z-50 w-1/3 p-8 bg-white rounded-lg shadow-lg ">
        <form
          className="max-w-md p-4 mx-auto mb-4 bg-white rounded shadow"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-4 text-xl font-bold">Update User</h2>
          <div className="mb-4">
            <label
              className="block mb-1 text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-1 text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-1 text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleChange}
              placeholder="Enter new password (leave blank to keep current)"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-1 text-sm font-medium text-gray-700"
              htmlFor="avatar"
            >
              Avatar URL
            </label>
            <input
              type="url"
              id="avatar"
              value={formData.avatar}
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleChange}
              placeholder="https://example.com/avatar.jpg"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-1 text-sm font-medium text-gray-700"
              htmlFor="role"
            >
              Role
            </label>
            <select
              id="role"
              value={formData.role}
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => {
                const { id, value } = e.target;
                setFormData((prev) => ({
                  ...prev,
                  [id]: value,
                }));
              }}
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          {/* Action Button */}
          <div className="flex gap-3 mt-6">
            <button
              className="flex-1 px-4 py-2 text-gray-700 transition-colors bg-gray-200 rounded hover:bg-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
            >
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
