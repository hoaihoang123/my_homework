import { ref } from "yup";

interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  showToggle?: boolean;
}

const Input = ({
  type,
  placeholder,
  className = "",
  showToggle = false,
  ...props
}: InputProps) => {
  return (
    <div className="relative">
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-lg bg-gray-100 text-black  border-none outline-none focus:ring-2  ${
          className ? className : " focus:ring-green-500"
        }`}
      />
      {showToggle && (
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          View
        </button>
      )}
    </div>
  );
};

export default Input;
