import React from "react";

const Setting = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Settings</h2>
      <div className="mt-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Profile Settings
        </label>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Setting;
