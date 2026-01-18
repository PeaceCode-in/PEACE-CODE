"use client"

import { Header } from "@/components/ui/header-2"
import { ContactHero } from "@/components/contact/ContactHero"
import { ContactBento } from "@/components/contact/ContactBento"
import { ContactForm } from "@/components/contact/ContactForm"
import { RelatedLinks, FooterStrip } from "@/components/contact/RelatedLinks"
import { Toaster } from "sonner"

export function ContactPageContent() {
  return (
    <main className="flex flex-col min-h-screen bg-pc-offwhite">
      <Toaster richColors position="top-center" />
      <Header />

      <ContactHero />
      <ContactBento />
      <ContactForm />
      <RelatedLinks />
      <FooterStrip />
    </main>
  )
}
