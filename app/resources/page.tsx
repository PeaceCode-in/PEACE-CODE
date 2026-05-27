"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Video,
  Headphones,
  FileText,
  Globe,
  Heart,
  Brain,
  Zap,
  Shield,
  Play,
  Star,
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Bookmark,
  Share2,
  BarChart,
  BrainCircuit,
  Activity,
  Moon,
  GraduationCap,
  MessageSquare,
  Phone,
  Bell,
  Puzzle,
  Layers,
  Camera,
  ChevronDown,
} from "lucide-react"

/* ──────────────────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────────────────── */

const resourceCategories = [
  {
    icon: Video,
    title: "Video Masterclasses",
    count: "150+",
    description:
      "Expert-led video series on mental health topics, coping strategies, and wellness techniques",
    color: "from-[#9667e0] to-[#b0b0ff]",
    image: "/professional-counselor-therapy-session-mental-heal.jpg",
  },
  {
    icon: Headphones,
    title: "Audio Library",
    count: "200+",
    description:
      "Guided meditations, breathing exercises, sleep stories, and relaxation audio content",
    color: "from-[#8e5cd6] to-[#d9d9ff]",
    image: "/serene-meditation-breathing-exercise-calm-blue-atm.jpg",
  },
  {
    icon: FileText,
    title: "Downloadable Guides",
    count: "100+",
    description:
      "Comprehensive PDFs, worksheets, and interactive tools for self-paced learning",
    color: "from-[#6c5ce7] to-[#9667e0]",
    image: "/digital-library-mental-health-resources-books-know.jpg",
  },
  {
    icon: Brain,
    title: "Interactive Tools",
    count: "50+",
    description:
      "Self-assessment quizzes, mood trackers, goal-setting templates, and digital exercises",
    color: "from-[#7c5acf] to-[#b0b0ff]",
    image: "/focused-study-environment-productivity-timer-ambie.jpg",
  },
  {
    icon: Shield,
    title: "Crisis Resources",
    count: "25+",
    description:
      "Immediate support guides, safety plans, and emergency mental health resources",
    color: "from-[#c97070] to-[#d4739d]",
    image: "/peaceful-nature-landscape-mountains-meditation-su.jpg",
  },
  {
    icon: Users,
    title: "Peer Stories",
    count: "300+",
    description:
      "Real experiences, testimonials, and recovery stories from students like you",
    color: "from-[#4a4f87] to-[#9667e0]",
    image: "/diverse-group-students-supporting-each-other-commu.jpg",
  },
]

const featuredResources = [
  {
    title: "Anxiety Management Masterclass",
    type: "Video Series",
    duration: "8 episodes",
    expert: "Dr. Priya Sharma",
    rating: 4.9,
    views: "125K+",
    description:
      "Complete guide to understanding and managing anxiety with evidence-based techniques",
    language: "English, Hindi, Tamil",
    thumbnail: "/peaceful-young-woman-student-smiling-hope-recovery.jpg",
  },
  {
    title: "Sleep Stories Collection",
    type: "Audio Library",
    duration: "30+ stories",
    expert: "Multiple Experts",
    rating: 4.8,
    views: "200K+",
    description:
      "Soothing bedtime stories and sleep meditations for better rest and mental wellness",
    language: "10+ Languages",
    thumbnail: "/peaceful-ocean-waves-gentle-meditation-calming-bl.jpg",
  },
  {
    title: "Exam Stress Survival Kit",
    type: "Interactive Guide",
    duration: "Complete Toolkit",
    expert: "Student Support Team",
    rating: 4.9,
    views: "350K+",
    description:
      "Comprehensive toolkit with worksheets, audio guides, and stress management strategies",
    language: "All Regional Languages",
    thumbnail: "/confident-young-man-student-mental-health-recovery.jpg",
  },
]

