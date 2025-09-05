import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const stepsData = [
  { day: "Mon", steps: 4500 },
  { day: "Tue", steps: 8200 },
  { day: "Wed", steps: 6700 },
  { day: "Thu", steps: 10000 },
  { day: "Fri", steps: 9200 },
  { day: "Sat", steps: 12000 },
  { day: "Sun", steps: 7500 },
];

export default function StepsGraph() {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Steps Per Day
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={stepsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="steps" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
