"use client"

import { motion } from "framer-motion"
import { Newspaper, FileText, ArrowRight, Download, Calendar, ExternalLink, MessageSquare } from "lucide-react"
import Link from "next/link"

const mediaHighlights = [
  {
    source: "TechInAsia",
    title: "Next-Gen AI Companion for Student Mental Health Support",
    excerpt: "Peace Code is leveraging natural language processing and HIPAA-compliant architecture to offer immediate, conversational support to college students struggling with academic stress.",
    date: "April 18, 2026",
    link: "#",
    tag: "Product Feature"
  },
  {
    source: "YourStory",
    title: "Democratizing Mental Healthcare in Indian Universities",
    excerpt: "Founded by student innovator Jai Mann, Peace Code aims to eliminate campus stigma by offering anonymous counseling, peer wellness communities, and research-backed self-help tools.",
    date: "March 22, 2026",
    link: "#",
    tag: "Founder Story"
  },
  {
    source: "Hindustan Times",
    title: "Campus Peer Support: A New Era for College Student Wellness",
    excerpt: "With university mental health services stretched thin, student-led digital platforms like Peace Code are bridging the gap, providing scalable, student-friendly peer support systems.",
    date: "February 05, 2026",
    link: "#",
    tag: "Industry News"
  }
]

const pressReleases = [
  {
    title: "Peace Code Announces Campus Pilot across 15+ Indian Universities",
    date: "May 10, 2026",
    excerpt: "Launching free, multi-lingual mental health screening, focus tools, and anonymous counseling to over 50,000 college students in English, Hindi, Tamil, and Bengali.",
    docSize: "2.4 MB"
  },
  {
    title: "Peace Code Partners with Certified Counseling Associations",
    date: "January 14, 2026",
    excerpt: "Securing vetted, licensed clinical psychologists to provide virtual, student-friendly therapy sessions on the Peace Code platform.",
    docSize: "1.8 MB"
  }
]

export default function MediaPage() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-tr from-[#fbfaff] via-[#f5f0ff] to-[#fcfcff] overflow-hidden text-slate-800 pb-24">
      {/* Grainy Noise Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Blobs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #d4bbfc 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 left-10 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #9667e0 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-[#ebd9fc] backdrop-blur-md text-xs font-semibold text-[#9667e0] mb-6">
            <Newspaper className="w-3.5 h-3.5" />
            Press & Media Room
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-normal tracking-tight text-slate-900 mb-6">
            Peace Code in the <span className="italic text-[#9667e0]">Media</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Stay up to date with the latest stories, news highlights, press releases, and brand resources 
            about our campus mental wellness mission.
          </p>
        </motion.div>

        {/* Featured News Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-white/40 border border-white/60 backdrop-blur-xl p-8 md:p-12 mb-16 hover:bg-white/60 hover:border-white/80 hover:shadow-2xl hover:shadow-[#9667e0]/5 transition-all duration-300 grid md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-8">
            <span className="px-3 py-1 rounded-full text-2xs font-semibold uppercase tracking-wider bg-[#9667e0] text-white">
              Featured Story
            </span>
            <h2 className="text-2xl md:text-4xl font-playfair font-normal text-slate-900 mt-4 mb-6 leading-tight">
              Peace Code Launches Campus Wellness Pilot in 10+ Regional Indian Languages
            </h2>
            <p className="text-slate-600 leading-relaxed font-light mb-6">
              Breaking language barriers to support mental wellness. Our platform now offers cognitive-behavioral tools, 
              AI support chats, and local resources in Hindi, Tamil, Telugu, and more, making care culturally accessible.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-light">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#9667e0]" />
                May 20, 2026
              </span>
              <span>•</span>
              <span>Published by Peace Code Communications Team</span>
            </div>
          </div>
          <div className="md:col-span-4 flex justify-end">
            <Link
              href="/about/contact"
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#9667e0] text-white hover:bg-[#7c5acf] transition-all duration-200 hover:scale-105 shadow-md"
            >
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>

        {/* News Coverage Grid */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-b border-[#ebd9fc]/60 pb-4 mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-playfair font-normal text-slate-800">
              Media Highlights & Mentions
            </h2>
            <p className="text-sm text-slate-500 mt-1 font-light">What tech and mainstream news publications say about Peace Code.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {mediaHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group rounded-2xl bg-white/40 border border-white/60 backdrop-blur-xl p-6 hover:bg-white/60 hover:border-white/80 hover:shadow-xl hover:shadow-[#9667e0]/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {item.source}
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded-full text-3xs font-semibold uppercase tracking-wider bg-[#f2ebfb] text-[#9667e0]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#9667e0] transition-colors duration-200 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                    {item.excerpt}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-100/50">
                  <span className="text-2xs text-slate-400 font-light">{item.date}</span>
                  <Link 
                    href={item.link} 
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#9667e0] hover:text-[#7c5acf]"
                  >
                    Read Article
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Press Releases & Press Kit */}
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          {/* Press Releases */}
          <div className="md:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-b border-[#ebd9fc]/60 pb-4 mb-8"
            >
              <h2 className="text-2xl font-playfair font-normal text-slate-800">
                Official Press Releases
              </h2>
            </motion.div>

            <div className="space-y-6">
              {pressReleases.map((pr, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-xl hover:bg-white/60 transition-colors duration-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div className="flex-1">
                    <span className="text-2xs text-[#9667e0] font-semibold tracking-wider uppercase block mb-1">
                      {pr.date}
                    </span>
                    <h3 className="text-md font-bold text-slate-900 mb-2 leading-snug">
                      {pr.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-light leading-relaxed max-w-xl">
                      {pr.excerpt}
                    </p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#ebd9fc] hover:bg-[#9667e0] hover:text-white transition-all duration-200 text-xs font-semibold text-[#9667e0] shadow-sm">
                    <Download className="w-3.5 h-3.5" />
                    PDF ({pr.docSize})
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Media Kit */}
          <div className="md:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-b border-[#ebd9fc]/60 pb-4 mb-8"
            >
              <h2 className="text-2xl font-playfair font-normal text-slate-800">
                Media Resources
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-tr from-[#fbfaff] via-[#f5f0ff] to-[#ebd9fc]/20 border border-white/60 backdrop-blur-xl shadow-inner flex flex-col justify-between"
            >
              <div>
                <FileText className="w-8 h-8 text-[#9667e0] mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Download Brand Kit</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light mb-6">
                  Access high-resolution branding assets, logo files in vector/PNG, app screenshots, 
                  and our comprehensive media fact sheet.
                </p>
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#9667e0] text-white hover:bg-[#7c5acf] transition-all duration-200 text-xs font-semibold shadow-md">
                <Download className="w-4 h-4" />
                Download Media Kit (.ZIP)
              </button>
            </motion.div>
          </div>
        </div>

        {/* Media Contacts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/40 border border-white/60 backdrop-blur-xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden"
        >
          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#f2ebfb] flex items-center justify-center text-[#9667e0] mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-playfair font-normal text-slate-900 mb-3">Press & Interview Inquiries</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-light">
              Are you a journalist or researcher writing about digital campus mental health solutions? 
              Reach out directly to arrange interview slots with our founding team or medical leads.
            </p>
            <Link 
              href="/about/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#9667e0] text-white hover:bg-[#7c5acf] font-semibold text-sm transition-all duration-200 shadow-md hover:scale-[1.02]"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
