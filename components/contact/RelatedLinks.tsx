"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { relatedLinks, quickLinks, contactInfo } from "./contact-config"

export function RelatedLinks() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-pc-navy mb-3">
            Related Resources
          </h2>
          <p className="text-pc-slate">Explore more ways we can help</p>
        </motion.div>

        {/* Bento cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {relatedLinks.slice(0, 3).map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={link.href}>
                <Card className="group p-6 h-full bg-pc-offwhite/50 border-pc-pink/10 hover:border-pc-pink/30 hover:shadow-lg hover:shadow-pc-pink/10 hover:-translate-y-1 transition-all duration-300">
                  <div
                    className="p-3 rounded-xl w-fit mb-4"
                    style={{ backgroundColor: `${link.color}20` }}
                  >
                    <link.icon className="w-6 h-6" style={{ color: link.color }} />
                  </div>
                  <h3 className="font-semibold text-pc-navy mb-1 group-hover:text-pc-pink transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-pc-slate mb-3">{link.description}</p>
                  <div className="flex items-center text-sm font-medium" style={{ color: link.color }}>
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick chip links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-medium bg-pc-pink/10 text-pc-navy hover:bg-pc-pink/20 border border-pc-pink/20 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function FooterStrip() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-pc-offwhite border-t border-pc-pink/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-2 text-pc-slate">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono"
              style={{ backgroundColor: "rgba(198, 218, 131, 0.2)", color: "#0F1455" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#C6DA83] animate-pulse" />
              {contactInfo.responseTime}
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <span className="text-pc-slate">Prefer self-serve?</span>
            <Link
              href="/about/faqs"
              className="font-medium hover:underline"
              style={{ color: "#FEC2E6" }}
            >
              Visit Help Center →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
