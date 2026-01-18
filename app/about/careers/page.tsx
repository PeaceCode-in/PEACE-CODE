import { Metadata } from "next"
import { Header } from "@/components/ui/header-2"
import { CareersHero } from "@/components/careers/CareersHero"
import { WhyWeAreHiring } from "@/components/careers/WhyWeAreHiring"
import { OpenRolesBento } from "@/components/careers/OpenRolesBento"
import { CareersApplicationForm } from "@/components/careers/CareersApplicationForm"
import { RelatedLinksSection, linkSets } from "@/components/shared/RelatedLinksSection"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Careers at PeaceCode | Join Our Mission",
  description:
    "Join PeaceCode and help build India's most compassionate digital mental health platform for students. Explore roles in engineering, psychology, and community building.",
  keywords: [
    "PeaceCode careers",
    "mental health startup jobs",
    "student mental health",
    "engineering jobs India",
    "psychology internship",
    "campus ambassador",
    "remote jobs for students",
  ],
  openGraph: {
    title: "Careers at PeaceCode | Join Our Mission",
    description:
      "Help us build technology that makes mental health support accessible to millions of students.",
    type: "website",
  },
}

export default function CareersPage() {
  return (
    <main className="flex flex-col min-h-screen bg-pc-offwhite">
      <Toaster richColors position="top-center" />
      <Header />
      
      <CareersHero />
      <WhyWeAreHiring />
      <OpenRolesBento />
      <CareersApplicationForm />
      <RelatedLinksSection
        title="Need Help?"
        subtitle="Explore more resources"
        bentoLinks={linkSets.careers.bentoLinks}
        quickLinks={linkSets.careers.quickLinks}
      />
    </main>
  )
}
