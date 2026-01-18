import { Metadata } from "next"
import { ContactPageContent } from "@/components/contact/ContactPageContent"

export const metadata: Metadata = {
  title: "Contact Us | PeaceCode",
  description:
    "Get in touch with the PeaceCode team. We're here to help with questions, feedback, partnerships, and support inquiries.",
  keywords: [
    "contact PeaceCode",
    "mental health support",
    "student wellness help",
    "PeaceCode support",
    "mental health platform contact",
  ],
  openGraph: {
    title: "Contact Us | PeaceCode",
    description:
      "Reach out to PeaceCode for support, partnerships, or general inquiries. We usually respond within 24-48 hours.",
    type: "website",
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
