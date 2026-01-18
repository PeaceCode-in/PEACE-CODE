"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SplineScene } from "@/components/ui/splite"
import { 
  MessageSquare, 
  ShieldCheck, 
  Heart, 
  Brain, 
  Clock, 
  Lock, 
  Sparkles,
  ArrowRight,
  Zap,
  Users,
  BookOpen,
  TrendingUp,
  Star,
  Bot,
  Mic,
  Globe,
  Shield
} from "lucide-react"
import Link from "next/link"

// Color palette - Ocean Blues
const colors = {
  deepOcean: "#0A1628",
  darkNavy: "#0F2744",
  oceanBlue: "#1E3A5F",
  mediumBlue: "#2E5A88",
  skyBlue: "#4A90B5",
  lightSky: "#87CEEB",
  white: "#FFFFFF",
}

const capabilities = [
  {
    icon: Heart,
    title: "Emotional Support",
    description: "Get compassionate, non-judgmental support for your feelings.",
  },
  {
    icon: Brain,
    title: "Mental Health Guidance", 
    description: "Evidence-based coping strategies for anxiety and stress.",
  },
  {
    icon: Zap,
    title: "24/7 Availability",
    description: "Always available to listen and support, day or night.",
  },
  {
    icon: ShieldCheck,
    title: "Crisis Detection",
    description: "Advanced detection when you need professional help.",
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Learn mindfulness techniques interactively.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Track your well-being and identify patterns.",
  }
]

const stats = [
  { number: "10K+", label: "Daily Chats", icon: MessageSquare },
  { number: "24/7", label: "Available", icon: Clock },
  { number: "95%", label: "Satisfaction", icon: Star },
  { number: "100%", label: "Private", icon: Lock }
]

