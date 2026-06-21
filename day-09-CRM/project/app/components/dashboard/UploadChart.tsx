"use client";

import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface Props {
  data: {
    day: string;
    uploads: number;
  }[];
}

export default function UploadChart({
  data,
}: Props) {
  const totalUploads = data.reduce(
    (sum, item) => sum + item.uploads,
    0
  );

  const lastValue =
    data[data.length - 1]?.uploads ?? 0;

  const firstValue =
    data[0]?.uploads ?? 0;

  const growth =
    firstValue === 0
      ? 0
      : (
          ((lastValue - firstValue) /
            firstValue) *
          100
        ).toFixed(1);

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-slate-800
        bg-slate-900
        p-6
        shadow-2xl
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -right-10
          -top-10
          h-48
          w-48
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      {/* Header */}

      <div className="mb-8 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Upload Analytics
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Last 7 days upload activity
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Total Uploads
          </p>

          <h2 className="mt-1 text-4xl font-bold text-white">
            {totalUploads}
          </h2>

          <div
            className="
              mt-2
              inline-flex
              rounded-full
              border
              border-emerald-500/20
              bg-emerald-500/10
              px-3
              py-1
              text-xs
              font-medium
              text-emerald-400
            "
          >
            ↑ {growth}%
          </div>
        </div>
      </div>

      {/* Chart */}

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <defs>
              <linearGradient
                id="areaGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#3B82F6"
                  stopOpacity={0.4}
                />

                <stop
                  offset="100%"
                  stopColor="#3B82F6"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: "#94a3b8",
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#94a3b8",
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{
                stroke: "#3B82F6",
                strokeDasharray: "4 4",
              }}
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "16px",
                color: "#fff",
              }}
            />

            {/* Area */}

            <Area
              type="monotone"
              dataKey="uploads"
              fill="url(#areaGradient)"
              stroke="none"
            />

            {/* Curvy Line */}

            <Line
              type="monotone"
              dataKey="uploads"
              stroke="#3B82F6"
              strokeWidth={4}
              dot={false}
              activeDot={{
                r: 8,
                fill: "#3B82F6",
                stroke: "#fff",
                strokeWidth: 3,
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}