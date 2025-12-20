"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { 
  AnimatedTimer, 
  SoundscapeCard, 
  TaskListCard, 
  StatsCard, 
  TimerPreviewCard,
  HowItWorksTimeline 
} from "@/components/focus-timer";
import {
  Timer,
  Headphones,
  ListTodo,
  BarChart3,
  Play,
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Clock,
  Target,
  Users,
  Star,
  Shield,
  CheckCircle2,
  Lock,
  Coffee,
  Moon,
  Sun,
  Quote,
} from "lucide-react";
import { toast, Toaster } from "sonner";

// Brand color
const BRAND_BLUE = "#1D2D50";

// Simulated auth state
const useAuth = () => {
  return { user: null, isAuthenticated: false };
};

export default function FocusTimerLandingPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Protected action handler - redirects to login if not authenticated
  const handleProtectedAction = (actionName: string) => {
    if (!isAuthenticated) {
      toast.info("Join PeaceCode to unlock this focus tool.", {
        description: `Sign up to access ${actionName} and more premium features.`,
      });
      router.push("/auth/login");
      return;
    }
    router.push("/focus");
  };

  const features = [
    {
      icon: Timer,
      title: "Pomodoro Technique",
      description: "25-minute focused work sessions with structured breaks to maximize productivity.",
    },
    {
      icon: Headphones,
      title: "Ambient Sounds",
      description: "Curated soundscapes from rain to library ambiance for deep concentration.",
    },
    {
      icon: ListTodo,
      title: "Task Tracking",
      description: "Organize your work, set goals, and track daily accomplishments.",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Visualize your focus patterns and celebrate your productivity wins.",
    },
  ];

  const benefits = [
    { icon: Brain, value: "40%", label: "More Productive" },
    { icon: Clock, value: "2.5x", label: "Faster Completion" },
    { icon: Target, value: "90%", label: "Goal Achievement" },
    { icon: Zap, value: "3x", label: "Less Burnout" },
  ];

  const testimonials = [
    {
      quote: "The Focus Timer transformed my study sessions. I went from distracted to laser-focused in just one week.",
      author: "Rahul K.",
      role: "CS Student",
      avatar: "RK",
    },
    {
      quote: "The ambient sounds are a game-changer. I can finally study in my noisy dorm without headaches.",
      author: "Meera S.",
      role: "Medical Student",
      avatar: "MS",
    },
    {
      quote: "Tracking my focus time helped me realize I was only truly productive for 2 hours. Now I hit 6+ hours daily.",
      author: "Aditya P.",
      role: "MBA Student",
      avatar: "AP",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f0f7ff] to-white">
      <Toaster richColors position="top-center" />
      <Navigation />

      {/* Subtle grid pattern background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(${BRAND_BLUE}08 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "rgba(224, 242, 254, 0.7)" }}
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "rgba(186, 230, 253, 0.5)" }}
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md"
                style={{ 
                  background: "rgba(255, 255, 255, 0.7)", 
                  border: `1px solid ${BRAND_BLUE}20`,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4" style={{ color: BRAND_BLUE }} />
                <span className="text-sm text-gray-700 font-medium">Pomodoro • Soundscapes • Analytics</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Master Your
                <br />
                <span style={{ color: BRAND_BLUE }}>Flow State</span>
              </h1>

              <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Boost productivity with our advanced Pomodoro timer, ambient soundscapes, and intelligent task tracking. 
                <span className="font-medium" style={{ color: BRAND_BLUE }}> Login to access all features.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all text-white"
                  style={{ background: BRAND_BLUE }}
                  whileHover={{ scale: 1.02, boxShadow: `0 10px 40px ${BRAND_BLUE}60` }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleProtectedAction("Focus Timer")}
                >
                  <Play className="w-5 h-5" />
                  Enter Focus Mode
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg border transition-all backdrop-blur-md"
                  style={{ 
                    borderColor: `${BRAND_BLUE}30`,
                    background: "rgba(255, 255, 255, 0.6)",
                    color: BRAND_BLUE
                  }}
                  whileHover={{ background: "rgba(255, 255, 255, 0.9)" }}
                  onClick={() => {
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Zap className="w-5 h-5" />
                  See Features
                </motion.button>
              </div>

              {/* Trust indicators */}
              <motion.div
                className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { icon: Users, text: "10K+ Students" },
                  { icon: Star, text: "4.9 Rating" },
                  { icon: Shield, text: "Privacy First" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-500 text-sm">
                    <item.icon className="w-4 h-4" style={{ color: BRAND_BLUE }} />
                    {item.text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Animated Timer */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Glow effect behind timer */}
                <div 
                  className="absolute inset-0 blur-3xl opacity-30"
                  style={{ background: `radial-gradient(circle, ${BRAND_BLUE}40 0%, transparent 70%)` }}
                />
                <AnimatedTimer size={320} variant="light" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full flex justify-center pt-2" style={{ border: `2px solid ${BRAND_BLUE}40` }}>
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: BRAND_BLUE }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Benefits Stats Bar */}
      <section 
        className="py-12 backdrop-blur-xl"
        style={{ 
          background: "linear-gradient(180deg, rgba(240, 249, 255, 0.9) 0%, rgba(224, 242, 254, 0.7) 100%)",
          borderTop: `1px solid ${BRAND_BLUE}10`,
          borderBottom: `1px solid ${BRAND_BLUE}10`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <benefit.icon className="w-8 h-8 mx-auto mb-3" style={{ color: BRAND_BLUE }} />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{benefit.value}</div>
                <div className="text-gray-600 text-sm">{benefit.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                background: "rgba(224, 242, 254, 0.8)",
                border: `1px solid ${BRAND_BLUE}20`
              }}
            >
              <Zap className="w-4 h-4" style={{ color: BRAND_BLUE }} />
              <span className="text-sm text-gray-700 font-medium">Premium Features</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Focus
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A complete productivity suite designed for deep work and maximum concentration.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {/* Timer Card - Large */}
            <motion.div
              className="md:col-span-2 p-6 rounded-2xl backdrop-blur-xl border"
              style={{
                background: "rgba(255, 255, 255, 0.75)",
                borderColor: `${BRAND_BLUE}10`,
                boxShadow: `0 4px 20px ${BRAND_BLUE}06`
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <TimerPreviewCard 
                onStart={() => handleProtectedAction("Focus Timer")} 
                variant="light" 
              />
            </motion.div>

            {/* Stats Card - Small */}
            <motion.div
              className="p-6 rounded-2xl backdrop-blur-xl border"
              style={{
                background: "rgba(255, 255, 255, 0.75)",
                borderColor: `${BRAND_BLUE}10`,
                boxShadow: `0 4px 20px ${BRAND_BLUE}06`
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <StatsCard variant="light" />
            </motion.div>

            {/* Soundscape Card - Wide */}
            <motion.div
              className="md:col-span-2 p-6 rounded-2xl backdrop-blur-xl border"
              style={{
                background: "rgba(255, 255, 255, 0.75)",
                borderColor: `${BRAND_BLUE}10`,
                boxShadow: `0 4px 20px ${BRAND_BLUE}06`
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <SoundscapeCard 
                onPlay={() => handleProtectedAction("Ambient Sounds")} 
                variant="light" 
              />
            </motion.div>

            {/* Task List Card - Tall */}
            <motion.div
              className="md:row-span-2 p-6 rounded-2xl backdrop-blur-xl border"
              style={{
                background: "rgba(255, 255, 255, 0.75)",
                borderColor: `${BRAND_BLUE}10`,
                boxShadow: `0 4px 20px ${BRAND_BLUE}06`
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <TaskListCard 
                onAddTask={() => handleProtectedAction("Task Manager")} 
                variant="light" 
              />
            </motion.div>

            {/* Feature highlights */}
            {features.slice(0, 2).map((feature, idx) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-2xl backdrop-blur-xl border"
                style={{
                  background: "rgba(255, 255, 255, 0.75)",
                  borderColor: `${BRAND_BLUE}10`,
                  boxShadow: `0 4px 20px ${BRAND_BLUE}06`
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${BRAND_BLUE}10` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: BRAND_BLUE }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-xl"
        style={{ 
          background: "linear-gradient(180deg, rgba(240, 249, 255, 0.95) 0%, rgba(224, 242, 254, 0.85) 50%, rgba(240, 249, 255, 0.95) 100%)"
        }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A simple four-step process to transform your productivity.
            </p>
          </motion.div>

          <HowItWorksTimeline variant="light" />
        </div>
      </section>

      {/* Why Focus Timer Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Students Love Focus Timer
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Built by students, for students. Every feature addresses real productivity challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sun, title: "Morning Starter", desc: "Designed to help you kick off productive mornings." },
              { icon: Moon, title: "Night Owl Mode", desc: "Dark themes and calming sounds for late-night study." },
              { icon: Coffee, title: "Smart Breaks", desc: "Science-backed break intervals to prevent burnout." },
              { icon: Lock, title: "Distraction Block", desc: "Stay focused by locking in during sessions." },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl backdrop-blur-xl border text-center"
                style={{
                  background: "rgba(240, 249, 255, 0.6)",
                  borderColor: `${BRAND_BLUE}10`,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${BRAND_BLUE}10` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: BRAND_BLUE }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-xl"
        style={{ 
          background: "linear-gradient(180deg, rgba(240, 249, 255, 0.95) 0%, rgba(224, 242, 254, 0.85) 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how Focus Timer is helping students achieve their academic goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-2xl backdrop-blur-xl border relative"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  borderColor: `${BRAND_BLUE}10`,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <Quote className="w-8 h-8 mb-4" style={{ color: `${BRAND_BLUE}30` }} />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm text-white"
                    style={{ background: BRAND_BLUE }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px]"
          style={{ background: "rgba(186, 230, 253, 0.4)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center backdrop-blur-xl"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              border: `2px solid ${BRAND_BLUE}30`,
              boxShadow: `0 8px 30px ${BRAND_BLUE}20`
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Timer className="w-10 h-10" style={{ color: BRAND_BLUE }} />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Enter Your Flow State?
          </h2>
          <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of students who have transformed their productivity. Start your first focus session today.
          </p>

          <motion.button
            className="group flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-semibold text-lg transition-all text-white mx-auto"
            style={{ background: BRAND_BLUE }}
            whileHover={{ scale: 1.02, boxShadow: `0 15px 50px ${BRAND_BLUE}60` }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleProtectedAction("Focus Timer")}
          >
            <Play className="w-5 h-5" />
            Start Focus Session
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <p className="text-gray-500 text-sm mt-6">
            Free to start • No credit card required • Works on all devices
          </p>
        </motion.div>
      </section>

      {/* Trust badges */}
      <section 
        className="py-12 bg-white"
        style={{ borderTop: `1px solid ${BRAND_BLUE}10` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: Shield, text: "Privacy First" },
              { icon: CheckCircle2, text: "Science-Backed" },
              { icon: Users, text: "10,000+ Students" },
              { icon: Clock, text: "24/7 Available" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-500">
                <item.icon className="w-5 h-5" style={{ color: BRAND_BLUE }} />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

