import { Link } from "react-router-dom";

const DemoNavigation = () => {
  const demos = [
    {
      title: "Welcome Screen",
      description: "Clean welcome page with hero section",
      path: "/welcome",
      color: "from-blue-500 to-cyan-500",
      icon: "👋",
    },
    {
      title: "Login Screen",
      description: "Simple and elegant login form",
      path: "/login",
      color: "from-green-500 to-emerald-500",
      icon: "🔐",
    },
    {
      title: "Sign Up Screen",
      description: "Beautiful registration form",
      path: "/register",
      color: "from-purple-500 to-pink-500",
      icon: "✨",
    },
    {
      title: "Animated Login",
      description: "Login with stunning particles and effects",
      path: "/animated-login",
      color: "from-orange-500 to-red-500",
      icon: "🎨",
    },
    {
      title: "Glassmorphism Login",
      description: "3D glass effect with modern aesthetics",
      path: "/glassmorphism-login",
      color: "from-indigo-500 to-purple-600",
      icon: "💎",
    },
    {
      title: "Grovia Login",
      description: "Split-screen design with branding",
      path: "/grovia-login",
      color: "from-teal-500 to-cyan-600",
      icon: "🚀",
    },
    {
      title: "User Registration",
      description: "Multi-step registration with validation",
      path: "/user-register",
      color: "from-pink-500 to-rose-500",
      icon: "📝",
    },
    {
      title: "Register Form",
      description: "Simple register layout",
      path: "/registerForm",
      color: "from-amber-500 to-orange-500",
      icon: "📋",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Form Showcase
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore our collection of beautiful, animated, and modern form
            designs. Each form features unique animations, validations, and
            stunning visual effects.
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {demos.map((demo, index) => (
            <Link
              key={demo.path}
              to={demo.path}
              className="group relative block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative h-64 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {demo.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 group-hover:bg-clip-text transition-all duration-300">
                    {demo.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {demo.description}
                  </p>
                </div>

                {/* Hover effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/40 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/40 rounded-br-2xl" />
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-4 right-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
            <span className="text-white/70">Built with</span>
            <div className="flex space-x-3">
              <span className="text-blue-400 font-semibold">React</span>
              <span className="text-white/50">•</span>
              <span className="text-cyan-400 font-semibold">TypeScript</span>
              <span className="text-white/50">•</span>
              <span className="text-purple-400 font-semibold">
                Tailwind CSS
              </span>
              <span className="text-white/50">•</span>
              <span className="text-pink-400 font-semibold">
                React Hook Form
              </span>
              <span className="text-white/50">•</span>
              <span className="text-green-400 font-semibold">Yup</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0px) translateX(20px); }
          75% { transform: translateY(20px) translateX(10px); }
        }
      `}</style>
    </div>
  );
};

export default DemoNavigation;
