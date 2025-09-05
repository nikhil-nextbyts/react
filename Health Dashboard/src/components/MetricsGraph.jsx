import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const heartRateData = [
  { time: "6 AM", bpm: 65 },
  { time: "9 AM", bpm: 78 },
  { time: "12 PM", bpm: 85 },
  { time: "3 PM", bpm: 88 },
  { time: "6 PM", bpm: 75 },
  { time: "9 PM", bpm: 70 },
  { time: "12 AM", bpm: 60 },
];

export default function HealthMetricsGraph() {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Heart Rate (BPM)
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={heartRateData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[50, 100]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="bpm"
            stroke="#10b981"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
