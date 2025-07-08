import React from "react";

const History = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Patient History</h2>
      <ul className="mt-2">
        <li className="py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer">
          <span>🗓️</span>
          <span>Oct 2019</span>
        </li>
        <li className="py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer">
          <span>🗓️</span>
          <span>Nov 2019</span>
        </li>
        <li className="py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer">
          <span>🗓️</span>
          <span>Dec 2019</span>
        </li>
      </ul>
    </div>
  );
};

export default History;
