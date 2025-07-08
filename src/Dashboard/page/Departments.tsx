import React from "react";

const Departments = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Departments</h2>
      <ul className="mt-2">
        <li className="py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer">
          <span>🏥</span>
          <span>Cardiology</span>
        </li>
        <li className="py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer">
          <span>🏥</span>
          <span>Neurology</span>
        </li>
        <li className="py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer">
          <span>🏥</span>
          <span>Pediatrics</span>
        </li>
      </ul>
    </div>
  );
};

export default Departments;
