"use client";

import { motion } from "framer-motion";

// Brand color
const BRAND_BLUE = "#1D2D50";

interface BreathingAnimationProps {
  variant?: "dark" | "light";
}

export function BreathingAnimation({ variant = "dark" }: BreathingAnimationProps) {
  const isLight = variant === "light";

  return (
    <div className="relative flex items-center justify-center w-80 h-80 md:w-96 md:h-96">
      {/* Outer glow rings */}
      <motion.div
        className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full"
        style={{
          border: isLight ? `1px solid ${BRAND_BLUE}15` : "1px solid rgba(129, 143, 180, 0.2)"
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full"
        style={{
          border: isLight ? `1px solid ${BRAND_BLUE}20` : "1px solid rgba(129, 143, 180, 0.3)"
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
      <motion.div
        className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full"
        style={{
          border: isLight ? `1px solid ${BRAND_BLUE}25` : "1px solid rgba(129, 143, 180, 0.4)"
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />

      {/* Main breathing circle */}
      <motion.div
        className="relative w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center backdrop-blur-xl"
        style={{
          background: isLight 
            ? "linear-gradient(135deg, rgba(224, 242, 254, 0.9) 0%, rgba(186, 230, 253, 0.8) 100%)"
            : "linear-gradient(135deg, rgba(67, 85, 133, 0.6) 0%, rgba(129, 143, 180, 0.4) 100%)",
          boxShadow: isLight 
            ? `0 0 60px ${BRAND_BLUE}20, inset 0 0 40px rgba(255, 255, 255, 0.5)`
            : "0 0 60px rgba(129, 143, 180, 0.4), inset 0 0 40px rgba(245, 232, 199, 0.1)",
          border: isLight ? `1px solid ${BRAND_BLUE}20` : "none"
        }}
        animate={{
          scale: [1, 1.25, 1.25, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 1],
        }}
      >
        {/* Inner glowing core */}
        <motion.div
          className="w-24 h-24 md:w-28 md:h-28 rounded-full"
          style={{
            background: isLight 
              ? "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(186, 230, 253, 0.4) 50%, transparent 70%)"
              : "radial-gradient(circle at 30% 30%, rgba(245, 232, 199, 0.4) 0%, rgba(245, 232, 199, 0.1) 50%, transparent 70%)",
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Breathing text */}
        <motion.span
          className="absolute font-medium text-sm md:text-base tracking-wider"
          style={{
            color: isLight ? BRAND_BLUE : "#F5E8C7"
          }}
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Breathe
        </motion.span>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${50 + 35 * Math.cos((i * Math.PI * 2) / 6)}%`,
            top: `${50 + 35 * Math.sin((i * Math.PI * 2) / 6)}%`,
            background: isLight ? `${BRAND_BLUE}40` : "rgba(245, 232, 199, 0.3)"
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
