"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"
import { genderData } from "@/components/psychologist-dashboard/data"

export function GenderChart() {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={genderData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid stroke="#E5E7EB" strokeDasharray="4 4" vertical={false} />
          <XAxis dataKey="day" tick={{ fill: "#6B7280", fontSize: 12 }} axisLine={false} />
          <YAxis tick={{ fill: "#6B7280", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              borderColor: "#E5E7EB",
              fontSize: 12,
              color: "#111827",
            }}
          />
          <Bar dataKey="male" stackId="a" fill="#4C1D95" radius={[8, 8, 0, 0]} />
          <Bar dataKey="female" stackId="a" fill="#C4B5FD" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
