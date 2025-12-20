"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const BRAND_BLUE = "#1D2D50";

interface GratitudeTreeProps {
  onClick?: () => void;
}

export function GratitudeTree({ onClick }: GratitudeTreeProps) {
  return (
    <motion.div
      className="relative w-64 h-80 md:w-80 md:h-96 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect behind tree */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, rgba(224, 242, 254, 0.3) 50%, transparent 70%)",
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

      {/* Tree trunk */}
      <svg
        viewBox="0 0 200 300"
        className="absolute inset-0 w-full h-full"
        style={{ filter: "drop-shadow(0 4px 20px rgba(34, 197, 94, 0.3))" }}
      >
        {/* Trunk */}
        <motion.path
          d="M90 280 Q95 250 92 220 Q88 190 95 160 L105 160 Q112 190 108 220 Q105 250 110 280 Z"
          fill="#8B5A2B"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Main foliage - bottom layer */}
        <motion.ellipse
          cx="100"
          cy="130"
          rx="70"
          ry="50"
          fill="#22C55E"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        
        {/* Middle layer */}
        <motion.ellipse
          cx="100"
          cy="90"
          rx="55"
          ry="40"
          fill="#16A34A"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />
        
        {/* Top layer */}
        <motion.ellipse
          cx="100"
          cy="55"
          rx="40"
          ry="30"
          fill="#15803D"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />
      </svg>

      {/* Floating particles/leaves */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 6 + Math.random() * 6,
            height: 6 + Math.random() * 6,
            left: `${30 + Math.random() * 40}%`,
            top: `${20 + Math.random() * 40}%`,
            background: i % 3 === 0 ? "#FDE047" : i % 3 === 1 ? "#F472B6" : "#22C55E",
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sparkle effects */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${15 + (i % 3) * 20}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </motion.div>
      ))}

      {/* Karma seeds indicator */}
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2"
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          border: `1px solid ${BRAND_BLUE}20`,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-lg">🌱</span>
        <span className="text-sm font-semibold" style={{ color: BRAND_BLUE }}>
          0 Karma Seeds
        </span>
      </motion.div>
    </motion.div>
  );
}

