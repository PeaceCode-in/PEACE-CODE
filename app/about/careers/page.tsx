"use client"

import { Header } from "@/components/ui/header-2"
import { CareersHero } from "@/components/careers/CareersHero"
import { WhyWeAreHiring } from "@/components/careers/WhyWeAreHiring"
import { OpenRolesBento } from "@/components/careers/OpenRolesBento"
import { CareersApplicationForm } from "@/components/careers/CareersApplicationForm"
import { RelatedLinksSection } from "@/components/shared/RelatedLinksSection"
import { linkSets } from "@/components/shared/related-links-data"
import { Toaster } from "sonner"

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
