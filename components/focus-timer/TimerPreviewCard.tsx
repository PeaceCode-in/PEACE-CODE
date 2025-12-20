"use client";

import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, Settings, Timer } from "lucide-react";

const BRAND_BLUE = "#1D2D50";

interface TimerPreviewCardProps {
  onStart: () => void;
  variant?: "light" | "dark";
}

export function TimerPreviewCard({ onStart, variant = "light" }: TimerPreviewCardProps) {
  const isLight = variant === "light";

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div
            className="p-2 rounded-lg"
            style={{ background: isLight ? `${BRAND_BLUE}10` : "rgba(245, 232, 199, 0.1)" }}
          >
            <Timer className="w-5 h-5" style={{ color: isLight ? BRAND_BLUE : "#F5E8C7" }} />
          </div>
          <h3 
            className="text-lg font-semibold"
            style={{ color: isLight ? "#111827" : "#F5E8C7" }}
          >
            Focus Timer
          </h3>
        </div>
        <button
          className="p-2 rounded-lg transition-colors"
          style={{ 
            background: isLight ? `${BRAND_BLUE}10` : "rgba(245, 232, 199, 0.1)",
            color: isLight ? BRAND_BLUE : "#F5E8C7"
          }}
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>

      {/* Timer display */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <div 
          className="text-6xl md:text-7xl font-bold font-mono tracking-tight mb-4"
          style={{ color: isLight ? BRAND_BLUE : "#F5E8C7" }}
        >
          25:00
        </div>

        {/* Session type tabs */}
        <div 
          className="flex gap-2 p-1 rounded-lg mb-6"
          style={{ background: isLight ? `${BRAND_BLUE}08` : "rgba(245, 232, 199, 0.08)" }}
        >
          {["Focus", "Short Break", "Long Break"].map((type, index) => (
            <button
              key={type}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                index === 0 ? "shadow-sm" : ""
              }`}
              style={{
                background: index === 0 
                  ? (isLight ? "white" : "rgba(245, 232, 199, 0.15)")
                  : "transparent",
                color: index === 0 
                  ? (isLight ? BRAND_BLUE : "#F5E8C7")
                  : (isLight ? "#6B7280" : "rgba(245, 232, 199, 0.5)"),
              }}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Control buttons */}
        <div className="flex items-center gap-3">
          <motion.button
            className="p-3 rounded-full transition-colors"
            style={{ 
              background: isLight ? `${BRAND_BLUE}10` : "rgba(245, 232, 199, 0.1)",
              color: isLight ? BRAND_BLUE : "#F5E8C7"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-5 h-5" />
          </motion.button>

          {/* Main start button with shimmer effect */}
          <motion.button
            className="relative px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden"
            style={{ 
              background: isLight ? BRAND_BLUE : "#F5E8C7",
              color: isLight ? "white" : BRAND_BLUE
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Start Focus
            </span>
          </motion.button>

          <motion.button
            className="p-3 rounded-full transition-colors"
            style={{ 
              background: isLight ? `${BRAND_BLUE}10` : "rgba(245, 232, 199, 0.1)",
              color: isLight ? BRAND_BLUE : "#F5E8C7"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Pause className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Footer info */}
      <div className="flex justify-center gap-6 mt-4">
        {[
          { label: "Sessions", value: "0/4" },
          { label: "Total Focus", value: "0h 0m" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div 
              className="text-sm font-semibold"
              style={{ color: isLight ? "#111827" : "#F5E8C7" }}
            >
              {stat.value}
            </div>
            <div 
              className="text-xs"
              style={{ color: isLight ? "#6B7280" : "rgba(245, 232, 199, 0.6)" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

