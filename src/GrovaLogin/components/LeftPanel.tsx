const LeftPanel = () => {
  return (
    <div
      className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden 
                    hidden sm:block"
    >
      {/* Main Content */}
      <div className="flex flex-col justify-start h-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="mb-6 lg:mb-8 mt-8 lg:mt-2 z-1">
          <h1
            className=" sm:text-2xl lg:text-4xl xl:text-3xl 
                         font-bold text-gray-800 leading-tight mb-4"
          >
            Set Your Partner
            <br />
            Recruitment on Auto-Pilot
          </h1>
        </div>

        {/* Hero Image cover full panel */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://nhannn87dn.github.io/ui-form-antd-yup/statics/img/grovia.png"
            alt="Happy woman celebrating"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Additional decorative elements */}
    </div>
  );
};

export default LeftPanel;
