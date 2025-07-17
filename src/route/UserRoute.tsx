import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../CRUD_TEST/page/Home";

const UserRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
    </Routes>
  );
};

export default UserRoute;
