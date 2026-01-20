"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { PsychologistSidebar } from "@/components/psychologist-dashboard/Sidebar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function PsychologistShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F5F3FF]">
      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <PsychologistSidebar />
        </div>

        <div className="flex-1">
          <div className="sticky top-0 z-20 flex items-center gap-3 bg-[#F5F3FF] px-4 py-4 lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white">
                <Menu className="h-5 w-5 text-[#1E1B4B]" />
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <PsychologistSidebar onNavigate={() => setOpen(false)} />
              </SheetContent>
            </Sheet>
            <div>
              <p className="text-lg font-semibold text-[#1E1B4B]">Peace Code</p>
              <p className="text-xs text-[#6B7280]">Psychologist Dashboard</p>
            </div>
          </div>

          <div className="px-4 pb-10 pt-2 lg:px-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
