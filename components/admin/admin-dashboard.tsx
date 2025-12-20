"use client"

import { useState } from "react"
import {
  LayoutGrid,
  Calendar as CalendarIcon,
  FileText,
  Activity,
  Settings,
  HelpCircle,
  LogOut,
  Search,
  Bell,
  ChevronRight,
  MoreHorizontal,
  Video,
  Clock,
  CheckCircle2,
  User
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// --- Mock Data ---

const activityData = [
  { month: "Jul", value: 65 },
  { month: "Aug", value: 45 },
  { month: "Sep", value: 75 },
  { month: "Oct", value: 55 },
  { month: "Nov", value: 85 },
  { month: "Dec", value: 70 },
]

const progressData = [
  { name: "Progress", value: 80 },
  { name: "Remaining", value: 20 },
]

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Emilia Winson",
    specialty: "Psychiatrist",
    hospital: "Campus Wellness Center",
    date: "14 Mar 2025",
    time: "09:00 pm",
    type: "Video call",
    image: "/placeholder.svg?height=40&width=40"
  }
]

const studentFlags = [
  {
    id: 1,
    title: "High Anxiety Alert",
    student: "Alex Thompson",
    time: "10:00pm - 12:00 pm",
    type: "stress",
    color: "bg-orange-100 text-orange-600"
  },
  {
    id: 2,
    title: "Depression Screening",
    student: "Sarah Chen",
    time: "09:00am - 10:00 am",
    type: "therapy",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 3,
    title: "Routine Check-in",
    student: "Mike Ross",
    time: "02:00pm - 03:00 pm",
    type: "checkup",
    color: "bg-green-100 text-green-600"
  }
]

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <div className={`flex flex-col items-center justify-center p-4 mb-4 rounded-xl cursor-pointer transition-all ${active ? 'text-[#4ADE80]' : 'text-gray-400 hover:text-white'}`}>
    <Icon className={`w-6 h-6 mb-1 ${active ? 'text-[#4ADE80]' : ''}`} />
    {/* <span className="text-xs font-medium">{label}</span> */}
    {/* Icon-only sidebar for cleaner look based on image, or minimal text */}
  </div>
)

