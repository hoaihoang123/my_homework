interface AuthFooterProps {
  text?: string;
  linkText?: string;
  secondaryText?: string;
  onLinkClick?: () => void;
  onSecondaryClick?: () => void;
}

const AuthFooter = ({
  text,
  linkText,
  secondaryText,
  onLinkClick,
  onSecondaryClick,
}: AuthFooterProps) => {
  return (
    <div className="space-y-4 ">
      <div className=" text-gray-400 text-sm gap-2">
        <span className="text-white">{text}</span>
        <button
          onClick={onLinkClick}
          className="text-green-300 hover:text-green-500 transition-colors"
        >
          {linkText}
        </button>
      </div>
      {secondaryText && (
        <button
          onClick={onSecondaryClick}
          className="block text-green-400 hover:text-green-300 transition-colors"
        >
          {secondaryText}
        </button>
      )}
    </div>
  );
};

export default AuthFooter;
