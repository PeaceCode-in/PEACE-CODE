"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  Heart,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

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
            description: "Boost productivity with Pomodoro",
            href: "/focus"
          },
          {
            name: "Breathing Exercises",
            description: "Guided breathing for anxiety relief",
            href: "/breathe"
          },
          {
            name: "Gratitude Wall",
            description: "Share and spread positivity",
            href: "/gratitude"
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
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

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
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "transform-none" : "-translate-y-full"
      }`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="relative">
        {/* Navigation Bar - Fully Transparent */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 z-10">
              <Heart className="h-8 w-8 text-white drop-shadow-md" />
              <span className="text-2xl font-bold text-white drop-shadow-md">Peace Code</span>
            </Link>

            {/* Primary navigation (desktop) - centered */}
            <div className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
              {navigationData.map((item) => (
                <div key={item.label} className="relative">
                  {item.href ? (
                    <Link 
                      href={item.href} 
                      className="text-white font-medium hover:text-gray-200 transition-colors py-2 drop-shadow-md"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button 
                      className="text-white font-medium hover:text-gray-200 transition-colors py-2 drop-shadow-md"
                      onMouseEnter={() => setActiveMenu(item.label)}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Right-side - Login button */}
            <div className="hidden md:flex items-center z-10">
              <Link href="/auth/login">
                <Button 
                  className="bg-black text-white hover:bg-gray-800 border-none rounded-full px-6 py-2 font-medium transition-colors"
                >
                  Login
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden z-10">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-200"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mega Menu - Frosted Glass Effect */}
        {activeMenu && navigationData.find(item => item.label === activeMenu)?.groups && (
          <div 
            className="absolute top-16 left-0 right-0 mt-2"
            onMouseEnter={() => setActiveMenu(activeMenu)}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-700/50">
                <div className="grid grid-cols-2 gap-12">
                  {navigationData.find(item => item.label === activeMenu)?.groups?.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
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
                            <div className="text-white font-medium group-hover/link:text-blue-300 transition-colors">
                              {link.name}
                            </div>
                            <div className="text-gray-400 text-sm mt-1 group-hover/link:text-gray-300 transition-colors">
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 px-4">
            <div className="bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-700/50">
              <div className="space-y-4">
                {navigationData.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <Link 
                        href={item.href} 
                        className="block text-white font-medium py-2 hover:text-gray-200 transition-colors" 
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <div className="text-white font-medium py-2">
                          {item.label}
                        </div>
                        {item.groups && (
                          <div className="ml-4 space-y-2 mt-2">
                            {item.groups.flatMap(group => 
                              group.subLinks.map(link => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="block text-gray-300 text-sm py-1 hover:text-white transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {link.name}
                                </Link>
                              ))
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
                <div className="border-t border-gray-600 pt-4 mt-4">
                  <Link
                    href="/auth/login"
                    className="block bg-black text-white text-center py-3 rounded-full font-medium hover:bg-gray-900 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
