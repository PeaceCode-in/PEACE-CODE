"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { X, Sparkles, Lock, TreeDeciduous, Flame } from "lucide-react";

const BRAND_BLUE = "#1D2D50";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: "public" | "private" | "tree" | "reaction";
}

export function SignUpModal({ isOpen, onClose, trigger = "public" }: SignUpModalProps) {
  const router = useRouter();

  const messages = {
    public: {
      title: "Share Your Gratitude! 🌟",
      subtitle: "Join the garden to plant your first gratitude.",
    },
    private: {
      title: "Your Private Vault Awaits 🔐",
      subtitle: "Keep a secret gratitude journal just for you.",
    },
    tree: {
      title: "Grow Your Gratitude Tree 🌳",
      subtitle: "Earn Karma Seeds and watch your tree bloom!",
    },
    reaction: {
      title: "Spread the Love! ❤️",
      subtitle: "Join to react and support your peers.",
    },
  };

  const currentMessage = messages[trigger];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-md rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Rainbow top border */}
              <div
                className="h-1.5"
                style={{
                  background: "linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3, #54a0ff, #5f27cd)",
                }}
              />

              {/* Close button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={onClose}
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className="p-8 text-center">
                {/* Icon */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,182,193,0.3), rgba(173,216,230,0.3))",
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-4xl">
                    {trigger === "tree" ? "🌳" : trigger === "private" ? "🔐" : trigger === "reaction" ? "❤️" : "🌟"}
                  </span>
                </motion.div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentMessage.title}
                </h2>
                <p className="text-gray-600 mb-8">
                  {currentMessage.subtitle}
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8 text-left">
                  {[
                    { icon: Flame, text: "Start your gratitude streak today!" },
                    { icon: Lock, text: "Unlock your private journal" },
                    { icon: TreeDeciduous, text: "Grow your Gratitude Tree" },
                  ].map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ background: `${BRAND_BLUE}05` }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <benefit.icon className="w-5 h-5" style={{ color: BRAND_BLUE }} />
                      <span className="text-sm text-gray-700">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <motion.button
                    className="w-full py-4 rounded-xl font-semibold text-white"
                    style={{ background: BRAND_BLUE }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push("/auth/login")}
                  >
                    Join the Garden
                  </motion.button>

                  <motion.button
                    className="w-full py-4 rounded-xl font-semibold transition-colors"
                    style={{
                      background: "transparent",
                      color: BRAND_BLUE,
                      border: `1px solid ${BRAND_BLUE}30`,
                    }}
                    whileHover={{ background: `${BRAND_BLUE}05` }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push("/auth/login")}
                  >
                    Already have an account? Sign in
                  </motion.button>
                </div>

                {/* Trust text */}
                <p className="text-xs text-gray-500 mt-6">
                  Join 5,000+ students spreading positivity daily
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

