"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { GraduationCap, Stethoscope } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoginMenuProps {
  label?: string
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "link"
  className?: string
}

export function LoginMenu({ label = "Login", buttonVariant = "outline", className }: LoginMenuProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} className={cn("rounded-full", className)}>
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-[#1E1B4B]">Choose your dashboard</DialogTitle>
          <DialogDescription className="text-sm text-[#6B7280]">
            Select the experience you want to continue with.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-3">
          <Link
            href="/student/dashboard"
            className="flex items-center gap-4 rounded-2xl border border-[#E5E7EB] bg-[#F5F3FF] px-4 py-4 text-left transition hover:border-[#7C3AED]/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#7C3AED]/10">
              <GraduationCap className="h-5 w-5 text-[#7C3AED]" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#1E1B4B]">Student Dashboard</p>
              <p className="text-xs text-[#6B7280]">Wellness tools, journals, and progress</p>
            </div>
          </Link>
          <Link
            href="/psychologist/dashboard"
            className="flex items-center gap-4 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-4 text-left transition hover:border-[#7C3AED]/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#7C3AED]/10">
              <Stethoscope className="h-5 w-5 text-[#7C3AED]" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#1E1B4B]">Psychologist Dashboard</p>
              <p className="text-xs text-[#6B7280]">Patients, appointments, and reports</p>
            </div>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}
