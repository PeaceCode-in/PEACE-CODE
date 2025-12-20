"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Wind, Timer, Moon, Heart, Brain, Zap, Sparkles, LucideIcon, Play } from "lucide-react";

interface BreathingTechniqueCardProps {
  title: string;
  description: string;
  benefits: string[];
  pattern: number[];
  patternLabels: string[];
  icon: LucideIcon;
  animationType: "box" | "478" | "diaphragmatic" | "alternate" | "resonant" | "lion";
  className?: string;
  onStart: () => void;
  variant?: "dark" | "light";
}

// Brand color
const BRAND_BLUE = "#1D2D50";

// Micro-animation for Box Breathing (square pattern with moving dot)
function BoxBreathingAnimation({ isLight }: { isLight: boolean }) {
  return (
    <div className="relative w-16 h-16">
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Square path */}
        <rect
          x="8"
          y="8"
          width="48"
          height="48"
          fill="none"
          stroke={isLight ? "rgba(29, 45, 80, 0.2)" : "rgba(129, 143, 180, 0.3)"}
          strokeWidth="2"
          rx="4"
        />
        {/* Animated dot moving around the square */}
        <motion.circle
          r="5"
          fill={isLight ? BRAND_BLUE : "#F5E8C7"}
          animate={{
            cx: [8, 56, 56, 8, 8],
            cy: [8, 8, 56, 56, 8],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
        {/* Corner indicators */}
        {[[8, 8], [56, 8], [56, 56], [8, 56]].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill={isLight ? "rgba(29, 45, 80, 0.15)" : "rgba(245, 232, 199, 0.2)"}
          />
        ))}
      </svg>
    </div>
  );
}

// Micro-animation for 4-7-8 Breathing (expanding/contracting circle with phases)
function Wave478Animation({ isLight }: { isLight: boolean }) {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Outer ring */}
      <motion.div
        className="absolute w-14 h-14 rounded-full"
        style={{
          border: `2px solid ${isLight ? "rgba(29, 45, 80, 0.15)" : "rgba(245, 232, 199, 0.15)"}`,
        }}
        animate={{
          scale: [1, 1.1, 1.1, 0.9, 1],
          opacity: [0.3, 0.6, 0.6, 0.3, 0.3],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.21, 0.58, 0.95, 1],
        }}
      />
      {/* Main breathing circle */}
      <motion.div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{
          background: isLight 
            ? `linear-gradient(135deg, ${BRAND_BLUE}20, ${BRAND_BLUE}40)`
            : "linear-gradient(135deg, rgba(245, 232, 199, 0.2), rgba(245, 232, 199, 0.4))",
          border: `2px solid ${isLight ? BRAND_BLUE : "#F5E8C7"}`,
        }}
        animate={{
          scale: [1, 1.5, 1.5, 0.8, 1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.21, 0.58, 0.95, 1],
        }}
      >
        <motion.span
          className="text-xs font-medium"
          style={{ color: isLight ? BRAND_BLUE : "#F5E8C7" }}
          animate={{
            opacity: [0.5, 1, 1, 0.5, 0.5],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            times: [0, 0.21, 0.58, 0.95, 1],
          }}
        >
          4-7-8
        </motion.span>
      </motion.div>
    </div>
  );
}

