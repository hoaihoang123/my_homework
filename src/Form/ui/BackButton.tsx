import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  onClick?: () => void;
  className?: string;

}

const BackButton = ({ onClick, className = "" }: BackButtonProps) => {
  const navigation = useNavigate();
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigation(-1);
    }
  };

  return (
    <div className=" relative w-full">
      <button
        onClick={handleClick}
        className={`absolute top-6 left-6 p-2 text-white z-10 hover:bg-white/10 rounded-full transition-all ${className}`}
      >
        <BiArrowBack size={24} />
      </button>
    </div>
  );
};

export default BackButton;
