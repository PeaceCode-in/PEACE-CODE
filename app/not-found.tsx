"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <main className="relative flex h-[calc(100vh-80px)] md:h-[calc(100vh-64px)] w-full flex-col bg-gradient-to-tr from-[#f3f0fa] via-[#fbfaff] to-[#f5f3ff] overflow-hidden text-slate-800 px-6 md:px-12 lg:px-24 py-8 md:py-12 justify-between">
      {/* Global CSS overrides to hide footer and chatbot, and lock scroll for this page */}
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          overflow: hidden !important;
          height: 100vh !important;
          max-height: 100vh !important;
        }
        footer {
          display: none !important;
        }
        button[class*="fixed"][class*="bottom-6"][class*="right-6"] {
          display: none !important;
        }
        div[class*="fixed"][class*="bottom-24"][class*="right-6"] {
          display: none !important;
        }
      `}} />

      {/* Grainy Noise Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="flex-1 flex flex-col justify-between max-w-6xl mx-auto w-full relative z-10 py-4">
        
        {/* Huge Typography Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col my-auto w-full"
        >
          {/* "Something" aligned to the left */}
          <h1 className="text-[clamp(2.2rem,9.5vw,9.5rem)] leading-[0.85] font-playfair font-normal tracking-tight text-slate-800 text-left">
            Something
          </h1>
          {/* "went wrong" indented to the right, forced on one line */}
          <h1 className="text-[clamp(2.2rem,9.5vw,9.5rem)] leading-[0.85] font-playfair font-normal italic tracking-tight text-slate-800 text-left ml-[10%] md:ml-[25%] lg:ml-[30%] mt-2 md:mt-4 whitespace-nowrap">
            went wrong
          </h1>
        </motion.div>

        {/* Bottom Text Content Layout */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-end w-full mt-auto"
        >
          <div className="md:col-span-3">
            <p className="text-slate-400 text-xs uppercase tracking-[0.2em] font-mono mb-1 md:mb-0">
              Page not found
            </p>
          </div>
          <div className="md:col-span-9 max-w-2xl">
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light mb-6">
              Looks like this link is having a bit of a mental breakdown. (Hey, it happens to the best of us.) Take a deep breath, ground yourself, and let’s guide you back to stable ground.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center text-xs font-semibold text-slate-800 hover:text-purple-600 transition-colors group tracking-widest font-mono uppercase border-b border-slate-400 hover:border-purple-600 pb-1"
            >
              [ Back to Homepage ]
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
