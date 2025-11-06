"use client"

import { Navigation } from "@/components/navigation"
import { AIChatbot } from "@/components/ai-support/ai-chatbot"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserCheck, Info, Clock, ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"

export default function AIChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100/30 to-white">
      <Navigation />
      <main className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Button variant="ghost" asChild className="text-blue-700 hover:text-blue-800 hover:bg-blue-50">
              <Link href="/ai-support">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to AI Support
              </Link>
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-10 gap-6">
            {/* Chatbot Section (70%) */}
            <div className="lg:col-span-7">
              <AIChatbot />
            </div>

            {/* Information Sidebar (30%) */}
            <aside className="lg:col-span-3 space-y-6">
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Shield className="w-5 h-5" />
                    Your Privacy Matters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 leading-relaxed">
                    Your conversation is anonymous and secure. We do not store personal data from your chats, 
                    and all communications are encrypted for your protection.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-2 border-yellow-200 shadow-lg">
                <CardHeader className="flex flex-row items-center gap-3 pb-3">
                  <Info className="w-6 h-6 text-yellow-700" />
                  <CardTitle className="text-yellow-900">Important Notice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-yellow-800 leading-relaxed">
                    This AI companion is a supportive tool, not a medical professional. For a diagnosis or 
                    clinical treatment, please consult a licensed therapist or healthcare provider.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-blue-200 shadow-lg">
                <CardHeader className="flex flex-row items-center gap-3 pb-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-gray-900">Available 24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Your AI companion is always here to listen, whether it's day or night. 
                    No appointments needed, no waiting required.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 shadow-lg">
                <CardHeader className="flex flex-row items-center gap-3 pb-3">
                  <UserCheck className="w-6 h-6 text-blue-700" />
                  <CardTitle className="text-gray-900">Need More Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    If you need professional counseling or additional support, we're here to help.
                  </p>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/counseling">
                      Book a Session
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}

