"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Bot, Users, HeartPulse, LibraryBig } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const features: Feature[] = [
  {
    title: "AI Companion",
    description: "24/7 empathetic chat powered by advanced language models.",
    icon: <Bot className="w-8 h-8 text-primary" />,
    href: "/ai-support",
  },
  {
    title: "Peer Community",
    description: "Anonymous, moderated groups where students support each other.",
    icon: <Users className="w-8 h-8 text-primary" />,
    href: "/community",
  },
  {
    title: "Professional Counseling",
    description: "Book sessions with licensed Indian therapists & psychologists.",
    icon: <HeartPulse className="w-8 h-8 text-primary" />,
    href: "/counseling",
  },
  {
    title: "Resource Library",
    description: "Curated articles, videos & self-help tools in 10+ languages.",
    icon: <LibraryBig className="w-8 h-8 text-primary" />,
    href: "/resources",
  },
];

export function FeatureShowcase({ className }: { className?: string }) {
  return (
    <section className={cn("py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-white to-accent/5", className)}>
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-6 text-balance">
          One Connected <span className="text-primary">Ecosystem</span>
        </h2>
        <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore the core pillars that make Peace Code your holistic mental-wellness partner.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <motion.a
            key={f.title}
            href={f.href}
            className="group relative p-8 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-3xl shadow-lg overflow-hidden flex flex-col items-start hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ y: -4 }}
          >
            {/* decorative blob */}
            <motion.div
              className="absolute -z-10 inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
              initial={{ scale: 0.9, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="mb-6">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed flex-1">{f.description}</p>
            <span className="mt-6 text-primary font-medium">Learn more →</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

