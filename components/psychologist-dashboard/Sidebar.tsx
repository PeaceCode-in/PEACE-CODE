"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  FileText,
  MessageCircle,
  Settings,
  LogOut,
  Brain,
} from "lucide-react"

const navItems = [
  { label: "Dashboard", href: "/psychologist/dashboard", icon: LayoutDashboard },
  { label: "Patients", href: "/psychologist/patients", icon: Users },
  { label: "Appointments", href: "/psychologist/appointments", icon: CalendarCheck },
  { label: "Reports", href: "/psychologist/reports", icon: FileText },
  { label: "Messages", href: "/psychologist/messages", icon: MessageCircle },
  { label: "Settings", href: "/psychologist/settings", icon: Settings },
]

export function PsychologistSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <aside className="flex h-full w-64 flex-col bg-white shadow-md">
      <div className="px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#7C3AED]/10">
            <Brain className="h-6 w-6 text-[#7C3AED]" />
          </div>
          <div>
            <p className="text-lg font-semibold text-[#1E1B4B]">Peace Code</p>
            <p className="text-xs text-[#6B7280]">Psychologist Dashboard</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#7C3AED] text-white shadow-sm"
                    : "text-[#1E1B4B]/70 hover:bg-[#F5F3FF] hover:text-[#1E1B4B]",
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      <div className="px-4 pb-6">
        <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-[#1E1B4B]/70 hover:bg-[#F5F3FF]">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  )
}
