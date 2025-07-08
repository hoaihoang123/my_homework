import React from "react";

const Doctor = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Doctors</h2>
      <ul className="mt-2">
        <li className="py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer">
          <span>👨‍⚕️</span>
          <span>Dr. Smith</span>
        </li>
        <li className="py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer">
          <span>👩‍⚕️</span>
          <span>Dr. Johnson</span>
        </li>
        <li className="py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer">
          <span>👨‍⚕️</span>
          <span>Dr. Williams</span>
        </li>
      </ul>
    </div>
  );
};

export default Doctor;
