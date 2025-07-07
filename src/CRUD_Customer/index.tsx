import React, { useState } from "react";
import List from "./List";
import Create from "./Create";

const Customer = () => {
  const [reload, setReload] = useState(0);

  const handleCreate = (user: any) => {
    console.log("User created:", user);
    setReload((prev) => prev + 1); // Increment reload count to trigger re-fetch
  };
  return (
    <div>
      <Create onCreated={handleCreate} />
      <List reload={reload} />
    </div>
  );
};

export default Customer;
