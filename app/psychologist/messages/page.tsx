import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { chatList, chatMessages } from "@/components/psychologist-dashboard/data"
import { cn } from "@/lib/utils"

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-[#1E1B4B]">Messages</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
        <Card className="rounded-3xl border-0 p-4 shadow-sm">
          <Input placeholder="Search chats" className="mb-4 rounded-full" />
          <div className="space-y-3">
            {chatList.map((chat) => (
              <button key={chat.id} className="w-full rounded-2xl bg-[#F5F3FF] p-4 text-left">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[#1E1B4B]">{chat.name}</p>
                  <span className="text-xs text-[#6B7280]">{chat.time}</span>
                </div>
                <p className="mt-1 text-xs text-[#6B7280]">{chat.message}</p>
                <div className="mt-2 text-[10px] text-[#7C3AED]">
                  {chat.status === "online" ? "Online" : "Offline"}
                </div>
              </button>
            ))}
          </div>
        </Card>

        <Card className="rounded-3xl border-0 p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
            <div>
              <p className="text-sm font-semibold text-[#1E1B4B]">Emma Wilson</p>
              <p className="text-xs text-[#6B7280]">Active now</p>
            </div>
            <Button variant="outline" className="rounded-full">View Profile</Button>
          </div>

          <div className="mt-6 space-y-4">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "max-w-[70%] rounded-2xl px-4 py-3 text-sm",
                  message.sender === "doctor"
                    ? "ml-auto bg-[#7C3AED] text-white"
                    : "bg-[#F3F4F6] text-[#1E1B4B]",
                )}
              >
                <p>{message.text}</p>
                <p className="mt-2 text-[10px] opacity-70">{message.time}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <Input placeholder="Type your message..." className="rounded-full" />
            <Button className="rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9]">Send</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
