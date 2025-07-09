import React from "react";

const RegisterLeftPanel = () => (
  <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-blue-500 to-blue-400 text-white p-8">
    <div className="mb-8 flex items-center gap-2">
      <img
        src="https://nhannn87dn.github.io/ui-form-antd-yup/statics/img/lottery-display.svg"
        alt="Lottery Display"
        className="w-12 h-12"
      />
      <span className="text-2xl font-bold">Lottery Display</span>
    </div>
    <h2 className="text-2xl font-semibold mb-4 text-center">
      A few clicks away
      <br />
      from creating your
      <br />
      Lottery Display
    </h2>
    <img
      src="https://nhannn87dn.github.io/ui-form-antd-yup/statics/img/lottery-display.svg"
      alt="Decoration"
      className="w-64"
    />
  </div>
);

export default RegisterLeftPanel;
