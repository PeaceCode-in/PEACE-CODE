"use client"

import { useEffect, useState, useRef, useId } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame, animate } from "framer-motion"
import { wrap } from "@motionone/utils"
import { 
  Heart, 
  Brain, 
  Shield, 
  Users, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Globe,
  Clock,
  Target,
  TrendingUp,
  Award,
  MessageSquare,
  Video,
  Lock,
  Zap,
  Lightbulb,
  Star,
  Bot,
  Phone,
  Smile,
  BookOpen,
  HeartHandshake,
  GraduationCap,
  Building2,
  ChevronRight
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MetalButton } from "@/components/ui/button"
import { Header } from "@/components/ui/header-2"
import { cn } from "@/lib/utils"

// Peace Code Brand Colors
const colors = {
  lavenderPurple: "#9667e0",
  mauve: "#d4bbfc",
  lavenderVeil: "#ebd9fc",
  lavenderMist: "#f2ebfb",
  ghostWhite: "#fbfaff",
}

// Animated Counter Component
function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const animation = animate(count, end, { duration })
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v))
    return () => {
      animation.stop()
      unsubscribe()
    }
  }, [end, duration])

  return (
    <span className="tabular-nums">
      {displayValue.toLocaleString()}{suffix}
    </span>
  )
}

