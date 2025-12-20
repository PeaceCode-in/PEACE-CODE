"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import {
  GratitudeTree,
  GratitudeCard,
  GratitudeFeatureShowcase,
  FloatingActionButton,
  SignUpModal,
  GratitudeTestimonials,
} from "@/components/gratitude-wall";
import {
  Sparkles,
  Heart,
  Users,
  TrendingUp,
  Shield,
  Star,
  Leaf,
  Sun,
} from "lucide-react";
import { Toaster } from "sonner";

const BRAND_BLUE = "#1D2D50";

// Mock gratitude posts
const mockPosts = [
  {
    id: "1",
    content: "Grateful for my study group who helped me ace my finals! You guys are the best! 🎓",
    author: "Priya S.",
    timestamp: "2 hours ago",
    reactions: 42,
  },
  {
    id: "2",
    content: "The sunrise this morning was absolutely beautiful. Sometimes the little things matter most.",
    author: "Arjun M.",
    timestamp: "4 hours ago",
    reactions: 28,
  },
  {
    id: "3",
    content: "Thank you to the kind stranger who paid for my coffee today. Faith in humanity restored! ☕",
    author: "Sneha R.",
    timestamp: "5 hours ago",
    reactions: 56,
  },
  {
    id: "4",
    content: "Grateful for my mental health journey. It's not easy, but I'm proud of how far I've come. 💪",
    author: "Rahul K.",
    timestamp: "6 hours ago",
    reactions: 89,
  },
  {
    id: "5",
    content: "My dog greeted me with so much excitement today. Pure unconditional love! 🐕",
    author: "Meera P.",
    timestamp: "8 hours ago",
    reactions: 34,
  },
  {
    id: "6",
    content: "Finally finished my thesis draft! Grateful for my advisor's patience and guidance.",
    author: "Aditya V.",
    timestamp: "10 hours ago",
    reactions: 67,
  },
  {
    id: "7",
    content: "The library staff remembered my name today. Small gestures, big impact! 📚",
    author: "Kavya L.",
    timestamp: "12 hours ago",
    reactions: 23,
  },
  {
    id: "8",
    content: "Grateful for Peace Code helping me through tough times. This community is everything! 💙",
    author: "Vikram S.",
    timestamp: "1 day ago",
    reactions: 112,
  },
  {
    id: "9",
    content: "Mom's home-cooked meal after months of hostel food. Nothing compares! 🍛",
    author: "Ananya D.",
    timestamp: "1 day ago",
    reactions: 78,
  },
];

// Simulated auth
const useAuth = () => ({ user: null, isAuthenticated: false });

