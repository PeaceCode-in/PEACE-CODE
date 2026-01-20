import { Card } from "@/components/ui/card"
import { reportsList } from "@/components/psychologist-dashboard/data"
import { FileText, File, FileSpreadsheet } from "lucide-react"

const iconMap = {
  PDF: FileText,
  DOC: File,
}

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-[#1E1B4B]">Medical Reports</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reportsList.map((report) => {
          const Icon = iconMap[report.type as keyof typeof iconMap] || FileSpreadsheet
          return (
            <Card key={report.name} className="rounded-3xl border-0 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7C3AED]/10">
                  <Icon className="h-6 w-6 text-[#7C3AED]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1E1B4B]">{report.name}</p>
                  <p className="text-xs text-[#6B7280]">{report.date}</p>
                  <p className="text-xs text-[#6B7280]">{report.size}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
