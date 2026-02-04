"use client"

import { useState, useId } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Brain, 
  ClipboardList, 
  TrendingUp, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  HelpCircle, 
  ChevronRight, 
  Crown,
  Lock,
  Clock,
  Target,
  Heart,
  Sparkles,
  ArrowRight,
  Play,
  FileText,
  Users,
  Activity,
  Zap,
  BookOpen,
  MessageCircle
} from "lucide-react"
import Link from "next/link"
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

// Main Screening Tests Data
const mainTests = [
  {
    id: "phq9",
    name: "PHQ-9",
    fullName: "Patient Health Questionnaire-9",
    title: "Depression Screening",
    icon: ClipboardList,
    duration: "3-5 min",
    questions: 9,
    color: colors.lavenderPurple,
    bgColor: colors.lavenderVeil,
    front: {
      tagline: "Understand Your Mood",
      description: "A quick, validated screening tool for depression symptoms.",
    },
    back: {
      purpose: "Screens for the presence and severity of depression over the last 2 weeks.",
      content: "Based on DSM-5 criteria for major depressive disorder. Asks about loss of interest, sleep, appetite, and energy levels.",
      scoring: "Minimal (0-4), Mild (5-9), Moderate (10-14), Moderately Severe (15-19), Severe (20-27)",
      reliability: "Validated by thousands of clinical studies worldwide",
    },
    href: "/student-dashboard",
  },
  {
    id: "gad7",
    name: "GAD-7",
    fullName: "Generalized Anxiety Disorder-7",
    title: "Anxiety Assessment",
    icon: TrendingUp,
    duration: "2-4 min",
    questions: 7,
    color: colors.lavenderPurple,
    bgColor: colors.lavenderVeil,
    front: {
      tagline: "Check Your Anxiety Levels",
      description: "Measure and understand your anxiety symptoms with this clinical tool.",
    },
    back: {
      purpose: "Screens for and measures the severity of generalized anxiety disorder.",
      content: "Assesses frequency of anxiety symptoms like nervousness, worry, restlessness, and irritability over 2 weeks.",
      scoring: "Minimal (0-4), Mild (5-9), Moderate (10-14), Severe (15-21)",
      reliability: "Gold standard for anxiety screening in clinical settings",
    },
    href: "/student-dashboard",
  },
  {
    id: "ghq12",
    name: "GHQ-12",
    fullName: "General Health Questionnaire-12",
    title: "General Mental Health",
    icon: Shield,
    duration: "3-5 min",
    questions: 12,
    color: colors.lavenderPurple,
    bgColor: colors.lavenderVeil,
    front: {
      tagline: "Overall Mental Wellness",
      description: "A comprehensive screening for general psychological well-being.",
    },
    back: {
      purpose: "Screens for general psychological distress and identifies short-term changes in mental health.",
      content: "12 questions about feelings of strain, depression, inability to cope, and anxiety compared to your usual state.",
      scoring: "Scores above 11-12 suggest psychological distress warranting further evaluation",
      reliability: "Used globally in over 100 languages for mental health screening",
    },
    href: "/student-dashboard",
  },
]

// Premium Tests Data
const premiumTests = [
  {
    name: "ADHD Screening",
    shortName: "ASRS",
    description: "Adult ADHD Self-Report Scale for attention and hyperactivity symptoms",
    icon: Zap,
  },
  {
    name: "OCD Assessment",
    shortName: "Y-BOCS",
    description: "Yale-Brown Scale adapted for obsessive-compulsive symptoms",
    icon: Target,
  },
  {
    name: "Bipolar Screening",
    shortName: "MDQ",
    description: "Mood Disorder Questionnaire for bipolar spectrum indicators",
    icon: Activity,
  },
  {
    name: "PTSD Check",
    shortName: "PCL-5",
    description: "PTSD Checklist for trauma-related symptoms",
    icon: Shield,
  },
  {
    name: "Eating Disorder",
    shortName: "SCOFF",
    description: "SCOFF Questionnaire for eating disorder symptoms",
    icon: Heart,
  },
  {
    name: "Stress Assessment",
    shortName: "PSS-10",
    description: "Perceived Stress Scale for overall stress levels",
    icon: Brain,
  },
]

