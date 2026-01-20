import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { EarningsChart } from "@/components/psychologist-dashboard/EarningsChart"
import { GenderChart } from "@/components/psychologist-dashboard/GenderChart"
import { ConsultationDonut } from "@/components/psychologist-dashboard/DonutChart"
import { MiniSparkline } from "@/components/psychologist-dashboard/MiniSparkline"
import {
  summaryCards,
  doctorSummary,
  counsellingSchedule,
  consultationData,
  selfControlData,
  healthReports,
} from "@/components/psychologist-dashboard/data"
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Stethoscope,
  Pill,
  DollarSign,
  CheckCircle2,
  Clock3,
} from "lucide-react"
import { cn } from "@/lib/utils"

const summaryIconMap = {
  Calendar,
  Stethoscope,
  Pill,
  DollarSign,
}

export default function PsychologistDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* Earnings Statistics */}
        <Card className="rounded-3xl border-0 p-6 shadow-sm xl:col-span-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[#6B7280]">Earning Statistics</p>
              <p className="mt-2 text-2xl font-semibold text-[#1E1B4B]">$129,850</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#F5F3FF] px-3 py-1 text-xs text-[#6B7280]">
              This Year
            </div>
          </div>
          <div className="mt-2 flex items-center gap-4 text-xs text-[#6B7280]">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#7C3AED]" /> Profit
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#A78BFA]" /> Expenses
            </span>
          </div>
          <div className="mt-4">
            <EarningsChart />
          </div>
        </Card>

        {/* Profile Widget */}
        <Card className="rounded-3xl border-0 p-6 shadow-sm xl:col-span-3">
          <div className="flex flex-col items-center text-center">
            <div className="h-20 w-20 overflow-hidden rounded-2xl bg-[#EDE9FE]">
              <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-[#7C3AED]">
                DL
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#1E1B4B]">Dr. Logan</h3>
            <p className="text-sm text-[#6B7280]">Clinical Psychologist</p>
          </div>
          <div className="mt-6 space-y-3 text-sm text-[#6B7280]">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4" />
              <span>+123-456-7890</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4" />
              <span>laurentblake@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4" />
              <span>456 Elm Street, Cityville</span>
            </div>
          </div>
          <Button className="mt-6 w-full rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9]">
            Edit
          </Button>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4 xl:col-span-3">
          {summaryCards.map((item) => {
            const Icon = summaryIconMap[item.icon as keyof typeof summaryIconMap]
            return (
              <Card key={item.label} className="rounded-3xl border-0 p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ backgroundColor: `${item.color}20` }}>
                    <Icon className="h-5 w-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">{item.label}</p>
                    <p className="text-lg font-semibold text-[#1E1B4B]">{item.value}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Patients by Gender */}
        <Card className="rounded-3xl border-0 p-6 shadow-sm xl:col-span-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[#6B7280]">Patients by Gender</p>
              <p className="mt-2 text-2xl font-semibold text-[#1E1B4B]">17,498</p>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#6B7280]">
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-[#4C1D95]" /> Male
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-[#C4B5FD]" /> Female
              </span>
            </div>
          </div>
          <GenderChart />
        </Card>

        {/* Today's Counsellings */}
        <Card className="rounded-3xl border-0 p-6 shadow-sm xl:col-span-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-[#1E1B4B]">Today's Counsellings</p>
            <button className="text-xs text-[#6B7280]">•••</button>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-[#6B7280]">
            {[
              { day: "Sun", date: 10 },
              { day: "Mon", date: 11 },
              { day: "Tue", date: 12 },
              { day: "Wed", date: 13 },
              { day: "Thu", date: 14 },
            ].map((item) => (
              <div
                key={item.day}
                className={cn(
                  "flex h-10 w-10 flex-col items-center justify-center rounded-full",
                  item.day === "Tue" ? "bg-[#7C3AED] text-white" : "bg-[#F5F3FF]",
                )}
              >
                <span className="text-[10px]">{item.day}</span>
                <span className="text-sm font-semibold">{item.date}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-4">
            {counsellingSchedule.map((item) => (
              <div key={item.time} className="rounded-2xl border border-[#E5E7EB] bg-white p-3">
                <div className="flex items-center justify-between text-xs text-[#6B7280]">
                  <span>{item.time}</span>
                  <span className="text-[#7C3AED]">{item.type}</span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-[#EDE9FE] text-xs text-[#7C3AED]">
                      {item.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1E1B4B]">{item.name}</p>
                    <p className="text-xs text-[#6B7280]">{item.issue}</p>
                  </div>
                  <Badge
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px]",
                      item.status === "Completed" && "bg-[#10B981]/10 text-[#10B981]",
                      item.status === "Ongoing" && "bg-[#7C3AED]/10 text-[#7C3AED]",
                      item.status === "Pending" && "bg-[#F59E0B]/10 text-[#F59E0B]",
                    )}
                  >
                    {item.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Patients by Consultation */}
        <Card className="rounded-3xl border-0 p-6 shadow-sm xl:col-span-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-[#1E1B4B]">Patients by Consultation</p>
            <button className="text-xs text-[#6B7280]">•••</button>
          </div>
          <ConsultationDonut />
          <div className="mt-4 space-y-2 text-xs text-[#6B7280]">
            {consultationData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.name}
                </span>
                <span className="font-medium text-[#1E1B4B]">{item.value}%</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Doctor Summary */}
        <Card className="rounded-3xl border-0 p-6 shadow-sm xl:col-span-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-[#1E1B4B]">Doctor Summary</p>
            <div className="flex items-center gap-2 rounded-full bg-[#F5F3FF] px-3 py-1 text-xs text-[#6B7280]">
              This Week
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {doctorSummary.map((item) => (
              <div key={item.title} className="rounded-2xl bg-[#F5F3FF] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[#6B7280]">{item.title}</p>
                  <span className="text-xs text-[#10B981]">{item.trend}</span>
                </div>
                <p className="mt-2 text-lg font-semibold text-[#1E1B4B]">{item.value}</p>
                <MiniSparkline data={item.data} />
              </div>
            ))}
          </div>
        </Card>

        {/* Self Control + Health Report */}
        <div className="space-y-6 xl:col-span-3">
          <Card className="rounded-3xl border-0 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#1E1B4B]">Self Control</p>
              <button className="text-xs text-[#6B7280]">•••</button>
            </div>
            <div className="mt-4 space-y-3">
              {selfControlData.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-xs text-[#6B7280]">
                    <span>{item.label}</span>
                    <span className="font-medium text-[#1E1B4B]">{item.value}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-[#EDE9FE]">
                    <div
                      className="h-2 rounded-full bg-[#7C3AED]"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="rounded-3xl border-0 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#1E1B4B]">Health Report</p>
              <button className="text-xs text-[#6B7280]">+</button>
            </div>
            <div className="mt-4 space-y-3">
              {healthReports.map((report) => (
                <div key={report.title} className="flex items-center justify-between rounded-2xl bg-[#F5F3FF] px-4 py-3">
                  <div>
                    <p className="text-xs font-medium text-[#1E1B4B]">{report.title}</p>
                    <p className="text-[10px] text-[#6B7280]">{report.date}</p>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-[#7C3AED]" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
