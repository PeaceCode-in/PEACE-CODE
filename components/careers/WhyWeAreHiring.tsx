"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { highlights, badges } from "./roles"
import { SectionHeading } from "./SectionHeading"

export function WhyWeAreHiring() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-pc-offwhite">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <SectionHeading
              title="Why We're Hiring"
              subtitle="We're at an inflection point. Here's why we need you."
              align="left"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-pc-slate leading-relaxed">
                PeaceCode started with a simple observation: millions of Indian students 
                struggle with mental health challenges, yet access to quality support remains 
                fragmented and stigmatized.
              </p>
              <p className="text-pc-slate leading-relaxed">
                We're building the platform we wished existed—AI-guided support, professional 
                counseling, peer communities, and wellness tools, all designed with cultural 
                sensitivity and in 10+ regional languages.
              </p>
              <p className="text-pc-navy leading-relaxed font-medium">
                Now, we need exceptional people who care deeply about this mission to help 
                us scale from thousands to millions of students.
              </p>
            </div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-4"
            >
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full font-medium"
                  style={{
                    backgroundColor: index % 2 === 0 ? 'rgba(254, 194, 230, 0.3)' : 'rgba(198, 218, 131, 0.3)',
                    color: '#0F1455',
                  }}
                >
                  {badge.label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full bg-white/80 backdrop-blur-sm border-pc-pink/20 hover:border-pc-pink/40 hover:shadow-lg hover:shadow-pc-pink/10 transition-all duration-300 group">
                  <div 
                    className="p-3 rounded-xl w-fit mb-4 transition-colors"
                    style={{ backgroundColor: 'rgba(254, 194, 230, 0.2)' }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: '#FEC2E6' }} />
                  </div>
                  <h3 className="font-semibold text-pc-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-pc-slate leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
