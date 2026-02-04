"use client"

import Link from "next/link"
import { Header } from "@/components/ui/header-2"
import { GraduationCap, Stethoscope } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F5F3FF]">
      <Header />
      <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-[#1E1B4B]">Choose your dashboard</h1>
          <p className="mt-2 text-sm text-[#6B7280]">
            Select the workspace you want to access.
          </p>
        </div>
        <div className="mt-10 grid w-full gap-4 sm:grid-cols-2">
          <Link
            href="/student/dashboard"
            className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:border-[#7C3AED]/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7C3AED]/10">
              <GraduationCap className="h-6 w-6 text-[#7C3AED]" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-[#1E1B4B]">Student Dashboard</h2>
            <p className="mt-2 text-sm text-[#6B7280]">
              Personalized wellness tools, journal, and progress tracking.
            </p>
          </Link>
          <Link
            href="/psychologist/dashboard"
            className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:border-[#7C3AED]/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7C3AED]/10">
              <Stethoscope className="h-6 w-6 text-[#7C3AED]" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-[#1E1B4B]">Psychologist Dashboard</h2>
            <p className="mt-2 text-sm text-[#6B7280]">
              Manage patients, appointments, reports, and messages.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
