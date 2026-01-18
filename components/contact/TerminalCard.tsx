"use client"

import { motion } from "framer-motion"

interface TerminalCardProps {
  className?: string
}

export function TerminalCard({ className }: TerminalCardProps) {
  const lines = [
    { prefix: "$", text: "ping peacecode.support", delay: 0 },
    { prefix: ">", text: "reply: we're here.", delay: 0.5 },
    { prefix: ">", text: "status: online", delay: 1 },
    { prefix: ">", text: "response_time: < 24h", delay: 1.5 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={className}
    >
      <div className="relative rounded-2xl overflow-hidden bg-[#0F1455] border border-[#4A4F87]/30 shadow-2xl shadow-[#0F1455]/20">
        {/* Window controls */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0F1455] border-b border-[#4A4F87]/30">
          <div className="w-3 h-3 rounded-full bg-[#FEC2E6]/60" />
          <div className="w-3 h-3 rounded-full bg-[#C6DA83]/60" />
          <div className="w-3 h-3 rounded-full bg-[#4A4F87]/60" />
          <span className="ml-3 text-xs text-white/40 font-mono">terminal</span>
        </div>

        {/* Terminal content */}
        <div className="p-5 font-mono text-sm space-y-2">
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: line.delay }}
              className="flex items-start gap-2"
            >
              <span
                className="flex-shrink-0"
                style={{ color: line.prefix === "$" ? "#C6DA83" : "#FEC2E6" }}
              >
                {line.prefix}
              </span>
              <span className="text-white/80">{line.text}</span>
              {index === lines.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-4 bg-[#FEC2E6]/70 ml-1"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Glow effect */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FEC2E6]/10 rounded-full blur-3xl" />
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#C6DA83]/10 rounded-full blur-3xl" />
      </div>
    </motion.div>
  )
}
