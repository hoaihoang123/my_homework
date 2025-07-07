import React, { useState, type ChangeEvent, type FormEvent } from "react";

const url = "https://api.escuelajs.co/api/v1/users";

type Props = {
  onCreated?: (user: any) => void;
};
const Create = ({ onCreated }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
    role: "customer", // Default role
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log(`Input changed: ${id} = ${value}`);

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);

      alert("User added successfully");
      if (onCreated && typeof onCreated === "function") {
        onCreated(data);
      }
      setFormData({
        name: "",
        email: "",
        password: "",
        avatar: "",
        role: "customer",
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container px-4 mx-auto">
      {/* Create Form with tailwindcss for User */}
      <form
        className="max-w-md p-4 mx-auto mb-4 bg-white rounded shadow"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-4 text-xl font-bold">Create User</h2>
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
            required
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
        <button
          type="submit"
          className="w-full py-2 text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default Create;
