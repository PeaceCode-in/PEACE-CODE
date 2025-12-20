"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Sparkles, Heart, Brain, MessageCircle, Minimize2, X, Bot, User, AlertTriangle, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

// Glow Effect Component
interface GlowEffectProps {
  className?: string
  colors?: string[]
  blur?: string
}

function GlowEffect({ className, colors = ["#3B82F6", "#1E40AF"], blur = "blur-3xl" }: GlowEffectProps) {
  return (
    <motion.div
      animate={{
        background: [
          `radial-gradient(circle at 50% 50%, ${colors[0]} 0%, transparent 70%)`,
          `radial-gradient(circle at 50% 50%, ${colors[1]} 0%, transparent 70%)`,
          `radial-gradient(circle at 50% 50%, ${colors[0]} 0%, transparent 70%)`,
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      }}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", blur, className)}
    />
  )
}

// Auto-resize hook
function useAutoResizeTextarea({ minHeight, maxHeight }: { minHeight: number; maxHeight?: number }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current
      if (!textarea) return

      if (reset) {
        textarea.style.height = `${minHeight}px`
        return
      }

      textarea.style.height = `${minHeight}px`
      const newHeight = Math.max(
        minHeight,
        Math.min(textarea.scrollHeight, maxHeight ?? Infinity)
      )
      textarea.style.height = `${newHeight}px`
    },
    [minHeight, maxHeight]
  )

  useEffect(() => {
    if (textareaRef.current) textareaRef.current.style.height = `${minHeight}px`
  }, [minHeight])

  return { textareaRef, adjustHeight }
}

// Message interface
interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
  needsProfessionalHelp?: boolean
}

// Suggestion data
const suggestions = [
  { icon: Heart, text: "I'm feeling anxious today", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: Brain, text: "Help me manage stress", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: MessageCircle, text: "I need someone to talk to", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Sparkles, text: "Share coping strategies", color: "text-cyan-400", bg: "bg-cyan-500/10" },
]

// Coping strategies
const copingStrategies = {
  anxiety: [
    "Try the 4-7-8 breathing technique: Inhale for 4, hold for 7, exhale for 8",
    "Practice grounding: Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste",
    "Progressive muscle relaxation: Tense and release each muscle group for 5 seconds",
  ],
  stress: [
    "Break large tasks into smaller, manageable steps",
    "Practice mindfulness meditation for 5-10 minutes",
    "Take regular breaks during study sessions",
    "Prioritize sleep and maintain a consistent sleep schedule",
  ],
  talk: [
    "I'm here to listen without judgment",
    "Take your time to express yourself",
    "Remember, it's okay to not have all the answers right now",
  ],
  coping: [
    "Deep breathing exercises can help calm your nervous system",
    "Journaling your thoughts can provide clarity",
    "Physical activity, even a short walk, can boost your mood",
    "Connecting with loved ones can provide emotional support",
  ],
}

const crisisKeywords = ["suicide", "kill myself", "end it all", "hurt myself", "self-harm", "die", "death"]

interface FullscreenChatProps {
  onMinimize: () => void
}

