"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/ui/header-2"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { RelatedLinksSection, linkSets } from "@/components/shared/RelatedLinksSection"
import {
  Search,
  HelpCircle,
  Heart,
  ClipboardCheck,
  Laptop,
  CreditCard,
  Shield,
  ChevronDown,
  Sparkles,
  MessageCircle,
} from "lucide-react"

// --- FAQ DATA -------------------------------------------------------------
type QA = { category: string; q: string; a: string }

const faqList: QA[] = [
  // Generic (10)
  {
    category: "General",
    q: "What is Peace Code?",
    a: "Peace Code is an all-in-one digital mental-wellness platform that combines AI-powered support, professional counselling, peer community and self-help tools in 10+ Indian languages.",
  },
  {
    category: "General",
    q: "Do I have to sign up to use the website?",
    a: "You can browse resources without an account. To access personalised tools, community forums, or book therapy sessions, you'll need to create a free profile.",
  },
  {
    category: "General",
    q: "How do I create an account?",
    a: "Click the Sign-Up button on the top-right, choose your role (student or counsellor), enter your email, and verify it with the link we send. The whole process takes under two minutes.",
  },
  {
    category: "General",
    q: "How old must I be to use Peace Code?",
    a: "Our services are designed for users aged 16 and above. If you are under 18, we require parental consent before booking therapy sessions.",
  },
  {
    category: "General",
    q: "I would like to work with Peace Code. Who should I contact?",
    a: "Check our Careers page for live openings or email your résumé to careers@peacecode.com. We review every application within a week.",
  },
  // Therapy (15)
  {
    category: "Therapy",
    q: "What modes of therapy do you offer?",
    a: "We provide one-on-one video, audio, and secure text-based sessions. You can mix and match formats depending on comfort and need.",
  },
  {
    category: "Therapy",
    q: "What is online therapy?",
    a: "Online therapy allows you to meet a licensed professional over encrypted video or chat, so you receive evidence-based care from anywhere.",
  },
  {
    category: "Therapy",
    q: "How is a Peace Code session different from a video call with friends?",
    a: "Our therapists are clinically trained, follow structured treatment plans, and operate on a HIPAA-compliant platform that ensures confidentiality.",
  },
  {
    category: "Therapy",
    q: "Is online therapy safe?",
    a: "Yes. All sessions use end-to-end encryption, and we never record or store video/audio.",
  },
  {
    category: "Therapy",
    q: "How effective is online therapy?",
    a: "Multiple peer-reviewed studies show outcomes comparable to in-person care for most concerns when delivered by qualified professionals.",
  },
  {
    category: "Therapy",
    q: "What concerns are handled at Peace Code?",
    a: "Anxiety, depression, ADHD, academic stress, relationship issues, grief and more. Severe psychiatric crises are referred to specialised care.",
  },
  {
    category: "Therapy",
    q: "Are there concerns you don't handle?",
    a: "We currently do not treat active psychosis, severe substance dependence, or medical emergencies on the platform.",
  },
  {
    category: "Therapy",
    q: "How long does a session last?",
    a: "Standard therapy sessions are 50 minutes. Brief check-ins and group sessions vary between 20-45 minutes.",
  },
  {
    category: "Therapy",
    q: "Can my issues be solved in one session?",
    a: "While a single session can offer clarity, sustainable change usually requires an evidence-based treatment plan over multiple sessions.",
  },
  {
    category: "Therapy",
    q: "How long will therapy last overall?",
    a: "On average, users attend 6-12 sessions across three months, but duration is personalised and regularly reviewed with your therapist.",
  },
  {
    category: "Therapy",
    q: "How frequently should I book sessions?",
    a: "Weekly appointments are recommended initially. Frequency can decrease as you progress and learn self-management strategies.",
  },
  {
    category: "Therapy",
    q: "How do I choose my therapist?",
    a: "Our matching quiz considers language, specialisation, availability and your goals. You can also manually browse our expert directory.",
  },
  {
    category: "Therapy",
    q: "Can I switch therapists mid-way?",
    a: "Absolutely. Your comfort is paramount. Use the Change Therapist option in your dashboard and we'll rematch you within 48 hours.",
  },
  {
    category: "Therapy",
    q: "Can I contact my therapist between sessions?",
    a: "For brief clarifications, you may message via the client portal. For crises, please call emergency services as therapists may not be immediately available.",
  },
  {
    category: "Therapy",
    q: "How do I end therapy?",
    a: "Discuss termination goals with your therapist. A planned conclusion includes relapse-prevention and future check-in options.",
  },
  // Assessments (5)
  {
    category: "Assessments",
    q: "What are assessments?",
    a: "They are standardised questionnaires validated by clinical research to measure symptoms such as anxiety, depression or attention difficulties.",
  },
  {
    category: "Assessments",
    q: "Do I have to pay for assessments?",
    a: "Quick screenings are free. In-depth psychometrics may incur a nominal fee, which will be displayed before you proceed.",
  },
  {
    category: "Assessments",
    q: "Is taking these assessments mandatory?",
    a: "No, they're optional but highly recommended to track progress and personalise your care plan.",
  },
  {
    category: "Assessments",
    q: "Are my results shared?",
    a: "Only with your assigned therapist and you. Aggregated, anonymised data may be used for product improvement with strict privacy controls.",
  },
  {
    category: "Assessments",
    q: "Can I retake a test?",
    a: "Yes—most tools have a recommended retest interval (e.g., two weeks) to accurately capture change over time.",
  },
  // Technical (8)
  {
    category: "Technical",
    q: "What system specs are recommended?",
    a: "A stable 5 Mbps internet connection, a webcam, microphone, and the latest version of Chrome, Firefox, or Safari.",
  },
  {
    category: "Technical",
    q: "Can I access Peace Code from mobile?",
    a: "Yes, our progressive web app works on Android and iOS browsers, and a native app is coming soon.",
  },
  {
    category: "Technical",
    q: "How do I start an online session?",
    a: "Log in, navigate to 'My Appointments', and click 'Join Session' five minutes before the scheduled time.",
  },
  {
    category: "Technical",
    q: "Are sessions timed?",
    a: "Yes, a timer is visible throughout. If extra time is needed and the therapist is available, you can extend the slot for a prorated fee.",
  },
  {
    category: "Technical",
    q: "What if my connection drops?",
    a: "Rejoin using the same link. If issues persist, you may reschedule free of charge or switch to a phone call.",
  },
  {
    category: "Technical",
    q: "Is there parking at partner clinics?",
    a: "Most locations have on-site parking. Details are emailed with your booking confirmation.",
  },
  {
    category: "Technical",
    q: "Can I use Bluetooth headphones?",
    a: "Certainly, as long as latency is low and the microphone quality is clear.",
  },
  {
    category: "Technical",
    q: "Do sessions work behind corporate firewalls?",
    a: "Usually yes, but if video is blocked, switching to mobile data or our alternative WebRTC ports solves the issue.",
  },
  // Payment (10)
  {
    category: "Payments",
    q: "What is the fee for therapy?",
    a: "Single sessions start at ₹799. Package discounts and student subsidies are available.",
  },
  {
    category: "Payments",
    q: "Which payment methods do you accept?",
    a: "UPI, credit/debit cards, net banking and international cards via Stripe.",
  },
  {
    category: "Payments",
    q: "Is the payment gateway secure?",
    a: "Yes—our transactions are processed through PCI-DSS compliant providers with 256-bit encryption.",
  },
  {
    category: "Payments",
    q: "Can I pay for multiple sessions upfront?",
    a: "Absolutely. Bundle packs offer up to 20% savings and increase commitment to therapy.",
  },
  {
    category: "Payments",
    q: "Can I reschedule a session?",
    a: "Rescheduling is free up to 12 hours before your appointment via your dashboard.",
  },
  {
    category: "Payments",
    q: "Am I eligible for a refund if I cancel?",
    a: "Cancellations with 24-hour notice receive a full refund. Later cancellations incur a 30% fee to compensate therapist time.",
  },
  {
    category: "Payments",
    q: "Can the therapist cancel?",
    a: "In rare emergencies, sessions may be moved. You will receive an immediate full refund or priority reschedule slot.",
  },
  {
    category: "Payments",
    q: "What if my session is interrupted?",
    a: "Network disruptions under 10 minutes are compensated with extra time; longer outages qualify for a free make-up session.",
  },
  {
    category: "Payments",
    q: "Do you offer EMI options?",
    a: "Yes, for packages above ₹5,000 we partner with Razorpay EMI at 0% interest for 3 months.",
  },
  {
    category: "Payments",
    q: "Can I get an invoice for insurance?",
    a: "Yes—download GST-compliant invoices from your billing history to file claims with insurers that cover tele-therapy.",
  },
  // Privacy (7)
  {
    category: "Privacy",
    q: "What information do you collect?",
    a: "Name, email, self-reported concerns, usage analytics, and therapy notes (accessible only to your therapist). We never sell data.",
  },
  {
    category: "Privacy",
    q: "How is my data used?",
    a: "To deliver personalised care, improve services, and comply with legal obligations. Aggregated analytics inform product roadmap.",
  },
  {
    category: "Privacy",
    q: "Can I use Peace Code anonymously?",
    a: "You may browse resources without logging in, but therapy and community features require verified identities for safety.",
  },
  {
    category: "Privacy",
    q: "Are sessions recorded?",
    a: "No. We store only encrypted text summaries written by therapists for continuity of care.",
  },
  {
    category: "Privacy",
    q: "Who can see my community posts?",
    a: "Only logged-in members. You can post under a pseudonym; moderators enforce strict confidentiality rules.",
  },
  {
    category: "Privacy",
    q: "Can I request erasure of my data?",
    a: "Yes—email privacy@peacecode.com and we will delete your records within 30 days, unless retention is required by law.",
  },
  {
    category: "Privacy",
    q: "Do you comply with HIPAA?",
    a: "Although HIPAA is US-specific, our infrastructure meets or exceeds HIPAA and Indian PDPB guidelines for health data.",
  },
]

