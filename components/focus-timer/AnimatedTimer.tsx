"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BRAND_BLUE = "#1D2D50";

interface AnimatedTimerProps {
  size?: number;
  variant?: "light" | "dark";
}

export function AnimatedTimer({ size = 280, variant = "light" }: AnimatedTimerProps) {
  const [seconds, setSeconds] = useState(0);
  const isLight = variant === "light";
  
  // Animate countdown from 25:00 to 24:59 repeatedly for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev + 1) % 60);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = 24;
  const displaySeconds = 60 - seconds;
  const progress = seconds / 60;
  
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Outer glow rings */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: isLight 
            ? `radial-gradient(circle, ${BRAND_BLUE}10 0%, transparent 70%)`
            : "radial-gradient(circle, rgba(245, 232, 199, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Background circle */}
      <svg
        className="absolute inset-0"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={isLight ? `${BRAND_BLUE}15` : "rgba(129, 143, 180, 0.2)"}
          strokeWidth={strokeWidth}
        />
        
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={isLight ? BRAND_BLUE : "#F5E8C7"}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.5, ease: "linear" }}
        />

        {/* Tick marks */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const innerRadius = radius - 15;
          const outerRadius = radius - 8;
          const x1 = size / 2 + innerRadius * Math.cos(angle);
          const y1 = size / 2 + innerRadius * Math.sin(angle);
          const x2 = size / 2 + outerRadius * Math.cos(angle);
          const y2 = size / 2 + outerRadius * Math.sin(angle);
          
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isLight ? `${BRAND_BLUE}30` : "rgba(245, 232, 199, 0.3)"}
              strokeWidth={2}
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Timer display */}
        <motion.div
          className="text-5xl md:text-6xl font-bold font-mono tracking-tight"
          style={{ color: isLight ? BRAND_BLUE : "#F5E8C7" }}
          key={displaySeconds}
          initial={{ scale: 1.1, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {String(minutes).padStart(2, "0")}:{String(displaySeconds === 60 ? 0 : displaySeconds).padStart(2, "0")}
        </motion.div>
        
        {/* Label */}
        <motion.span
          className="text-sm font-medium mt-2 uppercase tracking-widest"
          style={{ color: isLight ? `${BRAND_BLUE}80` : "rgba(245, 232, 199, 0.6)" }}
        >
          Focus Mode
        </motion.span>

        {/* Pulse dot */}
        <motion.div
          className="w-2 h-2 rounded-full mt-3"
          style={{ background: "#22c55e" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${50 + 42 * Math.cos((i * Math.PI * 2) / 6)}%`,
            top: `${50 + 42 * Math.sin((i * Math.PI * 2) / 6)}%`,
            background: isLight ? `${BRAND_BLUE}40` : "rgba(245, 232, 199, 0.4)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}

