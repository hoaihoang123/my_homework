import React from "react";

const PageTitle = ({ name }: { name: string }) => {
  return (
    <div className="flex h-16 px-5 py-5 pl-0 ml-20 text-left">
      <h1>{name}</h1>
    </div>
  );
};

export default PageTitle;