// FAQ Data
const faqs = [
  {
    question: "Are my screening results confidential?",
    answer: "Absolutely. All responses are completely anonymous and encrypted. We never store personal information with your results. Your privacy is our highest priority.",
    icon: Lock,
  },
  {
    question: "Is this a professional diagnosis?",
    answer: "No. These are screening tools, not diagnostic tests. They provide educational insights to help you understand your mental health. A formal diagnosis can only be made by a qualified healthcare professional.",
    icon: FileText,
  },
  {
    question: "How long does each screening take?",
    answer: "Most screenings take 3-7 minutes. They're designed to be quick and simple, providing a low-pressure way to check in with yourself.",
    icon: Clock,
  },
  {
    question: "What happens after I complete a screening?",
    answer: "You'll receive a score interpretation and personalized recommendations, which may include self-help resources, peer support communities, or suggestions to connect with a professional counselor.",
    icon: MessageCircle,
  },
]

// Flip Card Component
function FlipCard({ test, index }: { test: typeof mainTests[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const Icon = test.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-[420px] w-full [perspective:1500px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative h-full w-full [transform-style:preserve-3d] transition-all duration-700 ease-out",
          isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front of Card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full [backface-visibility:hidden]",
            "rounded-3xl overflow-hidden",
            "bg-white border border-gray-100",
            "shadow-lg hover:shadow-xl transition-shadow duration-300",
            "flex flex-col"
          )}
        >
          {/* Card Header */}
          <div 
            className="p-6 pb-4"
            style={{ backgroundColor: `${colors.lavenderVeil}40` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div 
                className="p-3 rounded-2xl"
                style={{ backgroundColor: colors.lavenderVeil }}
              >
                <Icon className="w-7 h-7" style={{ color: colors.lavenderPurple }} />
              </div>
              <div className="flex items-center gap-2">
                <Badge 
                  className="text-xs font-medium border-none"
                  style={{ backgroundColor: colors.lavenderMist, color: colors.lavenderPurple }}
                >
                  <Clock className="w-3 h-3 mr-1" />
                  {test.duration}
                </Badge>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-gray-800">{test.name}</h3>
              <p className="text-sm text-gray-500">{test.fullName}</p>
            </div>
          </div>

          {/* Card Body */}
          <div className="flex-1 p-6 pt-4 flex flex-col">
            <Badge 
              className="w-fit mb-3 text-xs border-none"
              style={{ backgroundColor: `${colors.lavenderPurple}15`, color: colors.lavenderPurple }}
            >
              {test.title}
            </Badge>
            <p className="text-lg font-medium text-gray-700 mb-2">{test.front.tagline}</p>
            <p className="text-gray-500 text-sm leading-relaxed flex-1">{test.front.description}</p>
            
            <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FileText className="w-4 h-4" />
                <span>{test.questions} questions</span>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium" style={{ color: colors.lavenderPurple }}>
                <span>Hover to learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]",
            "rounded-3xl overflow-hidden",
            "bg-white border border-gray-100",
            "shadow-xl",
            "flex flex-col p-6"
          )}
        >
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="p-2.5 rounded-xl"
              style={{ backgroundColor: colors.lavenderVeil }}
            >
              <BookOpen className="w-5 h-5" style={{ color: colors.lavenderPurple }} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">{test.name} Details</h4>
              <p className="text-xs text-gray-500">{test.title}</p>
            </div>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto">
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: colors.lavenderPurple }}>
                Purpose
              </h5>
              <p className="text-sm text-gray-600 leading-relaxed">{test.back.purpose}</p>
            </div>
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: colors.lavenderPurple }}>
                What It Measures
              </h5>
              <p className="text-sm text-gray-600 leading-relaxed">{test.back.content}</p>
            </div>
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: colors.lavenderPurple }}>
                Scoring
              </h5>
              <p className="text-sm text-gray-600 leading-relaxed">{test.back.scoring}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 mt-4">
            <Link href={test.href}>
              <MetalButton variant="lavender" className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Take Assessment
              </MetalButton>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Premium Card Component
