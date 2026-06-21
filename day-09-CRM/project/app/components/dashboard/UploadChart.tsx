"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", uploads: 5 },
  { day: "Tue", uploads: 8 },
  { day: "Wed", uploads: 4 },
  { day: "Thu", uploads: 10 },
  { day: "Fri", uploads: 12 },
];

export default function UploadChart() {
  return (
    <div className="rounded-2xl border bg-zinc-950 p-6">
      <h3 className="mb-4 text-lg font-semibold">
        Upload Analytics
      </h3>

      <div className="h-72">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <XAxis dataKey="day" />
            <Tooltip />
            <Area
              dataKey="uploads"
              stroke="#2563eb"
              fill="#93c5fd"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}