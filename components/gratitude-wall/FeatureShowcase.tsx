"use client";

import { motion } from "framer-motion";
import { Jar, LineChart, Send, Star, Heart, TrendingDown } from "lucide-react";

const BRAND_BLUE = "#1D2D50";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  visual: React.ReactNode;
  delay?: number;
}

function FeatureCard({ icon, title, description, visual, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      className="relative group p-6 rounded-2xl backdrop-blur-xl overflow-hidden"
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        border: `1px solid ${BRAND_BLUE}15`,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -4, boxShadow: `0 20px 40px ${BRAND_BLUE}15` }}
    >
      {/* Holographic shimmer on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,0,0,0.03), rgba(255,165,0,0.03), rgba(255,255,0,0.03), rgba(0,128,0,0.03), rgba(0,0,255,0.03), rgba(75,0,130,0.03), rgba(238,130,238,0.03))",
        }}
      />

      {/* Visual */}
      <div className="h-32 mb-4 flex items-center justify-center">
        {visual}
      </div>

      {/* Content */}
      <div className="flex items-start gap-3">
        <div
          className="p-2 rounded-lg flex-shrink-0"
          style={{ background: `${BRAND_BLUE}10` }}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1" style={{ color: BRAND_BLUE }}>
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Animated Gratitude Jar
function GratitudeJarVisual() {
  return (
    <div className="relative w-24 h-28">
      {/* Jar */}
      <svg viewBox="0 0 100 120" className="w-full h-full">
        {/* Jar body */}
        <path
          d="M20 30 L20 100 Q20 110 30 110 L70 110 Q80 110 80 100 L80 30"
          fill="none"
          stroke={BRAND_BLUE}
          strokeWidth="3"
          opacity="0.3"
        />
        {/* Jar neck */}
        <path
          d="M25 30 L25 20 L75 20 L75 30"
          fill="none"
          stroke={BRAND_BLUE}
          strokeWidth="3"
          opacity="0.3"
        />
        {/* Lid */}
        <rect x="20" y="15" width="60" height="8" rx="4" fill={BRAND_BLUE} opacity="0.5" />
      </svg>

      {/* Floating stars inside */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-lg"
          style={{
            left: `${25 + (i % 3) * 20}%`,
            bottom: `${20 + Math.floor(i / 3) * 25}%`,
          }}
          animate={{
            y: [0, -5, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
          }}
        >
          ⭐
        </motion.div>
      ))}
    </div>
  );
}

// Mood Tracking Visual
function MoodTrackingVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Simple line graph */}
      <svg viewBox="0 0 120 60" className="w-32 h-16">
        <motion.path
          d="M10 50 Q30 45 40 35 Q50 25 60 30 Q70 35 80 20 Q90 10 110 15"
          fill="none"
          stroke="#22C55E"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        {/* Data points */}
        {[10, 40, 60, 80, 110].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={[50, 35, 30, 20, 15][i]}
            r="4"
            fill="#22C55E"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + i * 0.2 }}
          />
        ))}
      </svg>

      {/* Heart with trend */}
      <motion.div
        className="absolute -right-2 top-0 flex items-center gap-1"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Heart className="w-5 h-5 text-red-400 fill-red-400" />
        <TrendingDown className="w-4 h-4 text-green-500" />
      </motion.div>
    </div>
  );
}

// Anonymous Kudos Visual
function KudosVisual() {
  return (
    <div className="relative">
      {/* Envelope */}
      <motion.div
        className="relative"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 80 60" className="w-20 h-16">
          {/* Envelope body */}
          <rect x="5" y="15" width="70" height="40" rx="4" fill={BRAND_BLUE} opacity="0.2" />
          {/* Envelope flap */}
          <path d="M5 15 L40 35 L75 15" fill="none" stroke={BRAND_BLUE} strokeWidth="2" opacity="0.4" />
        </svg>

        {/* Wings */}
        <motion.div
          className="absolute -left-4 top-2 text-2xl"
          animate={{ rotate: [-5, 5, -5], y: [0, -2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          🪽
        </motion.div>
        <motion.div
          className="absolute -right-4 top-2 text-2xl transform scale-x-[-1]"
          animate={{ rotate: [5, -5, 5], y: [0, -2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          🪽
        </motion.div>
      </motion.div>

      {/* Sparkles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-400"
          style={{
            left: `${20 + i * 30}%`,
            top: `${-10 + i * 5}%`,
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
}

export function GratitudeFeatureShowcase() {
  const features = [
    {
      icon: <Star className="w-5 h-5" style={{ color: BRAND_BLUE }} />,
      title: "The Gratitude Jar",
      description: "Fill your virtual jar. See your happiness accumulate over the year.",
      visual: <GratitudeJarVisual />,
    },
    {
      icon: <LineChart className="w-5 h-5" style={{ color: BRAND_BLUE }} />,
      title: "Mood Analytics",
      description: "Connect the dots. See how gratitude lowers your stress levels.",
      visual: <MoodTrackingVisual />,
    },
    {
      icon: <Send className="w-5 h-5" style={{ color: BRAND_BLUE }} />,
      title: "Anonymous Kudos",
      description: "Send anonymous appreciation to peers without the awkwardness.",
      visual: <KudosVisual />,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
              background: "linear-gradient(135deg, rgba(255,182,193,0.3), rgba(255,218,185,0.3), rgba(255,255,224,0.3), rgba(144,238,144,0.3), rgba(173,216,230,0.3), rgba(221,160,221,0.3))",
              border: `1px solid ${BRAND_BLUE}20`,
            }}
          >
            <span className="text-lg">✨</span>
            <span className="text-sm font-medium" style={{ color: BRAND_BLUE }}>
              Premium Features
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Join the Garden?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unlock powerful tools to track your gratitude journey and spread positivity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={idx * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

