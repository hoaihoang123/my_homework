import React from "react";

const DeniedTask = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
      <p className="text-gray-700">
        You do not have permission to view this task.
      </p>
      <p className="text-gray-500">
        Please contact your administrator if you believe this is an error.
      </p>
    </div>
  );
};

export default DeniedTask;
