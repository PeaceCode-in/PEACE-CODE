"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GraduationCap, Stethoscope } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoginMenuProps {
  label?: string
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "link"
  className?: string
}

export function LoginMenu({ label = "Login", buttonVariant = "outline", className }: LoginMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={buttonVariant} className={cn("rounded-full", className)}>
          {label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2">
        <DropdownMenuItem asChild>
          <Link href="/student/dashboard" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-[#7C3AED]" />
            Student Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/psychologist/dashboard" className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4 text-[#7C3AED]" />
            Psychologist Dashboard
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
