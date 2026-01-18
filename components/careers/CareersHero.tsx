"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"

export function CareersHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-pc-offwhite pt-20">
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Soft gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-pc-pink/30 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-pc-green/20 blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pc-pink/20 border border-pc-pink/30 text-pc-navy text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 text-pc-pink" style={{ color: '#FEC2E6' }} />
            <span>We're hiring passionate builders</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-pc-navy">Careers at </span>
            <span style={{ color: '#FEC2E6' }}>PeaceCode</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-pc-slate leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Join us in building India's most compassionate digital mental health platform. 
            Your code, your research, your voice—changing millions of student lives.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("application-form")}
              className="px-8 py-6 text-base font-semibold rounded-full"
              style={{ backgroundColor: '#FEC2E6', color: '#0F1455' }}
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("open-roles")}
              className="px-8 py-6 text-base font-semibold rounded-full border-pc-navy/20 text-pc-navy hover:bg-pc-navy/5 group"
            >
              View Roles
              <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-16"
          >
            {["Remote-friendly", "Flexible hours", "Student-led", "Founding team"].map((badge, index) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: index % 2 === 0 ? 'rgba(254, 194, 230, 0.2)' : 'rgba(198, 218, 131, 0.2)',
                  color: '#0F1455',
                  border: `1px solid ${index % 2 === 0 ? 'rgba(254, 194, 230, 0.4)' : 'rgba(198, 218, 131, 0.4)'}`,
                }}
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-5 h-5 text-pc-slate/40" />
      </motion.div>
    </section>
  )
}