const resourceTypes = [
  {
    icon: Video,
    title: "Educational Videos",
    count: "150+ videos",
    description:
      "Expert-led video series covering mental health topics, coping strategies, and wellness techniques",
    features: ["HD Quality", "Subtitles Available", "Downloadable", "Mobile Optimized"],
  },
  {
    icon: Headphones,
    title: "Relaxation Audio",
    count: "200+ audio files",
    description:
      "Guided meditations, breathing exercises, sleep stories, and calming soundscapes",
    features: ["Multiple Formats", "Offline Mode", "Variable Speeds", "Background Sounds"],
  },
  {
    icon: FileText,
    title: "Wellness Guides",
    count: "100+ PDF guides",
    description:
      "Comprehensive guides on mental health topics, self-care practices, and healthy habits",
    features: ["Printable", "Interactive", "Updated Regularly", "Evidence-Based"],
  },
  {
    icon: BrainCircuit,
    title: "Interactive Tools",
    count: "50+ tools",
    description:
      "Self-assessment quizzes, mood trackers, goal-setting templates, and digital exercises",
    features: ["Real-Time Feedback", "Progress Tracking", "Gamified", "Personalized"],
  },
  {
    icon: MessageSquare,
    title: "Crisis Resources",
    count: "25+ resources",
    description:
      "Immediate support guides, safety plans, and emergency mental health resources",
    features: ["24/7 Available", "Quick Access", "Multilingual", "Anonymous"],
  },
  {
    icon: Camera,
    title: "Visual Learning",
    count: "80+ infographics",
    description:
      "Beautifully designed infographics, diagrams, and visual aids for easy understanding",
    features: ["Shareable", "Printable", "Easy to Digest", "Culturally Relevant"],
  },
]

const popularTopics = [
  { name: "Anxiety Management", count: "45 resources", icon: Zap, bg: "bg-[#f5f0ff]", text: "text-[#9667e0]" },
  { name: "Depression Support", count: "38 resources", icon: Heart, bg: "bg-[#fff0f5]", text: "text-[#d4739d]" },
  { name: "Stress Relief", count: "52 resources", icon: Brain, bg: "bg-[#f0f0ff]", text: "text-[#6c5ce7]" },
  { name: "Sleep Wellness", count: "28 resources", icon: Moon, bg: "bg-[#eef0ff]", text: "text-[#4a4f87]" },
  { name: "Academic Success", count: "40 resources", icon: GraduationCap, bg: "bg-[#f0fff4]", text: "text-[#5a9e5f]" },
  { name: "Relationships", count: "32 resources", icon: Users, bg: "bg-[#fff5f5]", text: "text-[#c97070]" },
  { name: "Mindfulness", count: "35 resources", icon: Activity, bg: "bg-[#f8f0ff]", text: "text-[#8e5cd6]" },
  { name: "Crisis Support", count: "25 resources", icon: Shield, bg: "bg-[#fff5ef]", text: "text-[#c4845e]" },
]

const uniqueFeatures = [
  {
    icon: Puzzle,
    title: "Personalized Learning Paths",
    description: "AI-powered recommendations based on your needs, progress, and preferences",
  },
  {
    icon: Layers,
    title: "Progressive Difficulty Levels",
    description: "Resources organized from beginner to advanced, tailored to your comfort level",
  },
  {
    icon: Bell,
    title: "Crisis Alerts & Reminders",
    description: "Smart notifications for wellness check-ins and important mental health updates",
  },
  {
    icon: Bookmark,
    title: "Save for Later",
    description: "Bookmark your favorite resources and build your personal wellness library",
  },
  {
    icon: Share2,
    title: "Share with Friends",
    description: "Easily share helpful resources with friends who might benefit",
  },
  {
    icon: BarChart,
    title: "Track Your Progress",
    description: "Monitor your learning journey with detailed progress analytics",
  },
]

const languages = [
  { name: "English", flag: "🇬🇧", resources: "500+" },
  { name: "Hindi", flag: "🇮🇳", resources: "300+" },
  { name: "Tamil", flag: "🇮🇳", resources: "250+" },
  { name: "Bengali", flag: "🇮🇳", resources: "200+" },
  { name: "Telugu", flag: "🇮🇳", resources: "180+" },
  { name: "Marathi", flag: "🇮🇳", resources: "150+" },
  { name: "Gujarati", flag: "🇮🇳", resources: "120+" },
  { name: "Kannada", flag: "🇮🇳", resources: "100+" },
]

/* ──────────────────────────────────────────────────────────
   ANIMATION VARIANTS
   ────────────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
}

/* ──────────────────────────────────────────────────────────
   GRAIN OVERLAY COMPONENT
   ────────────────────────────────────────────────────────── */

function GrainOverlay() {
  return <div className="resources-grain-overlay" aria-hidden="true" />
}

/* ──────────────────────────────────────────────────────────
   PAGE COMPONENT
   ────────────────────────────────────────────────────────── */