export default function AISupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="overflow-hidden">
        {/* Hero Section - White with dotted pattern */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-[#f8fafc] to-white">
          {/* Dotted pattern background */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
              {/* Left Side - Content */}
              <div className="text-center lg:text-left space-y-8">
                <Badge className="bg-[#1E3A5F] text-white border-[#1E3A5F] px-4 py-2 text-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Mental Health
                </Badge>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-[#0A1628]">
                  Meet Your
                  <br />
                  <span className="text-[#2E5A88]">AI Companion</span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-[#0F2744]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Your trusted 24/7 mental health companion. Get instant support and guidance whenever you need.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="text-lg h-14 px-8 bg-[#1E3A5F] hover:bg-[#0F2744] text-white shadow-xl"
                    asChild
                  >
                    <Link href="/ai-support/chat">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Start Chatting Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg h-14 px-8 border-2 border-[#2E5A88] text-[#1E3A5F] hover:bg-[#2E5A88]/10"
                    asChild
                  >
                    <Link href="#capabilities">
                      Learn More
                    </Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
                  <div className="flex items-center gap-2 text-[#0F2744]/70">
                    <ShieldCheck className="w-5 h-5 text-[#2E5A88]" />
                    <span className="text-sm">End-to-End Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#0F2744]/70">
                    <Users className="w-5 h-5 text-[#2E5A88]" />
                    <span className="text-sm">50K+ Users</span>
                  </div>
                </div>
              </div>

              {/* Right Side - 3D Robot - Seamless */}
              <div className="relative flex justify-center lg:justify-end items-center h-[500px] lg:h-[650px]">
                <div className="w-full h-full relative">
                  <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <Badge className="bg-[#0F2744] text-white shadow-lg border-0">
                      <Bot className="w-4 h-4 mr-2" />
                      Interactive 3D
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#0A1628]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#4A90B5]" />
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-[#87CEEB]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#f0f9ff]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2 bg-[#2E5A88] text-white border-[#2E5A88]">
                <Sparkles className="w-4 h-4 mr-2" />
                Capabilities
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#0A1628]">
                What Your AI Companion <span className="text-[#2E5A88]">Can Do</span>
              </h2>
              <p className="text-xl text-[#0F2744]/70 max-w-3xl mx-auto">
                Advanced capabilities to support your mental health journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <Card 
                  key={index}
                  className="border border-[#e2e8f0] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                >
                  <CardContent className="p-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br from-[#1E3A5F] to-[#2E5A88]"
                    >
                      <capability.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#0A1628]">{capability.title}</h3>
                    <p className="text-[#0F2744]/70">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f0f9ff]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2 bg-[#1E3A5F] text-white border-[#1E3A5F]">
                Simple Process
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#0A1628]">
                How It <span className="text-[#2E5A88]">Works</span>
              </h2>
              <p className="text-lg text-[#0F2744]/70 max-w-2xl mx-auto">
                Getting started is simple and straightforward
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Start Conversation",
                  description: "Click 'Start Chat' and begin. No sign-up required.",
                  icon: MessageSquare,
                  bg: "#1E3A5F"
                },
                {
                  step: "02",
                  title: "Share Your Thoughts",
                  description: "Express what's on your mind. We listen and understand.",
                  icon: Mic,
                  bg: "#2E5A88"
                },
                {
                  step: "03",
                  title: "Get Support",
                  description: "Receive personalized strategies tailored to you.",
                  icon: Heart,
                  bg: "#4A90B5"
                }
              ].map((item, index) => (
                <Card 
                  key={index}
                  className="text-center border-0 shadow-xl overflow-hidden"
                  style={{ backgroundColor: item.bg }}
                >
                  <CardContent className="p-8 text-white">
                    <div className="text-6xl font-bold text-white/20 mb-4">{item.step}</div>
                    <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-4 px-4 py-2 bg-[#4A90B5] text-white border-[#4A90B5]">Key Features</Badge>
                <h2 className="text-4xl font-bold mb-6 text-[#0A1628]">
                  Why Choose Our <span className="text-[#2E5A88]">AI Companion</span>?
                </h2>
                <p className="text-lg text-[#0F2744]/70 mb-8">
                  Comprehensive mental health support with cutting-edge technology.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Lock, text: "Confidential & Private" },
                    { icon: Brain, text: "Evidence-Based Strategies" },
                    { icon: Users, text: "Personalized Responses" },
                    { icon: Globe, text: "Multi-Language Support" },
                    { icon: Shield, text: "Crisis Resources" },
                    { icon: BookOpen, text: "Stress Management" }
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-[#f0f9ff] border border-[#e0f2fe] hover:border-[#2E5A88] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#1E3A5F] flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-[#0A1628]">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-[#0F2744] to-[#1E3A5F]">
                <CardContent className="p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                      <Star className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold">Premium Experience</h3>
                  </div>
                  
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    AI-powered mental health support combining advanced NLP with evidence-based therapeutic approaches.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-[#87CEEB]" />
                      <span className="text-white/90">End-to-end encrypted</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#87CEEB]" />
                      <span className="text-white/90">Instant responses</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-[#87CEEB]" />
                      <span className="text-white/90">Trusted by thousands</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A1628] via-[#0F2744] to-[#1E3A5F]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-[#87CEEB] mb-10 max-w-2xl mx-auto">
              Start a conversation with your AI companion today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg h-14 px-10 bg-white text-[#0A1628] hover:bg-[#f0f9ff] shadow-xl"
                asChild
              >
                <Link href="/ai-support/chat">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Chat Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg h-14 px-10 border-2 border-white/50 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer Links */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#0A1628]">Complete Wellness Ecosystem</h2>
            <p className="text-[#0F2744]/70 mb-8 text-lg">
              Your AI companion is part of our comprehensive mental health toolkit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" size="lg" className="border-[#2E5A88] text-[#0F2744] hover:bg-[#f0f9ff]">
                <Link href="/breathe">Breathing Exercises</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#2E5A88] text-[#0F2744] hover:bg-[#f0f9ff]">
                <Link href="/journal">Digital Journal</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#2E5A88] text-[#0F2744] hover:bg-[#f0f9ff]">
                <Link href="/screening">Self-Assessments</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#2E5A88] text-[#0F2744] hover:bg-[#f0f9ff]">
                <Link href="/community">Peer Community</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
