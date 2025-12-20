"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Heart, ArrowRight } from "lucide-react"

export default function SimpleLogin() {
  const [name, setName] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem("peacecode_user_name", name || "Student")
    router.push("/student/mental-health-dashboard")
  }

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white border-0 shadow-lg rounded-2xl">
        <CardHeader className="space-y-1 text-center pb-2">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-xl bg-[#2943D6] flex items-center justify-center">
              <Heart className="h-7 w-7 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Welcome to PeaceCode
          </CardTitle>
          <CardDescription className="text-gray-500">
            Your mental wellness journey starts here
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">
                What should we call you?
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#2943D6] focus:ring-[#2943D6] rounded-xl"
              />
              <p className="text-sm text-gray-400">
                You can leave this empty if you prefer
              </p>
            </div>
            
            <Button
              type="submit"
              className="w-full h-12 bg-[#2943D6] hover:bg-[#1e35b0] text-white font-medium rounded-xl group"
            >
              Continue to Dashboard
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#13CD3C]"></span>
                Private & Secure
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#8B5CD6]"></span>
                No Account Required
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}