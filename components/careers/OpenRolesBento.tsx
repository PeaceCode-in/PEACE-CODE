"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, HelpCircle } from "lucide-react"
import { rolesData } from "./roles"
import { RoleBentoCard } from "./RoleBentoCard"
import { SectionHeading } from "./SectionHeading"

export function OpenRolesBento() {
  const scrollToForm = () => {
    const element = document.getElementById("application-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="open-roles" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Open Positions"
          subtitle="Find your place in our mission. Each role is designed for maximum impact and growth."
        />

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {rolesData.map((role, index) => (
            <RoleBentoCard key={role.id} role={role} index={index} />
          ))}
        </div>

        {/* Not Sure CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div 
            className="inline-flex flex-wrap items-center justify-center gap-4 p-6 rounded-2xl border"
            style={{
              backgroundColor: 'rgba(254, 194, 230, 0.1)',
              borderColor: 'rgba(254, 194, 230, 0.3)',
            }}
          >
            <HelpCircle className="w-6 h-6 text-pc-slate" />
            <div className="text-left">
              <p className="font-medium text-pc-navy">Not sure which role fits?</p>
              <p className="text-sm text-pc-slate">
                Apply anyway—we'll find the right spot for you.
              </p>
            </div>
            <Button 
              onClick={scrollToForm} 
              className="rounded-full px-6"
              style={{ backgroundColor: '#FEC2E6', color: '#0F1455' }}
            >
              Apply Anyway
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
