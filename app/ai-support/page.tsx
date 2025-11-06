"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MessageSquare, 
  ShieldCheck, 
  Heart, 
  Brain, 
  Clock, 
  Lock, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
  BookOpen,
  TrendingUp,
  Star
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const capabilities = [
  {
    icon: Heart,
    title: "Emotional Support",
    description: "Get compassionate, non-judgmental support for your feelings and emotions. Our AI companion understands what you're going through and provides empathetic responses.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Brain,
    title: "Mental Health Guidance",
    description: "Access evidence-based coping strategies for anxiety, stress, depression, and other mental health challenges. Learn techniques that actually work.",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: Zap,
    title: "24/7 Availability",
    description: "Never feel alone. Our AI companion is available round the clock, ready to listen and support you whenever you need it, day or night.",
    color: "from-blue-700 to-blue-800"
  },
  {
    icon: ShieldCheck,
    title: "Crisis Detection",
    description: "Advanced algorithms detect when you might need immediate professional help and guide you to appropriate resources and support services.",
    color: "from-blue-800 to-blue-900"
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Learn about mental health topics, coping mechanisms, mindfulness techniques, and self-care practices through interactive conversations.",
    color: "from-blue-400 to-blue-500"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Track your emotional well-being over time and identify patterns. Get insights into your mental health journey and celebrate your progress.",
    color: "from-blue-500 to-blue-600"
  }
]

const features = [
  "Confidential & Private Conversations",
  "Evidence-Based Coping Strategies",
  "Personalized Support Responses",
  "Multi-Language Support",
  "Crisis Intervention Resources",
  "Academic Stress Management"
]

const stats = [
  { number: "10K+", label: "Conversations Daily" },
  { number: "24/7", label: "Always Available" },
  { number: "95%", label: "User Satisfaction" },
  { number: "100%", label: "Confidential" }
]

export default function AISupportPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 }
    )
    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100/50 to-white">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-transparent to-blue-300/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="text-center lg:text-left space-y-6">
                <Badge className="bg-blue-600 text-white px-4 py-1.5 text-sm mb-4">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Support
                </Badge>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                  Meet Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                    AI Companion
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Your trusted 24/7 mental health companion, powered by advanced AI. 
                  Get instant support, guidance, and resources whenever you need them.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/ai-support/chat">
                      <MessageSquare className="w-6 h-6 mr-2" />
                      Start Chat Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 py-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                    asChild
                  >
                    <Link href="#capabilities">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Side - Bot Image */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-3xl blur-3xl transform rotate-6"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-blue-200/50">
                    <Image
                      src="/bot.jpg"
                      alt="AI Bot Companion"
                      width={500}
                      height={500}
                      className="w-full h-auto rounded-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center scroll-reveal">
                  <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <Badge className="bg-blue-100 text-blue-700 px-4 py-1.5 mb-4">
                What We Offer
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                What Your AI Companion Can Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI companion is equipped with advanced capabilities to support your mental health journey 
                and provide personalized assistance whenever you need it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <Card
                  key={index}
                  className={`scroll-reveal border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                    hoveredCard === index
                      ? "border-blue-500 shadow-xl"
                      : "border-blue-200 hover:border-blue-400"
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <capability.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {capability.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features List Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-reveal">
                <Badge className="bg-blue-100 text-blue-700 px-4 py-1.5 mb-4">
                  Key Features
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our AI Companion?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We've built an AI companion that truly understands your needs and provides 
                  comprehensive mental health support with cutting-edge technology.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mt-1">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="scroll-reveal">
                <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 shadow-2xl border-0">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Star className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-2xl">Premium Experience</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-blue-100 text-lg leading-relaxed">
                      Experience a new level of AI-powered mental health support. Our companion 
                      combines advanced natural language processing with evidence-based therapeutic 
                      approaches to provide you with the best possible support.
                    </p>
                    <div className="flex items-center gap-2 pt-4">
                      <Lock className="w-5 h-5" />
                      <span className="text-blue-100">End-to-end encrypted conversations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span className="text-blue-100">Instant responses, no waiting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span className="text-blue-100">Trusted by thousands of users</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <Badge className="bg-blue-100 text-blue-700 px-4 py-1.5 mb-4">
                Simple Process
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Getting started with your AI companion is simple and straightforward.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Start Conversation",
                  description: "Click 'Start Chat' and begin your conversation with our AI companion. No sign-up required for basic support."
                },
                {
                  step: "02",
                  title: "Share Your Thoughts",
                  description: "Express what's on your mind. Our AI companion listens attentively and understands your unique situation."
                },
                {
                  step: "03",
                  title: "Get Support & Guidance",
                  description: "Receive personalized coping strategies, resources, and support tailored to your specific needs and concerns."
                }
              ].map((item, index) => (
                <Card key={index} className="scroll-reveal border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="text-6xl font-bold text-blue-100 mb-4">{item.step}</div>
                    <CardTitle className="text-2xl text-gray-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Start a conversation with your AI companion today and experience compassionate, 
              personalized mental health support that's always available when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 bg-white text-blue-700 hover:bg-blue-50 shadow-2xl hover:shadow-3xl transition-all duration-300"
                asChild
              >
                <Link href="/ai-support/chat">
                  <MessageSquare className="w-6 h-6 mr-2" />
                  Start Chat Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-7 border-2 border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/services">
                  Explore Other Services
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Explore Other Tools Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A Complete Wellness Ecosystem</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Your AI companion is just one part of our comprehensive mental health toolkit. 
              Explore other services to build a complete wellness routine.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Link href="/breathe">Breathing Exercises</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Link href="/journal">Digital Journal</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Link href="/screening">Self-Assessments</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Link href="/community">Peer Community</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
