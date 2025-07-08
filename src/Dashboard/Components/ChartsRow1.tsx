import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { month: "Oct 2019", Inpatients: 2800, Outpatients: 1200 },
  { month: "Nov 2019", Inpatients: 3100, Outpatients: 1800 },
  { month: "Dec 2019", Inpatients: 4000, Outpatients: 2200 },
  { month: "Jan 2020", Inpatients: 2600, Outpatients: 1400 },
  { month: "Feb 2020", Inpatients: 2900, Outpatients: 1600 },
  { month: "Mar 2020", Inpatients: 3500, Outpatients: 1900 },
];

// Data for pie charts
const genderData = [
  { name: "Male", value: 72, color: "#8b5cf6" },
  { name: "Female", value: 28, color: "#f97316" },
];

const patientTypeData = [
  { name: "Inpatients", value: 72, color: "#8b5cf6" },
  { name: "Outpatients", value: 28, color: "#10b981" },
];

const ChartsRow1 = () => {
  return (
    <div className="pt-10 bg-gray-100 h-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left: Bar chart "Outpatients vs. Inpatients Trend" */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Outpatients vs. Inpatients Trend
            </h3>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-500">Show by months</span>
              <select className="border rounded px-2 py-1">
                <option>6 months</option>
                <option>12 months</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner flex ">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#666" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#666" }}
                  domain={[0, 4500]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="Inpatients"
                  fill="#8b5cf6"
                  name="Inpatients"
                  radius={[4, 4, 0, 0]}
                  barSize={20}
                />
                <Bar
                  dataKey="Outpatients"
                  fill="#10b981"
                  name="Outpatients"
                  radius={[4, 4, 0, 0]}
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>

            {/* Bottom Pie Chart */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="relative">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={patientTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {patientTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400 text-2xl">👥</div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm">Inpatients</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Outpatients</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Pie charts "Patients by Gender" */}
        <div className="md:col-span-1 space-y-6 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Patients by Gender
            </h3>
            <span className="text-sm text-gray-500">Show by months ↓</span>
          </div>

          <div className="relative">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">28%</div>
                <div className="text-gray-400">👥</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-sm">Male</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span className="text-sm">Female</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsRow1;