export default function ResourcesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfaff]">
      {/* Mouse-follow ambient glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(150,103,224,0.04) 0%, transparent 60%)`,
        }}
      />

      {/* ════════════════════════════════════════════════════════
          SECTION 1 — ETHEREAL HERO
          ════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfaff] via-[#f5f0ff] to-[#ede7ff]" />

        {/* Grain */}
        <GrainOverlay />

        {/* Floating blobs */}
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#d9d9ff]/40 to-[#9667e0]/20 blur-[120px] animate-resource-blob" />
        <div className="absolute -right-24 top-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#b0b0ff]/30 to-[#6c5ce7]/15 blur-[100px] animate-resource-blob-reverse" />
        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-[#ebd9fc]/40 to-[#d9d9ff]/20 blur-[100px] animate-resource-blob-slow" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="mb-8 border border-[#9667e0]/20 bg-white/60 px-5 py-2.5 text-sm font-medium tracking-wide text-[#3c306a] backdrop-blur-md">
                <BookOpen className="mr-2 h-4 w-4 text-[#9667e0]" />
                Comprehensive Mental Health Resources
              </Badge>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mb-6 font-playfair text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-9xl"
            >
              <span className="text-[#12101e]">Your </span>
              <span className="bg-gradient-to-r from-[#3c306a] via-[#9667e0] to-[#6c5ce7] bg-clip-text text-transparent">
                Resource
              </span>
              <br className="hidden sm:block" />
              <span className="text-[#12101e]"> Hub</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mb-10 max-w-3xl text-lg leading-relaxed text-[#615e75] sm:text-xl lg:text-2xl"
            >
              Access 600+ evidence-based resources including videos, audio guides, interactive
              tools, and downloadable materials — all designed to support your mental wellness
              journey.
            </motion.p>

            {/* Tags */}
            <motion.div variants={fadeUp} custom={3} className="mb-10 flex flex-wrap justify-center gap-3">
              {["600+ Resources", "10+ Languages", "24/7 Access", "Expert-Curated"].map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full border border-[#ebd9fc] bg-white/70 px-4 py-1.5 text-sm font-medium text-[#3c306a] backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} custom={4} className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="px-10 py-6 text-lg">
                <Link href="#explore">
                  Explore Resources <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-[#9667e0]/30 px-10 py-6 text-lg text-[#3c306a] hover:bg-[#f5f0ff]">
                <Link href="#crisis">
                  Crisis Support <Shield className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-[#615e75]/60"
          >
            <span className="mb-2 text-xs font-medium uppercase tracking-widest">Discover</span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 2 — GLASSMORPHIC CATEGORY GRID
          ════════════════════════════════════════════════════════ */}
      <section
        id="explore"
        className="relative overflow-hidden py-28 sm:py-36"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#ede7ff]/30 via-[#fbfaff] to-white" />
        <GrainOverlay />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mb-20 text-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <Badge variant="secondary" className="mb-6 border border-[#ebd9fc] bg-white/80 px-5 py-2 text-sm font-medium text-[#3c306a] backdrop-blur-sm">
                Resource Categories
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mb-4 font-playfair text-4xl font-bold tracking-tight text-[#12101e] sm:text-5xl lg:text-6xl"
            >
              Everything You Need in{" "}
              <span className="text-[#9667e0]">One Place</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mx-auto max-w-3xl text-lg text-[#615e75]">
              Discover our comprehensive collection of mental health resources, carefully curated
              by experts and organized for easy access.
            </motion.p>
          </motion.div>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {resourceCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="glass-resource-card group cursor-pointer overflow-hidden rounded-2xl"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20`} />
                    <div className="absolute left-4 top-4">
                      <div className={`rounded-xl bg-gradient-to-br ${category.color} p-3 shadow-lg`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#3c306a] backdrop-blur-sm">
                      {category.count}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-[#12101e] transition-colors group-hover:text-[#9667e0]">
                      {category.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-[#615e75]">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-[#9667e0] transition-all group-hover:gap-2">
                      Explore <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 3 — FEATURED RESOURCE SPOTLIGHT
          ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#faf9ff] to-[#f5f0ff]/30" />
        <GrainOverlay />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mb-20 text-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="mb-6 border border-[#9667e0]/20 bg-[#9667e0]/5 px-5 py-2 text-sm font-medium text-[#9667e0] backdrop-blur-sm">
                Most Popular
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mb-4 font-playfair text-4xl font-bold tracking-tight text-[#12101e] sm:text-5xl lg:text-6xl"
            >
              Featured <span className="text-[#9667e0]">Resources</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mx-auto max-w-3xl text-lg text-[#615e75]">
              Our most accessed and highly-rated resources, trusted by thousands of students.
            </motion.p>
          </motion.div>

          {/* Spotlight Cards */}
          <div className="space-y-12">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={0}
                className={`glass-resource-card group flex flex-col overflow-hidden rounded-3xl ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden lg:h-auto lg:w-1/2">
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3c306a]/20 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#3c306a] backdrop-blur-sm">
                    <Play className="h-3 w-3" />
                    {resource.type}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-10">
                  <div className="mb-4 flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 fill-[#9667e0] text-[#9667e0]" />
                    <span className="font-semibold text-[#12101e]">{resource.rating}</span>
                    <span className="text-[#615e75]">·</span>
                    <span className="text-[#615e75]">{resource.views} views</span>
                  </div>
                  <h3 className="mb-3 font-playfair text-2xl font-bold text-[#12101e] transition-colors group-hover:text-[#9667e0] sm:text-3xl">
                    {resource.title}
                  </h3>
                  <p className="mb-5 leading-relaxed text-[#615e75]">
                    {resource.description}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#f5f0ff] px-3 py-1 text-xs font-medium text-[#9667e0]">
                      {resource.duration}
                    </span>
                    <span className="rounded-full border border-[#ebd9fc] px-3 py-1 text-xs font-medium text-[#3c306a]">
                      By {resource.expert}
                    </span>
                    <span className="rounded-full border border-[#ebd9fc] px-3 py-1 text-xs font-medium text-[#3c306a]">
                      {resource.language}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <Button size="lg" className="flex-1">
                      <Play className="mr-2 h-4 w-4" /> Start Now
                    </Button>
                    <Button size="lg" variant="outline" className="border-[#ebd9fc] hover:bg-[#f5f0ff]">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 4 — CONTENT FORMATS GRID
          ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0ff]/30 via-[#faf9ff] to-white" />
        <GrainOverlay />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mb-20 text-center"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="mb-4 font-playfair text-4xl font-bold tracking-tight text-[#12101e] sm:text-5xl lg:text-6xl"
            >
              Diverse <span className="text-[#9667e0]">Content Formats</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mx-auto max-w-3xl text-lg text-[#615e75]">
              Choose the format that works best for your learning style and schedule.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {resourceTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="glass-resource-card group rounded-2xl p-8"
                >
                  <div className="mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5f0ff] transition-all group-hover:scale-110 group-hover:bg-[#ede7ff]">
                      <Icon className="h-7 w-7 text-[#9667e0]" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#12101e] transition-colors group-hover:text-[#9667e0]">
                    {type.title}
                  </h3>
                  <span className="mb-4 inline-block rounded-full bg-[#f5f0ff] px-3 py-1 text-xs font-medium text-[#9667e0]">
                    {type.count}
                  </span>
                  <p className="mb-6 text-sm leading-relaxed text-[#615e75]">
                    {type.description}
                  </p>
                  <div className="space-y-2.5">
                    {type.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-[#615e75]">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#9667e0]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 5 — EXPLORE BY TOPIC
          ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 bg-white" />
        <GrainOverlay />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mb-20 text-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <Badge variant="secondary" className="mb-6 border border-[#ebd9fc] bg-white/80 px-5 py-2 text-sm font-medium text-[#3c306a] backdrop-blur-sm">
                Trending Topics
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mb-4 font-playfair text-4xl font-bold tracking-tight text-[#12101e] sm:text-5xl lg:text-6xl"
            >
              Explore by <span className="text-[#9667e0]">Topic</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mx-auto max-w-3xl text-lg text-[#615e75]">
              Find resources tailored to specific mental health topics and concerns.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-5 md:grid-cols-4"
          >
            {popularTopics.map((topic, index) => {
              const Icon = topic.icon
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.25 } }}
                  className="glass-resource-card group cursor-pointer rounded-2xl p-6 text-center"
                >
                  <div className={`${topic.bg} mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110`}>
                    <Icon className={`h-7 w-7 ${topic.text}`} />
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-[#12101e] transition-colors group-hover:text-[#9667e0]">
                    {topic.name}
                  </h3>
                  <p className="text-xs text-[#615e75]">{topic.count}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 6 — MULTI-LANGUAGE SHOWCASE
          ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0ff]/40 to-white" />
        <GrainOverlay />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="mb-6 border border-[#9667e0]/20 bg-[#9667e0]/5 px-5 py-2 text-sm font-medium text-[#9667e0] backdrop-blur-sm">
                Cultural Accessibility
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mb-4 font-playfair text-4xl font-bold tracking-tight text-[#12101e] sm:text-5xl lg:text-6xl"
            >
              Resources in Your{" "}
              <span className="text-[#9667e0]">Language</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mx-auto max-w-3xl text-lg text-[#615e75]">
              Access mental health resources in your preferred language for better understanding
              and comfort.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8"
          >
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -3, scale: 1.05, transition: { duration: 0.25 } }}
                className="glass-resource-card group cursor-pointer rounded-2xl p-4 text-center"
              >
                <div className="mb-2 text-3xl">{lang.flag}</div>
                <div className="text-sm font-semibold text-[#12101e]">{lang.name}</div>
                <div className="text-xs text-[#615e75]">{lang.resources}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 7 — WHAT MAKES US DIFFERENT
          ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#faf9ff]" />
        <GrainOverlay />

        {/* Decorative blob */}
        <div className="absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-[#d9d9ff]/20 blur-[120px] animate-resource-blob-slow" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mb-20 text-center"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="mb-4 font-playfair text-4xl font-bold tracking-tight text-[#12101e] sm:text-5xl lg:text-6xl"
            >
              What Makes Us{" "}
              <span className="text-[#9667e0]">Different</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mx-auto max-w-3xl text-lg text-[#615e75]">
              Unique features that enhance your learning experience and make mental health
              resources more accessible.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {uniqueFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="glass-resource-card group rounded-2xl p-8"
                >
                  <div className="mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5f0ff] transition-all group-hover:scale-110 group-hover:bg-[#ede7ff]">
                      <Icon className="h-7 w-7 text-[#9667e0]" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-[#12101e] transition-colors group-hover:text-[#9667e0]">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#615e75]">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 8 — CRISIS RESOURCES
          ════════════════════════════════════════════════════════ */}
      <section
        id="crisis"
        className="relative overflow-hidden py-28 sm:py-36"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff5f5] via-[#fff0f5] to-[#faf9ff]" />
        <GrainOverlay />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            {/* Text */}
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="mb-6 border border-[#d4739d]/30 bg-[#d4739d]/10 px-5 py-2 text-sm font-medium text-[#c97070]">
                <AlertCircle className="mr-2 h-4 w-4" />
                Immediate Support
              </Badge>
              <h2 className="mb-6 font-playfair text-4xl font-bold tracking-tight text-[#12101e] sm:text-5xl">
                Crisis <span className="text-[#d4739d]">Resources</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-[#615e75]">
                If you&apos;re in crisis, we have immediate resources and support available.
                These tools are designed for urgent situations and can be accessed 24/7.
              </p>
              <div className="mb-8 space-y-3">
                {[
                  "Crisis Safety Plans",
                  "Emergency Contact Guides",
                  "Coping Strategies for Crisis",
                  "24/7 Helpline Directory",
                  "Step-by-Step Crisis Support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#d4739d]" />
                    <span className="font-medium text-[#12101e]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="destructive" asChild>
                  <Link href="/ai-support">
                    Get Help Now <Phone className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-[#d4739d]/30 text-[#3c306a] hover:bg-[#fff0f5]">
                  <Link href="#">View Crisis Resources</Link>
                </Button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div variants={fadeUp} custom={1} className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-[#d4739d]/10">
                <img
                  src="/peaceful-nature-landscape-mountains-meditation-su.jpg"
                  alt="Crisis Support — Peaceful nature landscape"
                  className="h-[420px] w-full object-cover lg:h-[500px]"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#3c306a]/15 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 9 — FINAL CTA
          ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-32 sm:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9667e0] via-[#7c5acf] to-[#6c5ce7]" />
        <GrainOverlay />

        {/* Decorative elements */}
        <div className="absolute -left-20 top-1/4 h-[300px] w-[300px] rounded-full bg-white/5 blur-[80px]" />
        <div className="absolute -right-20 bottom-1/4 h-[300px] w-[300px] rounded-full bg-white/5 blur-[80px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} custom={0}>
              <BookOpen className="mx-auto mb-8 h-16 w-16 text-white/20" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mb-6 font-playfair text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              Start Your Learning{" "}
              <span className="text-[#d9d9ff]">Journey</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
            >
              Explore our comprehensive resource library and discover tools that can transform
              your mental wellness journey.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Button size="lg" asChild className="bg-white px-10 py-6 text-lg text-[#9667e0] hover:bg-white/90">
                <Link href="/auth/signup">
                  Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-white/30 px-10 py-6 text-lg text-white hover:bg-white/10"
              >
                <Link href="/ai-support">
                  Chat with AI <MessageSquare className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}