import {
  Mail,
  MessageCircle,
  Shield,
  HelpCircle,
  Briefcase,
  Users,
  BookOpen,
  Lock,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

// Contact information
export const contactInfo = {
  emails: {
    support: "support@peacecode.in",
    careers: "careers@peacecode.in",
    partnerships: "partners@peacecode.in",
  },
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  location: "Bengaluru, India",
  responseTime: "We usually reply within 24–48 hours",
  status: "online",
  build: "beta",
}

// Topic options for form
export const topicOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "bug", label: "Report a Bug" },
  { value: "feature", label: "Feature Request" },
  { value: "partnership", label: "Partnerships" },
  { value: "campus", label: "Campus Program" },
  { value: "safety", label: "Safety Concern" },
] as const

// Bento card configuration
export interface BentoCardConfig {
  id: string
  icon: LucideIcon
  title: string
  description: string
  primaryAction: {
    label: string
    value: string
    type: "copy" | "link" | "mailto"
  }
  secondaryAction?: {
    label: string
    value: string
    type: "copy" | "link" | "mailto"
  }
  color: string
  bgColor: string
}

export const bentoCards: BentoCardConfig[] = [
  {
    id: "email",
    icon: Mail,
    title: "Email Us",
    description: "For support queries or general questions",
    primaryAction: {
      label: "Copy email",
      value: contactInfo.emails.support,
      type: "copy",
    },
    secondaryAction: {
      label: "Careers",
      value: contactInfo.emails.careers,
      type: "mailto",
    },
    color: "#FEC2E6",
    bgColor: "rgba(254, 194, 230, 0.15)",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "WhatsApp / DM",
    description: "Quick questions? Message us directly",
    primaryAction: {
      label: "Copy number",
      value: contactInfo.whatsapp,
      type: "copy",
    },
    secondaryAction: {
      label: "Open WhatsApp",
      value: `https://wa.me/${contactInfo.whatsapp.replace(/\s/g, "")}`,
      type: "link",
    },
    color: "#C6DA83",
    bgColor: "rgba(198, 218, 131, 0.15)",
  },
  {
    id: "safety",
    icon: Shield,
    title: "Safety & Support",
    description: "Urgent concerns or safety issues",
    primaryAction: {
      label: "Help Center",
      value: "/about/faqs",
      type: "link",
    },
    secondaryAction: {
      label: "Crisis Resources",
      value: "/resources",
      type: "link",
    },
    color: "#4A4F87",
    bgColor: "rgba(74, 79, 135, 0.15)",
  },
]

// Related links configuration
export interface RelatedLinkConfig {
  id: string
  icon: LucideIcon
  title: string
  description: string
  href: string
  color: string
}

export const relatedLinks: RelatedLinkConfig[] = [
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
  {
    id: "resources",
    icon: BookOpen,
    title: "Resources",
    description: "Mental wellness guides and tools",
    href: "/resources",
    color: "#FEC2E6",
  },
  {
    id: "privacy",
    icon: Lock,
    title: "Privacy Policy",
    description: "How we protect your data",
    href: "/about/faqs",
    color: "#C6DA83",
  },
]

// Quick chip links for footer
export const quickLinks = [
  { label: "FAQs", href: "/about/faqs" },
  { label: "Careers", href: "/about/careers" },
  { label: "About", href: "/about/about-peace-code" },
  { label: "Privacy", href: "/about/faqs" },
  { label: "Resources", href: "/resources" },
]
