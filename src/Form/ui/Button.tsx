import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "social" | "blue" | "purple" | "red";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  icon,
  className = "",
  disabled = false,
  type,
}: ButtonProps) => {
  const baseClasses =
    "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2";

  const variantClasses = {
    primary: "bg-green-500 hover:bg-green-600 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    social: "bg-white hover:bg-gray-50 text-gray-800 border border-gray-200",
    blue: "bg-blue-500 hover:bg-blue-600 text-white",
    purple: "bg-purple-500 hover:bg-purple-600 text-white",
    red: "bg-red-500 hover:bg-red-600 text-white",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`}
      disabled={disabled}
      type={type}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
