import { Code, Brain, Users, Megaphone, Heart, Lightbulb } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface SubRole {
  title: string
  description: string
}

export interface RoleData {
  id: string
  title: string
  subtitle: string
  icon: LucideIcon
  color: string
  bullets: string[]
  expandedContent: {
    responsibilities: string[]
    stack?: string[]
    expectations: string[]
    timeCommitment: string
  }
  subRoles?: SubRole[]
}

export const rolesData: RoleData[] = [
  {
    id: "product-engineering",
    title: "Product Engineering",
    subtitle: "Build the technology that powers student mental wellness",
    icon: Code,
    color: "from-[#FEC2E6] to-[#E9A8CF]",
    bullets: [
      "Ship features used by thousands of students",
      "Work with modern React, Next.js, and AI/ML",
      "Own entire product verticals end-to-end",
    ],
    expandedContent: {
      responsibilities: [
        "Design and implement user-facing features",
        "Collaborate with design and product teams",
        "Write clean, maintainable, well-tested code",
        "Participate in code reviews and technical discussions",
        "Help shape our engineering culture and practices",
      ],
      stack: [
        "Frontend: React, Next.js, TypeScript, Tailwind CSS",
        "Backend: Node.js, Express, or Python/Django",
        "ML: Python, TensorFlow/PyTorch, LangChain",
        "Database: PostgreSQL, Supabase, Redis",
        "Infrastructure: Vercel, AWS, Docker",
      ],
      expectations: [
        "Strong foundation in CS fundamentals",
        "Experience with at least one modern web framework",
        "Passion for building accessible, performant UIs",
        "Ability to work independently and in teams",
      ],
      timeCommitment: "10-15 hours/week flexible",
    },
    subRoles: [
      {
        title: "Frontend Engineer",
        description: "Craft beautiful, accessible interfaces with React & Next.js",
      },
      {
        title: "Backend Engineer",
        description: "Build scalable APIs and real-time systems",
      },
      {
        title: "Machine Learning Engineer",
        description: "Train models that power our AI companion",
      },
    ],
  },
  {
    id: "student-psych-team",
    title: "Student Psych Team",
    subtitle: "Bridge psychology and technology for real impact",
    icon: Heart,
    color: "from-[#C6DA83] to-[#A8C45F]",
    bullets: [
      "Create evidence-based mental health content",
      "Moderate peer support communities",
      "Research and improve intervention strategies",
    ],
    expandedContent: {
      responsibilities: [
        "Develop psychoeducational content and resources",
        "Provide peer support within moderated forums",
        "Conduct user research and feedback analysis",
        "Help design therapeutic conversational flows",
        "Collaborate on clinical protocol development",
      ],
      expectations: [
        "Pursuing or completed degree in Psychology or related field",
        "Strong written and verbal communication skills",
        "Empathy and understanding of student mental health",
        "Interest in digital mental health interventions",
      ],
      timeCommitment: "5-10 hours/week flexible",
    },
  },
  {
    id: "campus-ambassador",
    title: "Campus Ambassador",
    subtitle: "Be the voice of PeaceCode at your university",
    icon: Megaphone,
    color: "from-[#4A4F87] to-[#0F1455]",
    bullets: [
      "Organize wellness events and workshops",
      "Build student communities on campus",
      "Gather feedback to improve the product",
    ],
    expandedContent: {
      responsibilities: [
        "Represent PeaceCode at campus events and fairs",
        "Onboard new student users and gather feedback",
        "Create campus-specific content and campaigns",
        "Build relationships with student organizations",
        "Host mental wellness awareness sessions",
      ],
      expectations: [
        "Currently enrolled undergraduate or graduate student",
        "Strong social and networking skills",
        "Passion for mental health advocacy",
        "Experience with event planning is a plus",
      ],
      timeCommitment: "5 hours/week flexible",
    },
  },
]

export const highlights = [
  {
    icon: Lightbulb,
    title: "Ownership & Real Shipping",
    description: "No busy work. You'll own projects from idea to production.",
  },
  {
    icon: Users,
    title: "Student-First Impact",
    description: "Your work directly helps thousands of students thrive.",
  },
  {
    icon: Code,
    title: "Portfolio-Grade Work",
    description: "Build production software you'll be proud to showcase.",
  },
  {
    icon: Brain,
    title: "Flexible Collaboration",
    description: "Remote-friendly, async-first, designed for students.",
  },
]

export const badges = [
  { label: "Remote-friendly", variant: "secondary" as const },
  { label: "Part-time OK", variant: "outline" as const },
  { label: "Student-led", variant: "secondary" as const },
  { label: "Founding team", variant: "default" as const },
]
