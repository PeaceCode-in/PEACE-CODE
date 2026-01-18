"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown, Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { RoleData } from "./roles"

interface RoleBentoCardProps {
  role: RoleData
  index: number
}

export function RoleBentoCard({ role, index }: RoleBentoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = role.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className={cn(
          "group relative overflow-hidden cursor-pointer",
          "bg-white/80 backdrop-blur-sm border-pc-pink/20",
          "hover:border-pc-pink/50 hover:shadow-2xl hover:shadow-pc-pink/15",
          "transition-all duration-500 ease-out",
          isExpanded && "border-pc-pink/50 shadow-xl shadow-pc-pink/10"
        )}
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseEnter={() => {
          if (window.innerWidth >= 1024) setIsExpanded(true)
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 1024) setIsExpanded(false)
        }}
      >
        {/* Gradient border on hover */}
        <div
          className={cn(
            "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            "bg-gradient-to-br p-[1px]",
            role.color
          )}
          style={{ 
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
          }}
        />

        <div className="relative p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className={cn(
              "p-4 rounded-2xl bg-gradient-to-br shadow-lg",
              role.color
            )}>
              <Icon className="w-8 h-8 text-pc-navy" />
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden p-2 rounded-full bg-pc-pink/10"
            >
              <ChevronDown className="w-5 h-5 text-pc-slate" />
            </motion.div>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-2xl font-bold text-pc-navy mb-2 transition-colors">
            {role.title}
          </h3>
          <p className="text-pc-slate mb-6">
            {role.subtitle}
          </p>

          {/* Quick Bullets */}
          <ul className="space-y-3 mb-6">
            {role.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-pc-slate">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#FEC2E6' }} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-6 border-t border-pc-pink/20 space-y-6">
                  {/* Sub-roles if any */}
                  {role.subRoles && (
                    <div>
                      <h4 className="font-semibold text-sm text-pc-navy mb-3">
                        Available Tracks
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {role.subRoles.map((sub, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full font-medium"
                            style={{
                              backgroundColor: 'rgba(254, 194, 230, 0.2)',
                              color: '#0F1455',
                            }}
                          >
                            {sub.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-sm text-pc-navy mb-3">
                      What You'll Do
                    </h4>
                    <ul className="space-y-2">
                      {role.expandedContent.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-pc-slate">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#FEC2E6' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack if any */}
                  {role.expandedContent.stack && (
                    <div>
                      <h4 className="font-semibold text-sm text-pc-navy mb-3">
                        Tech Stack
                      </h4>
                      <div className="space-y-1">
                        {role.expandedContent.stack.map((item, i) => (
                          <p key={i} className="text-sm text-pc-slate">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expectations */}
                  <div>
                    <h4 className="font-semibold text-sm text-pc-navy mb-3">
                      What We're Looking For
                    </h4>
                    <ul className="space-y-2">
                      {role.expandedContent.expectations.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-pc-slate">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#C6DA83' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Time Commitment */}
                  <div className="flex items-center gap-2 pt-2">
                    <span 
                      className="px-3 py-1 text-xs rounded-full font-medium"
                      style={{
                        backgroundColor: 'rgba(198, 218, 131, 0.2)',
                        color: '#0F1455',
                      }}
                    >
                      ⏱️ {role.expandedContent.timeCommitment}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand hint on desktop */}
          <div className="hidden lg:block">
            <p className="text-xs text-pc-slate/50 mt-4 group-hover:opacity-0 transition-opacity">
              Hover to see more →
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
