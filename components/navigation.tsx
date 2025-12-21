"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Heart,
  SearchIcon,
  Home,
  Info,
  Settings,
  User,
  MessageSquare,
  BookOpen,
  Timer,
  Wind,
  Sparkles,
  PenLine,
  ClipboardCheck,
  Users,
  Phone,
  HelpCircle,
  Briefcase,
  Newspaper,
  Bot,
  Heart as HeartIcon,
  Brain,
  FileText,
} from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { SearchModal, CommandItemType } from "@/components/ui/search-modal"
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

// Search data for the website
const searchData: CommandItemType[] = [
  // Navigation
  {
    id: 'nav-home',
    title: 'Home',
    description: 'Go to the homepage',
    category: 'Navigation',
    icon: Home,
    href: '/',
  },
  {
    id: 'nav-about',
    title: 'About Peace Code',
    description: 'Learn about our mission and values',
    category: 'About',
    icon: Info,
    href: '/about/about-peace-code',
  },
  {
    id: 'nav-team',
    title: 'Our Team',
    description: 'Meet our dedicated team members',
    category: 'About',
    icon: Users,
    href: '/about/team',
  },
  {
    id: 'nav-careers',
    title: 'Careers',
    description: 'Join us in making mental health accessible',
    category: 'About',
    icon: Briefcase,
    href: '/about/careers',
  },
  {
    id: 'nav-media',
    title: 'Media',
    description: 'Peace Code in the news',
    category: 'About',
    icon: Newspaper,
    href: '/about/media',
  },
  {
    id: 'nav-contact',
    title: 'Contact Us',
    description: 'Get in touch with our team',
    category: 'About',
    icon: Phone,
    href: '/about/contact',
  },
  {
    id: 'nav-faqs',
    title: 'FAQs',
    description: 'Find answers to common questions',
    category: 'About',
    icon: HelpCircle,
    href: '/about/faqs',
  },
  // Services
  {
    id: 'service-ai',
    title: 'AI Chatbot',
    description: '24/7 AI-powered mental health support',
    category: 'Services',
    icon: Bot,
    href: '/ai-support',
  },
  {
    id: 'service-chat',
    title: 'Start AI Chat',
    description: 'Begin a conversation with our AI companion',
    category: 'Services',
    icon: MessageSquare,
    href: '/ai-support/chat',
  },
  {
    id: 'service-counseling',
    title: 'Professional Counseling',
    description: 'Connect with licensed therapists',
    category: 'Services',
    icon: HeartIcon,
    href: '/counseling',
  },
  {
    id: 'service-community',
    title: 'Community Support',
    description: 'Join peer support groups',
    category: 'Services',
    icon: Users,
    href: '/community',
  },
  {
    id: 'service-screening',
    title: 'Mental Health Screening',
    description: 'Take self-assessments',
    category: 'Services',
    icon: ClipboardCheck,
    href: '/screening',
  },
  // Wellness Tools
  {
    id: 'tool-focus-timer',
    title: 'Focus Timer',
    description: 'Pomodoro timer with ambient sounds for deep work',
    category: 'Wellness',
    icon: Timer,
    href: '/focus-timer',
  },
  {
    id: 'tool-breath-pacer',
    title: 'Breath Pacer',
    description: 'Breathing techniques for calm and focus',
    category: 'Wellness',
    icon: Wind,
    href: '/breath-pacer',
  },
  {
    id: 'tool-gratitude',
    title: 'Gratitude Wall',
    description: 'Share and spread positivity',
    category: 'Wellness',
    icon: Sparkles,
    href: '/gratitude-wall',
  },
  {
    id: 'tool-journal',
    title: 'Digital Journal',
    description: 'Track your thoughts and moods',
    category: 'Wellness',
    icon: PenLine,
    href: '/journal',
  },
  // Resources
  {
    id: 'resource-all',
    title: 'Resources',
    description: 'Explore all mental health resources',
    category: 'Resources',
    icon: BookOpen,
    href: '/resources',
  },
  {
    id: 'resource-articles',
    title: 'Articles',
    description: 'Read mental health articles',
    category: 'Resources',
    icon: FileText,
    href: '/resources',
  },
  // Dashboard
  {
    id: 'dashboard',
    title: 'Student Dashboard',
    description: 'Access your personal dashboard',
    category: 'Account',
    icon: User,
    href: '/auth/simple-login',
  },
]

// TypeScript Types
interface SubLink {
  name: string
  description: string
  href: string
}

interface NavigationGroup {
  title: string
  subLinks: SubLink[]
}

interface NavigationItem {
  label: string
  href?: string
  groups?: NavigationGroup[]
}

