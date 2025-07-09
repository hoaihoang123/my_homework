import React from "react";
import RegisterLeftPanel from "./RegisterLeftPanel";
import RegisterForm from "./RegisterForm";

const RegisterLayout = () => (
  <div className="min-h-screen flex bg-gray-50">
    <div className="w-1/3 min-h-screen">
      <RegisterLeftPanel />
    </div>
    <div className="flex-1 flex items-center justify-center">
      <RegisterForm />
    </div>
  </div>
);

export default RegisterLayout;
