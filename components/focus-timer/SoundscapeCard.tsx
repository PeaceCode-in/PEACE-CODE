"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  BookOpen, 
  CloudRain, 
  Waves, 
  TreeDeciduous, 
  Wind,
  Volume2,
  Lock
} from "lucide-react";

const BRAND_BLUE = "#1D2D50";

interface SoundscapeCardProps {
  onPlay: () => void;
  variant?: "light" | "dark";
}

const soundscapes = [
  { id: "library", name: "Quiet Library", icon: BookOpen, color: "#8B5CF6" },
  { id: "rain", name: "Gentle Rainfall", icon: CloudRain, color: "#3B82F6" },
  { id: "brown-noise", name: "Brown Noise", icon: Wind, color: "#92400E" },
  { id: "forest", name: "Forest Birds", icon: TreeDeciduous, color: "#22C55E" },
  { id: "ocean", name: "Ocean Waves", icon: Waves, color: "#0EA5E9" },
];

// Sound wave animation component
function SoundWaves({ isActive, color }: { isActive: boolean; color: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {isActive && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 40 + i * 20,
                height: 40 + i * 20,
                border: `2px solid ${color}`,
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}

export function SoundscapeCard({ onPlay, variant = "light" }: SoundscapeCardProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const isLight = variant === "light";

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className="p-2 rounded-lg"
            style={{ background: isLight ? `${BRAND_BLUE}10` : "rgba(245, 232, 199, 0.1)" }}
          >
            <Volume2 className="w-5 h-5" style={{ color: isLight ? BRAND_BLUE : "#F5E8C7" }} />
          </div>
          <h3 
            className="text-lg font-semibold"
            style={{ color: isLight ? "#111827" : "#F5E8C7" }}
          >
            Ambient Soundscapes
          </h3>
        </div>
        <span
          className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
          style={{
            background: isLight ? "rgba(239, 68, 68, 0.1)" : "rgba(239, 68, 68, 0.2)",
            color: "#EF4444",
          }}
        >
          <Lock className="w-3 h-3" />
          Premium
        </span>
      </div>

      {/* Soundscape grid */}
      <div className="grid grid-cols-5 gap-3 flex-grow">
        {soundscapes.map((sound) => {
          const Icon = sound.icon;
          const isHovered = hoveredId === sound.id;

          return (
            <motion.button
              key={sound.id}
              className="relative flex flex-col items-center justify-center p-3 rounded-xl transition-all"
              style={{
                background: isHovered 
                  ? (isLight ? `${sound.color}15` : `${sound.color}30`)
                  : (isLight ? `${BRAND_BLUE}05` : "rgba(245, 232, 199, 0.05)"),
                border: `1px solid ${isHovered ? sound.color : (isLight ? `${BRAND_BLUE}10` : "rgba(245, 232, 199, 0.1)")}`,
              }}
              onMouseEnter={() => setHoveredId(sound.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={onPlay}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SoundWaves isActive={isHovered} color={sound.color} />
              <Icon 
                className="w-6 h-6 mb-1 relative z-10 transition-colors"
                style={{ color: isHovered ? sound.color : (isLight ? BRAND_BLUE : "#F5E8C7") }}
              />
              <span 
                className="text-[10px] font-medium text-center relative z-10"
                style={{ color: isLight ? "#374151" : "rgba(245, 232, 199, 0.8)" }}
              >
                {sound.name.split(" ")[0]}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Footer text */}
      <p 
        className="text-xs mt-4"
        style={{ color: isLight ? "#6B7280" : "rgba(245, 232, 199, 0.6)" }}
      >
        Immerse yourself in calming audio environments designed for deep focus.
      </p>
    </div>
  );
}