export function AdminDashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex min-h-screen bg-[#F5F7FA] font-sans">
      {/* Sidebar */}
      <aside className="w-24 bg-[#1A1C1E] flex flex-col items-center py-8 fixed h-full z-10 rounded-r-3xl">
        <div className="mb-12">
          <div className="w-10 h-10 bg-[#4ADE80] rounded-full flex items-center justify-center">
            <span className="text-[#1A1C1E] font-bold text-xl">+</span>
          </div>
        </div>

        <nav className="flex-1 w-full px-2">
          <SidebarItem icon={LayoutGrid} label="Dashboard" active />
          <SidebarItem icon={CalendarIcon} label="Calendar" />
          <SidebarItem icon={FileText} label="Reports" />
          <SidebarItem icon={Activity} label="Analytics" />
          <SidebarItem icon={Settings} label="Settings" />
        </nav>

        <div className="mt-auto flex flex-col gap-4 mb-4">
          <SidebarItem icon={HelpCircle} label="Help" />
          <SidebarItem icon={LogOut} label="Logout" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-24 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Hi, Admin</h1>
            <p className="text-gray-500 mt-1">Let's track student wellness daily!</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-white border-none rounded-full w-64 shadow-sm"
              />
            </div>
            <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-sm relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Avatar className="w-10 h-10 border-2 border-white shadow-sm">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Column (Main Widgets) */}
          <div className="col-span-12 lg:col-span-8 space-y-8">

            {/* Promo / Check Condition Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-[#E6F7F4] border-none shadow-none rounded-3xl col-span-1 md:col-span-3 relative overflow-hidden">
                <CardContent className="p-8 flex items-center justify-between relative z-10">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1A1C1E] mb-2">Check Student Status</h2>
                    <p className="text-gray-600 mb-6 max-w-md">Review the latest mental health screenings and automated risk flags for the student body.</p>
                    <Button className="bg-[#4ADE80] hover:bg-[#3BC770] text-[#1A1C1E] font-semibold rounded-full px-8">
                      Check It Now
                    </Button>
                  </div>
                  <div className="hidden md:block">
                    <Activity className="w-32 h-32 text-[#4ADE80] opacity-20 absolute right-0 top-0 transform translate-x-8 -translate-y-8" />
                    <User className="w-24 h-24 text-[#1A1C1E] opacity-10" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Appointment / Critical Alert */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Critical Intervention</h3>
                <Button variant="ghost" className="text-gray-500 hover:text-gray-800">See All</Button>
              </div>
              <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                        <Activity className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">Engineering Dept. Crisis</h4>
                        <p className="text-gray-500">Multiple high-risk flags reported</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-xl">
                        <CalendarIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Today, 20 Nov</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-xl">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">Urgent</span>
                      </div>
                    </div>

                    <Button className="bg-[#1A1C1E] text-white rounded-full px-6">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Patient Activities Chart */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Student Screening Activity</h3>
                <select className="bg-white border-none rounded-lg px-3 py-1 text-sm font-medium text-gray-600 shadow-sm outline-none">
                  <option>Monthly</option>
                  <option>Weekly</option>
                </select>
              </div>
              <Card className="border-none shadow-sm rounded-3xl">
                <CardContent className="p-6">
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={activityData} barSize={40}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis
                          dataKey="month"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: '#9CA3AF', fontSize: 12 }}
                          dy={10}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: '#9CA3AF', fontSize: 12 }}
                        />
                        <Tooltip
                          cursor={{ fill: 'transparent' }}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Bar dataKey="value" fill="#E6F7F4" radius={[20, 20, 20, 20]}>
                          {activityData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#E6F7F4' : '#4ADE80'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-sm rounded-3xl bg-white">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Good Conditions</h4>
                      <p className="text-sm text-gray-500">Anxiety & wellness stable</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm rounded-3xl bg-white">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                      <Activity className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Risk Factors</h4>
                      <p className="text-sm text-gray-500">Exam stress rising</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </CardContent>
              </Card>
            </div>

          </div>

          {/* Right Column (Side Widgets) */}
          <div className="col-span-12 lg:col-span-4 space-y-8">

            {/* Calendar */}
            <Card className="border-none shadow-sm rounded-3xl bg-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-800">Calendar</h3>
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border-none w-full flex justify-center"
                  classNames={{
                    head_cell: "text-gray-400 font-normal text-[0.8rem]",
                    cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                    day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-100 rounded-full",
                    day_selected: "bg-[#4ADE80] text-[#1A1C1E] hover:bg-[#4ADE80] hover:text-[#1A1C1E] focus:bg-[#4ADE80] focus:text-[#1A1C1E]",
                    day_today: "bg-gray-100 text-gray-900",
                  }}
                />
              </CardContent>
            </Card>

            {/* Daily Progress */}
            <Card className="border-none shadow-sm rounded-3xl bg-[#E6F7F4]">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <h3 className="font-bold text-gray-800 mb-2">Daily Progress</h3>
                <p className="text-sm text-gray-500 mb-6">Keep improving the quality of student health</p>

                <div className="relative w-40 h-40 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={progressData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={-270}
                        dataKey="value"
                        stroke="none"
                      >
                        <Cell fill="#4ADE80" />
                        <Cell fill="#FFFFFF" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#1A1C1E]">80%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* List of Appointments / Flags */}
            <Card className="border-none shadow-sm rounded-3xl bg-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-gray-800">Recent Alerts</h3>
                  <Button variant="ghost" size="sm" className="text-[#4ADE80] hover:text-[#3BC770]">See All</Button>
                </div>

                <div className="space-y-4">
                  {studentFlags.map((flag) => (
                    <div key={flag.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${flag.color}`}>
                          {flag.type === 'stress' && <Activity className="w-5 h-5" />}
                          {flag.type === 'therapy' && <User className="w-5 h-5" />}
                          {flag.type === 'checkup' && <CheckCircle2 className="w-5 h-5" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-gray-800">{flag.title}</h4>
                          <p className="text-xs text-gray-500">{flag.time}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="w-full mt-4 text-gray-500 hover:text-gray-800 flex items-center justify-center gap-2">
                  <span>See More Schedule</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
    </div>
  )
}
