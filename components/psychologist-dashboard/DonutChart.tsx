"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { consultationData } from "@/components/psychologist-dashboard/data"

export function ConsultationDonut() {
  return (
    <div className="relative h-52 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={consultationData}
            dataKey="value"
            innerRadius={70}
            outerRadius={90}
            paddingAngle={4}
          >
            {consultationData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-sm text-[#6B7280]">Total Patients</p>
        <p className="text-2xl font-semibold text-[#1E1B4B]">17,498</p>
      </div>
    </div>
  )
}
