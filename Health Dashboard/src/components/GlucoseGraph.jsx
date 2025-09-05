import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const glucoseData = [
  { time: "6 AM", glucose: 95 },
  { time: "9 AM", glucose: 110 },
  { time: "12 PM", glucose: 130 },
  { time: "3 PM", glucose: 115 },
  { time: "6 PM", glucose: 120 },
  { time: "9 PM", glucose: 105 },
  { time: "12 AM", glucose: 90 },
];

export default function GlucoseGraph() {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Glucose Levels (mg/dL)
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={glucoseData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[80, 140]} />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="glucose"
            stroke="#ef4444"
            fill="#fecaca"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
