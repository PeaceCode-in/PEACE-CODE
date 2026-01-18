"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { WordRotate } from "@/components/breath-pacer/WordRotate";
import { BreathingAnimation } from "@/components/breath-pacer/BreathingAnimation";
import { BreathPacerBentoGrid } from "@/components/breath-pacer/BreathPacerBentoGrid";
import { 
  Wind, 
  Heart, 
  Brain, 
  Moon, 
  Sparkles, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Quote,
  Star,
  Play,
  Zap,
  Timer,
  Leaf
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "sonner";

// Brand color
const BRAND_BLUE = "#1D2D50";

// Simulated auth state - in production, use your actual auth context
const useAuth = () => {
  // Replace with actual auth logic
  return { user: null, isAuthenticated: false };
};

export default function BreathPacerLandingPage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const handleMainCTA = () => {
    if (!isAuthenticated) {
      toast.info("Please sign in to start your journey.", {
        description: "Create a free account to access guided breathing sessions.",
      });
      router.push("/auth/login");
      return;
    }
    router.push("/breathe");
  };

  const benefits = [
    {
      icon: Heart,
      title: "Lower Blood Pressure",
      description: "Regular practice reduces hypertension and promotes cardiovascular health.",
    },
    {
      icon: Brain,
      title: "Enhanced Focus",
      description: "Oxygenate your brain for sharper concentration and mental clarity.",
    },
    {
      icon: Moon,
      title: "Better Sleep",
      description: "Calm your nervous system naturally for restful, deep sleep.",
    },
    {
      icon: Shield,
      title: "Stress Resilience",
      description: "Build lasting resilience against daily stressors and anxiety.",
    },
    {
      icon: Zap,
      title: "Instant Energy",
      description: "Energizing techniques to boost alertness without caffeine.",
    },
    {
      icon: Leaf,
      title: "Emotional Balance",
      description: "Regulate emotions and find your center in any situation.",
    },
  ];

  const stats = [
    { value: "68%", label: "Anxiety Reduction", icon: Brain },
    { value: "15min", label: "To Feel Calmer", icon: Timer },
    { value: "10K+", label: "Students Helped", icon: Users },
    { value: "4.9★", label: "User Rating", icon: Star },
  ];

  const testimonials = [
    {
      quote: "Box breathing helped me conquer my exam anxiety. I went from panic attacks to peaceful focus in just two weeks.",
      author: "Priya S.",
      role: "Medical Student",
      avatar: "PS",
    },
    {
      quote: "The 4-7-8 technique is my secret weapon for insomnia. I haven't needed sleeping pills since discovering this.",
      author: "Arjun M.",
      role: "Engineering Student",
      avatar: "AM",
    },
    {
      quote: "As someone with ADHD, the breath pacer has become essential for my study sessions. It grounds me instantly.",
      author: "Sneha R.",
      role: "Psychology Major",
      avatar: "SR",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Choose Your Technique",
      description: "Select from 6 scientifically-proven breathing patterns based on your current need.",
    },
    {
      step: "02",
      title: "Follow the Visual Guide",
      description: "Our soothing animations guide your breath with perfect timing and rhythm.",
    },
    {
      step: "03",
      title: "Track Your Progress",
      description: "Monitor your sessions and witness your transformation over time.",
    },
  ];

  const science = [
    {
      fact: "Activates Parasympathetic Nervous System",
      detail: "Slow, deep breathing triggers the 'rest and digest' response, countering fight-or-flight.",
    },
    {
      fact: "Increases Heart Rate Variability",
      detail: "Higher HRV is linked to emotional resilience, longevity, and stress adaptation.",
    },
    {
      fact: "Lowers Cortisol Levels",
      detail: "Just 5 minutes of controlled breathing can reduce stress hormones by up to 25%.",
    },
    {
      fact: "Boosts GABA Production",
      detail: "Deep breathing increases calming neurotransmitters naturally.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f0f7ff] to-white">
      <Toaster richColors position="top-center" />

      {/* Hero Section - White/Very Light Blue */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Soft cloudy background effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Soft gradient orbs for cloudy effect */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
            style={{ background: "rgba(224, 242, 254, 0.6)" }}
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
            style={{ background: "rgba(186, 230, 253, 0.4)" }}
            animate={{
              x: [0, -20, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full blur-[80px]"
            style={{ background: "rgba(240, 249, 255, 0.8)" }}
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md"
                style={{ 
                  background: "rgba(255, 255, 255, 0.7)", 
                  border: `1px solid ${BRAND_BLUE}20`,
                  boxShadow: `0 4px 20px ${BRAND_BLUE}10`
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Wind className="w-4 h-4" style={{ color: BRAND_BLUE }} />
                <span className="text-sm text-gray-700 font-medium">Guided Breathing Exercises</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Find Your Peace
                <br />
                <span style={{ color: BRAND_BLUE }}>with Breath</span>
              </h1>

              <div className="text-xl sm:text-2xl text-gray-600 mb-8 h-12">
                <WordRotate
                  words={[
                    "Reduce Anxiety",
                    "Improve Focus",
                    "Sleep Better",
                    "Find Calm",
                    "Boost Energy",
                    "Release Stress",
                  ]}
                  duration={2500}
                  className="font-medium"
                  color={BRAND_BLUE}
                />
              </div>

              <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Master ancient breathing techniques backed by modern science. Transform your mental state in minutes with our guided breath pacer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all text-white"
                  style={{ background: BRAND_BLUE }}
                  whileHover={{ scale: 1.02, boxShadow: `0 10px 40px ${BRAND_BLUE}60` }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleMainCTA}
                >
                  <Play className="w-5 h-5" />
                  Start Breathing
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
                    document.getElementById('techniques')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Sparkles className="w-5 h-5" />
                  Explore Techniques
                </motion.button>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
                {stats.slice(0, 3).map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <stat.icon className="w-4 h-4" style={{ color: BRAND_BLUE }} />
                    <span className="text-gray-900 font-bold">{stat.value}</span>
                    <span className="text-gray-500 text-sm">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Breathing Animation */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <BreathingAnimation variant="light" />
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

      {/* Stats Bar - Light Blue Glassmorphic */}
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
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: BRAND_BLUE }} />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques Bento Grid - White Section */}
      <section id="techniques" className="bg-white">
        <BreathPacerBentoGrid isAuthenticated={isAuthenticated} variant="light" />
      </section>

      {/* Benefits Section - Very Light Blue */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-xl"
        style={{ 
          background: "linear-gradient(180deg, rgba(240, 249, 255, 0.95) 0%, rgba(224, 242, 254, 0.8) 50%, rgba(240, 249, 255, 0.95) 100%)"
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
              Why Breathwork?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the transformative power of conscious breathing on your mind, body, and spirit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  borderColor: `${BRAND_BLUE}10`,
                  boxShadow: `0 4px 20px ${BRAND_BLUE}06`
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  boxShadow: `0 8px 30px ${BRAND_BLUE}12`
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${BRAND_BLUE}10` }}
                >
                  <benefit.icon className="w-6 h-6" style={{ color: BRAND_BLUE }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - White Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
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
              Getting started is simple. Follow these three steps to begin your breathing journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, idx) => (
              <motion.div
                key={idx}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                {/* Connector line */}
                {idx < howItWorks.length - 1 && (
                  <div 
                    className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5"
                    style={{ background: `linear-gradient(90deg, ${BRAND_BLUE}30 0%, transparent 100%)` }}
                  />
                )}
                
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold backdrop-blur-xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(224, 242, 254, 0.8) 0%, rgba(186, 230, 253, 0.6) 100%)",
                    border: `2px solid ${BRAND_BLUE}20`,
                    color: BRAND_BLUE,
                    boxShadow: `0 4px 20px ${BRAND_BLUE}15`
                  }}
                >
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Section - Very Light Blue */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-xl"
        style={{ 
          background: "linear-gradient(180deg, rgba(240, 249, 255, 0.95) 0%, rgba(224, 242, 254, 0.85) 50%, rgba(240, 249, 255, 0.95) 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 backdrop-blur-md"
              style={{ 
                background: "rgba(255, 255, 255, 0.8)",
                border: `1px solid ${BRAND_BLUE}20`
              }}
            >
              <Brain className="w-4 h-4" style={{ color: BRAND_BLUE }} />
              <span className="text-sm text-gray-700 font-medium">Evidence-Based</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The Science of Breath
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Decades of research prove what ancient practitioners knew—breathing is medicine.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {science.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex gap-4 p-6 rounded-2xl backdrop-blur-xl border"
                style={{
                  background: "rgba(255, 255, 255, 0.75)",
                  borderColor: `${BRAND_BLUE}10`,
                  boxShadow: `0 4px 20px ${BRAND_BLUE}06`
                }}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(34, 197, 94, 0.1)" }}
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.fact}</h3>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - White Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Student Stories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from students who transformed their mental wellness with breathwork.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-2xl backdrop-blur-xl border relative"
                style={{
                  background: "linear-gradient(135deg, rgba(240, 249, 255, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)",
                  borderColor: `${BRAND_BLUE}10`,
                  boxShadow: `0 4px 20px ${BRAND_BLUE}06`
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

      {/* Final CTA - Very Light Blue Gradient */}
      <section 
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden backdrop-blur-xl"
        style={{ 
          background: "linear-gradient(180deg, rgba(224, 242, 254, 0.9) 0%, rgba(186, 230, 253, 0.6) 50%, rgba(224, 242, 254, 0.9) 100%)"
        }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px]"
            style={{ background: "rgba(186, 230, 253, 0.5)" }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

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
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Wind className="w-10 h-10" style={{ color: BRAND_BLUE }} />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of students who have discovered the power of breath. Your journey to inner peace starts with a single breath.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="group flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-semibold text-lg transition-all text-white"
              style={{ background: BRAND_BLUE }}
              whileHover={{ scale: 1.02, boxShadow: `0 15px 50px ${BRAND_BLUE}60` }}
              whileTap={{ scale: 0.98 }}
              onClick={handleMainCTA}
            >
              <Play className="w-5 h-5" />
              Begin Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Free to use • No credit card required • Start in seconds
          </p>
        </motion.div>
      </section>

      {/* Trust badges - White with subtle border */}
      <section 
        className="py-12 bg-white"
        style={{ borderTop: `1px solid ${BRAND_BLUE}10` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-gray-500">
              <Shield className="w-5 h-5" style={{ color: BRAND_BLUE }} />
              <span className="text-sm">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm">Science-Backed</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Users className="w-5 h-5" style={{ color: BRAND_BLUE }} />
              <span className="text-sm">10,000+ Users</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="w-5 h-5" style={{ color: BRAND_BLUE }} />
              <span className="text-sm">24/7 Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