// Micro-animation for Diaphragmatic (belly expansion wave)
function DiaphragmaticAnimation({ isLight }: { isLight: boolean }) {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center overflow-hidden">
      {/* Wave layers */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 40 - i * 8,
            height: 40 - i * 8,
            background: isLight 
              ? `rgba(29, 45, 80, ${0.15 + i * 0.1})`
              : `rgba(245, 232, 199, ${0.1 + i * 0.1})`,
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
      {/* Center indicator */}
      <motion.div
        className="relative w-6 h-6 rounded-full flex items-center justify-center"
        style={{
          background: isLight ? BRAND_BLUE : "#F5E8C7",
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Wind className={cn("w-3 h-3", isLight ? "text-white" : "text-[#363062]")} />
      </motion.div>
    </div>
  );
}

// Micro-animation for Alternate Nostril (yin-yang style oscillation)
function AlternateNostrilAnimation({ isLight }: { isLight: boolean }) {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Container */}
      <div className="relative w-14 h-8 flex items-center justify-between">
        {/* Left nostril indicator */}
        <motion.div
          className="w-5 h-5 rounded-full flex items-center justify-center"
          style={{ 
            background: isLight ? BRAND_BLUE : "rgba(245, 232, 199, 0.8)",
          }}
          animate={{
            scale: [1, 1.3, 1, 0.8, 1],
            opacity: [1, 1, 0.4, 0.4, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className={cn("text-[8px] font-bold", isLight ? "text-white" : "text-[#363062]")}>L</span>
        </motion.div>
        
        {/* Connecting line with moving indicator */}
        <div className="flex-1 h-0.5 mx-1 relative" style={{ background: isLight ? "rgba(29, 45, 80, 0.2)" : "rgba(245, 232, 199, 0.2)" }}>
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
            style={{ background: isLight ? BRAND_BLUE : "#F5E8C7" }}
            animate={{
              left: ["0%", "100%", "100%", "0%", "0%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          />
        </div>
        
        {/* Right nostril indicator */}
        <motion.div
          className="w-5 h-5 rounded-full flex items-center justify-center"
          style={{ 
            background: isLight ? `${BRAND_BLUE}80` : "rgba(129, 143, 180, 0.8)",
          }}
          animate={{
            scale: [0.8, 0.8, 1, 1.3, 0.8],
            opacity: [0.4, 0.4, 1, 1, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className={cn("text-[8px] font-bold", isLight ? "text-white" : "text-[#363062]")}>R</span>
        </motion.div>
      </div>
    </div>
  );
}

// Micro-animation for Resonant (heart pulse with rhythm)
function ResonantAnimation({ isLight }: { isLight: boolean }) {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 32 + i * 12,
            height: 32 + i * 12,
            border: `1px solid ${isLight ? "rgba(239, 68, 68, 0.3)" : "rgba(252, 165, 165, 0.3)"}`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.4,
          }}
        />
      ))}
      {/* Heart icon */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1, 1.25, 1],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.1, 0.2, 0.3, 1],
        }}
      >
        <Heart 
          className={cn("w-8 h-8", isLight ? "text-red-500" : "text-red-300")} 
          fill={isLight ? "#ef4444" : "#fca5a5"} 
        />
      </motion.div>
    </div>
  );
}

