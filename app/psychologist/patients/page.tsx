import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { patientsList } from "@/components/psychologist-dashboard/data"

export default function PatientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-[#1E1B4B]">Patient List</h1>
        <Button className="rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9]">
          Add New Patient
        </Button>
      </div>

      <Card className="rounded-3xl border-0 p-6 shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patientsList.map((patient, index) => (
              <TableRow key={patient.id} className={index % 2 === 1 ? "bg-[#F5F3FF]/50" : undefined}>
                <TableCell className="font-medium text-[#1E1B4B]">{patient.name}</TableCell>
                <TableCell className="text-[#6B7280]">{patient.id}</TableCell>
                <TableCell className="text-[#6B7280]">{patient.condition}</TableCell>
                <TableCell className="text-[#6B7280]">{patient.contact}</TableCell>
                <TableCell className="text-[#6B7280]">{patient.dateAdded}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      patient.status === "Active"
                        ? "bg-[#10B981]/10 text-[#10B981]"
                        : patient.status === "Pending"
                          ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                          : "bg-[#9CA3AF]/10 text-[#9CA3AF]"
                    }
                  >
                    {patient.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-6 flex items-center justify-between text-sm text-[#6B7280]">
          <span>Showing 1 to {patientsList.length} of 30 entries</span>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              Prev
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
