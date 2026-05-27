import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { FloatingChatbotButton } from "@/components/chatbot/floating-chatbot-button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/ui/header-2"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Peace Code - Mental Health for College Students & Campus Wellness",
  description:
    "India's most compassionate mental health platform for college students. Experience AI-guided counseling, expert therapy, peer wellness groups, and student psychological support in 10+ regional languages.",
  generator: "v0.app",
  keywords: [
    "mental health for college student",
    "college student mental health",
    "campus mental wellness",
    "student support",
    "student counseling",
    "AI wellness support",
    "peer community",
    "wellness",
    "India"
  ],
  authors: [{ name: "JAI MANN" }],
  creator: "JAI MANN",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Peace Code - Mental Health for College Students & Campus Wellness",
    description:
      "Compassionate mental health support for college students with AI guidance, professional counseling, and campus peer communities.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} antialiased`}>
      <body className="font-sans">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <FloatingChatbotButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
