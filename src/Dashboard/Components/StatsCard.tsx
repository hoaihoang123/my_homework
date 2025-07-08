import React from "react";

// itemCarts for metric important including, total patients, available staff, avg treatment, available cars
const itemCarts = [
  {
    title: "Total Patients",
    value: 3256,
    icon: "👥",
    color: "bg-blue-500",
  },
  {
    title: "Available Staff",
    value: 394,
    icon: "👨‍⚕️",
    color: "bg-green-500",
  },
  {
    title: "Avg Treatment Costs",
    value: "$200",
    icon: "💰",
    color: "bg-yellow-500",
  },
  {
    title: "Available Cars",
    value: 38,
    icon: "🚗",
    color: "bg-red-500",
  },
];
const StatsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {itemCarts.map((item, index) => (
        <div key={index} className={`p-4 rounded-lg shadow-md ${item.color}`}>
          <div className="flex items-center">
            <span className="text-2xl">{item.icon}</span>
            <div className="ml-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
