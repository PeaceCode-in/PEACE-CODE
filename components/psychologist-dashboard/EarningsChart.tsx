"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { earningsData } from "@/components/psychologist-dashboard/data"

const chartColors = {
  profit: "#7C3AED",
  expenses: "#A78BFA",
}

export function EarningsChart() {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={earningsData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          <CartesianGrid stroke="#E5E7EB" strokeDasharray="4 4" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: "#6B7280", fontSize: 12 }} axisLine={false} />
          <YAxis tick={{ fill: "#6B7280", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              borderColor: "#E5E7EB",
              fontSize: 12,
              color: "#111827",
            }}
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke={chartColors.profit}
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke={chartColors.expenses}
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
