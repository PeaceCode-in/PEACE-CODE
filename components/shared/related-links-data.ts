// This file contains NO "use client" directive - safe for server components
// Data configuration for related links across different pages

import { HelpCircle, Briefcase, Users, BookOpen, Lock, Mail, Shield } from "lucide-react"
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

export interface LinkSet {
  bentoLinks: RelatedLinkItem[]
  quickLinks: QuickLinkItem[]
}

// Pre-configured link sets for different pages
export const linkSets: Record<string, LinkSet> = {
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
    ],
    quickLinks: [
      { label: "Contact", href: "/about/contact" },
      { label: "FAQs", href: "/about/faqs" },
      { label: "About", href: "/about/about-peace-code" },
      { label: "Resources", href: "/resources" },
      { label: "Privacy", href: "/about/faqs" },
    ],
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
    ],
    quickLinks: [
      { label: "Contact", href: "/about/contact" },
      { label: "Careers", href: "/about/careers" },
      { label: "About", href: "/about/about-peace-code" },
      { label: "Privacy", href: "/about/faqs" },
      { label: "Resources", href: "/resources" },
    ],
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
    ],
    quickLinks: [
      { label: "FAQs", href: "/about/faqs" },
      { label: "Careers", href: "/about/careers" },
      { label: "About", href: "/about/about-peace-code" },
      { label: "Privacy", href: "/about/faqs" },
      { label: "Resources", href: "/resources" },
    ],
  },
}
