import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1)

const events: Record<number, { type: "therapy" | "checkup"; title: string }[]> = {
  4: [{ type: "therapy", title: "CBT Session" }],
  9: [{ type: "checkup", title: "Routine Checkup" }],
  13: [{ type: "therapy", title: "Family Counseling" }],
  19: [{ type: "therapy", title: "Anxiety Review" }],
  24: [{ type: "checkup", title: "Follow-up" }],
}

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-[#1E1B4B]">Schedule & Appointments</h1>
        <div className="flex items-center gap-2">
          <Button className="rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9]">Calendar View</Button>
          <Button variant="outline" className="rounded-full">List View</Button>
        </div>
      </div>

      <Card className="rounded-3xl border-0 p-6 shadow-sm">
        <div className="grid grid-cols-7 gap-4 text-center text-xs font-medium text-[#6B7280]">
          {days.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-7 gap-4">
          {calendarDays.map((date) => (
            <div
              key={date}
              className="min-h-[96px] rounded-2xl border border-[#E5E7EB] bg-white p-3"
            >
              <div className="text-xs font-semibold text-[#1E1B4B]">{date}</div>
              <div className="mt-2 space-y-1">
                {(events[date] || []).map((event, idx) => (
                  <div
                    key={`${event.title}-${idx}`}
                    className={cn(
                      "rounded-full px-2 py-1 text-[10px] font-medium",
                      event.type === "therapy"
                        ? "bg-[#7C3AED]/10 text-[#7C3AED]"
                        : "bg-[#0EA5E9]/10 text-[#0EA5E9]",
                    )}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
