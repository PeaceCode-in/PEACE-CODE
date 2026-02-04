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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#fbfaff] pt-20">
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Soft gradient orbs - lavender palette */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(217, 217, 255, 0.5)" }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(176, 176, 255, 0.4)" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium mb-8"
            style={{ backgroundColor: "rgba(217, 217, 255, 0.4)", border: "1px solid rgba(155, 155, 255, 0.5)", color: "#2d2d5a" }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "#9b9bff" }} />
            <span>We're hiring passionate builders</span>
          </motion.div>

          {/* Main Heading - Playfair Display for elegance */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-hero tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-[#2d2d5a]">Careers at </span>
            <span style={{ color: "#9b9bff" }}>PeaceCode</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "#5c5c8a" }}
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
              style={{ backgroundColor: "#9b9bff", color: "#fff" }}
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("open-roles")}
              className="px-8 py-6 text-base font-semibold rounded-full group hover:bg-[#d9d9ff]/20"
              style={{ borderColor: "rgba(155, 155, 255, 0.5)", color: "#2d2d5a" }}
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
                  backgroundColor: index % 2 === 0 ? "rgba(217, 217, 255, 0.5)" : "rgba(176, 176, 255, 0.4)",
                  color: "#2d2d5a",
                  border: `1px solid ${index % 2 === 0 ? "rgba(155, 155, 255, 0.5)" : "rgba(123, 123, 255, 0.4)"}`,
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
        <ArrowDown className="w-5 h-5" style={{ color: "rgba(92, 92, 138, 0.5)" }} />
      </motion.div>
    </section>
  )
}
