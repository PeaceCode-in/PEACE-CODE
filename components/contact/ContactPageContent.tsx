"use client"

import { ContactHero } from "@/components/contact/ContactHero"
import { ContactBento } from "@/components/contact/ContactBento"
import { ContactForm } from "@/components/contact/ContactForm"
import { RelatedLinks, FooterStrip } from "@/components/contact/RelatedLinks"
import { Toaster } from "sonner"

export function ContactPageContent() {
  return (
    <main className="flex flex-col min-h-screen bg-[#fbfaff]">
      <Toaster richColors position="top-center" />

      <ContactHero />
      <ContactBento />
      <ContactForm />
      <RelatedLinks />
      <FooterStrip />
    </main>
  )
}
