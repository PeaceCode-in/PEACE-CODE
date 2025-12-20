"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BreathingTechniqueCard } from "./BreathingTechniqueCard";
import { Wind, Timer, Moon, Heart, Brain, Zap } from "lucide-react";
import { toast } from "sonner";

// Brand color
const BRAND_BLUE = "#1D2D50";

interface BreathPacerBentoGridProps {
  isAuthenticated: boolean;
  variant?: "dark" | "light";
}

const breathingTechniques = [
  {
    id: "box",
    title: "Box Breathing",
    description: "A powerful stress-relief technique used by Navy SEALs. Equal counts create a perfect square of calm, balancing your nervous system.",
    benefits: ["Stress Relief", "Focus", "Calm"],
    pattern: [4, 4, 4, 4],
    patternLabels: ["Inhale", "Hold", "Exhale", "Hold"],
    icon: Timer,
    animationType: "box" as const,
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: "478",
    title: "4-7-8 Breathing",
    description: "Dr. Andrew Weil's relaxation technique. The extended exhale triggers deep relaxation, perfect for anxiety and sleep.",
    benefits: ["Sleep", "Anxiety Relief", "Relaxation"],
    pattern: [4, 7, 8],
    patternLabels: ["Inhale", "Hold", "Exhale"],
    icon: Moon,
    animationType: "478" as const,
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: "diaphragmatic",
    title: "Diaphragmatic",
    description: "Deep belly breathing that maximizes oxygen intake and activates your parasympathetic nervous system for instant calm.",
    benefits: ["Deep Relaxation", "Core Strength", "Digestion"],
    pattern: [4, 0, 6],
    patternLabels: ["Inhale", "", "Exhale"],
    icon: Wind,
    animationType: "diaphragmatic" as const,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "alternate",
    title: "Alternate Nostril",
    description: "Ancient yogic practice that balances the left and right hemispheres of your brain, promoting mental clarity and emotional balance.",
    benefits: ["Balance", "Clarity", "Focus"],
    pattern: [4, 4, 4, 4],
    patternLabels: ["Left In", "Hold", "Right Out", "Hold"],
    icon: Brain,
    animationType: "alternate" as const,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "resonant",
    title: "Resonant Breathing",
    description: "Also called coherent breathing. 5 breaths per minute synchronizes heart and breath for optimal HRV and stress resilience.",
    benefits: ["HRV", "Heart Health", "Calm"],
    pattern: [6, 0, 6],
    patternLabels: ["Inhale", "", "Exhale"],
    icon: Heart,
    animationType: "resonant" as const,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "lion",
    title: "Lion's Breath",
    description: "An energizing technique that releases tension in your face and throat while boosting confidence and alertness. Perfect for releasing pent-up energy and tension before important events.",
    benefits: ["Energy", "Tension Release", "Confidence", "Alertness"],
    pattern: [4, 0, 4],
    patternLabels: ["Inhale", "", "Roar"],
    icon: Zap,
    animationType: "lion" as const,
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

export function BreathPacerBentoGrid({ isAuthenticated, variant = "dark" }: BreathPacerBentoGridProps) {
  const router = useRouter();
  const isLight = variant === "light";

  const handleStart = (techniqueId: string) => {
    if (!isAuthenticated) {
      toast.info("Please sign in to start your journey.", {
        description: "Create a free account to access guided breathing sessions.",
      });
      router.push("/auth/login");
      return;
    }
    router.push(`/breathe?technique=${techniqueId}`);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="techniques-grid">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 backdrop-blur-md"
            style={{
              background: isLight ? "rgba(224, 242, 254, 0.8)" : "rgba(67, 85, 133, 0.6)",
              border: isLight ? `1px solid ${BRAND_BLUE}20` : "1px solid rgba(129, 143, 180, 0.3)"
            }}
          >
            <Wind className="w-4 h-4" style={{ color: isLight ? BRAND_BLUE : "#F5E8C7" }} />
            <span 
              className="text-sm font-medium"
              style={{ color: isLight ? "#374151" : "#F5E8C7" }}
            >
              6 Proven Techniques
            </span>
          </motion.div>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: isLight ? "#111827" : "#F5E8C7" }}
          >
            Choose Your Breathing Practice
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: isLight ? "#4b5563" : "#818FB4" }}
          >
            Each technique is designed for specific outcomes. Find the perfect practice for your current needs.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {breathingTechniques.map((technique, idx) => (
            <motion.div
              key={technique.id}
              className={technique.gridClass}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <BreathingTechniqueCard
                title={technique.title}
                description={technique.description}
                benefits={technique.benefits}
                pattern={technique.pattern}
                patternLabels={technique.patternLabels}
                icon={technique.icon}
                animationType={technique.animationType}
                onStart={() => handleStart(technique.id)}
                variant={variant}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
