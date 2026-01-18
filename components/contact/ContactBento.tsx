"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check, ExternalLink } from "lucide-react"
import { toast } from "sonner"
import { bentoCards } from "./contact-config"

export function ContactBento() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = async (value: string, id: string) => {
    await navigator.clipboard.writeText(value)
    setCopiedId(id)
    toast.success("Copied to clipboard!")
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleAction = (
    action: { label: string; value: string; type: "copy" | "link" | "mailto" },
    cardId: string
  ) => {
    if (action.type === "copy") {
      handleCopy(action.value, cardId)
    } else if (action.type === "mailto") {
      window.location.href = `mailto:${action.value}`
    } else if (action.type === "link") {
      if (action.value.startsWith("http")) {
        window.open(action.value, "_blank")
      }
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-pc-navy mb-3">
            Quick Contact Options
          </h2>
          <p className="text-pc-slate">Choose how you'd like to reach us</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {bentoCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="group p-6 h-full bg-white/80 backdrop-blur-sm border-pc-pink/10 hover:border-pc-pink/30 hover:shadow-xl hover:shadow-pc-pink/10 hover:-translate-y-1 transition-all duration-300">
                {/* Icon */}
                <div
                  className="p-3 rounded-xl w-fit mb-4 transition-colors"
                  style={{ backgroundColor: card.bgColor }}
                >
                  <card.icon className="w-6 h-6" style={{ color: card.color }} />
                </div>

                {/* Title & Description */}
                <h3 className="font-semibold text-pc-navy mb-2">{card.title}</h3>
                <p className="text-sm text-pc-slate mb-4">{card.description}</p>

                {/* Primary action value display */}
                {card.primaryAction.type === "copy" && (
                  <div
                    className="flex items-center justify-between p-3 rounded-lg mb-4 font-mono text-sm"
                    style={{ backgroundColor: card.bgColor }}
                  >
                    <span className="text-pc-navy truncate">{card.primaryAction.value}</span>
                    <button
                      onClick={() => handleAction(card.primaryAction, card.id)}
                      className="ml-2 p-1.5 rounded-md hover:bg-white/50 transition-colors"
                    >
                      {copiedId === card.id ? (
                        <Check className="w-4 h-4" style={{ color: card.color }} />
                      ) : (
                        <Copy className="w-4 h-4 text-pc-slate" />
                      )}
                    </button>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  {card.primaryAction.type !== "copy" && (
                    card.primaryAction.value.startsWith("/") ? (
                      <Button
                        asChild
                        size="sm"
                        className="rounded-full"
                        style={{ backgroundColor: card.color, color: "#0F1455" }}
                      >
                        <Link href={card.primaryAction.value}>
                          {card.primaryAction.label}
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => handleAction(card.primaryAction, card.id)}
                        className="rounded-full"
                        style={{ backgroundColor: card.color, color: "#0F1455" }}
                      >
                        {card.primaryAction.label}
                      </Button>
                    )
                  )}
                  
                  {card.secondaryAction && (
                    card.secondaryAction.value.startsWith("/") ? (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-full border-pc-navy/20 text-pc-navy"
                      >
                        <Link href={card.secondaryAction.value}>
                          {card.secondaryAction.label}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleAction(card.secondaryAction!, card.id + "-secondary")}
                        className="rounded-full border-pc-navy/20 text-pc-navy"
                      >
                        {card.secondaryAction.label}
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    )
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
