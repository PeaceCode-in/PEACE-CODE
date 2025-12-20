"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  src: string;
  span?: string; // tailwind grid-span classes
}

const FEATURES: Feature[] = [
  {
    title: "24/7 AI Chatbot",
    description: "Instant, empathetic support any time you need to talk.",
    src: "/bot.jpg",
    span: "lg:col-span-4",
  },
  {
    title: "Licensed Counselors",
    description: "Book secure sessions with verified mental-health professionals.",
    src: "/professional-counselor-therapy-session-mental-heal.jpg",
    span: "lg:col-span-2",
  },
  {
    title: "Peer Community",
    description: "Connect anonymously with students who understand your journey.",
    src: "/diverse-group-students-supporting-each-other-commu.jpg",
    span: "lg:col-span-3",
  },
  {
    title: "Self-Assessments",
    description: "Science-backed screenings to track your mental well-being.",
    src: "/mental-health-2019924.jpg",
    span: "lg:col-span-3",
  },
  {
    title: "Focus Timer",
    description: "Pomodoro-style tool that turns study time into flow time.",
    src: "/focused-study-environment-productivity-timer-ambie.jpg",
    span: "lg:col-span-2",
  },
  {
    title: "Breathing Coach",
    description: "Follow calming animations to lower stress in minutes.",
    src: "/serene-meditation-breathing-exercise-calm-blue-atm.jpg",
    span: "lg:col-span-4",
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group relative p-4 sm:p-6 overflow-hidden flex flex-col justify-end rounded-2xl h-64 md:h-80 bg-gray-50 dark:bg-neutral-900",
        feature.span,
      )}
    >
      {/* Glow border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl before:absolute before:inset-0 before:rounded-2xl before:p-px before:bg-[conic-gradient(var(--tw-gradient-stops))] before:from-sky-700 before:via-sky-400 before:to-sky-700 before:opacity-0 before:transition-opacity before:duration-500 before:hover:opacity-100 group-hover:before:opacity-100" />

      {/* Background image */}
      <img
        src={feature.src}
        alt={feature.title}
        className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      {/* Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      <div className="relative z-10 text-white space-y-1">
        <h3 className="text-lg md:text-2xl font-semibold leading-snug">
          {feature.title}
        </h3>
        <p className="text-xs md:text-sm opacity-90 max-w-sm">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function FeaturesBentoGrid({ className }: { className?: string }) {
  return (
    <section className={cn("py-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-black text-center text-neutral-900 dark:text-neutral-100 mb-4">
          Core Peace Code Features
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-12">
          Everything you need for mental wellness – all in one compassionate platform.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

