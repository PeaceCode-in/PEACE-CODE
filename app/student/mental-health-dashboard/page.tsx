"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Bell,
  Search,
  LayoutDashboard,
  MessageCircle,
  Calendar,
  FileText,
  ShoppingBag,
  Settings,
  LogOut,
  Heart,
  TrendingUp,
  Users,
  Target,
  ChevronDown,
  MoreHorizontal,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Smile,
  Frown,
  Meh,
  Brain,
  Moon,
  Wind,
  BookOpen,
  Phone,
  Sparkles,
  Timer,
  Edit3,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Types
interface Task {
  id: string
  title: string
  category: "study" | "self-care"
  completed: boolean
}

interface TeamMember {
  id: string
  name: string
  avatar: string
  progress: number
  sessions: number
}

export default function MentalHealthDashboard() {
  const router = useRouter()
  const [userName, setUserName] = useState<string>("Student")
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeNav, setActiveNav] = useState("Dashboard")

  // Mental health metrics
  const [moodScore] = useState(78)
  const [stressReduction] = useState(21)
  const [weeklyProgress] = useState(67)

  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Morning meditation session", category: "self-care", completed: true },
    { id: "2", title: "Complete AI assignment", category: "study", completed: false },
    { id: "3", title: "Breathing exercise (5 min)", category: "self-care", completed: false },
    { id: "4", title: "Journal entry", category: "self-care", completed: false },
  ])

  // Team/Community members
  const teamMembers: TeamMember[] = [
    { id: "1", name: "Priya Sharma", avatar: "", progress: 100, sessions: 109 },
    { id: "2", name: "Rahul Patel", avatar: "", progress: 38, sessions: 31 },
    { id: "3", name: "Ananya Singh", avatar: "", progress: 64, sessions: 76 },
    { id: "4", name: "Vikram Kumar", avatar: "", progress: 7, sessions: 11 },
    { id: "5", name: "Meera Gupta", avatar: "", progress: 88, sessions: 92 },
  ]

  // Weekly mood data for chart
  const weeklyData = [
    { day: "M", value: 45 },
    { day: "T", value: 52 },
    { day: "W", value: 48 },
    { day: "T", value: 61 },
    { day: "F", value: 55 },
    { day: "S", value: 67 },
    { day: "S", value: 58 },
  ]

  // Monthly trend data
  const monthlyTrend = [35, 42, 38, 52, 48, 55, 62, 58, 72, 68, 75, 82]

  useEffect(() => {
    const storedName = localStorage.getItem("peacecode_user_name")
    if (!storedName) {
      router.push("/auth/simple-login")
    } else {
      setUserName(storedName)
      setTimeout(() => setIsLoaded(true), 50)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("peacecode_user_name")
    router.push("/auth/simple-login")
  }

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  const navigationItems = [
    { icon: LayoutDashboard, label: "Dashboard", badge: null },
    { icon: MessageCircle, label: "Support Chat", badge: "3" },
    { icon: Calendar, label: "Calendar", badge: null },
    { icon: FileText, label: "Journal", badge: null },
    { icon: BookOpen, label: "Resources", badge: null },
  ]

  const integrationItems = [
    { icon: Brain, label: "AI Support", color: "#2943D6" },
    { icon: Wind, label: "Breathing", color: "#13CD3C" },
    { icon: Timer, label: "Focus Timer", color: "#8B5CD6" },
  ]

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex">
      {/* Left Sidebar - 250px */}
      <aside className={cn(
        "w-[250px] bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0 transition-all duration-300",
        isLoaded ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
      )}>
        {/* Logo */}
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#2943D6] flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-900">PeaceCode</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for people, document, goods..."
              className="pl-9 h-10 bg-gray-50 border-0 text-sm placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-3 space-y-1">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveNav(item.label)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                activeNav === item.label 
                  ? "bg-[#2943D6]/5 text-[#2943D6]" 
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5",
                activeNav === item.label ? "text-[#2943D6]" : "text-gray-400"
              )} />
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-[#FB2B76] text-white text-xs font-medium px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}

          {/* Integrations Section */}
          <div className="pt-6">
            <p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              Wellness Tools
            </p>
            {integrationItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <div 
                  className="w-5 h-5 rounded flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="h-3.5 w-3.5" style={{ color: item.color }} />
                </div>
                <span>{item.label}</span>
              </button>
            ))}
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:bg-gray-50 transition-colors">
              <Plus className="h-5 w-5" />
              <span>Add new tool</span>
            </button>
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="p-3 border-t border-gray-100">
          <button 
            onClick={() => router.push("/settings")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Settings className="h-5 w-5 text-gray-400" />
            <span>Settings</span>
          </button>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <LogOut className="h-5 w-5 text-gray-400" />
            <span>Log out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className={cn(
          "h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-40 transition-all duration-300",
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        )}>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">Your mental wellness overview</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">This week</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
            <div className="ml-4 flex items-center gap-1">
              <span className="text-sm text-gray-500">Change view</span>
              <MoreHorizontal className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-6">
          <div className="flex gap-6">
            {/* Center Content - ~765px */}
            <div className="flex-1 space-y-6">
              {/* Row 1: Mood Chart + Stats */}
              <div className="grid grid-cols-12 gap-6">
                {/* Mood Trend Card */}
                <Card className={cn(
                  "col-span-7 bg-white border-0 shadow-sm transition-all duration-300",
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-base font-semibold text-gray-900">Mood Score</CardTitle>
                        <Badge className="bg-[#13CD3C]/10 text-[#13CD3C] border-0 font-medium">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          +0.3%
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#8B5CD6]"></span>
                          This week
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                          Last week
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Line Chart Area */}
                    <div className="h-48 relative mt-4">
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-gray-400 w-8">
                        <span>5.4k</span>
                        <span>3.6k</span>
                        <span>1.8k</span>
                        <span>0</span>
                      </div>
                      {/* Chart area */}
                      <div className="ml-10 h-full relative">
                        {/* Grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between">
                          {[0, 1, 2, 3].map(i => (
                            <div key={i} className="border-t border-gray-100 w-full"></div>
                          ))}
                        </div>
                        {/* SVG Line Chart */}
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#8B5CD6" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#8B5CD6" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {/* Area fill */}
                          <path
                            d={`M 0 ${160 - monthlyTrend[0] * 1.5} ${monthlyTrend.map((v, i) => `L ${(i / (monthlyTrend.length - 1)) * 100}% ${160 - v * 1.5}`).join(' ')} L 100% 160 L 0 160 Z`}
                            fill="url(#lineGradient)"
                          />
                          {/* Line */}
                          <path
                            d={`M 0 ${160 - monthlyTrend[0] * 1.5} ${monthlyTrend.map((v, i) => `L ${(i / (monthlyTrend.length - 1)) * 100}% ${160 - v * 1.5}`).join(' ')}`}
                            fill="none"
                            stroke="#8B5CD6"
                            strokeWidth="2"
                          />
                          {/* Highlight point */}
                          <circle cx="50%" cy={160 - monthlyTrend[6] * 1.5} r="6" fill="#8B5CD6" />
                          <circle cx="50%" cy={160 - monthlyTrend[6] * 1.5} r="3" fill="white" />
                        </svg>
                        {/* Tooltip */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-8 bg-[#2943D6] text-white text-xs font-medium px-3 py-1.5 rounded-lg">
                          Saturday
                          <br />
                          <span className="text-sm font-bold">Score: 78</span>
                        </div>
                        {/* X-axis labels */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 pt-2">
                          <span>M</span>
                          <span>T</span>
                          <span>W</span>
                          <span>T</span>
                          <span>F</span>
                          <span>S</span>
                          <span>S</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Cards */}
                <div className="col-span-5 grid grid-cols-2 gap-4">
                  {/* Stress Reduction */}
                  <Card className={cn(
                    "bg-white border-0 shadow-sm transition-all duration-300",
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  )} style={{ transitionDelay: '100ms' }}>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#FFF4E5] flex items-center justify-center">
                          <Target className="h-5 w-5 text-[#FF9F43]" />
                        </div>
                        <span className="text-gray-400">?</span>
                      </div>
                      <p className="text-3xl font-bold text-gray-900 mb-1">{stressReduction}%</p>
                      <p className="text-sm text-gray-500">Stress reduced</p>
                    </CardContent>
                  </Card>

                  {/* Weekly Progress */}
                  <Card className={cn(
                    "bg-white border-0 shadow-sm transition-all duration-300",
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  )} style={{ transitionDelay: '150ms' }}>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                              {String.fromCharCode(64 + i)}
                            </div>
                          ))}
                          <div className="w-8 h-8 rounded-full bg-[#2943D6] border-2 border-white flex items-center justify-center text-xs font-medium text-white">
                            +5
                          </div>
                        </div>
                        <span className="text-gray-400">?</span>
                      </div>
                      <p className="text-3xl font-bold text-gray-900 mb-1">{weeklyProgress}%</p>
                      <p className="text-sm text-gray-500">Weekly activities</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Row 2: Weekly Visitors + Team */}
              <div className="grid grid-cols-12 gap-6">
                {/* Weekly Sessions */}
                <Card className={cn(
                  "col-span-5 bg-white border-0 shadow-sm transition-all duration-300",
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )} style={{ transitionDelay: '200ms' }}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-base font-semibold text-gray-900">Sessions</CardTitle>
                        <Badge className="bg-[#FB2B76]/10 text-[#FB2B76] border-0 font-medium">
                          <ArrowDownRight className="h-3 w-3 mr-1" />
                          -0.1%
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Bar Chart */}
                    <div className="h-36 flex items-end justify-between gap-3 mt-4">
                      {weeklyData.map((item, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                          <div 
                            className="w-full bg-[#2943D6] rounded-t-sm transition-all hover:bg-[#1e35b0]"
                            style={{ height: `${item.value * 2}px` }}
                          />
                          <span className="text-xs text-gray-400">{item.day}</span>
                        </div>
                      ))}
                    </div>
                    {/* Stats */}
                    <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-[#FEC2E6]/30 flex items-center justify-center">
                        <Smile className="h-6 w-6 text-[#FB2B76]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">34%</p>
                        <p className="text-sm text-gray-500">Mood improvement</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Community/Team */}
                <Card className={cn(
                  "col-span-7 bg-white border-0 shadow-sm transition-all duration-300",
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )} style={{ transitionDelay: '250ms' }}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-base font-semibold text-gray-900">Community</CardTitle>
                        <Badge className="bg-gray-100 text-gray-600 border-0">
                          Peer Support
                        </Badge>
                      </div>
                      <MoreHorizontal className="h-5 w-5 text-gray-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-4 text-xs text-gray-400 uppercase tracking-wider py-2 border-b border-gray-100">
                      <div className="col-span-5">Name</div>
                      <div className="col-span-5">Progress</div>
                      <div className="col-span-2 text-right">Sessions</div>
                    </div>
                    {/* Table Rows */}
                    <div className="divide-y divide-gray-50">
                      {teamMembers.map((member) => (
                        <div key={member.id} className="grid grid-cols-12 gap-4 py-3 items-center">
                          <div className="col-span-5 flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-gray-100 text-gray-600 text-xs font-medium">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium text-gray-900">{member.name}</span>
                          </div>
                          <div className="col-span-5">
                            <div className="flex items-center gap-3">
                              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div 
                                  className="h-full rounded-full"
                                  style={{ 
                                    width: `${member.progress}%`,
                                    backgroundColor: member.progress === 100 ? '#13CD3C' : member.progress > 50 ? '#2943D6' : '#FB2B76'
                                  }}
                                />
                              </div>
                              <span className="text-sm text-gray-500 w-10">{member.progress}%</span>
                            </div>
                          </div>
                          <div className="col-span-2 text-right text-sm text-gray-500">
                            {member.sessions}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Sidebar - 320px */}
            <div className={cn(
              "w-[320px] space-y-6 transition-all duration-300",
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
            )} style={{ transitionDelay: '150ms' }}>
              {/* Your Cards Section */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-semibold text-gray-900">Your Progress</CardTitle>
                    <MoreHorizontal className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Wellness Card */}
                  <div className="bg-[#2943D6] rounded-xl p-5 text-white mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Heart className="h-5 w-5" />
                        <span className="text-sm font-medium">Wellness Score</span>
                      </div>
                      <Sparkles className="h-5 w-5 opacity-60" />
                    </div>
                    <div className="text-2xl font-mono tracking-wider mb-4">
                      •••• •••• •••• 1934
                    </div>
                    <div className="text-sm opacity-80">
                      Level 07/23
                    </div>
                  </div>
                  {/* Tabs */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-gray-600 border-gray-200">
                      Help
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 text-gray-600 border-gray-200">
                      Community
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Items */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-semibold text-gray-900">Quick Actions</CardTitle>
                    <Button variant="link" size="sm" className="text-[#2943D6] p-0 h-auto">
                      All tools
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-[#2943D6]/10 flex items-center justify-center">
                      <Wind className="h-5 w-5 text-[#2943D6]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Breathing exercise</p>
                      <p className="text-xs text-gray-500">Quick stress relief</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400 -rotate-90" />
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-[#13CD3C]/10 flex items-center justify-center">
                      <Edit3 className="h-5 w-5 text-[#13CD3C]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Journal entry</p>
                      <p className="text-xs text-gray-500">Express your thoughts</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400 -rotate-90" />
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-[#8B5CD6]/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#8B5CD6]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Talk to someone</p>
                      <p className="text-xs text-gray-500">Connect with support</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400 -rotate-90" />
                  </div>
                </CardContent>
              </Card>

              {/* Promo Card */}
              <Card className="bg-[#FB2B76] border-0 shadow-sm overflow-hidden">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-white/80 text-sm mb-1">Start your wellness journey!</p>
                      <p className="text-white font-semibold text-lg mb-4">Premium features</p>
                      <Button size="sm" className="bg-white text-[#FB2B76] hover:bg-white/90">
                        Upgrade
                      </Button>
                    </div>
                    <div className="w-16 h-20 bg-white/10 rounded-lg flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-white/60" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}