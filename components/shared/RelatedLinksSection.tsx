"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

// Import types and data from server-safe module
import type { RelatedLinkItem, QuickLinkItem } from "./related-links-data"

// Re-export types for convenience
export type { RelatedLinkItem, QuickLinkItem } from "./related-links-data"

interface RelatedLinksSectionProps {
  title?: string
  subtitle?: string
  bentoLinks: RelatedLinkItem[]
  quickLinks: QuickLinkItem[]
  bgColor?: string
}

export function RelatedLinksSection({
  title = "Related Resources",
  subtitle = "Explore more ways we can help",
  bentoLinks,
  quickLinks,
  bgColor = "bg-white",
}: RelatedLinksSectionProps) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-hero mb-3" style={{ color: "#2d2d5a" }}>
            {title}
          </h2>
          <p style={{ color: "#5c5c8a" }}>{subtitle}</p>
        </motion.div>

        {/* Bento cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bentoLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={link.href}>
                  <Card className="group p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ backgroundColor: "rgba(251, 250, 255, 0.9)", borderColor: "rgba(217, 217, 255, 0.5)" }}>
                    <div
                      className="p-3 rounded-xl w-fit mb-4"
                      style={{ backgroundColor: `${link.color}20` }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: link.color }} />
                    </div>
                    <h3 className="font-semibold mb-1 transition-colors group-hover:opacity-80" style={{ color: "#2d2d5a" }}>
                      {link.title}
                    </h3>
                    <p className="text-sm mb-3" style={{ color: "#5c5c8a" }}>{link.description}</p>
                    <div
                      className="flex items-center text-sm font-medium"
                      style={{ color: link.color }}
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Quick chip links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-[#d9d9ff]/30"
              style={{ backgroundColor: "rgba(217, 217, 255, 0.4)", color: "#2d2d5a", border: "1px solid rgba(155, 155, 255, 0.5)" }}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
