"use client"

import React, { useRef, memo, useMemo } from 'react'
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import { 
  Activity, 
  TrendingUp, 
  ChevronRight, 
  Brain,
  Users
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Peace Code Brand Colors
const colors = {
  lavenderPurple: "#9667e0",
  mauve: "#d4bbfc",
  lavenderVeil: "#ebd9fc",
  lavenderMist: "#f2ebfb",
  ghostWhite: "#fbfaff",
}

interface Stage {
  phase: string
  tag: string
  image: string
  icon: React.ReactNode
  title: string
  description: string
}

interface StageCardProps {
  stage: Stage
  index: number
  progress: MotionValue<number>
}

// Memoized card for better performance
const StageCard = memo(({ stage, index, progress }: StageCardProps) => {
  const start = index * 0.22
  const end = (index + 1) * 0.22
  
  // Simplified transforms - removed blur for performance
  const scale = useTransform(progress, [start - 0.08, start, end], [0.88, 1, 0.94])
  const opacity = useTransform(progress, [start - 0.08, start, start + 0.04, end], [0.3, 1, 1, 0.8])

  return (
    <motion.div
      style={{ 
        scale, 
        opacity,
        willChange: 'transform, opacity'
      }}
      className="relative flex-none w-[300px] md:w-[420px] h-[520px] group"
    >
      {/* Card Structure - simplified shadows */}
      <div className="relative w-full h-full overflow-hidden rounded-3xl bg-white border border-[#ebd9fc]/50 shadow-xl transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-[#9667e0]/10">
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={stage.image} 
            alt={stage.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Simplified Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
          <div className="flex flex-col gap-4">
            {/* Phase Badge */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ebd9fc]">
                  {stage.phase}
                </span>
              </div>
              <div className="h-[1px] w-10 bg-[#d4bbfc]" />
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-tight mb-2">
                {stage.title}
              </h3>
              <p className="text-white/75 text-sm leading-relaxed font-light max-w-[95%]">
                {stage.description}
              </p>
            </div>

            {/* Icon & Tag */}
            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg text-[#9667e0]">
                {stage.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4bbfc]">
                  {stage.tag}
                </span>
                <span className="text-xs text-white/40 font-medium">Peace Code</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Index */}
        <div className="absolute top-6 right-6 text-7xl font-black italic select-none leading-none text-white/[0.04]">
          {index + 1}
        </div>
      </div>
    </motion.div>
  )
})

StageCard.displayName = 'StageCard'

export default function PeaceCodeRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Faster, snappier spring for smoother feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.005
  })

  // Memoize stages to prevent re-renders
  const stages: Stage[] = useMemo(() => [
    {
      phase: "Step 1",
      tag: "Self-Discovery",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800",
      icon: <Activity className="w-5 h-5" />,
      title: "Anonymous Screening",
      description: "Begin with a private assessment using clinically-validated tools like PHQ-9 and GAD-7."
    },
    {
      phase: "Step 2",
      tag: "Understanding",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800",
      icon: <Brain className="w-5 h-5" />,
      title: "Personalized Insights",
      description: "AI analyzes your responses to create a detailed wellness profile and identify patterns."
    },
    {
      phase: "Step 3",
      tag: "Connection",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
      icon: <Users className="w-5 h-5" />,
      title: "Support Network",
      description: "Connect with peer groups, AI companions, or licensed counselors at your comfort level."
    },
    {
      phase: "Step 4",
      tag: "Growth",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Track Progress",
      description: "Visualize growth with daily check-ins and personalized tools that adapt to you."
    }
  ], [])

  // Optimized transform - shorter scroll distance
  const x = useTransform(smoothProgress, [0, 1], ["2vw", "-65%"])
  const pathLength = useTransform(smoothProgress, [0, 0.85], [0, 1])
  const arrowDist = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#fbfaff]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        
        {/* Simple Background - CSS only, no SVG filters */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#9667e0 1px, transparent 1px), linear-gradient(90deg, #9667e0 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Header Section */}
        <div className="relative z-10 pt-14 md:pt-16 px-6 md:px-16 lg:px-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#9667e0]">
              Your Journey
            </span>
            <div className="h-[1px] flex-1 max-w-[100px] bg-[#ebd9fc]" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-none mb-2">
            From Screening to{" "}
            <span className="font-medium italic text-[#9667e0]">Wellness</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mt-3">
            Discover how Peace Code supports you at every step of your mental health journey.
          </p>
        </div>

        {/* Simplified Curved Path - hidden on mobile for performance */}
        <div className="absolute top-[56%] left-0 w-full pointer-events-none z-0 px-20 hidden lg:block">
          <svg width="100%" height="150" viewBox="0 0 1400 150" fill="none" preserveAspectRatio="none">
            <path 
              d="M 0 75 C 350 75, 450 30, 700 75 C 950 120, 1050 75, 1400 75" 
              stroke="#ebd9fc"
              strokeWidth="2"
              strokeDasharray="10 14"
            />
            <motion.path 
              d="M 0 75 C 350 75, 450 30, 700 75 C 950 120, 1050 75, 1400 75" 
              stroke="#d4bbfc"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>

          {/* Arrow Head */}
          <motion.div
            className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-[#9667e0] shadow-lg z-20"
            style={{ 
              offsetPath: "path('M 0 75 C 350 75, 450 30, 700 75 C 950 120, 1050 75, 1400 75')",
              offsetDistance: arrowDist,
              willChange: 'transform'
            }}
          >
            <ChevronRight className="w-4 h-4 text-[#9667e0]" />
          </motion.div>
        </div>

        {/* Card Carousel */}
        <div className="flex-1 flex items-center relative z-20 -mt-2 md:-mt-6">
          <motion.div 
            style={{ x, willChange: 'transform' }} 
            className="flex gap-6 md:gap-10 px-6 md:px-[12vw]"
          >
            {stages.map((stage, i) => (
              <StageCard key={stage.phase} stage={stage} index={i} progress={smoothProgress} />
            ))}
            
            {/* End CTA Card */}
            <div className="w-[85vw] md:w-[40vw] flex-none flex flex-col justify-center pl-6 md:pl-16">
              <span className="font-bold tracking-[0.25em] uppercase text-[10px] mb-3 text-[#9667e0]">
                Ready to Start?
              </span>
              <h4 className="text-3xl md:text-5xl font-light text-gray-900 tracking-tight leading-tight mb-6">
                Begin your{" "}
                <span className="italic text-[#9667e0]">Journey</span>{" "}
                today.
              </h4>
              <p className="text-gray-500 text-sm mb-6 max-w-sm">
                Join our beta program and experience comprehensive mental wellness support.
              </p>
              <Link href="/screening">
                <Button variant="lavender" size="lg">
                  Start Free Screening
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info - simplified */}
        <div className="absolute bottom-6 left-6 md:left-16 flex items-center gap-5 z-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-gray-600">Beta Active</span>
          </div>
          <div className="h-4 w-[1px] bg-gray-200" />
          <span className="text-xs font-medium text-gray-600">End-to-End Encrypted</span>
        </div>
      </div>
    </div>
  )
}