// Category configuration with icons and colors
const categoryConfig: Record<string, { icon: typeof HelpCircle; color: string; bgColor: string }> = {
  General: { icon: HelpCircle, color: "#FEC2E6", bgColor: "rgba(254, 194, 230, 0.15)" },
  Therapy: { icon: Heart, color: "#C6DA83", bgColor: "rgba(198, 218, 131, 0.15)" },
  Assessments: { icon: ClipboardCheck, color: "#4A4F87", bgColor: "rgba(74, 79, 135, 0.15)" },
  Technical: { icon: Laptop, color: "#FEC2E6", bgColor: "rgba(254, 194, 230, 0.15)" },
  Payments: { icon: CreditCard, color: "#C6DA83", bgColor: "rgba(198, 218, 131, 0.15)" },
  Privacy: { icon: Shield, color: "#4A4F87", bgColor: "rgba(74, 79, 135, 0.15)" },
}

// Get unique categories
const categories = Array.from(new Set(faqList.map((f) => f.category)))

// FAQ Item Component
function FAQItem({ faq, index }: { faq: QA; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const config = categoryConfig[faq.category] || categoryConfig.General

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      <div
        className={cn(
          "group rounded-2xl border transition-all duration-300 overflow-hidden",
          "bg-white/80 backdrop-blur-sm",
          isOpen
            ? "border-pc-pink/40 shadow-lg shadow-pc-pink/10"
            : "border-pc-pink/10 hover:border-pc-pink/30 hover:shadow-md"
        )}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-start gap-4 p-5 text-left"
        >
          <div
            className="flex-shrink-0 p-2.5 rounded-xl transition-colors"
            style={{ backgroundColor: config.bgColor }}
          >
            <config.icon className="w-5 h-5" style={{ color: config.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-pc-navy pr-8 leading-relaxed">
              {faq.q}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 mt-1"
          >
            <ChevronDown className="w-5 h-5 text-pc-slate" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-5 pb-5 pt-0">
                <div
                  className="pl-14 pr-4 py-4 rounded-xl text-pc-slate leading-relaxed"
                  style={{ backgroundColor: config.bgColor }}
                >
                  {faq.a}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Filter FAQs based on category and search
  const filteredFAQs = useMemo(() => {
    return faqList.filter((faq) => {
      const matchesCategory = !activeCategory || faq.category === activeCategory
      const matchesSearch =
        !searchQuery ||
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  // Group filtered FAQs by category
  const groupedFAQs = useMemo(() => {
    const groups: Record<string, QA[]> = {}
    filteredFAQs.forEach((faq) => {
      if (!groups[faq.category]) {
        groups[faq.category] = []
      }
      groups[faq.category].push(faq)
    })
    return groups
  }, [filteredFAQs])

  return (
    <main className="flex flex-col min-h-screen bg-pc-offwhite">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-pc-pink/20 blur-[150px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-pc-green/15 blur-[120px]"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pc-pink/20 border border-pc-pink/30 text-pc-navy text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" style={{ color: "#FEC2E6" }} />
            <span>We're here to help</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-pc-navy mb-6"
          >
            Frequently Asked{" "}
            <span style={{ color: "#FEC2E6" }}>Questions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-pc-slate max-w-2xl mx-auto mb-10"
          >
            Find answers to common questions about our platform, therapy services, 
            payments, privacy, and more.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pc-slate" />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-base rounded-full bg-white/80 border-pc-pink/20 focus:border-pc-pink/50 focus:ring-pc-pink/20"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                !activeCategory
                  ? "text-pc-navy shadow-md"
                  : "bg-white/60 text-pc-slate hover:bg-white/80 border border-pc-pink/10"
              )}
              style={
                !activeCategory
                  ? { backgroundColor: "#FEC2E6" }
                  : undefined
              }
            >
              All Topics
            </button>
            {categories.map((category) => {
              const config = categoryConfig[category]
              const isActive = activeCategory === category
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(isActive ? null : category)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                    isActive
                      ? "text-pc-navy shadow-md"
                      : "bg-white/60 text-pc-slate hover:bg-white/80 border border-pc-pink/10"
                  )}
                  style={
                    isActive
                      ? { backgroundColor: config.color }
                      : undefined
                  }
                >
                  <config.icon className="w-4 h-4" />
                  {category}
                </button>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* FAQ List */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: "rgba(254, 194, 230, 0.2)" }}
              >
                <Search className="w-8 h-8" style={{ color: "#FEC2E6" }} />
              </div>
              <h3 className="text-xl font-semibold text-pc-navy mb-2">
                No results found
              </h3>
              <p className="text-pc-slate">
                Try adjusting your search or browse all categories.
              </p>
            </motion.div>
          ) : activeCategory ? (
            // Single category view
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <FAQItem key={`${faq.category}-${index}`} faq={faq} index={index} />
              ))}
            </div>
          ) : (
            // Grouped by category view
            <div className="space-y-12">
              {Object.entries(groupedFAQs).map(([category, faqs]) => {
                const config = categoryConfig[category]
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: config.bgColor }}
                      >
                        <config.icon className="w-6 h-6" style={{ color: config.color }} />
                      </div>
                      <h2 className="text-2xl font-bold text-pc-navy">{category}</h2>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: config.bgColor, color: config.color }}
                      >
                        {faqs.length} questions
                      </span>
                    </div>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <FAQItem key={`${category}-${index}`} faq={faq} index={index} />
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative rounded-3xl p-8 sm:p-12 overflow-hidden"
            style={{ backgroundColor: "#0F1455" }}
          >
            {/* Background decoration */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-30"
              style={{ backgroundColor: "#FEC2E6" }}
            />
            <div
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[80px] opacity-20"
              style={{ backgroundColor: "#C6DA83" }}
            />

            <div className="relative z-10 text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                style={{ backgroundColor: "rgba(254, 194, 230, 0.2)" }}
              >
                <MessageCircle className="w-8 h-8" style={{ color: "#FEC2E6" }} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-white/70 max-w-lg mx-auto mb-8">
                Can't find what you're looking for? Our support team is here to help 
                you with any questions or concerns.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:support@peacecode.in"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                  style={{ backgroundColor: "#FEC2E6", color: "#0F1455" }}
                >
                  Contact Support
                </a>
                <Link
                  href="/about/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/20 text-white hover:bg-white/10 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Links */}
      <RelatedLinksSection
        title="Explore More"
        subtitle="Helpful resources and pages"
        bentoLinks={linkSets.faqs.bentoLinks}
        quickLinks={linkSets.faqs.quickLinks}
      />
    </main>
  )
}
