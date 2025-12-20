"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, User, RefreshCw, AlertTriangle, Sparkles, Shield, Heart, Brain, MessageCircle } from "lucide-react"
import { AIChatInput } from "./ai-chat-input"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
  needsProfessionalHelp?: boolean
}

const copingStrategies = {
  anxiety: [
    "Try the 4-7-8 breathing technique: Inhale for 4, hold for 7, exhale for 8",
    "Practice grounding: Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste",
    "Progressive muscle relaxation: Tense and release each muscle group for 5 seconds",
  ],
  depression: [
    "Take a short walk outside, even for 5 minutes",
    "Reach out to a friend or family member",
    "Write down three things you're grateful for today",
    "Engage in a small, achievable task to build momentum",
  ],
  stress: [
    "Break large tasks into smaller, manageable steps",
    "Practice mindfulness meditation for 5-10 minutes",
    "Take regular breaks during study sessions",
    "Prioritize sleep and maintain a consistent sleep schedule",
  ],
  academic: [
    "Create a study schedule and stick to it",
    "Use the Pomodoro technique: 25 minutes study, 5 minutes break",
    "Form study groups with classmates",
    "Seek help from professors during office hours",
  ],
}

const crisisKeywords = ["suicide", "kill myself", "end it all", "hurt myself", "self-harm", "die", "death"]

const introductoryMessages = [
  "Hello! I'm your AI mental health companion. 💙",
  "I'm here to listen and provide support whenever you need it.",
  "How are you feeling today? Share whatever is on your mind.",
]

const quickActions = [
  { icon: Heart, label: "Feeling anxious", message: "I'm feeling anxious about something." },
  { icon: Brain, label: "Need to relax", message: "Can you help me relax and calm down?" },
  { icon: MessageCircle, label: "Just want to talk", message: "I just need someone to talk to." },
]

export function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(true)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    let messageIndex = 0
    let isCancelled = false
    const timeoutIds: NodeJS.Timeout[] = []
    
    const typeNextMessage = () => {
      if (messageIndex < introductoryMessages.length && !isCancelled) {
        const timeoutId = setTimeout(() => {
          if (!isCancelled) {
            setMessages((prev) => {
              // Check if message already exists to prevent duplicates
              const exists = prev.some(m => m.id === `intro-${messageIndex}`)
              if (exists) return prev
              return [
                ...prev,
                {
                  id: `intro-${messageIndex}`,
                  type: "ai",
                  content: introductoryMessages[messageIndex],
                  timestamp: new Date(),
                },
              ]
            })
            messageIndex++
            typeNextMessage()
          }
        }, 1200)
        timeoutIds.push(timeoutId)
      } else if (!isCancelled) {
        setIsTyping(false)
      }
    }

    typeNextMessage()
    
    return () => {
      isCancelled = true
      timeoutIds.forEach(id => clearTimeout(id))
    }
  }, [])

  const detectCrisis = (message: string): boolean => {
    return crisisKeywords.some((keyword) => message.toLowerCase().includes(keyword))
  }

  const generateResponse = (userMessage: string): { content: string; needsProfessionalHelp: boolean } => {
    const lowerMessage = userMessage.toLowerCase()

    if (detectCrisis(userMessage)) {
      return {
        content:
          "I'm very concerned about what you've shared. Please reach out for immediate help:\n\n• Call 988 (Suicide & Crisis Lifeline)\n• Contact emergency services (102)\n• Reach out to a trusted friend, family member, or counselor\n\nYour life has value, and there are people who want to help you. Would you like me to help you find local crisis resources?",
        needsProfessionalHelp: true,
      }
    }

    if (
      lowerMessage.includes("anxious") ||
      lowerMessage.includes("anxiety") ||
      lowerMessage.includes("worried") ||
      lowerMessage.includes("panic")
    ) {
      const strategy = copingStrategies.anxiety[Math.floor(Math.random() * copingStrategies.anxiety.length)]
      return {
        content: `I understand you're feeling anxious. Here's a coping strategy that might help:\n\n${strategy}\n\nAnxiety is very common among students. If these feelings persist or interfere with your daily life, I'd recommend speaking with a counselor. Would you like me to help you book an appointment?`,
        needsProfessionalHelp: false,
      }
    }

    if (
      lowerMessage.includes("depressed") ||
      lowerMessage.includes("depression") ||
      lowerMessage.includes("sad") ||
      lowerMessage.includes("hopeless")
    ) {
      const strategy = copingStrategies.depression[Math.floor(Math.random() * copingStrategies.depression.length)]
      return {
        content: `I hear that you're going through a difficult time. Here's something that might help:\n\n${strategy}\n\nRemember, you're not alone in feeling this way. Many students experience similar challenges. If these feelings continue, please consider reaching out to a professional counselor. Would you like information about our counseling services?`,
        needsProfessionalHelp: lowerMessage.includes("hopeless") || lowerMessage.includes("worthless"),
      }
    }

    if (
      lowerMessage.includes("stressed") ||
      lowerMessage.includes("stress") ||
      lowerMessage.includes("overwhelmed") ||
      lowerMessage.includes("pressure")
    ) {
      const strategy = copingStrategies.stress[Math.floor(Math.random() * copingStrategies.stress.length)]
      return {
        content: `Stress is a common part of student life, but there are ways to manage it:\n\n${strategy}\n\nRemember to be kind to yourself. If stress is significantly impacting your studies or well-being, our counselors can help you develop personalized coping strategies.`,
        needsProfessionalHelp: false,
      }
    }

    if (
      lowerMessage.includes("exam") ||
      lowerMessage.includes("study") ||
      lowerMessage.includes("grades") ||
      lowerMessage.includes("academic")
    ) {
      const strategy = copingStrategies.academic[Math.floor(Math.random() * copingStrategies.academic.length)]
      return {
        content: `Academic challenges can be stressful. Here's a strategy that many students find helpful:\n\n${strategy}\n\nRemember, your worth isn't defined by your grades. If you're struggling academically, consider reaching out to your professors, academic advisors, or our counseling services for additional support.`,
        needsProfessionalHelp: false,
      }
    }

    if (
      lowerMessage.includes("relax") ||
      lowerMessage.includes("calm") ||
      lowerMessage.includes("peace")
    ) {
      return {
        content: `I'd love to help you relax. Here are some techniques:\n\n🌬️ Deep Breathing: Breathe in for 4 counts, hold for 4, exhale for 6\n\n🧘 Body Scan: Close your eyes and notice tension, then release it\n\n🎵 Try listening to calming music or nature sounds\n\nWould you like me to guide you through a breathing exercise?`,
        needsProfessionalHelp: false,
      }
    }

    if (
      lowerMessage.includes("talk") ||
      lowerMessage.includes("listen") ||
      lowerMessage.includes("someone")
    ) {
      return {
        content: `I'm here for you, and I'm listening. 💙\n\nSometimes just expressing how we feel can make a big difference. Take your time - there's no rush. You can share whatever is on your mind, whether it's something specific or just a general feeling.\n\nWhat would you like to talk about?`,
        needsProfessionalHelp: false,
      }
    }

    return {
      content:
        "Thank you for sharing that with me. It takes courage to reach out when you're struggling. While I can provide some general support and coping strategies, I want to remind you that professional counselors are available if you need more personalized help.\n\nCould you tell me more about what you're experiencing? Are you feeling anxious, stressed, sad, or something else?",
      needsProfessionalHelp: false,
    }
  }

  const handleSend = (messageContent: string) => {
    if (!messageContent.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: messageContent,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(
      () => {
        const response = generateResponse(messageContent)
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "ai",
          content: response.content,
          timestamp: new Date(),
          needsProfessionalHelp: response.needsProfessionalHelp,
        }

        setMessages((prev) => [...prev, aiMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1500,
    )
  }

  const clearChat = () => {
    setMessages([])
    setIsTyping(true)
    let messageIndex = 0
    const typeNextMessage = () => {
      if (messageIndex < introductoryMessages.length) {
        setTimeout(() => {
          setMessages((prev) => {
            const exists = prev.some(m => m.id === `intro-reset-${messageIndex}`)
            if (exists) return prev
            return [
              ...prev,
              {
                id: `intro-reset-${messageIndex}`,
                type: "ai",
                content: introductoryMessages[messageIndex],
                timestamp: new Date(),
              },
            ]
          })
          messageIndex++
          typeNextMessage()
        }, 1200)
      } else {
        setIsTyping(false)
      }
    }
    typeNextMessage()
  }

  const showQuickActions = messages.length <= introductoryMessages.length && !isTyping

  return (
    <div className="h-full flex flex-col rounded-3xl overflow-hidden shadow-2xl border border-[#1E3A5F]/10 bg-white/80 backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#0A1628] via-[#0F2744] to-[#1E3A5F] text-white">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4A90B5] to-[#2E5A88] flex items-center justify-center shadow-lg">
              <Bot className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0A1628] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">Peace Companion</span>
              <Sparkles className="w-4 h-4 text-[#87CEEB]" />
            </div>
            <div className="text-xs text-[#87CEEB] font-normal flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Always here • Confidential
            </div>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearChat}
          className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl"
        >
          <RefreshCw className="h-4 w-4" />
          <span className="ml-2 hidden sm:inline">New Chat</span>
        </Button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-blue-50/30">
        <ScrollArea className="flex-1 p-4 sm:p-6" ref={scrollAreaRef}>
          <div className="space-y-4 max-w-3xl mx-auto">
            <AnimatePresence mode="popLayout">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeOut",
                    delay: index === messages.length - 1 ? 0.1 : 0 
                  }}
                  className={cn(
                    "flex",
                    message.type === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-end gap-3 max-w-[85%] sm:max-w-[75%]",
                      message.type === "user" ? "flex-row-reverse" : ""
                    )}
                  >
                    {/* Avatar */}
                    <div className={cn(
                      "flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center shadow-md",
                      message.type === "user" 
                        ? "bg-gradient-to-br from-[#1E3A5F] to-[#0F2744]" 
                        : "bg-gradient-to-br from-[#4A90B5] to-[#2E5A88]"
                    )}>
                      {message.type === "user" ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-white" />
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={cn(
                        "px-4 py-3 rounded-2xl transition-all duration-200 shadow-sm",
                        message.type === "user"
                          ? "bg-gradient-to-br from-[#0F2744] to-[#1E3A5F] text-white rounded-br-md"
                          : message.needsProfessionalHelp
                          ? "bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-bl-md"
                          : "bg-white border border-[#1E3A5F]/10 rounded-bl-md"
                      )}
                    >
                      {message.needsProfessionalHelp && (
                        <div className="flex items-center gap-2 mb-2 text-red-700 pb-2 border-b border-red-200">
                          <AlertTriangle className="h-4 w-4" />
                          <span className="text-xs font-semibold">Professional Help Recommended</span>
                        </div>
                      )}
                      <p className={cn(
                        "text-sm leading-relaxed whitespace-pre-wrap",
                        message.type === "user" 
                          ? "text-white" 
                          : message.needsProfessionalHelp 
                          ? "text-red-900" 
                          : "text-[#0A1628]"
                      )}>
                        {message.content}
                      </p>
                      <p className={cn(
                        "text-[10px] mt-2",
                        message.type === "user" ? "text-white/60" : "text-[#0F2744]/40"
                      )}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex justify-start"
                >
                  <div className="flex items-end gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-[#4A90B5] to-[#2E5A88] flex items-center justify-center shadow-md">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white border border-[#1E3A5F]/10 shadow-sm">
                      <div className="flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-[#2E5A88] rounded-full"
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.15,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Actions */}
            <AnimatePresence>
              {showQuickActions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <p className="text-sm text-[#0F2744]/50 mb-3 text-center">Quick ways to start:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {quickActions.map((action, index) => (
                      <motion.button
                        key={action.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        onClick={() => handleSend(action.message)}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border-2 border-[#1E3A5F]/10 text-[#0F2744] text-sm font-medium hover:border-[#2E5A88] hover:bg-blue-50/50 transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        <action.icon className="w-4 h-4 text-[#2E5A88]" />
                        {action.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 sm:p-6 bg-gradient-to-t from-white via-white to-transparent">
          <div className="max-w-3xl mx-auto">
            <AIChatInput 
              onSend={handleSend} 
              disabled={isTyping}
              placeholder="Share what's on your mind..."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
