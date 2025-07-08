import React from "react";

const Parents = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Parents</h2>
      <ul className="mt-2">
        <li className="py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer">
          <span>👨‍👩‍👧‍👦</span>
          <span>John Doe</span>
        </li>
        <li className="py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer">
          <span>👨‍👩‍👧‍👦</span>
          <span>Jane Smith</span>
        </li>
        <li className="py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer">
          <span>👨‍👩‍👧‍👦</span>
          <span>Emily Johnson</span>
        </li>
      </ul>
    </div>
  );
};

export default Parents;
