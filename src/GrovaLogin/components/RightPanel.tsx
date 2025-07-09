import LoginForm from "./LoginForm";

const RightPanel = () => {
  return (
    <div className="flex-1 bg-white flex flex-col p-4 lg:p-8 relative overflow-hidden">
      {/* Logo */}
      <div className="flex justify-start p-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-xl font-bold text-gray-800">Grovia</span>
        </div>
      </div>

      {/* Login Form Container */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