function PremiumCard({ test, index }: { test: typeof premiumTests[0]; index: number }) {
  const Icon = test.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href="/login" className="block group">
        <div 
          className="relative p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          {/* Lock overlay */}
          <div className="absolute top-3 right-3">
            <div 
              className="p-1.5 rounded-lg"
              style={{ backgroundColor: `${colors.mauve}30` }}
            >
              <Lock className="w-3.5 h-3.5" style={{ color: colors.lavenderPurple }} />
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div 
              className="p-3 rounded-xl flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: colors.lavenderMist }}
            >
              <Icon className="w-5 h-5" style={{ color: colors.lavenderPurple }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-gray-800 group-hover:text-[#9667e0] transition-colors">
                  {test.name}
                </h4>
                <Badge 
                  className="text-[10px] px-1.5 py-0 border-none"
                  style={{ backgroundColor: `${colors.mauve}40`, color: colors.lavenderPurple }}
                >
                  {test.shortName}
                </Badge>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2">{test.description}</p>
            </div>
          </div>

          {/* Premium Badge */}
          <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
            <Badge 
              className="text-xs border-none"
              style={{ backgroundColor: `${colors.lavenderVeil}`, color: colors.lavenderPurple }}
            >
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </Badge>
            <span className="text-xs text-gray-400 group-hover:text-[#9667e0] transition-colors">
              Login to unlock →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// FAQ Item Component
function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const Icon = faq.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-gray-100 last:border-none"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-start gap-4 text-left group"
      >
        <div 
          className="p-2.5 rounded-xl flex-shrink-0 mt-0.5"
          style={{ backgroundColor: colors.lavenderMist }}
        >
          <Icon className="w-4 h-4" style={{ color: colors.lavenderPurple }} />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 group-hover:text-[#9667e0] transition-colors pr-8">
            {faq.question}
          </h4>
          <AnimatePresence>
            {isOpen && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-500 text-sm mt-2 leading-relaxed overflow-hidden"
              >
                {faq.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <ChevronRight 
          className={cn(
            "w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 mt-1",
            isOpen && "rotate-90"
          )}
        />
      </button>
    </motion.div>
  )
}

// Subtle Grid Pattern
function SubtleGrid() {
  const id = useId()
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} width="60" height="60" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="60" stroke={colors.lavenderPurple} strokeWidth="0.5" />
          <line x1="0" y1="0" x2="60" y2="0" stroke={colors.lavenderPurple} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

export default function ScreeningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <SubtleGrid />
        
        {/* Very subtle gradient accent */}
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.07]"
          style={{ background: `radial-gradient(circle, ${colors.lavenderPurple} 0%, transparent 70%)` }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge 
              className="mb-6 px-4 py-2 text-sm border-none"
              style={{ backgroundColor: colors.lavenderMist, color: colors.lavenderPurple }}
            >
              <Brain className="w-4 h-4 mr-2" />
              Evidence-Based Screening
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Understand Your{" "}
              <span style={{ color: colors.lavenderPurple }}>Mental Health</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Free, confidential, and clinically-validated screening tools. 
              Take the first step toward understanding your mental well-being.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#screenings">
                <MetalButton variant="lavender" size="lg">
                  <Play className="w-5 h-5 mr-2" />
                  Start Free Screening
                </MetalButton>
              </Link>
              <Link href="#how-it-works">
                <MetalButton variant="default" size="lg">
                  Learn How It Works
                </MetalButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Clinically Validated", value: "100%", icon: CheckCircle },
              { label: "Questions Total", value: "28", icon: FileText },
              { label: "Minutes Average", value: "10-15", icon: Clock },
              { label: "Completely Free", value: "3 Tests", icon: Sparkles },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div 
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: colors.lavenderMist }}
                >
                  <stat.icon className="w-5 h-5" style={{ color: colors.lavenderPurple }} />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Screenings Section */}
      <section id="screenings" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge 
              className="mb-4 px-4 py-2 text-sm border-none"
              style={{ backgroundColor: colors.lavenderMist, color: colors.lavenderPurple }}
            >
              Free Assessments
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Screening
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Hover over each card to learn more about the assessment, then click to begin.
            </p>
          </motion.div>

          {/* Flip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainTests.map((test, index) => (
              <FlipCard key={test.id} test={test} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20" style={{ backgroundColor: colors.ghostWhite }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge 
              className="mb-4 px-4 py-2 text-sm border-none"
              style={{ backgroundColor: colors.lavenderMist, color: colors.lavenderPurple }}
            >
              Simple Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Screening Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Choose a Test", description: "Select from our validated screening tools based on your concerns", icon: Target },
              { step: 2, title: "Answer Honestly", description: "Respond to questions about how you've felt in the past 2 weeks", icon: FileText },
              { step: 3, title: "Get Results", description: "Receive an instant, private interpretation of your responses", icon: Activity },
              { step: 4, title: "Take Action", description: "Get personalized recommendations and resources for next steps", icon: ArrowRight },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gray-200" />
                )}
                <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div 
                    className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center"
                    style={{ backgroundColor: colors.lavenderMist }}
                  >
                    <span className="text-xl font-bold" style={{ color: colors.lavenderPurple }}>{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Screening Matters */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge 
                className="px-4 py-2 text-sm border-none"
                style={{ backgroundColor: colors.lavenderMist, color: colors.lavenderPurple }}
              >
                Why It Matters
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Your First Step Toward{" "}
                <span style={{ color: colors.lavenderPurple }}>Wellness</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Taking a mental health screening is like a regular check-up for your mind. 
                It's a proactive step toward understanding your emotional well-being.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  { icon: CheckCircle, title: "Gain Self-Awareness", desc: "Understand your feelings from a clinical perspective" },
                  { icon: TrendingUp, title: "Track Your Progress", desc: "Monitor changes in your mental health over time" },
                  { icon: Users, title: "Facilitate Conversations", desc: "Share results with professionals or loved ones" },
                  { icon: Shield, title: "Complete Privacy", desc: "All responses are anonymous and encrypted" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div 
                      className="p-2 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: colors.lavenderMist }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: colors.lavenderPurple }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/serene-meditation-breathing-exercise-calm-blue-atm.jpg"
                  alt="Person in peaceful meditation"
                  className="w-full h-[500px] object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${colors.lavenderPurple}20 0%, transparent 50%)` }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Tests Section */}
      <section className="py-20" style={{ backgroundColor: colors.ghostWhite }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge 
              className="mb-4 px-4 py-2 text-sm border-none"
              style={{ backgroundColor: colors.lavenderMist, color: colors.lavenderPurple }}
            >
              <Crown className="w-4 h-4 mr-2" />
              Coming Soon
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Specialized Assessments
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Login to access additional screening tools for specific mental health concerns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {premiumTests.map((test, index) => (
              <PremiumCard key={index} test={test} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/login">
              <MetalButton variant="lavender">
                Login to Access All Tests
                <ArrowRight className="w-4 h-4 ml-2" />
              </MetalButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="py-12 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 p-6 rounded-2xl bg-amber-50 border border-amber-100"
          >
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-amber-800 mb-1">Important Disclaimer</h4>
              <p className="text-sm text-amber-700 leading-relaxed">
                These screening tools are for educational purposes only and are not a substitute for professional diagnosis. 
                If you're experiencing a mental health crisis, please contact a healthcare professional or crisis helpline immediately.
                In India, call iCall: 9152987821 or Vandrevala Foundation: 1860-2662-345.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge 
              className="mb-4 px-4 py-2 text-sm border-none"
              style={{ backgroundColor: colors.lavenderMist, color: colors.lavenderPurple }}
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </motion.div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.ghostWhite }}>
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-[0.15]"
          style={{ background: `radial-gradient(circle, ${colors.lavenderPurple} 0%, transparent 70%)` }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Take the First Step?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
              Understanding your mental health is the beginning of positive change. 
              Start with a free, confidential screening today.
            </p>
            <Link href="#screenings">
              <MetalButton variant="lavender" size="lg">
                <Play className="w-5 h-5 mr-2" />
                Start Your Free Screening
              </MetalButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
