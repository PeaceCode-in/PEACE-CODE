"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Sparkles } from "lucide-react"
import { TerminalCard } from "./TerminalCard"
import { contactInfo } from "./contact-config"

export function ContactHero() {
  const scrollToForm = () => {
    const element = document.getElementById("contact-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0F1455 1px, transparent 1px),
              linear-gradient(to bottom, #0F1455 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated glow orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ backgroundColor: "rgba(217, 217, 255, 0.45)" }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(176, 176, 255, 0.35)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Status chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
            >
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono"
                style={{ backgroundColor: "rgba(217, 217, 255, 0.4)", color: "#2d2d5a" }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#9b9bff" }} />
                status: {contactInfo.status}
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono"
                style={{ backgroundColor: "rgba(176, 176, 255, 0.35)", color: "#2d2d5a" }}
              >
                avg response: &lt; 24h
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono"
                style={{ backgroundColor: "rgba(155, 155, 255, 0.25)", color: "#2d2d5a" }}
              >
                build: {contactInfo.build}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-hero font-semibold tracking-tight mb-6"
              style={{ color: "#2d2d5a" }}
            >
              Contact{" "}
              <span style={{ color: "#9b9bff" }}>PeaceCode</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ color: "#5c5c8a" }}
            >
              Have a question, feedback, or just want to say hi? We're here to help—
              reach out and let's make mental wellness more accessible together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Button
                size="lg"
                onClick={scrollToForm}
                className="px-8 py-6 text-base font-semibold rounded-full"
                style={{ backgroundColor: "#9b9bff", color: "#fff" }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="px-8 py-6 text-base font-semibold rounded-full hover:bg-[#d9d9ff]/20"
              style={{ borderColor: "rgba(155, 155, 255, 0.5)", color: "#2d2d5a" }}
              >
                <a href={`mailto:${contactInfo.emails.support}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email Directly
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right content - Terminal */}
          <div className="hidden lg:block">
            <TerminalCard />
          </div>
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
