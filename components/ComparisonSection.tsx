import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Minus } from "lucide-react"
import clsx from "clsx"

interface CellConfig {
  peaceCode: string | boolean
  a: string | boolean
  b: string | boolean
}

interface Row {
  feature: string
  cells: CellConfig
}

const rows: Row[] = [
  {
    feature: "Target Audience",
    cells: {
      peaceCode: "Built only for Indian college students and campus life.",
      a: "Generic audience: working professionals, parents, students, everyone.",
      b: "Broad ‘anyone with stress or anxiety’ focus.",
    },
  },
  {
    feature: "Focus Area",
    cells: {
      peaceCode: "Exam stress, placements, hostel life, homesickness, burnout.",
      a: "General mental health and productivity.",
      b: "Therapy and self-help for all age groups.",
    },
  },
  {
    feature: "Support Model",
    cells: {
      peaceCode: "Self-help tools + human support through campus ecosystem.",
      a: "1-to-1 therapy sessions only.",
      b: "AI chatbot with optional therapist upgrade.",
    },
  },
  {
    feature: "24×7 Availability",
    cells: {
      peaceCode: "Instant check-ins, SOS shortcuts, guided exercises anytime.",
      a: "Therapist sessions based on slots and availability.",
      b: "Chatbot is 24×7, human help is limited.",
    },
  },
  {
    feature: "Student Dashboard",
    cells: {
      peaceCode: "Personal dashboard with moods, journals, and progress, in a glassmorphism UI.",
      a: "Basic profile + session history.",
      b: "Simple chat interface; no rich dashboard.",
    },
  },
  {
    feature: "College Analytics",
    cells: {
      peaceCode: "Anonymous campus-level reports and trends for admins.",
      a: "Limited or no college-wide analytics.",
      b: "Focused on individual users, not campuses.",
    },
  },
  {
    feature: "Cultural Relevance",
    cells: {
      peaceCode: "Built for Indian campuses, local context, college slang, exam timelines.",
      a: "Global corporate tone, less campus-specific.",
      b: "International content, not tailored to Indian colleges.",
    },
  },
  {
    feature: "Privacy & Anonymity",
    cells: {
      peaceCode: "Anonymous journaling, private check-ins, stigma-aware design.",
      a: "Standard privacy, focused on client records.",
      b: "Basic app privacy, not optimized for campus stigma.",
    },
  },
  {
    feature: "Pricing for Students",
    cells: {
      peaceCode: "Campus plans, free or subsidised access for students.",
      a: "Per-session fees for every student.",
      b: "Individual subscriptions and in-app purchases.",
    },
  },
  {
    feature: "Setup for Colleges",
    cells: {
      peaceCode: "Easy onboarding, launch kits for orientations and mental-health drives.",
      a: "Standard onboarding; limited campus-specific campaigns.",
      b: "Mostly self-serve app; colleges are not the main focus.",
    },
  },
]

/**
 * Table cell rendering helper – if content is boolean render icon else string
 */
function renderCell(value: string | boolean) {
  if (typeof value === "boolean") {
    return value ? <Check className="w-5 h-5 text-teal-300" /> : <Minus className="w-5 h-5 text-slate-400" />
  }
  return <span className="text-sm leading-relaxed">{value}</span>
}

export function ComparisonSection() {
  const [highlight, setHighlight] = useState(false)
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setHighlight(false), 3000)
    return () => clearTimeout(timer)
  }, [highlight])

  return (
    <section className="w-full py-24 overflow-hidden relative" id="comparison">
      {/* Gradient Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020817] to-[#041E3A]" />
      {/* Radial glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-teal-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-teal-300 font-semibold tracking-wide uppercase mb-3">Why students choose PeaceCode</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">PeaceCode vs Other Platforms</h2>
          <p className="text-lg text-slate-300">Built only for Indian college students, not just ‘everyone with anxiety’.</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="overflow-x-auto rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
            <table className="min-w-full text-left relative">
              <thead className="sticky top-0 backdrop-blur-xl bg-white/10">
                <tr>
                  <th className="px-6 py-5 font-semibold text-white/90">Feature</th>
                  <th
                    className={clsx(
                      "px-6 py-5 font-semibold relative cursor-pointer",
                      highlight && "animate-pulse"
                    )}
                    onMouseEnter={() => setHighlight(true)}
                    onMouseLeave={() => setHighlight(false)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-teal-300">PeaceCode</span>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-teal-300/10 text-teal-200 border border-teal-400/30">
                        Student-first
                      </span>
                    </div>
                    {/* Glow border */}
                    <motion.span
                      layoutId="highlight"
                      className="absolute inset-0 rounded-lg border border-teal-400/50 pointer-events-none"
                      initial={false}
                      animate={{ opacity: highlight ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </th>
                  <th className="px-6 py-5 font-semibold text-slate-400">Other Platform A</th>
                  <th className="px-6 py-5 font-semibold text-slate-400">Other Platform B</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {rows.map((row, idx) => (
                  <motion.tr
                    key={row.feature}
                    className="hover:bg-white/5 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <td className="px-6 py-5 text-white/90 font-medium w-48">{row.feature}</td>
                    <td className="px-6 py-5" onMouseEnter={() => setHighlight(true)} onMouseLeave={() => setHighlight(false)}>
                      {renderCell(row.cells.peaceCode)}
                    </td>
                    <td className="px-6 py-5 text-slate-300">{renderCell(row.cells.a)}</td>
                    <td className="px-6 py-5 text-slate-300">{renderCell(row.cells.b)}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {rows.map((row, idx) => (
            <div key={row.feature} className="border border-white/10 rounded-2xl backdrop-blur-xl bg-white/5">
              <button
                className="w-full flex justify-between items-center px-4 py-4 text-white/90 font-medium"
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              >
                {row.feature}
                <span className="ml-2 text-teal-300">{activeIdx === idx ? "-" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {activeIdx === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4 text-sm space-y-3"
                  >
                    <div className="p-3 rounded-xl border border-teal-400/30 bg-teal-300/10">
                      <p className="text-teal-200 text-xs mb-1">PeaceCode</p>
                      <div>{renderCell(row.cells.peaceCode)}</div>
                    </div>
                    <div className="p-3 rounded-xl border border-white/10 bg-white/5">
                      <p className="text-slate-400 text-xs mb-1">Other Platform A</p>
                      <div>{renderCell(row.cells.a)}</div>
                    </div>
                    <div className="p-3 rounded-xl border border-white/10 bg-white/5">
                      <p className="text-slate-400 text-xs mb-1">Other Platform B</p>
                      <div>{renderCell(row.cells.b)}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection

