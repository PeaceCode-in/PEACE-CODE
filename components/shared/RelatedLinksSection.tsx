"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight, HelpCircle, Briefcase, Users, BookOpen, Lock, Mail, Shield } from "lucide-react"
import type { LucideIcon } from "lucide-react"

// Link configuration types
export interface RelatedLinkItem {
  id: string
  icon: LucideIcon
  title: string
  description: string
  href: string
  color: string
}

export interface QuickLinkItem {
  label: string
  href: string
}

// Pre-configured link sets for different pages
export const linkSets = {
  careers: {
    bentoLinks: [
      {
        id: "contact",
        icon: Mail,
        title: "Contact Us",
        description: "Questions about roles or process?",
        href: "/about/contact",
        color: "#FEC2E6",
      },
      {
        id: "help",
        icon: HelpCircle,
        title: "Help Center",
        description: "Find answers to common questions",
        href: "/about/faqs",
        color: "#C6DA83",
      },
      {
        id: "about",
        icon: Users,
        title: "About Us",
        description: "Learn about PeaceCode's mission",
        href: "/about/about-peace-code",
        color: "#4A4F87",
      },
    ] as RelatedLinkItem[],
    quickLinks: [
      { label: "Contact", href: "/about/contact" },
      { label: "FAQs", href: "/about/faqs" },
      { label: "About", href: "/about/about-peace-code" },
      { label: "Resources", href: "/resources" },
      { label: "Privacy", href: "/about/faqs" },
    ] as QuickLinkItem[],
  },
  faqs: {
    bentoLinks: [
      {
        id: "contact",
        icon: Mail,
        title: "Contact Us",
        description: "Can't find your answer? Reach out",
        href: "/about/contact",
        color: "#FEC2E6",
      },
      {
        id: "careers",
        icon: Briefcase,
        title: "Careers",
        description: "Join our mission-driven team",
        href: "/about/careers",
        color: "#C6DA83",
      },
      {
        id: "safety",
        icon: Shield,
        title: "Safety Resources",
        description: "Crisis support and helplines",
        href: "/resources",
        color: "#4A4F87",
      },
    ] as RelatedLinkItem[],
    quickLinks: [
      { label: "Contact", href: "/about/contact" },
      { label: "Careers", href: "/about/careers" },
      { label: "About", href: "/about/about-peace-code" },
      { label: "Privacy", href: "/about/faqs" },
      { label: "Resources", href: "/resources" },
    ] as QuickLinkItem[],
  },
  contact: {
    bentoLinks: [
      {
        id: "help",
        icon: HelpCircle,
        title: "Help Center",
        description: "Find answers to common questions",
        href: "/about/faqs",
        color: "#FEC2E6",
      },
      {
        id: "careers",
        icon: Briefcase,
        title: "Careers",
        description: "Join our mission-driven team",
        href: "/about/careers",
        color: "#C6DA83",
      },
      {
        id: "about",
        icon: Users,
        title: "About Us",
        description: "Learn about PeaceCode's mission",
        href: "/about/about-peace-code",
        color: "#4A4F87",
      },
    ] as RelatedLinkItem[],
    quickLinks: [
      { label: "FAQs", href: "/about/faqs" },
      { label: "Careers", href: "/about/careers" },
      { label: "About", href: "/about/about-peace-code" },
      { label: "Privacy", href: "/about/faqs" },
      { label: "Resources", href: "/resources" },
    ] as QuickLinkItem[],
  },
}

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
          <h2 className="text-2xl sm:text-3xl font-bold text-pc-navy mb-3">
            {title}
          </h2>
          <p className="text-pc-slate">{subtitle}</p>
        </motion.div>

        {/* Bento cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bentoLinks.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={link.href}>
                <Card className="group p-6 h-full bg-pc-offwhite/50 border-pc-pink/10 hover:border-pc-pink/30 hover:shadow-lg hover:shadow-pc-pink/10 hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="p-3 rounded-xl w-fit mb-4"
                    style={{ backgroundColor: `${link.color}20` }}
                  >
                    <link.icon className="w-6 h-6" style={{ color: link.color }} />
                  </div>
                  <h3 className="font-semibold text-pc-navy mb-1 group-hover:text-pc-pink transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-pc-slate mb-3">{link.description}</p>
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
          ))}
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
              className="px-4 py-2 rounded-full text-sm font-medium bg-pc-pink/10 text-pc-navy hover:bg-pc-pink/20 border border-pc-pink/20 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