// Navigation Data Structure
const navigationData: NavigationItem[] = [
  {
    label: "About Us",
    groups: [
      {
        title: "Company",
        subLinks: [
          {
            name: "About Peace Code",
            description: "Learn about our mission and values",
            href: "/about/about-peace-code"
          },
          {
            name: "Team",
            description: "Meet our dedicated team members",
            href: "/about/team"
          },
          {
            name: "Careers",
            description: "Join us in making mental health accessible",
            href: "/about/careers"
          }
        ]
      },
      {
        title: "Media & Support",
        subLinks: [
          {
            name: "Peace Code in Media",
            description: "Our presence in news and media",
            href: "/about/media"
          },
          {
            name: "Contact Us",
            description: "Get in touch with our team",
            href: "/about/contact"
          },
          {
            name: "FAQs",
            description: "Find answers to common questions",
            href: "/about/faqs"
          }
        ]
      }
    ]
  },
  {
    label: "Services",
    groups: [
      {
        title: "For Students",
        subLinks: [
          {
            name: "AI Chatbot",
            description: "24/7 AI-powered mental health support",
            href: "/ai-support"
          },
          {
            name: "Professional Counseling",
            description: "Connect with licensed therapists",
            href: "/counseling"
          },
          {
            name: "Community Support",
            description: "Join peer support groups",
            href: "/community"
          },
          {
            name: "Screening Tools",
            description: "Mental health assessments",
            href: "/screening"
          }
        ]
      },
      {
        title: "Wellness Tools",
        subLinks: [
          {
            name: "Focus Timer",
            description: "Pomodoro timer with ambient sounds",
            href: "/focus-timer"
          },
          {
            name: "Breath Pacer",
            description: "Breathing techniques for calm and focus",
            href: "/breath-pacer"
          },
          {
            name: "Gratitude Wall",
            description: "Share and spread positivity",
            href: "/gratitude-wall"
          },
          {
            name: "Digital Journal",
            description: "Track your thoughts and moods",
            href: "/journal"
          }
        ]
      }
    ]
  },
  {
    label: "Resources",
    href: "/resources"
  }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const pathname = usePathname()
  
  // Check if we're on the home page
  const isHomePage = pathname === "/"

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false)
        } else {
          // Scrolling up
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)

      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <div onMouseLeave={() => setActiveMenu(null)}>
      <Navbar
        shrinkAfter={12}
        className={cn("transition-transform duration-300", isVisible ? "transform-none" : "-translate-y-full")}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavBody>
            <NavbarLogo className="z-10">
              <Heart className="h-8 w-8 text-sky-700" />
              <span className="text-2xl font-bold text-gray-900">Peace Code</span>
            </NavbarLogo>

            {/* Keep existing mega-menu hover behavior */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="hidden md:flex items-center gap-10">
                {navigationData.map((item) => (
                  <div key={item.label} className="relative">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-gray-900 font-medium hover:text-sky-700 transition-colors py-2"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        className="text-gray-900 font-medium hover:text-sky-700 transition-colors py-2"
                        onMouseEnter={() => setActiveMenu(item.label)}
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 z-10">
              {!isHomePage && (
                <SearchModal data={searchData}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hidden md:flex items-center gap-2 bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 hover:text-sky-700"
                  >
                    <SearchIcon className="h-4 w-4" />
                    <span className="hidden lg:inline">Search...</span>
                    <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border border-gray-300 bg-gray-200 px-1.5 font-mono text-[10px] font-medium text-gray-500">
                      <span className="text-xs">⌘</span>K
                    </kbd>
                  </Button>
                </SearchModal>
              )}
              <ModeToggle />
              <NavbarButton href="/auth/login" variant="primary" className="hidden md:inline-flex">
                Student Dashboard
              </NavbarButton>
            </div>
          </NavBody>
        </div>

        {/* Mobile Navigation */}
        <MobileNav>
          <NavBody>
            <MobileNavHeader>
              <NavbarLogo className="z-10">
                <Heart className="h-7 w-7 text-sky-700" />
                <span className="text-xl font-bold text-gray-900">Peace Code</span>
              </NavbarLogo>

              <div className="flex items-center gap-2">
                <ModeToggle />
                <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
              </div>
            </MobileNavHeader>
          </NavBody>

          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {navigationData.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block text-gray-900 font-medium py-2 hover:text-sky-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <div className="text-gray-900 font-medium py-2">{item.label}</div>
                    {item.groups && (
                      <div className="ml-4 space-y-2 mt-2">
                        {item.groups.flatMap((group) =>
                          group.subLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block text-gray-600 text-sm py-1 hover:text-sky-700 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {link.name}
                            </Link>
                          )),
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
              <NavbarButton href="/auth/simple-login" variant="primary" className="w-full">
                Student Dashboard
              </NavbarButton>
              <NavbarButton href="/counseling" variant="secondary" className="w-full">
                Book a Session
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>

        {/* Mega Menu - keep existing */}
        {activeMenu && navigationData.find(item => item.label === activeMenu)?.groups && (
          <div
            className="absolute top-16 left-0 right-0 mt-2 hidden md:block"
            onMouseEnter={() => setActiveMenu(activeMenu)}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-200">
                <div className="grid grid-cols-2 gap-12">
                  {navigationData.find(item => item.label === activeMenu)?.groups?.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-sky-700 font-semibold mb-4 text-sm uppercase tracking-wider">
                        {group.title}
                      </h3>
                      <div className="space-y-3">
                        {group.subLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block group/link hover:translate-x-1 transition-transform"
                            onClick={() => setActiveMenu(null)}
                          >
                            <div className="text-gray-900 font-medium group-hover/link:text-sky-700 transition-colors">
                              {link.name}
                            </div>
                            <div className="text-gray-500 text-sm mt-1 group-hover/link:text-gray-700 transition-colors">
                              {link.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Navbar>
    </div>
  )
}