export function FullscreenChat({ onMinimize }: FullscreenChatProps) {
  const [message, setMessage] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 56,
    maxHeight: 200,
  })

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const detectCrisis = (msg: string): boolean => {
    return crisisKeywords.some((keyword) => msg.toLowerCase().includes(keyword))
  }

  const generateResponse = (userMessage: string): { content: string; needsProfessionalHelp: boolean } => {
    const lowerMessage = userMessage.toLowerCase()

    if (detectCrisis(userMessage)) {
      return {
        content: "I'm very concerned about what you've shared. Please reach out for immediate help:\n\n• Call 988 (Suicide & Crisis Lifeline)\n• Contact emergency services (102)\n• Reach out to a trusted friend, family member, or counselor\n\nYour life has value, and there are people who want to help you.",
        needsProfessionalHelp: true,
      }
    }

    if (lowerMessage.includes("anxious") || lowerMessage.includes("anxiety") || lowerMessage.includes("worried")) {
      const strategy = copingStrategies.anxiety[Math.floor(Math.random() * copingStrategies.anxiety.length)]
      return {
        content: `I understand you're feeling anxious. Here's a coping strategy that might help:\n\n${strategy}\n\nAnxiety is very common. If these feelings persist, speaking with a counselor can help.`,
        needsProfessionalHelp: false,
      }
    }

    if (lowerMessage.includes("stress") || lowerMessage.includes("overwhelmed") || lowerMessage.includes("pressure")) {
      const strategy = copingStrategies.stress[Math.floor(Math.random() * copingStrategies.stress.length)]
      return {
        content: `Stress can be challenging to manage. Here's something that might help:\n\n${strategy}\n\nRemember to be kind to yourself.`,
        needsProfessionalHelp: false,
      }
    }

    if (lowerMessage.includes("talk") || lowerMessage.includes("listen") || lowerMessage.includes("someone")) {
      const strategy = copingStrategies.talk[Math.floor(Math.random() * copingStrategies.talk.length)]
      return {
        content: `${strategy}\n\nI'm here for you. What's been on your mind lately?`,
        needsProfessionalHelp: false,
      }
    }

    if (lowerMessage.includes("coping") || lowerMessage.includes("strategies") || lowerMessage.includes("help")) {
      const strategy = copingStrategies.coping[Math.floor(Math.random() * copingStrategies.coping.length)]
      return {
        content: `Here's a helpful coping strategy:\n\n${strategy}\n\nWould you like more suggestions?`,
        needsProfessionalHelp: false,
      }
    }

    return {
      content: "Thank you for sharing. I'm here to listen and support you. Could you tell me more about what you're experiencing? Are you feeling anxious, stressed, or something else?",
      needsProfessionalHelp: false,
    }
  }

  const handleSend = () => {
    if (!message.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: message.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setMessage("")
    adjustHeight(true)
    setShowWelcome(false)
    setIsTyping(true)

    setTimeout(() => {
      const response = generateResponse(userMessage.content)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: response.content,
        timestamp: new Date(),
        needsProfessionalHelp: response.needsProfessionalHelp,
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleSuggestionClick = (text: string) => {
    setMessage(text)
    textareaRef.current?.focus()
    setTimeout(() => adjustHeight(), 0)
  }

  const hasContent = message.trim().length > 0

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-white flex items-center gap-2">
              Peace Companion
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </h1>
            <p className="text-sm text-white/60 flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Private & Secure • 24/7 Available
            </p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMinimize}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all border border-white/10"
        >
          <Minimize2 className="w-5 h-5" />
          <span className="hidden sm:inline">Minimize</span>
        </motion.button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 relative z-10 overflow-hidden flex flex-col">
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Welcome Message */}
            <AnimatePresence>
              {showWelcome && messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/30"
                  >
                    <Bot className="w-10 h-10 text-white" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                    Mental Health Support
                  </h2>
                  <p className="text-lg text-white/70 max-w-md mx-auto">
                    A safe space to share your thoughts and feelings. I'm here to listen and support you.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages */}
            <AnimatePresence mode="popLayout">
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={cn("flex", msg.type === "user" ? "justify-end" : "justify-start")}
                >
                  <div className={cn("flex items-end gap-3 max-w-[85%]", msg.type === "user" ? "flex-row-reverse" : "")}>
                    <div className={cn(
                      "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
                      msg.type === "user" 
                        ? "bg-gradient-to-br from-blue-600 to-blue-500" 
                        : "bg-gradient-to-br from-cyan-500 to-blue-500"
                    )}>
                      {msg.type === "user" ? (
                        <User className="w-5 h-5 text-white" />
                      ) : (
                        <Bot className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div className={cn(
                      "px-5 py-4 rounded-2xl",
                      msg.type === "user"
                        ? "bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-br-md"
                        : msg.needsProfessionalHelp
                        ? "bg-red-500/20 border border-red-500/30 rounded-bl-md"
                        : "bg-white/10 backdrop-blur-sm border border-white/10 rounded-bl-md"
                    )}>
                      {msg.needsProfessionalHelp && (
                        <div className="flex items-center gap-2 mb-3 text-red-400 pb-2 border-b border-red-500/30">
                          <AlertTriangle className="w-4 h-4" />
                          <span className="text-xs font-semibold">Immediate Help Recommended</span>
                        </div>
                      )}
                      <p className={cn(
                        "text-sm leading-relaxed whitespace-pre-wrap",
                        msg.type === "user" ? "text-white" : "text-white/90"
                      )}>
                        {msg.content}
                      </p>
                      <p className={cn(
                        "text-[10px] mt-2",
                        msg.type === "user" ? "text-white/50" : "text-white/40"
                      )}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
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
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="px-5 py-4 rounded-2xl rounded-bl-md bg-white/10 backdrop-blur-sm border border-white/10">
                      <div className="flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-cyan-400 rounded-full"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Input Section */}
        <div className="relative z-10 px-4 pb-6 pt-4">
          <div className="max-w-3xl mx-auto">
            {/* Suggestions */}
            <AnimatePresence>
              {!hasContent && !isFocused && messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {suggestions.map((suggestion, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleSuggestionClick(suggestion.text)}
                      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 text-left transition-all hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn("p-2 rounded-xl", suggestion.bg, suggestion.color)}>
                          <suggestion.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                          {suggestion.text}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 rounded-3xl opacity-50">
                <GlowEffect colors={["#3B82F6", "#1E40AF", "#60A5FA"]} blur="blur-2xl" />
              </div>

              {/* Main Input Box */}
              <div
                className={cn(
                  "relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border transition-all duration-300",
                  isFocused
                    ? "border-blue-400/50 shadow-2xl shadow-blue-500/20"
                    : "border-white/20 shadow-xl"
                )}
              >
                <motion.div
                  className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-0 blur-sm"
                  animate={{ opacity: isFocused ? 0.3 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative flex items-end">
                  <textarea
                    ref={textareaRef}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value)
                      adjustHeight()
                    }}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Share what's on your mind..."
                    disabled={isTyping}
                    className="flex-1 min-h-[56px] w-full bg-transparent px-5 py-4 text-white placeholder:text-white/40 focus:outline-none resize-none disabled:opacity-50"
                    style={{ overflow: "hidden" }}
                  />

                  <div className="p-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSend}
                      disabled={!hasContent || isTyping}
                      className={cn(
                        "rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300",
                        hasContent && !isTyping
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30"
                          : "bg-white/10"
                      )}
                    >
                      <Send className={cn("w-5 h-5", hasContent && !isTyping ? "text-white" : "text-white/40")} />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Helper Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-3 text-center text-xs text-white/50"
              >
                Your thoughts are safe here • Press Enter to send
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

