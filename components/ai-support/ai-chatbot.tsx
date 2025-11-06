"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, User, Send, RefreshCw, AlertTriangle, Sparkles } from "lucide-react"

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
  "Hello! I'm your AI mental health support companion. 👋",
  "I'm here to listen and provide support for things like anxiety, stress, and feeling down.",
  "How are you feeling today? Feel free to share what's on your mind.",
]

export function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(true) // Start with typing indicator
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const conversationStarters = [
    "I'm feeling anxious about my exams.",
    "I've been feeling down lately.",
    "I'm stressed about my workload.",
    "Can you give me a mindfulness tip?",
  ]

  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    // "Typing" effect for introductory messages
    let messageIndex = 0
    const typeNextMessage = () => {
      if (messageIndex < introductoryMessages.length) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: `intro-${messageIndex}`,
              type: "ai",
              content: introductoryMessages[messageIndex],
              timestamp: new Date(),
            },
          ])
          messageIndex++
          typeNextMessage()
        }, 1500) // Delay between messages
      } else {
        setIsTyping(false) // Stop typing indicator after last message
      }
    }

    typeNextMessage()
  }, [])

  const detectCrisis = (message: string): boolean => {
    return crisisKeywords.some((keyword) => message.toLowerCase().includes(keyword))
  }

  const generateResponse = (userMessage: string): { content: string; needsProfessionalHelp: boolean } => {
    const lowerMessage = userMessage.toLowerCase()

    // Crisis detection
    if (detectCrisis(userMessage)) {
      return {
        content:
          "I'm very concerned about what you've shared. Please reach out for immediate help:\n\n• Call 988 (Suicide & Crisis Lifeline)\n• Contact emergency services (102)\n• Reach out to a trusted friend, family member, or counselor\n\nYour life has value, and there are people who want to help you. Would you like me to help you find local crisis resources?",
        needsProfessionalHelp: true,
      }
    }

    // Anxiety responses
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

    // Depression responses
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

    // Stress responses
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

    // Academic stress
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

    // General supportive response
    return {
      content:
        "Thank you for sharing that with me. It takes courage to reach out when you're struggling. While I can provide some general support and coping strategies, I want to remind you that professional counselors are available if you need more personalized help.\n\nCould you tell me more about what you're experiencing? Are you feeling anxious, stressed, sad, or something else?",
      needsProfessionalHelp: false,
    }
  }

  const handleSend = async (messageContent?: string) => {
    const currentMessage = messageContent || input
    if (!currentMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: currentMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    if (!messageContent) {
      setInput("")
    }
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(
      () => {
        const response = generateResponse(currentMessage)
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
      1000 + Math.random() * 2000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const clearChat = () => {
    setMessages([])
    setIsTyping(true)
    // Re-trigger the introductory message sequence
    let messageIndex = 0
    const typeNextMessage = () => {
      if (messageIndex < introductoryMessages.length) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: `intro-${messageIndex}`,
              type: "ai",
              content: introductoryMessages[messageIndex],
              timestamp: new Date(),
            },
          ])
          messageIndex++
          typeNextMessage()
        }, 1500)
      } else {
        setIsTyping(false)
      }
    }
    typeNextMessage()
  }

  return (
    <Card className="h-full flex flex-col border-2 border-blue-200 shadow-2xl bg-gradient-to-br from-white via-blue-50/30 to-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b-2 border-blue-200 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardTitle className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">AI Companion</span>
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </div>
            <div className="text-xs text-blue-100 font-normal">Always here to listen</div>
          </div>
        </CardTitle>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearChat}
          className="text-white hover:bg-white/20 hover:text-white"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} animate-fade-in-slide-up`}
              >
                <div
                  className={`flex items-start space-x-3 max-w-[85%] ${
                    message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                    message.type === "user" 
                      ? "bg-gradient-to-br from-blue-600 to-blue-700" 
                      : "bg-gradient-to-br from-blue-500 to-blue-600"
                  }`}>
                    {message.type === "user" ? (
                      <User className="h-5 w-5 text-white" />
                    ) : (
                      <Bot className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`p-4 rounded-2xl transition-all duration-200 hover:scale-[1.01] shadow-md ${
                      message.type === "user"
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-tr-sm"
                        : message.needsProfessionalHelp
                        ? "bg-red-50 border-2 border-red-300 rounded-tl-sm"
                        : "bg-white border-2 border-blue-200 rounded-tl-sm"
                    }`}
                  >
                    {message.needsProfessionalHelp && (
                      <div className="flex items-center space-x-2 mb-3 text-red-700">
                        <AlertTriangle className="h-5 w-5" />
                        <span className="text-sm font-semibold">Professional Help Recommended</span>
                      </div>
                    )}
                    <p className={`text-sm leading-relaxed whitespace-pre-wrap ${
                      message.type === "user" ? "text-white" : message.needsProfessionalHelp ? "text-red-900" : "text-gray-800"
                    }`}>
                      {message.content}
                    </p>
                    <p className={`text-xs mt-2 ${
                      message.type === "user" ? "text-blue-100" : "text-gray-500"
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-fade-in-slide-up">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="p-4 rounded-2xl rounded-tl-sm bg-white border-2 border-blue-200 shadow-md">
                    <div className="flex space-x-2">
                      <div
                        className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0s" }}
                      ></div>
                      <div
                        className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0.15s" }}
                      ></div>
                      <div
                        className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="border-t-2 border-blue-200 p-4 bg-gradient-to-r from-white to-blue-50/50 backdrop-blur-sm">
          <div className="flex flex-wrap gap-2 mb-3">
            {messages.length === 0 &&
              !isTyping &&
              conversationStarters.map((starter) => (
                <Button
                  key={starter}
                  variant="outline"
                  size="sm"
                  className="bg-white border-2 border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-200"
                  onClick={() => handleSend(starter)}
                  disabled={isTyping}
                >
                  {starter}
                </Button>
              ))}
          </div>

          <div className="flex space-x-3">
            <Input
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isTyping}
              className="flex-1 border-2 border-blue-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 bg-white text-gray-900 placeholder:text-gray-400"
            />
            <Button
              onClick={() => handleSend()}
              disabled={isTyping || !input.trim()}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed px-6"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <div className="text-xs text-gray-500 mt-3 text-center flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Available 24/7 • Confidential • Secure</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
