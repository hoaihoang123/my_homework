import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className=" ">{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default Layout;
