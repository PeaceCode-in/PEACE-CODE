"use client"

import { LineChart, Line, ResponsiveContainer } from "recharts"

export function MiniSparkline({ data }: { data: number[] }) {
  const formatted = data.map((value, index) => ({ index, value }))

  return (
    <div className="h-10 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formatted}>
          <Line type="monotone" dataKey="value" stroke="#7C3AED" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
