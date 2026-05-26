"use client"

import { Header } from "@/components/ui/header-2"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedText } from "@/components/ui/animated-underline-text-one"
import FeaturesBentoGrid from "@/components/FeaturesBentoGrid"
import TestimonialsSection from "@/components/TestimonialsSection"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Bot, Users, Sparkles, ShieldCheck, TrendingUp } from "lucide-react"
import { CheckCircle, XCircle } from "lucide-react"
import { Check, X } from "lucide-react"
import Image from "next/image"
import { ExpandCards } from "@/components/ui/expand-cards"
import { ComparisonSection } from "@/components/ComparisonSection"
import PeaceCodeRoadmap from "@/components/PeaceCodeRoadmap"

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

function HomePage() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen w-full relative bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-4 pb-16">
        {/* Logo Color Glow - #d9d9ff */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 20%, rgba(217, 217, 255, 0.5) 0%, transparent 60%),
              radial-gradient(circle at 85% 15%, rgba(197, 197, 255, 0.55) 0%, transparent 55%),
              radial-gradient(circle at 85% 85%, rgba(176, 176, 255, 0.45) 0%, transparent 60%),
              radial-gradient(circle at 10% 85%, rgba(217, 217, 255, 0.5) 0%, transparent 55%)
            `,
            opacity: 0.7,
            mixBlendMode: "multiply",
          }}
        />
        {/* Subtle Grid Layer */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.55,
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-0">
            {/* Left Side - Text Content */}
            <div
              className={`flex flex-col justify-center space-y-6 lg:space-y-8 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              } transition-all duration-1000 ease-out`}
            >
              <AnimatedText
                text="Peace Code"
                textClassName="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-hero tracking-tight"
                underlineClassName="text-[#9b9bff]"
              />

              <p className="text-xl sm:text-2xl lg:text-3xl text-black/80 font-medium leading-relaxed max-w-2xl">
                {t("home.hero.subtitle")}
              </p>


            </div>

            {/* Right Side - Hero Image with Styled Container */}
            <div
              className={`relative flex items-center justify-center lg:justify-end ${
                isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95"
              } transition-all duration-1000 ease-out delay-300`}
            >
              <div className="relative">
                {/* Decorative Glow Ring */}
                <div 
                  className="absolute -inset-4 rounded-3xl opacity-25 blur-xl"
                  style={{ background: "linear-gradient(135deg, #b0b0ff, #d9d9ff)" }}
                />
                
                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#d9d9ff]/25 border border-[#d9d9ff]/40">
                  <img
                    src="/landing.png"
                    alt="Student support"
                    className="w-full max-w-lg lg:max-w-xl h-auto object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(217, 217, 255, 0.2) 0%, transparent 40%)" }}
                  />
                </div>

                {/* Floating Info Card - Bottom Left (Beta Badge) */}
                <div 
                  className={`absolute -left-4 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl shadow-[#d9d9ff]/15 border border-[#d9d9ff]/30 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  } transition-all duration-700 delay-700`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#b0b0ff] to-[#d9d9ff]">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold" style={{ color: "#9b9bff" }}>Beta</div>
                      <div className="text-xs text-gray-500">Join Early Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Marquee at Bottom */}
        <div className="absolute bottom-16 left-0 right-0 z-20 bg-white/80 backdrop-blur-sm border-t border-b border-slate-200/80">
          <div className="py-5 overflow-hidden">
            <div className="flex items-center gap-16 whitespace-nowrap text-sm sm:text-base lg:text-lg font-semibold tracking-[0.2em] text-slate-600 animate-[marquee_30s_linear_infinite]">
              <span>WE ARE LAUNCHING SOON</span>
              <span>•</span>
              <span>PEACE CODE IS YOUR MENTAL HEALTH COMPANION</span>
              <span>•</span>
              <span>COMING SOON</span>
              <span>•</span>
              <span>AI-POWERED SUPPORT FOR STUDENTS</span>
              <span>•</span>
              <span>PROFESSIONAL COUNSELING</span>
              <span>•</span>
              <span>WE ARE LAUNCHING SOON</span>
              <span>•</span>
              <span>PEACE CODE IS YOUR MENTAL HEALTH COMPANION</span>
              <span>•</span>
              <span>COMING SOON</span>
              <span>•</span>
              <span>AI-POWERED SUPPORT FOR STUDENTS</span>
              <span>•</span>
              <span>PROFESSIONAL COUNSELING</span>
              <span>•</span>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* Research Stats bar */}
      <section className="relative z-20 px-4 pt-8 pb-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 bg-white shadow-lg rounded-2xl overflow-hidden">
          {[
            {
              stat: "1 in 5",
              desc: "students experience mental health challenges requiring professional support.",
            },
            {
              stat: "70%",
              desc: "of students report feeling overwhelmed by academic and social pressures.",
            },
            {
              stat: "85%",
              desc: "who need help never seek support due to stigma or access barriers.",
            },
          ].map((s) => (
            <div key={s.stat} className="p-6 border-[#ebd9fc]/80 border-b sm:border-b-0 sm:border-r last:border-none">
              <h3 className="text-2xl font-extrabold text-[#9667e0] mb-1">{s.stat}</h3>
              <p className="text-[#9667e0] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#9667e0] mt-2">* Based on WHO and NIMHANS research studies on student mental health.</p>
      </section>

      {/* Interactive Journey Roadmap */}
      <PeaceCodeRoadmap />

      <FeaturesBentoGrid />
      <TestimonialsSection />
      {/* Statistics Section with Parallax */}
      <section className="section-spacing bg-gradient-to-b from-[#ebd9fc]/40 via-[#fbfaff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-8 text-balance">
              Transforming Lives <span className="text-[#9667e0]">Across India</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Real impact, real results from our compassionate mental health platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: 50000, suffix: "+", label: "Hearts Healed", icon: "💙", description: "Students supported" },
              { value: 24, suffix: "/7", label: "Always Here", icon: "⏰", description: "Round-the-clock care" },
              { value: 10, suffix: "+", label: "Languages", icon: "🌍", description: "Regional support" },
              { value: 95, suffix: "%", label: "Find Peace", icon: "🌿", description: "Success rate" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 bg-white/60 backdrop-blur-md border-[#ebd9fc]/60 hover:shadow-2xl transition-all duration-300 scroll-reveal group group-hover:animate-breathing-glow hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mx-auto mb-6 p-6 bg-[#ebd9fc]/70 rounded-3xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">{stat.icon}</span>
                </div>
                <div className="text-4xl font-bold text-[#9667e0] mb-3">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{stat.label}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* PeaceCode vs Other Platforms Section */}
      {/* Parallax Section with static background image instead of video */}
      <section
        className="parallax-section relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url(/mental-health-2019924.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#9667e0]/40 via-[#d4bbfc]/30 to-[#ebd9fc]/40"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h2 className="text-6xl sm:text-7xl font-bold mb-8 text-shadow-soft text-balance">
            Mental Health <span className="text-[#ebd9fc]">Matters Deeply</span>
          </h2>
          <p className="text-2xl mb-12 text-white/90 text-pretty leading-relaxed text-shadow-soft">
            Be among the first students across India to experience support, community, and healing through our
            compassionate digital sanctuary
          </p>
          <Link href="/ai-support">
            <Button variant="default">
              Start Your Healing Journey →
            </Button>
          </Link>
        </div>
      </section>
      {/* Professional Support Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 scroll-reveal">
              <Badge variant="secondary" className="px-6 py-2 bg-[#fbfaff]/80 text-[#9667e0] border-[#ebd9fc]/50">
                Professional Care
              </Badge>
              <h2 className="text-5xl font-bold text-foreground text-balance">
                Licensed Counselors <span className="text-[#9667e0]">Ready to Help</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with qualified mental health professionals who understand the unique challenges faced by Indian
                students. Our counselors are trained in culturally sensitive approaches to mental health care.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "🎓",
                    title: "Student-Focused",
                    desc: "Specialized in academic stress and student life challenges",
                  },
                  {
                    icon: "🌍",
                    title: "Cultural Understanding",
                    desc: "Counselors who understand Indian family dynamics and cultural context",
                  },
                  { icon: "🔒", title: "Complete Privacy", desc: "Confidential sessions with end-to-end encryption" },
                  { icon: "⏰", title: "Flexible Scheduling", desc: "Sessions that fit around your academic schedule" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-[#ebd9fc]/70 rounded-xl">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/counseling">
                <Button variant="lavender">
                  Book a Session →
                </Button>
              </Link>
            </div>

            <div className="relative scroll-reveal">
              <img
                src="/professional-counselor-therapy-session-mental-heal.jpg"
                alt="Professional Counseling"
                className="w-full h-[700px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ebd9fc]/40 via-transparent to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Psychologists - Expandable Cards Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#fbfaff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center scroll-reveal">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Meet Our <span className="text-[#9667e0]">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Click on a psychologist to open their profile (and use “Talk to them” to start a conversation).
            </p>
          </div>
        </div>
        
        {/* Full-width expandable cards - border to border */}
        <ExpandCards />
      </section>

      {/* Community & Resources Section */}
      <section className="section-spacing-lg bg-gradient-to-br from-[#f2ebfb]/50 via-[#fbfaff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 scroll-reveal">
            <h2 className="text-6xl font-bold text-foreground mb-8">
              A <span className="text-[#9667e0]">Community</span> That Cares
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Connect with peers, access resources, and build lasting support networks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: "👥",
                title: "Peer Support Groups",
                description: "Join moderated discussion groups with fellow students facing similar challenges",
                image: "/diverse-group-students-supporting-each-other-commu.jpg",
                features: ["Anonymous Participation", "Moderated Discussions", "Safe Space"],
              },
              {
                icon: "📚",
                title: "Resource Library",
                description: "Access curated articles, videos, and guides on mental health and wellness",
                image: "/digital-library-mental-health-resources-books-know.jpg",
                features: ["10+ Languages", "Expert Content", "Regular Updates"],
              },
              {
                icon: "🎯",
                title: "Wellness Challenges",
                description: "Participate in community challenges designed to build healthy habits together",
                image: "/wellness-challenge-community-motivation-healthy-ha.jpg",
                features: ["Daily Challenges", "Community Progress", "Rewards System"],
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-white/80 backdrop-blur-sm border-[#ebd9fc]/60 hover:shadow-2xl transition-all duration-500 scroll-reveal group"
              >
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                  <div className="space-y-2">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#9667e0] rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer removed - global footer is injected via RootLayout */}
    </div>
  )
}

export default HomePage
