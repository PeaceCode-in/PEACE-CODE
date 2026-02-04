"use client"

import { useId } from "react"
import { Header } from "@/components/ui/header-2"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button, MetalButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Diagonal Grid Pattern Component
interface DiagonalGridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: string
  className?: string
  squares?: Array<[x: number, y: number]>
  [key: string]: unknown
}

function DiagonalGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}: DiagonalGridPatternProps) {
  const id = useId()

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-[#9667e0]/10 stroke-[#9667e0]/20",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M0 ${height} L${width} 0 M${width} ${height} L0 0`}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}

// Featured News Data
const featuredNews = [
  {
    id: 1,
    title: "National Well-being Conclave 2026",
    description: "Join 80+ higher education institutions at IIT Bombay for the 3rd National Well-being Conclave featuring symposiums, panel discussions, and wellness exhibitions.",
    date: "March 15-16, 2026",
    image: "/mental-health-2019924.jpg",
    category: "Event",
    featured: true,
  },
  {
    id: 2,
    title: "CBSE Mental Health Workshop Series",
    description: "Workshops on Promoting Student Mental Health covering early identification, crisis intervention, and psychological first aid for educators.",
    date: "February 20, 2026",
    image: "/professional-counselor-therapy-session-mental-heal.jpg",
    category: "Workshop",
    featured: true,
  },
  {
    id: 3,
    title: "Peace Code Partners with Leading Universities",
    description: "We are excited to announce new partnerships with top institutions to bring comprehensive mental health support to more students across India.",
    date: "January 28, 2026",
    image: "/diverse-group-students-supporting-each-other-commu.jpg",
    category: "Partnership",
    featured: true,
  },
]

// Workshops Data
const upcomingWorkshops = [
  {
    id: 1,
    title: "Stress Management for Students",
    description: "Learn effective techniques to manage academic stress and maintain mental well-being.",
    date: "February 25, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Virtual",
    spots: 50,
    category: "Workshop",
  },
  {
    id: 2,
    title: "Mindfulness & Meditation Basics",
    description: "Introduction to mindfulness practices for better focus and emotional regulation.",
    date: "March 2, 2026",
    time: "3:00 PM - 5:00 PM",
    location: "Virtual",
    spots: 100,
    category: "Workshop",
  },
  {
    id: 3,
    title: "Building Resilience",
    description: "Develop psychological resilience to overcome challenges and setbacks.",
    date: "March 8, 2026",
    time: "11:00 AM - 1:00 PM",
    location: "Virtual",
    spots: 75,
    category: "Workshop",
  },
  {
    id: 4,
    title: "Peer Support Training",
    description: "Learn how to support friends and peers facing mental health challenges.",
    date: "March 15, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Hybrid",
    spots: 40,
    category: "Training",
  },
]

// News Articles Data
const newsArticles = [
  {
    id: 1,
    title: "39% of University Students Report Depression Symptoms",
    summary: "New research shows elevated mental health challenges persist among students post-pandemic, with anxiety rates at 36%.",
    source: "Frontiers in Psychology",
    date: "January 2026",
    category: "Research",
    image: "/digital-library-mental-health-resources-books-know.jpg",
  },
  {
    id: 2,
    title: "Mental Health First Aid Training Expands in Higher Education",
    summary: "Evidence-based training programs teaching peers and faculty how to support students facing mental health challenges.",
    source: "Mental Health First Aid",
    date: "January 2026",
    category: "Initiative",
    image: "/wellness-challenge-community-motivation-healthy-ha.jpg",
  },
  {
    id: 3,
    title: "IIT Dharwad Launches Mental Health Sensitization Program",
    summary: "New comprehensive program aims to create awareness and reduce stigma around mental health on campus.",
    source: "IIT Dharwad",
    date: "January 2026",
    category: "Campus News",
    image: "/3.jpg",
  },
  {
    id: 4,
    title: "KIIT University Expands Counseling Services",
    summary: "University introduces new seminars on stress management, relationships, and self-improvement.",
    source: "KIIT University",
    date: "January 2026",
    category: "Campus News",
    image: "/mental-health-2019924.jpg",
  },
  {
    id: 5,
    title: "Cal Poly BEACoN Research Focuses on Neurodivergent Students",
    summary: "Innovative research project integrating immersive technology and psycho-social strategies for student well-being.",
    source: "Cal Poly",
    date: "2026",
    category: "Research",
    image: "/professional-counselor-therapy-session-mental-heal.jpg",
  },
  {
    id: 6,
    title: "CBSE Introduces Free Psycho-Social Counselling",
    summary: "Free counseling services for students and parents to help reduce exam-related stress during board exam season.",
    source: "CBSE",
    date: "February 2026",
    category: "Initiative",
    image: "/diverse-group-students-supporting-each-other-commu.jpg",
  },
]

// Statistics
const statistics = [
  { value: "39%", label: "Students with Depression Symptoms" },
  { value: "36%", label: "Students with Anxiety Symptoms" },
  { value: "1 in 3", label: "Drop-outs Cite Mental Health" },
  { value: "50%", label: "Struggle with Mental Health" },
]

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen w-full relative bg-white">
      <Header />

      {/* Hero Section with Diagonal Grid */}
      <section className="relative min-h-[50vh] w-full flex items-center justify-center overflow-hidden pt-20">
        <DiagonalGridPattern
          width={60}
          height={60}
          x={-1}
          y={-1}
          squares={[
            [2, 3], [4, 1], [7, 2], [3, 5], [8, 4], [12, 8],
            [15, 12], [18, 6], [10, 15], [20, 10], [5, 18], [14, 16],
          ]}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(196, 181, 253, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(224, 231, 255, 0.35) 0%, transparent 50%)
            `,
            opacity: 0.7,
          }}
        />
        <div className="z-10 max-w-4xl px-8 text-center">
          <Badge className="mb-6 bg-[#f2ebfb] text-[#9667e0] border-[#ebd9fc]">
            Latest Updates
          </Badge>
          <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Announcements
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest mental health news, workshops, events, and resources for students across India.
          </p>
        </div>
      </section>

      {/* Featured News Carousel */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-white to-[#fbfaff]/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured News</h2>
              <p className="text-muted-foreground mt-2">Highlights from the mental health community</p>
            </div>
          </div>
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent className="-ml-4">
              {featuredNews.map((news) => (
                <CarouselItem key={news.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden h-full border-[#f2ebfb]/60 hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <Badge className="absolute top-3 left-3 bg-gradient-to-r from-[#9667e0] to-[#d4bbfc] text-white">
                        {news.category}
                      </Badge>
                    </div>
                    <CardContent className="p-5">
                      <p className="text-sm text-[#9667e0] font-medium mb-2">{news.date}</p>
                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{news.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-3">{news.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-[#9667e0] via-[#d4bbfc] to-[#ebd9fc]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statistics.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-[#ebd9fc] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops Bento Grid */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <DiagonalGridPattern
          width={50}
          height={50}
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_50%_50%,white,transparent)]",
            "opacity-30"
          )}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#f2ebfb] text-[#9667e0] border-[#ebd9fc]">
              Upcoming Events
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Workshops & Training</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Join our upcoming workshops and training sessions to enhance your mental well-being
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingWorkshops.map((workshop, index) => (
              <Card
                key={workshop.id}
                className={cn(
                  "border-[#f2ebfb]/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                  index === 0 && "md:col-span-2 md:row-span-2",
                  index === 0 ? "bg-gradient-to-br from-[#fbfaff] to-white" : "bg-white"
                )}
              >
                <CardHeader className={index === 0 ? "pb-4" : "pb-2"}>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-[#ebd9fc] text-[#9667e0]">
                      {workshop.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{workshop.spots} spots</span>
                  </div>
                  <CardTitle className={cn("text-foreground", index === 0 ? "text-2xl" : "text-lg")}>
                    {workshop.title}
                  </CardTitle>
                  <CardDescription className={index === 0 ? "text-base" : "text-sm"}>
                    {workshop.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span>📅</span>
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span>⏰</span>
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span>📍</span>
                      <span>{workshop.location}</span>
                    </div>
                  </div>
                  <MetalButton variant="lavender" className="w-full mt-4">
                    Register Now
                  </MetalButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Health News Grid */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-[#fbfaff]/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#f2ebfb] text-[#9667e0] border-[#ebd9fc]">
              News & Research
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Mental Health News</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Latest research, initiatives, and campus news about student mental health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden border-[#f2ebfb]/60 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute bottom-3 left-3 bg-white/90 text-[#9667e0]">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span>{article.source}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-[#9667e0] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{article.summary}</p>
                  <Button variant="link" className="px-0 mt-3 text-[#9667e0] hover:text-[#9667e0]">
                    Read more →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#f2ebfb] text-[#9667e0] border-[#ebd9fc]">
                Mental Health Resources
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Access Free Mental Health Support
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We provide comprehensive mental health resources including counseling services,
                self-help tools, and peer support networks for students across India.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-5 border-[#f2ebfb]/60 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🧠</div>
                  <h3 className="font-semibold text-foreground mb-1">AI Support</h3>
                  <p className="text-sm text-muted-foreground">24/7 AI-guided mental health companion</p>
                </Card>
                <Card className="p-5 border-[#f2ebfb]/60 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">👩‍⚕️</div>
                  <h3 className="font-semibold text-foreground mb-1">Counseling</h3>
                  <p className="text-sm text-muted-foreground">Connect with licensed professionals</p>
                </Card>
                <Card className="p-5 border-[#f2ebfb]/60 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">👥</div>
                  <h3 className="font-semibold text-foreground mb-1">Community</h3>
                  <p className="text-sm text-muted-foreground">Join peer support groups</p>
                </Card>
                <Card className="p-5 border-[#f2ebfb]/60 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">📚</div>
                  <h3 className="font-semibold text-foreground mb-1">Resources</h3>
                  <p className="text-sm text-muted-foreground">Access wellness tools and guides</p>
                </Card>
              </div>
              <Link href="/services" className="mt-8 inline-block">
                <MetalButton variant="lavender">
                  Explore All Services
                </MetalButton>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ebd9fc]/40 to-transparent rounded-3xl" />
              <img
                src="/diverse-group-students-supporting-each-other-commu.jpg"
                alt="Students supporting each other"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-[#9667e0] via-[#d4bbfc] to-[#ebd9fc]">
        <DiagonalGridPattern
          width={40}
          height={40}
          className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-20 stroke-white/30"
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-[#ebd9fc] text-lg mb-8">
            Subscribe to our newsletter for the latest mental health news, workshop announcements, and wellness tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white placeholder:text-[#ebd9fc] focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-80"
            />
            <MetalButton variant="default">
              Subscribe
            </MetalButton>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 bg-white border-t border-[#f2ebfb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Workshop Categories</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-[#9667e0] transition-colors">Stress Management</Link></li>
                <li><Link href="#" className="hover:text-[#9667e0] transition-colors">Mindfulness</Link></li>
                <li><Link href="#" className="hover:text-[#9667e0] transition-colors">Peer Support</Link></li>
                <li><Link href="#" className="hover:text-[#9667e0] transition-colors">Career Anxiety</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">News Categories</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-[#9667e0] transition-colors">Research</Link></li>
                <li><Link href="#" className="hover:text-[#9667e0] transition-colors">Campus News</Link></li>
                <li><Link href="#" className="hover:text-[#9667e0] transition-colors">Initiatives</Link></li>
                <li><Link href="#" className="hover:text-[#9667e0] transition-colors">Partnerships</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Access</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/ai-support" className="hover:text-[#9667e0] transition-colors">AI Support</Link></li>
                <li><Link href="/counseling" className="hover:text-[#9667e0] transition-colors">Book Counseling</Link></li>
                <li><Link href="/community" className="hover:text-[#9667e0] transition-colors">Join Community</Link></li>
                <li><Link href="/resources" className="hover:text-[#9667e0] transition-colors">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about/contact" className="hover:text-[#9667e0] transition-colors">Contact Us</Link></li>
                <li><Link href="/partners" className="hover:text-[#9667e0] transition-colors">Partner With Us</Link></li>
                <li><Link href="/about/careers" className="hover:text-[#9667e0] transition-colors">Careers</Link></li>
                <li><Link href="/about/faqs" className="hover:text-[#9667e0] transition-colors">FAQs</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