// Marquee Component
function Marquee({ children, baseVelocity = -3 }: { children: string; baseVelocity?: number }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useSpring(useMotionValue(0), { damping: 50, stiffness: 400 })

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`)

  useAnimationFrame((t, delta) => {
    const moveBy = baseVelocity * (delta / 1000) * 50
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div className="flex whitespace-nowrap gap-16" style={{ x }}>
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-6xl md:text-8xl font-bold tracking-tight" style={{ color: colors.mauve }}>
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

// Diagonal Grid Pattern
function DiagonalGridPattern({ className }: { className?: string }) {
  const id = useId()
  return (
    <svg className={cn("absolute inset-0 w-full h-full", className)} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="40" stroke={colors.mauve} strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="0" y1="0" x2="40" y2="0" stroke={colors.mauve} strokeWidth="0.5" strokeOpacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

// Bento Card Component
function BentoCard({ 
  title, 
  description, 
  icon: Icon, 
  className, 
  children,
  gradient = false
}: { 
  title: string
  description: string
  icon?: any
  className?: string
  children?: React.ReactNode
  gradient?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl p-6 md:p-8 transition-all duration-500",
        gradient 
          ? "bg-gradient-to-br from-[#9667e0] via-[#d4bbfc] to-[#ebd9fc] text-white" 
          : "bg-white border border-[#ebd9fc] hover:border-[#d4bbfc] hover:shadow-xl hover:shadow-[#d4bbfc]/20",
        className
      )}
    >
      {Icon && (
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110",
          gradient ? "bg-white/20" : "bg-gradient-to-br from-[#ebd9fc] to-[#f2ebfb]"
        )}>
          <Icon className={cn("w-6 h-6", gradient ? "text-white" : "text-[#9667e0]")} />
        </div>
      )}
      <h3 className={cn(
        "text-xl md:text-2xl font-bold mb-2",
        gradient ? "text-white" : "text-gray-800"
      )}>
        {title}
      </h3>
      <p className={cn(
        "text-sm md:text-base leading-relaxed",
        gradient ? "text-white/90" : "text-gray-600"
      )}>
        {description}
      </p>
      {children}
    </motion.div>
  )
}

// Journey Step Component
function JourneyStep({ 
  step, 
  title, 
  description, 
  isLast = false 
}: { 
  step: number
  title: string
  description: string
  isLast?: boolean 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
      className="relative flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9667e0] to-[#d4bbfc] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#d4bbfc]/30">
          {step}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-[#d4bbfc] to-transparent mt-2" />
        )}
      </div>
      <div className="pb-12">
        <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default function AboutPeaceCodePage() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const problemStats = [
    { value: 70, suffix: "%", label: "Students Feel Overwhelmed" },
    { value: 85, suffix: "%", label: "Never Seek Help" },
    { value: 60, suffix: "%", label: "Dropout Risk" },
    { value: 90, suffix: "%", label: "Face Stigma" },
  ]

  // Research-based statistics about student mental health (source: WHO, NIMHANS studies)
  const researchStats = [
    { value: 1, suffix: " in 5", label: "Students Need Support", icon: Users },
    { value: 70, suffix: "%", label: "Feel Overwhelmed", icon: TrendingUp },
    { value: 85, suffix: "%", label: "Don't Seek Help", icon: MessageSquare },
    { value: 46, suffix: "%", label: "Report Anxiety", icon: Heart },
    { value: 33, suffix: "%", label: "Experience Depression", icon: Brain },
    { value: 24, suffix: "/7", label: "Support Needed", icon: Clock },
  ]

  const features = [
    {
      icon: Bot,
      title: "AI-Powered Support",
      description: "24/7 confidential conversations with our AI companion. Get instant support, crisis intervention, and personalized coping strategies whenever you need them.",
    },
    {
      icon: Users,
      title: "Licensed Professionals",
      description: "Book video sessions with vetted therapists at student-friendly prices. All counselors are licensed and specialized in student mental health.",
    },
    {
      icon: HeartHandshake,
      title: "Peer Community",
      description: "Safe, moderated spaces to share experiences and feel understood. Connect with peers who understand your journey.",
    },
    {
      icon: Sparkles,
      title: "Wellness Tools",
      description: "Focus timer, breathing exercises, gratitude wall, journaling, and more—all backed by clinical research.",
    },
  ]

  const journey = [
    { title: "Take a Quick Assessment", description: "Our AI-powered assessment understands your unique challenges and creates a personalized wellness plan." },
    { title: "Connect with Support", description: "Choose from AI chat support, peer groups, or licensed counselors based on your comfort level." },
    { title: "Build Daily Habits", description: "Use our wellness tools to build resilience through mindfulness, journaling, and breathing exercises." },
    { title: "Track Your Growth", description: "Monitor your progress with intuitive analytics and celebrate every milestone on your journey." },
  ]

  const values = [
    { icon: Heart, title: "Compassion First", description: "Every interaction is grounded in empathy and respect for your unique experience." },
    { icon: Brain, title: "Science-Backed", description: "Built on cutting-edge research and evidence-based mental health practices." },
    { icon: Users, title: "Inclusive Design", description: "Mental health is universal. We embrace all identities, backgrounds, and cultures." },
    { icon: Lock, title: "Privacy Sacred", description: "End-to-end encryption and strict data ethics protect your information always." },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: colors.ghostWhite }}>
      <Header />

      {/* HERO SECTION */}
      <section 
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Pattern */}
        <DiagonalGridPattern className="opacity-40" />
        
        {/* Gradient Orbs */}
        <div 
          className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: `radial-gradient(circle, ${colors.mauve} 0%, transparent 70%)` }}
        />
        <div 
          className="absolute bottom-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
          style={{ background: `radial-gradient(circle, ${colors.lavenderVeil} 0%, transparent 70%)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              style={{ y: heroTextY, opacity: heroOpacity }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge 
                  className="mb-6 px-5 py-2 text-sm font-medium border-none"
                  style={{ backgroundColor: colors.lavenderVeil, color: colors.lavenderPurple }}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Your Digital Sanctuary
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
              >
                <span className="text-gray-800">About</span>
                <br />
                <span 
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(135deg, ${colors.lavenderPurple} 0%, ${colors.mauve} 100%)` }}
                >
                  Peace Code
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Empowering students across India to take charge of their mental health journey. 
                Where technology meets compassion to create lasting change.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              >
                {["Beta Program", "Research-Backed", "Student-Focused"].map((tag, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ backgroundColor: colors.lavenderMist, color: colors.lavenderPurple }}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <MetalButton variant="lavender" size="lg" asChild>
                  <Link href="/login">
                    Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </MetalButton>
                <MetalButton variant="default" size="lg" asChild>
                  <Link href="/services">
                    Explore Services
                  </Link>
                </MetalButton>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              style={{ y: heroImageY }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Decorative Ring */}
                <div 
                  className="absolute -inset-4 rounded-full opacity-20 blur-xl"
                  style={{ background: `linear-gradient(135deg, ${colors.lavenderPurple}, ${colors.mauve})` }}
                />
                
                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#9667e0]/20">
                  <Image
                    src="/Untitled (3).png"
                    alt="Student contemplating their mental health journey"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${colors.lavenderPurple}20 0%, transparent 50%)` }}
                  />
                </div>

                {/* Floating Research Card - Top Right */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute -right-4 top-1/4 bg-white rounded-2xl p-4 shadow-xl shadow-[#9667e0]/10 border border-[#ebd9fc]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: colors.lavenderVeil }}>
                      <TrendingUp className="w-5 h-5" style={{ color: colors.lavenderPurple }} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{ color: colors.lavenderPurple }}>1 in 5</div>
                      <div className="text-xs text-gray-500">Students Need Help*</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Beta Card - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -left-4 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl shadow-[#9667e0]/10 border border-[#ebd9fc]"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${colors.lavenderPurple}, ${colors.mauve})` }}
                    >
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold" style={{ color: colors.lavenderPurple }}>Beta</div>
                      <div className="text-xs text-gray-500">Join Early Access</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: colors.mauve }}>
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-3 rounded-full mt-2"
                style={{ backgroundColor: colors.lavenderPurple }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="py-8 overflow-hidden border-y" style={{ borderColor: colors.lavenderVeil }}>
        <Marquee baseVelocity={-2}>PEACE CODE • MENTAL WELLNESS • STUDENT SUPPORT • </Marquee>
      </section>

      {/* THE PROBLEM SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <DiagonalGridPattern className="opacity-20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Untitled (2).png"
                  alt="Student experiencing stress and anxiety"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${colors.lavenderPurple}30 0%, transparent 60%)` }}
                />
              </div>

              {/* Problem Stats Overlay */}
              <div className="absolute -bottom-6 -right-6 left-6 bg-white rounded-2xl p-6 shadow-xl border border-[#ebd9fc]">
                <div className="grid grid-cols-2 gap-4">
                  {problemStats.slice(0, 2).map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold" style={{ color: colors.lavenderPurple }}>
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <Badge 
                className="mb-4 px-4 py-2 text-sm border-none"
                style={{ backgroundColor: "#fef2f2", color: "#dc2626" }}
              >
                The Challenge We're Solving
              </Badge>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
                The Silent <span style={{ color: colors.lavenderPurple }}>Crisis</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                <span className="text-3xl font-bold text-gray-800">70%</span> of students worldwide report feeling overwhelmed by academic pressure, social media comparison, and uncertainty about the future.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Yet <strong className="text-gray-800">stigma</strong>, lack of time, and limited access to affordable care stop many from getting help when they need it most. The resulting mental-health crisis fuels dropout rates, loneliness, and lost potential.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {problemStats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-2xl border"
                    style={{ borderColor: colors.lavenderVeil, backgroundColor: colors.ghostWhite }}
                  >
                    <div className="text-2xl font-bold" style={{ color: colors.lavenderPurple }}>
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE TRANSFORMATION SECTION */}
      <section 
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: colors.lavenderMist }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge 
                className="mb-4 px-4 py-2 text-sm border-none"
                style={{ backgroundColor: colors.lavenderVeil, color: colors.lavenderPurple }}
              >
                The Peace Code Solution
              </Badge>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
                From Struggle to <span style={{ color: colors.lavenderPurple }}>Strength</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Peace Code brings together cutting-edge AI technology with licensed mental health professionals, creating a holistic support system that's accessible, affordable, and always available.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Bot, text: "AI companion available 24/7 for instant support" },
                  { icon: Users, text: "Licensed counselors specialized in student mental health" },
                  { icon: HeartHandshake, text: "Peer support communities for shared experiences" },
                  { icon: Shield, text: "HIPAA-compliant, end-to-end encrypted platform" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: colors.lavenderVeil }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: colors.lavenderPurple }} />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <MetalButton variant="lavender" size="lg" asChild>
                  <Link href="/services">
                    Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </MetalButton>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Untitled (4).png"
                  alt="Happy student enjoying their mental wellness journey"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${colors.lavenderPurple}20 0%, transparent 50%)` }}
                />
              </div>

              {/* Success Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 right-6 bg-white rounded-2xl p-6 shadow-xl border border-[#ebd9fc]"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${colors.lavenderPurple}, ${colors.mauve})` }}
                  >
                    <Smile className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold" style={{ color: colors.lavenderPurple }}>
                      Evidence-Based
                    </div>
                    <div className="text-sm text-gray-500">Backed by clinical research and studies</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES BENTO GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <DiagonalGridPattern className="opacity-20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge 
              className="mb-4 px-4 py-2 text-sm border-none"
              style={{ backgroundColor: colors.lavenderVeil, color: colors.lavenderPurple }}
            >
              What We Offer
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
              A Complete <span style={{ color: colors.lavenderPurple }}>Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for your mental wellness journey, all in one place.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <BentoCard
              icon={Bot}
              title="AI-Powered Support"
              description="24/7 confidential conversations with our AI companion. Get instant support, crisis intervention, and personalized coping strategies whenever you need them."
              className="lg:col-span-2 lg:row-span-2"
              gradient
            >
              <div className="mt-6 p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/80 text-sm">AI Companion</span>
                </div>
                <p className="text-white/60 text-sm">
                  "I'm here whenever you need to talk. Let's work through this together."
                </p>
              </div>
            </BentoCard>

            {features.slice(1).map((feature, i) => (
              <BentoCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}

            {/* Extra Feature Cards */}
            <BentoCard
              icon={BookOpen}
              title="Educational Resources"
              description="Access a library of articles, videos, and guides on mental health topics curated by our expert team."
            />

            <BentoCard
              icon={GraduationCap}
              title="Campus Programs"
              description="Partner programs with universities to bring mental health support directly to students on campus."
              className="lg:col-span-2"
            />
          </div>
        </div>
      </section>

      {/* YOUR JOURNEY SECTION */}
      <section 
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: colors.lavenderMist }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge 
              className="mb-4 px-4 py-2 text-sm border-none"
              style={{ backgroundColor: colors.lavenderVeil, color: colors.lavenderPurple }}
            >
              How It Works
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
              Your <span style={{ color: colors.lavenderPurple }}>Journey</span> With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, supportive path to better mental health.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-2">
              {journey.map((step, i) => (
                <JourneyStep
                  key={i}
                  step={i + 1}
                  title={step.title}
                  description={step.description}
                  isLast={i === journey.length - 1}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div 
                className="sticky top-24 rounded-3xl p-8 shadow-xl"
                style={{ backgroundColor: "white", border: `1px solid ${colors.lavenderVeil}` }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Begin?</h3>
                <p className="text-gray-600 mb-6">
                  Be among the first students to experience Peace Code's mental health support platform.
                </p>
                
                <div className="space-y-4 mb-6">
                  {[
                    "Free to start, no credit card required",
                    "Personalized support from day one",
                    "100% confidential and secure",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: colors.lavenderPurple }} />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>

                <MetalButton variant="lavender" size="lg" className="w-full" asChild>
                  <Link href="/login">
                    Start Your Free Journey <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </MetalButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESEARCH STATS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge 
              className="mb-4 px-4 py-2 text-sm border-none"
              style={{ backgroundColor: colors.lavenderVeil, color: colors.lavenderPurple }}
            >
              Research Insights
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
              Why Students <span style={{ color: colors.lavenderPurple }}>Need Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Based on studies from WHO, NIMHANS, and global mental health research
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {researchStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center p-6 rounded-2xl bg-white border hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ borderColor: colors.lavenderVeil }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: colors.lavenderVeil }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: colors.lavenderPurple }} />
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color: colors.lavenderPurple }}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section 
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: colors.lavenderMist }}
      >
        <DiagonalGridPattern className="opacity-20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-3xl bg-white shadow-xl border"
              style={{ borderColor: colors.lavenderVeil }}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `linear-gradient(135deg, ${colors.lavenderPurple}, ${colors.mauve})` }}
              >
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratize mental health support for every student and young professional, 
                so they can thrive academically, socially, and personally. We believe access to 
                quality mental health care should be a right, not a privilege.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-10 rounded-3xl shadow-xl"
              style={{ background: `linear-gradient(135deg, ${colors.lavenderPurple}, ${colors.mauve})` }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white/20">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                A world where emotional resilience is taught as fundamentally as literacy, 
                and help is as close as your nearest device. A future where mental wellness 
                is prioritized, stigma is eliminated, and every individual has the tools to flourish.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge 
              className="mb-4 px-4 py-2 text-sm border-none"
              style={{ backgroundColor: colors.lavenderVeil, color: colors.lavenderPurple }}
            >
              What Guides Us
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
              Our <span style={{ color: colors.lavenderPurple }}>Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 md:p-8 rounded-3xl bg-white border hover:shadow-xl hover:border-[#d4bbfc] transition-all duration-300"
                style={{ borderColor: colors.lavenderVeil }}
              >
                <div className="flex items-start gap-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `linear-gradient(135deg, ${colors.lavenderPurple}, ${colors.mauve})` }}
                  >
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#9667e0] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section 
        className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${colors.lavenderPurple} 0%, ${colors.mauve} 100%)` }}
      >
        <DiagonalGridPattern className="opacity-10" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
              <Smile className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Begin Your Journey?
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Be among the first to experience Peace Code. Join our beta program and help shape the future of student mental health. 
              Your path to mental wellness starts with a single step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MetalButton variant="default" size="lg" asChild className="bg-white text-[#9667e0] hover:bg-white/90">
                <Link href="/login">
                  Create Your Free Account <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </MetalButton>
              <MetalButton variant="default" size="lg" asChild className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                <Link href="/services">
                  Explore Services <Sparkles className="ml-2 w-5 h-5" />
                </Link>
              </MetalButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
