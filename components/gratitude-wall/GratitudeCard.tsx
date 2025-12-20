"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ShineBorder } from "@/components/ui/shine-border";

const BRAND_BLUE = "#1D2D50";

interface GratitudeCardProps {
  id: string;
  content: string;
  author: string;
  avatar?: string;
  timestamp: string;
  reactions: number;
  onReact: () => void;
}

// Floating emoji component
function FloatingEmoji({ emoji, onComplete }: { emoji: string; onComplete: () => void }) {
  return (
    <motion.div
      className="absolute text-2xl pointer-events-none z-10"
      style={{ bottom: "50%", left: `${30 + Math.random() * 40}%` }}
      initial={{ opacity: 1, y: 0, scale: 1 }}
      animate={{ opacity: 0, y: -100, scale: 1.5, x: Math.random() * 40 - 20 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      onAnimationComplete={onComplete}
    >
      {emoji}
    </motion.div>
  );
}

export function GratitudeCard({
  id,
  content,
  author,
  avatar,
  timestamp,
  reactions,
  onReact,
}: GratitudeCardProps) {
  const [localReactions, setLocalReactions] = useState(reactions);
  const [floatingEmojis, setFloatingEmojis] = useState<{ id: number; emoji: string }[]>([]);

  const emojis = ["🤗", "🔥", "❤️", "✨", "🙏"];

  const handleReaction = () => {
    // Add floating emoji
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const emojiId = Date.now();
    setFloatingEmojis((prev) => [...prev, { id: emojiId, emoji: randomEmoji }]);
    setLocalReactions((prev) => prev + 1);
    onReact();
  };

  const removeEmoji = (id: number) => {
    setFloatingEmojis((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
    >
      <ShineBorder
        borderRadius={16}
        borderWidth={1}
        duration={10}
        color={BRAND_BLUE}
        className="p-0 bg-white/90 backdrop-blur-xl overflow-hidden"
      >
        {/* Card content */}
        <div className="relative p-5">
          {/* Floating emojis */}
          <AnimatePresence>
            {floatingEmojis.map((e) => (
              <FloatingEmoji
                key={e.id}
                emoji={e.emoji}
                onComplete={() => removeEmoji(e.id)}
              />
            ))}
          </AnimatePresence>

          {/* Content */}
          <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-4">
            "{content}"
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                style={{ background: BRAND_BLUE }}
              >
                {avatar || author.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: BRAND_BLUE }}>
                  {author}
                </p>
                <p className="text-xs text-gray-500">{timestamp}</p>
              </div>
            </div>

            {/* Reaction button */}
            <motion.button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all"
              style={{
                background: `${BRAND_BLUE}08`,
                border: `1px solid ${BRAND_BLUE}20`,
              }}
              whileHover={{ scale: 1.05, background: `${BRAND_BLUE}15` }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReaction}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.3 }}
                key={localReactions}
              >
                ❤️
              </motion.span>
              <span className="text-sm font-medium" style={{ color: BRAND_BLUE }}>
                {localReactions}
              </span>
            </motion.button>
          </div>
        </div>
      </ShineBorder>
    </motion.div>
  );
}
