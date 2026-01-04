"use client"

import { Header } from "@/components/ui/header-2"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { AnimatedText } from "@/components/ui/animated-underline-text-one"
import FeaturesBentoGrid from "@/components/FeaturesBentoGrid"
import { FeatureShowcase } from "@/components/FeatureShowcase"
import TestimonialsSection from "@/components/TestimonialsSection"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Bot, Users, Sparkles, ShieldCheck } from "lucide-react"
import { CheckCircle, XCircle } from "lucide-react"
import { Check, X } from "lucide-react"
import Image from "next/image"
import { ExpandCards } from "@/components/ui/expand-cards"
import { ComparisonSection } from "@/components/ComparisonSection"

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
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
        {/* Cool Blue Glow Overlay */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "transparent",
            backgroundImage: `
              radial-gradient(
                circle at top center,
                rgba(50, 50, 86, 0.5),
                transparent 70%
              )
            `,
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* Left Side - Text Content */}
            <div
              className={`flex flex-col justify-center space-y-8 lg:space-y-10 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              } transition-all duration-1000 ease-out`}
            >
              <AnimatedText
                text="Peace Code"
                textClassName="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight"
                underlineClassName="text-primary"
              />

              <p className="text-xl sm:text-2xl lg:text-3xl text-black/80 font-medium leading-relaxed max-w-2xl">
                {t("home.hero.subtitle")}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <GetStartedButton href="/ai-support" />
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
                  asChild
                >
                  <Link href="/auth/simple-login">
                    Student Dashboard
                    <span className="ml-2">→</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div
              className={`relative flex items-center justify-center lg:justify-end ${
                isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95"
              } transition-all duration-1000 ease-out delay-300`}
            >
              <div className="relative w-full max-w-3xl h-[700px] lg:h-[800px] xl:h-[900px] animate-float">
                <img
                  src="/Untitled design.svg"
                  alt="Peace Code Hero"
                  className="w-full h-full object-contain object-center"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement
                    const currentSrc = target.src
                    if (!currentSrc.includes("hero image.png")) {
                      target.src = "/hero image.png"
                    }
                  }}
                />
                {/* Glow effect around image */}
                <div className="absolute inset-0 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ background: 'linear-gradient(to right, rgba(50, 50, 86, 0.4), transparent, transparent)' }} />
                {/* Additional floating particles effect */}
                <div className="absolute top-10 right-10 w-4 h-4 rounded-full blur-sm animate-float" style={{ backgroundColor: 'rgba(50, 50, 86, 0.5)', animationDelay: "1s" }} />
                <div className="absolute bottom-20 left-10 w-6 h-6 rounded-full blur-md animate-float" style={{ backgroundColor: 'rgba(50, 50, 86, 0.4)', animationDelay: "2s" }} />
                <div className="absolute top-1/2 right-20 w-3 h-3 rounded-full blur-sm animate-float" style={{ backgroundColor: 'rgba(50, 50, 86, 0.6)', animationDelay: "0.5s" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-black/50 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 font-medium">Discover More</span>
            <div className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-black/30 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative z-20 px-4 pt-8 pb-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 bg-white shadow-lg rounded-2xl overflow-hidden">
          {[
            {
              stat: "9 out of 10",
              desc: "users say their first session helped them understand their feelings.",
            },
            {
              stat: "93%",
              desc: "notice better sleep, focus and fewer spirals within 3-4 sessions.",
            },
            {
              stat: "2× better",
              desc: "outcomes when therapy is combined with our self-help tools.",
            },
          ].map((s) => (
            <div key={s.stat} className="p-6 border-sky-50/80 border-b sm:border-b-0 sm:border-r last:border-none">
              <h3 className="text-2xl font-extrabold text-sky-900 mb-1">{s.stat}</h3>
              <p className="text-sky-700 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-sky-600 mt-2">* Data based on internal outcome evaluations and user feedback.</p>
      </section>

      {/* Connected ecosystem section replaced by new showcase */}
      <FeatureShowcase />
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text + cards */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-6 max-w-md">
              One connected ecosystem, <br /> many ways to feel better
            </h2>
            <p className="text-sky-800 mb-8 max-w-sm">
              Your care is shaped by our team of therapists, AI and peer community working together
              so nothing gets missed.
            </p>
          </div>

          {/* Image landscape with overlay buttons */}
          <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-lg">
            <Image src="/3.jpg" alt="Group meditating" fill className="object-cover object-center" />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Professional Counseling", href: "/counseling" },
                { title: "AI Companion", href: "/ai-support" },
                { title: "Supportive Community", href: "/community" },
                { title: "Self-Help Toolkit", href: "/services" },
              ].map((c) => (
                <a key={c.title} href={c.href} className="block p-4 bg-white/80 backdrop-blur-md rounded-xl shadow text-center text-sm font-medium text-sky-900 hover:bg-white">
                  {c.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FeaturesBentoGrid />
      <TestimonialsSection />
      {/* Statistics Section with Parallax */}
      <section className="section-spacing bg-gradient-to-b from-primary/10 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-8 text-balance">
              Transforming Lives <span className="text-primary">Across India</span>
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
                className="text-center p-8 bg-white/60 backdrop-blur-md border-primary/10 hover:shadow-2xl transition-all duration-300 scroll-reveal group group-hover:animate-breathing-glow hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mx-auto mb-6 p-6 bg-primary/10 rounded-3xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">{stat.icon}</span>
                </div>
                <div className="text-4xl font-bold text-primary mb-3">
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
        <div className="absolute inset-0 bg-blue-900/50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h2 className="text-6xl sm:text-7xl font-bold mb-8 text-shadow-soft text-balance">
            Mental Health <span className="text-blue-200">Matters Deeply</span>
          </h2>
          <p className="text-2xl mb-12 text-white/90 text-pretty leading-relaxed text-shadow-soft">
            Join thousands of students across India who have found support, community, and healing through our
            compassionate digital sanctuary
          </p>
          <Button size="lg" asChild className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90">
            <Link href="/ai-support">
              Start Your Healing Journey
              <span className="ml-3">→</span>
            </Link>
          </Button>
        </div>
      </section>
      {/* Professional Support Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 scroll-reveal">
              <Badge variant="secondary" className="px-6 py-2 bg-primary/10 text-primary border-primary/20">
                Professional Care
              </Badge>
              <h2 className="text-5xl font-bold text-foreground text-balance">
                Licensed Counselors <span className="text-primary">Ready to Help</span>
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
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild className="text-lg px-8 py-4">
                <Link href="/counseling">
                  Book a Session
                  <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>

            <div className="relative scroll-reveal">
              <img
                src="/professional-counselor-therapy-session-mental-heal.jpg"
                alt="Professional Counseling"
                className="w-full h-[700px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Psychologists - Expandable Cards Section */}
      <section className="py-16 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center scroll-reveal">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Expert Team</span>
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
      <section className="section-spacing-lg bg-gradient-to-br from-primary/5 via-accent/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 scroll-reveal">
            <h2 className="text-6xl font-bold text-foreground mb-8">
              A <span className="text-primary">Community</span> That Cares
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
                description: "Access thousands of articles, videos, and guides on mental health and wellness",
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
                className="overflow-hidden bg-white/80 backdrop-blur-sm border-primary/10 hover:shadow-2xl transition-all duration-500 scroll-reveal group"
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
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
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
