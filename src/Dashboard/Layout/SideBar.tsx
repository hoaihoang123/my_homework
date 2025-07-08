import React from "react";
import { NavLink } from "react-router-dom";

// This is navbar items for Navlink
const navItems = [
  { name: "Patients", icon: "👥", path: "/dashboard/patients" },
  { name: "Overview", icon: "📊", path: "/dashboard/overview" },
  { name: "Map", icon: "📍", path: "/dashboard/map" },
  { name: "Departments", icon: "🏢", path: "/dashboard/departments" },
  { name: "Doctors", icon: "👨‍⚕️", path: "/dashboard/doctors" },
  { name: "History", icon: "📋", path: "/dashboard/history" },
  { name: "Settings", icon: "⚙️", path: "/dashboard/settings" },
];
const SideBar = () => {
  return (
    <div className="bg-gray-200 w-64 h-auto shadow-md pl-10 pr-5 pt-10">
      {/* Register patient button */}
      <div>
        <button className="flex items-center gap-4 justify-center rounded-2xl w-full bg-blue-500 text-white py-2 hover:bg-blue-600">
          <span>Register Patient</span>
          <span className="text-lg bottom-3">+</span>
        </button>
      </div>
      <nav className="pt-5 pb-5">
        <ul className="mt-2 list-none ">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="py-2 px-3 text-gray-600 hover:bg-gray-50 rounded-lg flex items-center gap-3 cursor-pointer"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => {
                  return isActive
                    ? "text-blue-500 flex items-center gap-3"
                    : "flex items-center gap-3";
                }}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Get Mobile App Section */}
      <div className=" bottom-4 left-4 right-4 h-24">
        <div className="bg-purple-50 p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
            <span className="text-green-500">💚</span>
          </div>
          <p className="text-sm font-medium mb-2">Get mobile app</p>
          <div className="flex gap-2">
            <span className="text-xs">▶️</span>
            <span className="text-xs">🍎</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
