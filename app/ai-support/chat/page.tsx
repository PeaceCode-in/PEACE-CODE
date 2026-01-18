"use client"

import { useState } from "react"
import { AIChatbot } from "@/components/ai-support/ai-chatbot"
import { FullscreenChat } from "@/components/ai-support/fullscreen-chat"
import { Button } from "@/components/ui/button"
import { 
  ArrowLeft, 
  Shield, 
  Clock, 
  Heart, 
  Sparkles, 
  Phone, 
  ExternalLink,
  Brain,
  Users,
  MessageSquare,
  Maximize2
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function AIChatPage() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <>
      {/* Fullscreen Chat Mode */}
      <AnimatePresence>
        {isFullscreen && (
          <FullscreenChat onMinimize={() => setIsFullscreen(false)} />
        )}
      </AnimatePresence>

      {/* Normal View */}
      <div className={`min-h-screen bg-gradient-to-br from-white via-blue-50/50 to-[#f0f9ff] relative overflow-hidden ${isFullscreen ? 'hidden' : ''}`}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#1E3A5F]/5 to-[#4A90B5]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#2E5A88]/8 to-[#87CEEB]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
          
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #1E3A5F 0.5px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          />
        </div>
        
        <main className="relative z-10 pt-20 pb-8 px-4 sm:px-6 lg:px-8 min-h-screen">
          <div className="max-w-7xl mx-auto">
            {/* Header with Back and Fullscreen buttons */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-4 flex flex-wrap items-center justify-between gap-3"
            >
              <Button 
                variant="ghost" 
                asChild 
                className="text-[#1E3A5F] hover:text-[#0F2744] hover:bg-[#1E3A5F]/5 rounded-xl"
              >
                <Link href="/ai-support" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back to AI Support</span>
                  <span className="sm:hidden">Back</span>
                </Link>
              </Button>

              <Button 
                onClick={() => setIsFullscreen(true)}
                className="bg-gradient-to-r from-[#0F2744] to-[#1E3A5F] hover:from-[#1E3A5F] hover:to-[#2E5A88] text-white rounded-xl shadow-lg"
              >
                <Maximize2 className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Fullscreen Chat</span>
                <span className="sm:hidden">Expand</span>
              </Button>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
              {/* Main Chat Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-8 order-1"
              >
                <div className="h-[calc(100vh-200px)] min-h-[500px] lg:min-h-[600px]">
                  <AIChatbot />
                </div>
              </motion.div>

              {/* Sidebar - Hidden on small screens, visible on lg+ */}
              <motion.aside 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-4 order-2 space-y-4 hidden lg:block"
              >
                {/* Privacy Card */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A1628] via-[#0F2744] to-[#1E3A5F] text-white p-5 shadow-xl">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#4A90B5]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-[#87CEEB]" />
                      </div>
                      <h3 className="text-base font-semibold">Your Privacy Matters</h3>
                    </div>
                    <p className="text-[#87CEEB]/90 text-sm leading-relaxed">
                      Your conversation is anonymous and secure. All communications are encrypted.
                    </p>
                  </div>
                </div>

                {/* Important Notice */}
                <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 p-4 shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                    </div>
                    <h3 className="text-amber-900 font-semibold text-sm">Important Notice</h3>
                  </div>
                  <p className="text-amber-800/90 text-xs leading-relaxed">
                    This AI companion is a supportive tool, not a medical professional. For clinical treatment, please consult a healthcare provider.
                  </p>
                </div>

                {/* 24/7 Available */}
                <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-[#1E3A5F]/10 p-4 shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-[#1E3A5F]/5 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[#2E5A88]" />
                    </div>
                    <h3 className="text-[#0A1628] font-semibold text-sm">Available 24/7</h3>
                  </div>
                  <p className="text-[#0F2744]/70 text-xs leading-relaxed">
                    Your AI companion is always here. No appointments needed.
                  </p>
                </div>

                {/* Quick Links */}
                <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-[#1E3A5F]/10 p-4 shadow-md">
                  <h3 className="text-[#0A1628] font-semibold text-sm mb-3 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-[#2E5A88]" />
                    Explore More
                  </h3>
                  <div className="space-y-2">
                    {[
                      { href: "/breathe", label: "Breathing Exercises", icon: Heart },
                      { href: "/counseling", label: "Book Counseling", icon: Users },
                      { href: "/community", label: "Peer Community", icon: MessageSquare },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-[#1E3A5F]/5 hover:bg-[#1E3A5F]/10 transition-colors group"
                      >
                        <link.icon className="w-4 h-4 text-[#2E5A88]" />
                        <span className="text-xs text-[#0F2744] font-medium flex-1">{link.label}</span>
                        <ExternalLink className="w-3 h-3 text-[#2E5A88]/50 group-hover:text-[#2E5A88]" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Crisis Help */}
                <div className="rounded-2xl bg-gradient-to-br from-red-50 to-rose-50 border border-red-200/60 p-4 shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-red-600" />
                    </div>
                    <h3 className="text-red-900 font-semibold text-sm">Need Immediate Help?</h3>
                  </div>
                  <p className="text-red-800/80 text-xs leading-relaxed mb-2">
                    If you're in crisis:
                  </p>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between bg-red-100/50 rounded-lg px-3 py-1.5">
                      <span className="text-red-900">Crisis Helpline</span>
                      <span className="font-bold text-red-700">988</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-100/50 rounded-lg px-3 py-1.5">
                      <span className="text-red-900">Emergency</span>
                      <span className="font-bold text-red-700">102</span>
                    </div>
                  </div>
                </div>
              </motion.aside>

              {/* Mobile Quick Actions - Only visible on small screens */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:hidden order-3 col-span-1"
              >
                <div className="flex flex-wrap gap-2 justify-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#1E3A5F]/10">
                  <Link href="/breathe" className="flex items-center gap-2 px-3 py-2 bg-[#1E3A5F]/5 rounded-xl text-xs font-medium text-[#0F2744] hover:bg-[#1E3A5F]/10">
                    <Heart className="w-3 h-3 text-[#2E5A88]" />
                    Breathing
                  </Link>
                  <Link href="/counseling" className="flex items-center gap-2 px-3 py-2 bg-[#1E3A5F]/5 rounded-xl text-xs font-medium text-[#0F2744] hover:bg-[#1E3A5F]/10">
                    <Users className="w-3 h-3 text-[#2E5A88]" />
                    Counseling
                  </Link>
                  <Link href="/community" className="flex items-center gap-2 px-3 py-2 bg-[#1E3A5F]/5 rounded-xl text-xs font-medium text-[#0F2744] hover:bg-[#1E3A5F]/10">
                    <MessageSquare className="w-3 h-3 text-[#2E5A88]" />
                    Community
                  </Link>
                  <div className="flex items-center gap-2 px-3 py-2 bg-red-50 rounded-xl text-xs font-medium text-red-700">
                    <Phone className="w-3 h-3" />
                    Crisis: 988
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
