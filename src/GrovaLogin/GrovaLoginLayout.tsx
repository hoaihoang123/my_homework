import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

const GrovaLoginLayout = () => {
  return (
    <div className="min-h-screen flex  bg-gray-50 lg:p-5">
      {/* Left Panel - Hero Section */}
      <LeftPanel />

      {/* Right Panel - Login Form */}
      <RightPanel />
    </div>
  );
};

export default GrovaLoginLayout;