export default function GratitudeWallPage() {
  const { isAuthenticated } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTrigger, setModalTrigger] = useState<"public" | "private" | "tree" | "reaction">("public");
  const [gratitudeCount, setGratitudeCount] = useState(12403);

  // Auto-increment gratitude counter
  useEffect(() => {
    const interval = setInterval(() => {
      setGratitudeCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleProtectedAction = (trigger: "public" | "private" | "tree" | "reaction") => {
    if (!isAuthenticated) {
      setModalTrigger(trigger);
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f0f9ff] to-white">
      <Navigation />
      <Toaster richColors position="top-center" />

      {/* Subtle grid pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20 -z-10"
        style={{
          backgroundImage: `radial-gradient(${BRAND_BLUE}08 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero Section: The Infinite Garden */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden pt-28 pb-20 px-4">
        {/* Floating light orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] -z-10"
          style={{ background: "rgba(144, 238, 144, 0.2)" }}
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] -z-10"
          style={{ background: "rgba(255, 218, 185, 0.2)" }}
          animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full blur-[80px] -z-10"
          style={{ background: "rgba(173, 216, 230, 0.25)" }}
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md"
              style={{
                background: "linear-gradient(135deg, rgba(144,238,144,0.2), rgba(255,218,185,0.2), rgba(173,216,230,0.2))",
                border: `1px solid ${BRAND_BLUE}15`,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Leaf className="w-4 h-4" style={{ color: "#22C55E" }} />
              <span className="text-sm font-medium text-gray-700">The Gratitude Garden</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Plant Positivity.
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #22C55E, #10B981, #059669)",
                }}
              >
                Watch it Grow.
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join 5,000+ students sharing good vibes daily. Express gratitude, earn Karma Seeds, and grow your virtual garden.
            </p>

            {/* Stats ticker */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md mb-12"
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                border: `1px solid ${BRAND_BLUE}15`,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-yellow-500" />
              </motion.div>
              <span className="text-lg font-semibold" style={{ color: BRAND_BLUE }}>
                {gratitudeCount.toLocaleString()}
              </span>
              <span className="text-gray-600">Gratitudes Shared Today</span>
            </motion.div>
          </motion.div>

          {/* Gratitude Tree - with proper spacing */}
          <motion.div
            className="flex justify-center pb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <GratitudeTree onClick={() => handleProtectedAction("tree")} />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div
            className="w-6 h-10 rounded-full flex justify-center pt-2"
            style={{ border: `2px solid ${BRAND_BLUE}40` }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: BRAND_BLUE }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section
        className="py-10 backdrop-blur-xl"
        style={{
          background: "linear-gradient(180deg, rgba(240, 249, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)",
          borderTop: `1px solid ${BRAND_BLUE}10`,
          borderBottom: `1px solid ${BRAND_BLUE}10`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Users, value: "5,000+", label: "Active Students" },
            { icon: Heart, value: "1.2M+", label: "Reactions Shared" },
            { icon: TrendingUp, value: "89%", label: "Feel Happier" },
            { icon: Star, value: "4.9★", label: "User Rating" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: BRAND_BLUE }} />
              <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Public Feed: The Garden Wall */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{
                background: `${BRAND_BLUE}08`,
                border: `1px solid ${BRAND_BLUE}15`,
              }}
            >
              <Sun className="w-4 h-4" style={{ color: BRAND_BLUE }} />
              <span className="text-sm font-medium" style={{ color: BRAND_BLUE }}>
                Public Garden
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Today's Gratitudes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what the community is grateful for. Spread love and good vibes!
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockPosts.map((post) => (
              <GratitudeCard
                key={post.id}
                {...post}
                onReact={() => handleProtectedAction("reaction")}
              />
            ))}
          </div>

          {/* Load more hint */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm mb-4">
              Want to see more? Join the garden!
            </p>
            <motion.button
              className="px-8 py-3 rounded-xl font-semibold text-white"
              style={{ background: BRAND_BLUE }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleProtectedAction("public")}
            >
              Join & Explore More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase */}
      <GratitudeFeatureShowcase />

      {/* Testimonials - Using the new Magic UI component */}
      <GratitudeTestimonials />

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] -z-10"
          style={{
            background: "linear-gradient(135deg, rgba(144,238,144,0.15), rgba(173,216,230,0.15))",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(144,238,144,0.2), rgba(255,218,185,0.2))",
              border: `2px solid ${BRAND_BLUE}20`,
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-4xl">🌳</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Start Your Gratitude Journey
          </h2>
          <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
            Plant your first gratitude, earn Karma Seeds, and watch your personal garden flourish.
          </p>

          <motion.button
            className="group relative px-10 py-5 rounded-xl font-semibold text-lg text-white overflow-hidden"
            style={{ background: BRAND_BLUE }}
            whileHover={{ scale: 1.02, boxShadow: `0 15px 50px ${BRAND_BLUE}40` }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleProtectedAction("public")}
          >
            {/* Subtle shimmer on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <Leaf className="w-5 h-5" />
              Plant Your First Gratitude
            </span>
          </motion.button>

          <p className="text-gray-500 text-sm mt-6">
            Free forever • No credit card required
          </p>
        </motion.div>
      </section>

      {/* Trust badges */}
      <section
        className="py-12 bg-white pb-32"
        style={{ borderTop: `1px solid ${BRAND_BLUE}10` }}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-8">
          {[
            { icon: Shield, text: "Privacy First" },
            { icon: Heart, text: "100% Free" },
            { icon: Users, text: "5,000+ Students" },
            { icon: Star, text: "4.9 Rating" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-500">
              <item.icon className="w-5 h-5" style={{ color: BRAND_BLUE }} />
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Action Button - positioned higher to avoid AI button */}
      <FloatingActionButton
        onAction={(type) => handleProtectedAction(type)}
      />

      {/* Sign Up Modal */}
      <SignUpModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trigger={modalTrigger}
      />
    </div>
  );
}
