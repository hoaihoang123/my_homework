import React from "react";

const url = "https://api.escuelajs.co/api/v1/users";
const Delete = ({ userId }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`${url}/${userId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("can't not delete product");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-1 text-white transition-colors bg-red-500 rounded hover:bg-red-600"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Delete;
