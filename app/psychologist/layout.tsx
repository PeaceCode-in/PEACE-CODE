import { Metadata } from "next"
import { PsychologistShell } from "@/components/psychologist-dashboard/PsychologistShell"

export const metadata: Metadata = {
  title: "Psychologist Dashboard | Peace Code",
  description: "Clinical dashboard for Peace Code psychologists to manage patients, appointments, and reports.",
}

export default function PsychologistLayout({ children }: { children: React.ReactNode }) {
  return <PsychologistShell>{children}</PsychologistShell>
}
