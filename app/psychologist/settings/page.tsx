import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-[#1E1B4B]">Settings</h1>

      <Card className="rounded-3xl border-0 p-6 shadow-sm">
        <Tabs defaultValue="general">
          <TabsList className="grid w-full grid-cols-4 rounded-full bg-[#F5F3FF]">
            <TabsTrigger value="general" className="rounded-full">General</TabsTrigger>
            <TabsTrigger value="profile" className="rounded-full">Profile</TabsTrigger>
            <TabsTrigger value="notifications" className="rounded-full">Notifications</TabsTrigger>
            <TabsTrigger value="security" className="rounded-full">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input placeholder="Dr. Logan" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input placeholder="dr.logan@peacecode.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Clinic Address</Label>
                <Input placeholder="456 Elm Street, Cityville" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label>Specialization</Label>
              <Input placeholder="Clinical Psychologist" />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input placeholder="+123-456-7890" />
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="mt-6 space-y-4">
            <div className="flex items-center justify-between rounded-2xl bg-[#F5F3FF] p-4">
              <div>
                <p className="text-sm font-medium text-[#1E1B4B]">Email Notifications</p>
                <p className="text-xs text-[#6B7280]">Receive updates by email</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-[#F5F3FF] p-4">
              <div>
                <p className="text-sm font-medium text-[#1E1B4B]">SMS Alerts</p>
                <p className="text-xs text-[#6B7280]">Critical appointment reminders</p>
              </div>
              <Switch />
            </div>
          </TabsContent>

          <TabsContent value="security" className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label>Current Password</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label>New Password</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-end">
          <Button className="rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9]">Save Changes</Button>
        </div>
      </Card>
    </div>
  )
}
