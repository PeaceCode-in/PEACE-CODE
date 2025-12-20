"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Globe, Lock, X } from "lucide-react";

const BRAND_BLUE = "#1D2D50";

interface FloatingActionButtonProps {
  onAction: (type: "public" | "private") => void;
}

export function FloatingActionButton({ onAction }: FloatingActionButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // Positioned higher (bottom-24) to avoid overlapping with the AI chat button
    <div className="fixed bottom-24 right-8 z-40">
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
            />

            {/* Options */}
            <motion.div
              className="absolute bottom-20 right-0 flex flex-col gap-3"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
            >
              {/* Public Shoutout */}
              <motion.button
                className="flex items-center gap-3 px-5 py-3 rounded-full text-white font-medium shadow-lg whitespace-nowrap"
                style={{ background: BRAND_BLUE }}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onAction("public");
                  setIsExpanded(false);
                }}
              >
                <Globe className="w-5 h-5" />
                Public Shoutout
              </motion.button>

              {/* Private Note */}
              <motion.button
                className="flex items-center gap-3 px-5 py-3 rounded-full font-medium shadow-lg whitespace-nowrap backdrop-blur-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  color: BRAND_BLUE,
                  border: `1px solid ${BRAND_BLUE}30`,
                }}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onAction("private");
                  setIsExpanded(false);
                }}
              >
                <Lock className="w-5 h-5" />
                Private Note
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main FAB - Clean navy blue design, no rainbow */}
      <motion.button
        className="relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white overflow-hidden"
        style={{
          background: BRAND_BLUE,
          boxShadow: `0 8px 32px ${BRAND_BLUE}40`,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        animate={{
          rotate: isExpanded ? 45 : 0,
        }}
      >
        {/* Subtle shimmer effect */}
        {!isExpanded && (
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
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
        )}

        {/* Pulsing ring */}
        {!isExpanded && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: `2px solid ${BRAND_BLUE}60`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}

        {isExpanded ? (
          <X className="w-7 h-7 relative z-10" />
        ) : (
          <Plus className="w-7 h-7 relative z-10" />
        )}
      </motion.button>
    </div>
  );
}