// Micro-animation for Lion's Breath (energetic burst)
function LionAnimation({ isLight }: { isLight: boolean }) {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Energy rays */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-4 rounded-full origin-bottom"
          style={{
            background: isLight 
              ? `linear-gradient(to top, transparent, ${BRAND_BLUE}60)`
              : "linear-gradient(to top, transparent, rgba(250, 204, 21, 0.6))",
            transform: `rotate(${i * 45}deg)`,
            transformOrigin: "center 32px",
          }}
          animate={{
            scaleY: [0.5, 1.5, 0.5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Center burst */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        animate={{
          scale: [1, 1.4, 0.9, 1],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: isLight ? BRAND_BLUE : "rgba(250, 204, 21, 0.3)" }}
        >
          <Zap className={cn("w-5 h-5", isLight ? "text-amber-400" : "text-yellow-300")} fill={isLight ? "#fbbf24" : "#fde047"} />
        </div>
      </motion.div>
    </div>
  );
}

const animationComponents = {
  box: BoxBreathingAnimation,
  "478": Wave478Animation,
  diaphragmatic: DiaphragmaticAnimation,
  alternate: AlternateNostrilAnimation,
  resonant: ResonantAnimation,
  lion: LionAnimation,
};

export function BreathingTechniqueCard({
  title,
  description,
  benefits,
  pattern,
  patternLabels,
  icon: Icon,
  animationType,
  className,
  onStart,
  variant = "dark",
}: BreathingTechniqueCardProps) {
  const isLight = variant === "light";
  const AnimationComponent = animationComponents[animationType];

  return (
    <motion.div
      className={cn(
        "relative group h-full p-6 rounded-2xl backdrop-blur-xl overflow-hidden transition-all duration-500 flex flex-col",
        className
      )}
      style={{
        background: isLight 
          ? "rgba(255, 255, 255, 0.75)"
          : "rgba(67, 85, 133, 0.4)",
        border: isLight 
          ? "1px solid rgba(29, 45, 80, 0.1)"
          : "1px solid rgba(129, 143, 180, 0.3)",
        boxShadow: isLight 
          ? "0 4px 24px rgba(29, 45, 80, 0.06)"
          : "none"
      }}
      whileHover={{ 
        scale: 1.01,
        boxShadow: isLight 
          ? "0 8px 40px rgba(29, 45, 80, 0.12)"
          : "0 0 40px rgba(129, 143, 180, 0.2)"
      }}
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isLight 
            ? "linear-gradient(135deg, rgba(29, 45, 80, 0.03) 0%, transparent 50%)"
            : "linear-gradient(135deg, rgba(129, 143, 180, 0.1) 0%, transparent 50%)"
        }}
      />

      {/* Border beam effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: isLight 
            ? "linear-gradient(90deg, transparent, rgba(29, 45, 80, 0.1), transparent)"
            : "linear-gradient(90deg, transparent, rgba(245, 232, 199, 0.15), transparent)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["-200% 0", "200% 0"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Icon + Animation */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="p-3 rounded-xl backdrop-blur-sm"
            style={{
              background: isLight 
                ? `${BRAND_BLUE}10`
                : "rgba(245, 232, 199, 0.1)",
              border: isLight 
                ? `1px solid ${BRAND_BLUE}20`
                : "1px solid rgba(245, 232, 199, 0.2)"
            }}
          >
            <Icon className="w-6 h-6" style={{ color: isLight ? BRAND_BLUE : "#F5E8C7" }} />
          </div>
          <AnimationComponent isLight={isLight} />
        </div>

        {/* Title */}
        <h3 
          className="text-xl font-bold mb-2"
          style={{ color: isLight ? "#111827" : "#F5E8C7" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p 
          className="text-sm mb-4 flex-grow"
          style={{ color: isLight ? "#4b5563" : "#818FB4" }}
        >
          {description}
        </p>

        {/* Pattern display */}
        <div 
          className="flex flex-wrap gap-2 mb-4"
          style={{
            borderTop: isLight ? `1px solid ${BRAND_BLUE}10` : "1px solid rgba(129, 143, 180, 0.2)",
            paddingTop: "1rem"
          }}
        >
          {pattern.map((count, idx) => (
            count > 0 && (
              <div
                key={idx}
                className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs"
                style={{
                  background: isLight 
                    ? `${BRAND_BLUE}08`
                    : "rgba(245, 232, 199, 0.1)"
                }}
              >
                <span style={{ color: isLight ? "#374151" : "#818FB4" }}>{patternLabels[idx]}</span>
                <span 
                  className="font-bold"
                  style={{ color: isLight ? BRAND_BLUE : "#F5E8C7" }}
                >
                  {count}s
                </span>
              </div>
            )
          ))}
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap gap-2 mb-4">
          {benefits.map((benefit, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: isLight 
                  ? `${BRAND_BLUE}10`
                  : "rgba(129, 143, 180, 0.2)",
                color: isLight ? BRAND_BLUE : "#F5E8C7",
                border: isLight 
                  ? `1px solid ${BRAND_BLUE}20`
                  : "1px solid rgba(245, 232, 199, 0.2)"
              }}
            >
              {benefit}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all"
          style={{
            background: isLight ? BRAND_BLUE : "#F5E8C7",
            color: isLight ? "#ffffff" : "#363062"
          }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: isLight 
              ? `0 4px 20px ${BRAND_BLUE}60`
              : "0 4px 20px rgba(245, 232, 199, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
        >
          <Play className="w-4 h-4" />
          Start Session
        </motion.button>
      </div>
    </motion.div>
  );
}
