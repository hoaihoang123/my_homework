import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Data for line chart
const timeAdmittedData = [
  { time: "07 am", patients: 50 },
  { time: "08 am", patients: 80 },
  { time: "09 am", patients: 70 },
  { time: "10 am", patients: 90 },
  { time: "11 am", patients: 60 },
  { time: "12 pm", patients: 75 },
];

// Data for patients by division
const divisionData = [
  { division: "Cardiology", icon: "❤️", count: 247 },
  { division: "Neurology", icon: "🧠", count: 164 },
  { division: "Surgery", icon: "⚕️", count: 86 },
];

// Data for monthly chart
const monthlyData = [
  { day: 14, value: 50 },
  { day: 15, value: 80 },
  { day: 16, value: 45 },
  { day: 17, value: 90 },
  { day: 18, value: 65 },
  { day: 19, value: 75 },
];

const ChartsRow2 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6">
      {/* Left: Time Admitted Chart */}
      <div className="lg:col-span-4 bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Time Admitted</h3>
          <span className="text-sm text-gray-500">Today ↓</span>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={timeAdmittedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#666" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#666" }}
              domain={[0, 150]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />
            <Line
              type="monotone"
              dataKey="patients"
              stroke="#f97316"
              strokeWidth={3}
              dot={{ fill: "#f97316", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: "#f97316" }}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Peak indicator */}
        <div className="mt-2 flex items-center gap-2">
          <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs">
            113
          </div>
          <span className="text-xs text-gray-500">Peak at 10 am</span>
        </div>
      </div>

      {/* Center: Patients By Division Table */}
      <div className="lg:col-span-4 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Patients By Division
        </h3>

        <div className="space-y-1">
          <div className="flex justify-between text-sm text-gray-500 border-b pb-2">
            <span>DIVISION</span>
            <span>PT.</span>
          </div>

          {divisionData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span className="text-gray-700">{item.division}</span>
              </div>
              <span className="font-semibold text-gray-800">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Patients This Month Card */}
      <div className="lg:col-span-4 bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-lg shadow-md text-white">
        <div className="mb-4">
          <div className="text-3xl font-bold mb-1">3,240</div>
          <div className="text-purple-200 text-sm">Patients this month</div>
        </div>

        {/* Mini chart */}
        <div className="mb-4">
          <ResponsiveContainer width="100%" height={80}>
            <LineChart data={monthlyData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom indicators */}
        <div className="flex justify-between items-center text-xs">
          <div className="bg-white bg-opacity-20 px-2 py-1 rounded">232</div>
          <div className="flex gap-2">
            {[14, 15, 16, 17, 18, 19].map((day) => (
              <span key={day} className="text-purple-200">
                {day}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsRow2;
