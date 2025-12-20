"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Clock, Target } from "lucide-react";

const BRAND_BLUE = "#1D2D50";

interface StatsCardProps {
  variant?: "light" | "dark";
}

// Simple bar chart visualization
function MiniBarChart({ variant }: { variant: "light" | "dark" }) {
  const isLight = variant === "light";
  const bars = [40, 65, 45, 80, 55, 90, 70];
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div className="flex items-end justify-between gap-1 h-20">
      {bars.map((height, index) => (
        <div key={index} className="flex flex-col items-center gap-1 flex-1">
          <motion.div
            className="w-full rounded-t-sm"
            style={{
              background: index === 5 
                ? "#22C55E" 
                : (isLight ? `${BRAND_BLUE}40` : "rgba(245, 232, 199, 0.4)"),
            }}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />
          <span 
            className="text-[10px]"
            style={{ color: isLight ? "#9CA3AF" : "rgba(245, 232, 199, 0.5)" }}
          >
            {days[index]}
          </span>
        </div>
      ))}
    </div>
  );
}

export function StatsCard({ variant = "light" }: StatsCardProps) {
  const isLight = variant === "light";

  const stats = [
    { label: "Today", value: "2h 45m", icon: Clock },
    { label: "Week", value: "18h", icon: TrendingUp },
    { label: "Streak", value: "7 days", icon: Target },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="p-2 rounded-lg"
          style={{ background: isLight ? `${BRAND_BLUE}10` : "rgba(245, 232, 199, 0.1)" }}
        >
          <BarChart3 className="w-5 h-5" style={{ color: isLight ? BRAND_BLUE : "#F5E8C7" }} />
        </div>
        <h3 
          className="text-lg font-semibold"
          style={{ color: isLight ? "#111827" : "#F5E8C7" }}
        >
          Focus Stats
        </h3>
      </div>

      {/* Chart */}
      <div 
        className="p-3 rounded-lg mb-4"
        style={{ background: isLight ? `${BRAND_BLUE}05` : "rgba(245, 232, 199, 0.05)" }}
      >
        <MiniBarChart variant={variant} />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="text-center p-2 rounded-lg"
              style={{ background: isLight ? `${BRAND_BLUE}05` : "rgba(245, 232, 199, 0.05)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Icon 
                className="w-4 h-4 mx-auto mb-1" 
                style={{ color: isLight ? BRAND_BLUE : "#F5E8C7" }}
              />
              <div 
                className="text-sm font-bold"
                style={{ color: isLight ? "#111827" : "#F5E8C7" }}
              >
                {stat.value}
              </div>
              <div 
                className="text-[10px]"
                style={{ color: isLight ? "#6B7280" : "rgba(245, 232, 199, 0.6)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

