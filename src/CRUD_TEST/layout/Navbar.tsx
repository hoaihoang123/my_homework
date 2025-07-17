import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-light p-3 shadow  justify-between items-center  rounded-lg">
      <div className="flex items-center"></div>
      <div className="flex items-center">
        <ul className="nav justify-content-center flex gap-3 text-center text-lg font-semibold text-gray-700 list-none ">
          <li className="nav-item hover:text-blue-500 px-4 py-1 m-1 border-b-2 border-amber-200  hover:border-blue-500 bg-yellow-100 rounded-xl transition ease-in-out">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>

          <li className="nav-item hover:text-blue-500 px-4 py-1 m-1 border-b-2 border-amber-200  hover:border-blue-500 bg-yellow-100 rounded-xl transition ease-in-out">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item hover:text-blue-500 px-4 py-1 m-1 border-b-2 border-amber-200  hover:border-blue-500 bg-yellow-100 rounded-xl transition ease-in-out">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item hover:text-blue-500 px-4 py-1 m-1 border-b-2 border-amber-200  hover:border-blue-500 bg-yellow-100 rounded-xl transition ease-in-out">
            <a className="nav-link" href="/profile">
              Profile
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4 right-1">
        <a
          href="/login"
          className="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ease-in-out"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
