"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Target, 
  Headphones, 
  Timer, 
  Coffee,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const BRAND_BLUE = "#1D2D50";

interface HowItWorksTimelineProps {
  variant?: "light" | "dark";
}

const steps = [
  {
    step: "01",
    title: "Set Your Goal",
    description: "Add tasks you want to accomplish during your focus session. Break down complex work into manageable chunks.",
    icon: Target,
    visual: "task-add",
  },
  {
    step: "02",
    title: "Choose Your Vibe",
    description: "Select from ambient soundscapes like Crackling Fire, Rain, or Library sounds to create your perfect focus environment.",
    icon: Headphones,
    visual: "sound-select",
  },
  {
    step: "03",
    title: "Focus",
    description: "Start the 25-minute Pomodoro timer and immerse yourself in deep work. The timer keeps you accountable.",
    icon: Timer,
    visual: "timer-running",
  },
  {
    step: "04",
    title: "Rest & Repeat",
    description: "Take a well-deserved break when the timer ends. Short breaks after each session, longer breaks after 4 sessions.",
    icon: Coffee,
    visual: "break-time",
  },
];

// Mini visual components for each step
function TaskAddVisual({ isLight }: { isLight: boolean }) {
  return (
    <div className="space-y-2">
      {["Complete project report", "Review code changes"].map((task, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-2 p-2 rounded-lg text-sm"
          style={{ 
            background: isLight ? `${BRAND_BLUE}08` : "rgba(245, 232, 199, 0.08)",
            color: isLight ? "#374151" : "rgba(245, 232, 199, 0.8)"
          }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          {task}
        </motion.div>
      ))}
    </div>
  );
}

function SoundSelectVisual({ isLight }: { isLight: boolean }) {
  return (
    <div className="flex gap-2">
      {["🔥", "🌧️", "📚"].map((emoji, i) => (
        <motion.div
          key={i}
          className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
            i === 0 ? "ring-2" : ""
          }`}
          style={{ 
            background: isLight ? `${BRAND_BLUE}08` : "rgba(245, 232, 199, 0.08)",
            ringColor: i === 0 ? "#22C55E" : "transparent"
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
}

function TimerRunningVisual({ isLight }: { isLight: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <motion.div
        className="text-2xl font-mono font-bold"
        style={{ color: isLight ? BRAND_BLUE : "#F5E8C7" }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        24:35
      </motion.div>
      <motion.div
        className="w-2 h-2 rounded-full bg-green-500"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </div>
  );
}

function BreakTimeVisual({ isLight }: { isLight: boolean }) {
  return (
    <div 
      className="flex items-center gap-2 p-2 px-3 rounded-lg"
      style={{ background: isLight ? "rgba(34, 197, 94, 0.1)" : "rgba(34, 197, 94, 0.2)" }}
    >
      <Coffee className="w-4 h-4 text-green-500" />
      <span className="text-sm text-green-600 font-medium">5 min break</span>
    </div>
  );
}

const visualComponents = {
  "task-add": TaskAddVisual,
  "sound-select": SoundSelectVisual,
  "timer-running": TimerRunningVisual,
  "break-time": BreakTimeVisual,
};

export function HowItWorksTimeline({ variant = "light" }: HowItWorksTimelineProps) {
  const isLight = variant === "light";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      {/* Timeline line */}
      <div 
        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
        style={{ background: isLight ? `${BRAND_BLUE}15` : "rgba(245, 232, 199, 0.15)" }}
      />

      <div className="space-y-12 md:space-y-16">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const VisualComponent = visualComponents[step.visual as keyof typeof visualComponents];
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={step.step}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Content card */}
              <div className={`flex-1 ml-16 md:ml-0 ${isEven ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  className="p-6 rounded-2xl backdrop-blur-xl border"
                  style={{
                    background: isLight 
                      ? "rgba(255, 255, 255, 0.75)"
                      : "rgba(67, 85, 133, 0.4)",
                    borderColor: isLight 
                      ? `${BRAND_BLUE}10`
                      : "rgba(129, 143, 180, 0.3)",
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:justify-end" : ""}`}>
                    <span 
                      className="text-xs font-bold px-2 py-1 rounded-full"
                      style={{ 
                        background: isLight ? `${BRAND_BLUE}10` : "rgba(245, 232, 199, 0.1)",
                        color: isLight ? BRAND_BLUE : "#F5E8C7"
                      }}
                    >
                      Step {step.step}
                    </span>
                  </div>
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: isLight ? "#111827" : "#F5E8C7" }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-sm mb-4"
                    style={{ color: isLight ? "#6B7280" : "rgba(245, 232, 199, 0.7)" }}
                  >
                    {step.description}
                  </p>
                  
                  {/* Visual preview */}
                  <div className={`${isEven ? "md:flex md:justify-end" : ""}`}>
                    <VisualComponent isLight={isLight} />
                  </div>
                </motion.div>
              </div>

              {/* Center icon */}
              <motion.div
                className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10"
                whileHover={{ scale: 1.1 }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: isLight ? BRAND_BLUE : "#F5E8C7",
                    boxShadow: isLight 
                      ? `0 4px 20px ${BRAND_BLUE}40`
                      : "0 4px 20px rgba(245, 232, 199, 0.3)",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: isLight ? "white" : BRAND_BLUE }} />
                </div>
              </motion.div>

              {/* Empty space for the other side on desktop */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

