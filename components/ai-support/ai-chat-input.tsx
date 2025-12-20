"use client"

import * as React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { Send, Sparkles, Mic, Paperclip, Smile } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface UseAutoResizeTextareaProps {
  minHeight: number
  maxHeight?: number
}

function useAutoResizeTextarea({
  minHeight,
  maxHeight,
}: UseAutoResizeTextareaProps) {
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
        Math.min(
          textarea.scrollHeight,
          maxHeight ?? Number.POSITIVE_INFINITY
        )
      )

      textarea.style.height = `${newHeight}px`
    },
    [minHeight, maxHeight]
  )

  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = `${minHeight}px`
    }
  }, [minHeight])

  useEffect(() => {
    const handleResize = () => adjustHeight()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [adjustHeight])

  return { textareaRef, adjustHeight }
}

interface AnimatedTextCycleProps {
  words: string[]
  interval?: number
  className?: string
}

function AnimatedTextCycle({
  words,
  interval = 3000,
  className = "",
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState("auto")
  const measureRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (measureRef.current) {
      const elements = measureRef.current.children
      if (elements.length > currentIndex) {
        const newWidth = elements[currentIndex].getBoundingClientRect().width
        setWidth(`${newWidth}px`)
      }
    }
  }, [currentIndex])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [interval, words.length])

  const containerVariants = {
    hidden: {
      y: -20,
      opacity: 0,
      filter: "blur(8px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      filter: "blur(8px)",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  return (
    <>
      <div
        ref={measureRef}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none"
        style={{ visibility: "hidden" }}
      >
        {words.map((word, i) => (
          <span key={i} className={className}>
            {word}
          </span>
        ))}
      </div>

      <motion.span
        className="relative inline-block"
        animate={{
          width,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 1.2,
          },
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={`inline-block ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ whiteSpace: "nowrap" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  )
}

interface AIChatInputProps {
  onSend: (message: string) => void
  disabled?: boolean
  placeholder?: string
}

export function AIChatInput({ onSend, disabled = false, placeholder }: AIChatInputProps) {
  const [value, setValue] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 56,
    maxHeight: 200,
  })

  const SUGGESTIONS = [
    "I'm feeling anxious today...",
    "Can you help me relax?",
    "I need someone to talk to",
    "How can I manage stress?",
    "I'm having trouble sleeping",
    "Tell me about mindfulness",
  ]

  const handleSend = () => {
    if (!value.trim() || isAnimating || disabled) return
    
    setIsAnimating(true)
    const messageToSend = value.trim()
    
    setTimeout(() => {
      setValue("")
      adjustHeight(true)
      onSend(messageToSend)
      setTimeout(() => {
        setIsAnimating(false)
      }, 500)
    }, 150)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && value.trim()) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A5F]/30 via-[#2E5A88]/30 to-[#1E3A5F]/30 rounded-3xl blur-xl opacity-70" />
      
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#1E3A5F]/10 p-1.5">
        <div className="bg-gradient-to-br from-white via-blue-50/30 to-white rounded-2xl p-4">
          {/* Suggestions */}
          <div className="mb-3">
            <div className="text-sm text-[#0F2744]/60 mb-2 flex items-center gap-2 flex-wrap">
              <Sparkles className="w-4 h-4 text-[#2E5A88]" />
              <span>Try asking:</span>
              <AnimatedTextCycle
                words={SUGGESTIONS}
                interval={3000}
                className="text-[#1E3A5F] font-medium"
              />
            </div>
          </div>

          {/* Input area */}
          <div className="relative">
            <Textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                adjustHeight()
              }}
              onKeyDown={handleKeyDown}
              placeholder={placeholder || "Share what's on your mind..."}
              disabled={disabled}
              className={cn(
                "w-full resize-none border-2 border-[#1E3A5F]/10 bg-white rounded-xl px-4 py-3",
                "text-[#0A1628] placeholder:text-[#0F2744]/40",
                "focus-visible:ring-2 focus-visible:ring-[#2E5A88] focus-visible:border-[#2E5A88] focus-visible:ring-offset-0",
                "shadow-inner transition-all duration-200",
                "min-h-[56px]",
                disabled && "opacity-60 cursor-not-allowed"
              )}
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#1E3A5F]/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs text-[#0F2744]/50">Private & Secure</span>
            </div>
            
            <button
              onClick={handleSend}
              disabled={!value.trim() || isAnimating || disabled}
              className={cn(
                "relative flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-medium transition-all duration-200",
                "bg-gradient-to-r from-[#0F2744] to-[#1E3A5F]",
                "text-white shadow-lg shadow-[#1E3A5F]/25",
                "hover:shadow-xl hover:shadow-[#1E3A5F]/30",
                "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg",
                "active:scale-95",
                value.trim() && !isAnimating && !disabled ? "hover:scale-105" : ""
              )}
            >
              <span className="hidden sm:inline">Send</span>
              <Send className="w-4 h-4" />
              
              {isAnimating && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-[#4A90B5]"
                      style={{
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                      }}
                      initial={{ x: 0, y: 0, opacity: 1 }}
                      animate={{
                        x: Math.cos((i * Math.PI * 2) / 8) * 40,
                        y: Math.sin((i * Math.PI * 2) / 8) * 40,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { AnimatedTextCycle }

