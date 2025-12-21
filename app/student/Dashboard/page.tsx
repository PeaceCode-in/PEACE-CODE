"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Search,
  LayoutDashboard,
  MessageCircle,
  Calendar,
  FileText,
  Settings,
  LogOut,
  Heart,
  Target,
  ChevronDown,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Smile,
  Brain,
  Wind,
  BookOpen,
  Timer,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Types
interface Task {
  id: string;
  title: string;
  category: "study" | "self-care";
  completed: boolean;
}

interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  progress: number;
  sessions: number;
}

export default function MentalHealthDashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("Student");
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState("Dashboard");

  // Mental health metrics
  const [moodScore] = useState(78);
  const [stressReduction] = useState(21);
  const [weeklyProgress] = useState(67);

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Morning meditation session",
      category: "self-care",
      completed: true,
    },
    {
      id: "2",
      title: "Complete AI assignment",
      category: "study",
      completed: false,
    },
    {
      id: "3",
      title: "Breathing exercise (5 min)",
      category: "self-care",
      completed: false,
    },
    {
      id: "4",
      title: "Journal entry",
      category: "self-care",
      completed: false,
    },
  ]);

  const teamMembers: TeamMember[] = [
    { id: "1", name: "Priya Sharma", avatar: "", progress: 100, sessions: 109 },
    { id: "2", name: "Rahul Patel", avatar: "", progress: 38, sessions: 31 },
    { id: "3", name: "Ananya Singh", avatar: "", progress: 64, sessions: 76 },
    { id: "4", name: "Vikram Kumar", avatar: "", progress: 7, sessions: 11 },
    { id: "5", name: "Meera Gupta", avatar: "", progress: 88, sessions: 92 },
  ];

  const monthlyTrend = [
    { month: "Jan", score: 35 },
    { month: "Feb", score: 42 },
    { month: "Mar", score: 38 },
    { month: "Apr", score: 52 },
    { month: "May", score: 48 },
    { month: "Jun", score: 55 },
    { month: "Jul", score: 62 },
    { month: "Aug", score: 58 },
    { month: "Sep", score: 72 },
    { month: "Oct", score: 68 },
    { month: "Nov", score: 75 },
    { month: "Dec", score: 82 },
  ];

  const weeklyData = [
    { day: "Mon", sessions: 45 },
    { day: "Tue", sessions: 52 },
    { day: "Wed", sessions: 48 },
    { day: "Thu", sessions: 61 },
    { day: "Fri", sessions: 55 },
    { day: "Sat", sessions: 67 },
    { day: "Sun", sessions: 58 },
  ];

  useEffect(() => {
    const storedName = localStorage.getItem("peacecode_user_name");
    if (!storedName) {
      router.push("/auth/simple-login");
    } else {
      setUserName(storedName);
      setTimeout(() => setIsLoaded(true), 50);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("peacecode_user_name");
    router.push("/auth/simple-login");
  };

  const toggleTask = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const navigationItems = [
    { icon: LayoutDashboard, label: "Dashboard", badge: null },
    { icon: MessageCircle, label: "Support-Chat", badge: "3" },
    { icon: Calendar, label: "Calendar", badge: null },
    { icon: FileText, label: "Journal", badge: null },
    { icon: BookOpen, label: "Resources", badge: null },
  ];

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex">
      {/* Left Sidebar */}
      <aside
        className={cn(
          "w-[250px] bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0 transition-all duration-300",
          isLoaded ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
        )}
      >
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

        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for people, document, goods..."
              className="pl-9 h-10 bg-gray-50 border-0 text-sm placeholder:text-gray-400"
            />
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                router.push(`/student/${item.label}`);
                setActiveNav(item.label);
              }}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                activeNav === item.label
                  ? "bg-[#2943D6]/5 text-[#2943D6]"
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5",
                  activeNav === item.label ? "text-[#2943D6]" : "text-gray-400"
                )}
              />
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-[#FB2B76] text-white text-xs font-medium px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          
        </nav>

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
        <header
          className={cn(
            "h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-40 transition-all duration-300",
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          )}
        >
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">
              Your mental wellness overview
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">This week</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </header>

        <div className="flex-1 p-6">
          <div className="flex gap-6">
            {/* Center Content */}
            <div className="flex-1 space-y-6">
              {/* Row 1: Mood Chart + Stats */}
              <div className="grid grid-cols-12 gap-6">
                <Card
                  className={cn(
                    "col-span-7 bg-white border-0 shadow-sm transition-all duration-300",
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  )}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-base font-semibold text-gray-900">
                          Mood Score
                        </CardTitle>
                        <Badge className="bg-emerald-500/10 text-emerald-600 border-0 font-medium">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          +12.3%
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        score: {
                          label: "Mood Score",
                          color: "#8B5CD6",
                        },
                      }}
                      className="h-[200px] w-full"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={monthlyTrend}>
                          <defs>
                            <linearGradient
                              id="colorScore"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#8B5CD6"
                                stopOpacity={0.3}
                              />
                              <stop
                                offset="95%"
                                stopColor="#8B5CD6"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#f0f0f0"
                          />
                          <XAxis
                            dataKey="month"
                            tick={{ fill: "#9CA3AF", fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                          />
                          <YAxis
                            tick={{ fill: "#9CA3AF", fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Area
                            type="monotone"
                            dataKey="score"
                            stroke="#8B5CD6"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorScore)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Stats Cards */}
                <div className="col-span-5 grid grid-cols-2 gap-4">
                  <Card
                    className={cn(
                      "bg-white border-0 shadow-sm transition-all duration-300",
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    )}
                    style={{ transitionDelay: "100ms" }}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <Target className="h-5 w-5 text-orange-500" />
                        </div>
                      </div>
                      <p className="text-3xl font-bold text-gray-900 mb-1">
                        {stressReduction}%
                      </p>
                      <p className="text-sm text-gray-500">Stress reduced</p>
                    </CardContent>
                  </Card>

                  <Card
                    className={cn(
                      "bg-white border-0 shadow-sm transition-all duration-300",
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    )}
                    style={{ transitionDelay: "150ms" }}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600"
                            >
                              {String.fromCharCode(64 + i)}
                            </div>
                          ))}
                          <div className="w-8 h-8 rounded-full bg-[#2943D6] border-2 border-white flex items-center justify-center text-xs font-medium text-white">
                            +5
                          </div>
                        </div>
                      </div>
                      <p className="text-3xl font-bold text-gray-900 mb-1">
                        {weeklyProgress}%
                      </p>
                      <p className="text-sm text-gray-500">Weekly activities</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Row 2: Weekly Sessions + Team */}
              <div className="grid grid-cols-12 gap-6">
                <Card
                  className={cn(
                    "col-span-5 bg-white border-0 shadow-sm transition-all duration-300",
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  )}
                  style={{ transitionDelay: "200ms" }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-base font-semibold text-gray-900">
                          Weekly Sessions
                        </CardTitle>
                        <Badge className="bg-rose-500/10 text-rose-600 border-0 font-medium">
                          <ArrowDownRight className="h-3 w-3 mr-1" />
                          -2.1%
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        sessions: {
                          label: "Sessions",
                          color: "#2943D6",
                        },
                      }}
                      className="h-[140px] w-full"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={weeklyData}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#f0f0f0"
                            vertical={false}
                          />
                          <XAxis
                            dataKey="day"
                            tick={{ fill: "#9CA3AF", fontSize: 12 }}
                            tickLine={false}
                            axisLine={false}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar
                            dataKey="sessions"
                            fill="#2943D6"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                    <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                        <Smile className="h-6 w-6 text-pink-500" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">34%</p>
                        <p className="text-sm text-gray-500">
                          Mood improvement
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Community/Team */}
                <Card
                  className={cn(
                    "col-span-7 bg-white border-0 shadow-sm transition-all duration-300",
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  )}
                  style={{ transitionDelay: "250ms" }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-semibold text-gray-900">
                        Community Progress
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#2943D6] hover:text-[#2943D6] hover:bg-[#2943D6]/5"
                      >
                        View all
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {teamMembers.map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center gap-4"
                        >
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={member.avatar || "/placeholder.svg"}
                            />
                            <AvatarFallback className="bg-gray-200 text-gray-600 text-sm font-medium">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <p className="text-sm font-medium text-gray-900">
                                {member.name}
                              </p>
                              <span className="text-xs text-gray-500">
                                {member.sessions} sessions
                              </span>
                            </div>
                            <Progress
                              value={member.progress}
                              className="h-1.5"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Sidebar - Tasks */}
            <aside
              className={cn(
                "w-[320px] space-y-6 transition-all duration-300",
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              )}
              style={{ transitionDelay: "300ms" }}
            >
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-semibold text-gray-900">
                      Today's Tasks
                    </CardTitle>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Checkbox
                          checked={task.completed}
                          onCheckedChange={() => toggleTask(task.id)}
                          className="mt-0.5"
                        />
                        <div className="flex-1">
                          <p
                            className={cn(
                              "text-sm",
                              task.completed
                                ? "line-through text-gray-400"
                                : "text-gray-900"
                            )}
                          >
                            {task.title}
                          </p>
                          <Badge
                            variant="secondary"
                            className={cn(
                              "mt-1 text-xs",
                              task.category === "self-care"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-blue-100 text-blue-700"
                            )}
                          >
                            {task.category}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions Card */}
              <Card className="bg-gradient-to-br from-[#2943D6] to-[#1e35b0] border-0 shadow-sm text-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Need Support?</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Connect with a wellness counselor anytime
                  </p>
                  <Button className="w-full bg-white text-[#2943D6] hover:bg-white/90">
                    Start Session
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
