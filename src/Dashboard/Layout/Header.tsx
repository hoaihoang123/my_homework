import React from "react";
import { BiNotification, BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header flex items-center justify-between bg-amber-50 text-gray-800">
      <div className="logo flex items-center space-x-4 p-4">
        <img
          src="https://png.pngtree.com/png-vector/20240607/ourlarge/pngtree-creative-logo-design-illustration-png-image_12621641.png"
          alt="Logo"
          className="h-10 w-10"
        />
      </div>
      <div className="searchBar relative flex items-center justify-center w-1/3">
        <BiSearch className="absolute left-3 top-3.5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 pl-10 w-full rounded-2xl"
        />
      </div>
      {/* Notifications and User Profile */}
      <div className="flex items-center space-x-4">
        <div className="notification">
          <BiNotification className="h-6 w-6" />
        </div>
        <div className="userProfile px-10 flex items-center space-x-2 p-2 bg-amber-300 rounded-full">
          <img
            src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740"
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
          <span className="ml-2">Username</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
