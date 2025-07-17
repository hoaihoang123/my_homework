import React from "react";
import Layout from "../layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "../component/Slider";
import Features from "../component/Features";

const DashBoard = () => {
  return (
    <Layout>
      <div className="px-4 md:px-6 lg:px-8">
        {/* Slider Section */}
        <CustomSlider />

        {/* Section 1: Featured Content */}
        <div className="my-8 md:my-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 text-center">
            Featured Content
          </h2>
          <Features />
        </div>

        {/* Section 2: Recent Activities */}
        <div className="my-8 md:my-10 bg-gray-50 py-6 md:py-8 px-3 md:px-4 rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 text-center">
            Recent Activities
          </h2>

          <div className="w-full max-w-3xl mx-auto">
            {/* Activity Item */}
            <div className="bg-white p-3 md:p-4 rounded-lg shadow mb-4 flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3 md:mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm md:text-base truncate">
                  New Project Created
                </h4>
                <p className="text-xs md:text-sm text-gray-600 break-words">
                  You created a new project "Website Redesign"
                </p>
                <span className="text-xs text-gray-400">Today, 10:30 AM</span>
              </div>
            </div>

            {/* Activity Item */}
            <div className="bg-white p-3 md:p-4 rounded-lg shadow mb-4 flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-3 md:mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm md:text-base truncate">
                  File Uploaded
                </h4>
                <p className="text-xs md:text-sm text-gray-600 break-words">
                  You uploaded "project_proposal.pdf" to your documents
                </p>
                <span className="text-xs text-gray-400">
                  Yesterday, 3:45 PM
                </span>
              </div>
            </div>

            {/* Activity Item */}
            <div className="bg-white p-3 md:p-4 rounded-lg shadow mb-4 flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3 md:mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm md:text-base truncate">
                  Meeting Scheduled
                </h4>
                <p className="text-xs md:text-sm text-gray-600 break-words">
                  Team meeting for "Marketing Strategy" scheduled
                </p>
                <span className="text-xs text-gray-400">July 10, 2:00 PM</span>
              </div>
            </div>

            <div className="text-center mt-6">
              <button className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-700 text-white text-sm md:text-base rounded hover:bg-gray-800 transition-colors">
                View All Activities
              </button>
            </div>
          </div>
        </div>

        {/* Original Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-8 md:my-10">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
              Overview
            </h3>
            <p className="text-sm md:text-base">
              Dashboard overview content goes here...
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow">
            <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
              Statistics
            </h3>
            <p className="text-sm md:text-base">
              Your stats and metrics will appear here...
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashBoard;
