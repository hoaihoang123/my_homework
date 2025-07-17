import React from "react";

const features = [
  {
    title: "Project Management",
    description:
      "Easily manage your projects with our intuitive interface and powerful tools.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    buttonText: "Learn More",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    title: "Team Collaboration",
    description:
      "Work together effectively with your team using our collaboration features.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
    buttonText: "Learn More",
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Get insights into your performance with comprehensive analytics and reporting.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-purple-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    buttonText: "Learn More",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
  },
];
const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex justify-center mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600 mb-4">{feature.description}</p>
          <button
            className={`px-4 py-2 text-white rounded ${feature.buttonColor}`}
          >
            {feature.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Features;
