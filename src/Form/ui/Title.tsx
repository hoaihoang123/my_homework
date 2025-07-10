import React from "react";

interface TitleProps {
  title: string;
  className?: string;
}

const Title = ({ title, className = "" }: TitleProps) => {
  return (
    <div className={`flex justify-center mb-6 text-center ${className}`}>
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
    </div>
  );
};

export default Title;
