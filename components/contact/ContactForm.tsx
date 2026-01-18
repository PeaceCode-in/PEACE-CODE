"use client"

import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"
import { contactSchema, type ContactFormData, generateTicketId } from "./schema"
import { topicOptions } from "./contact-config"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Upload,
  FileText,
  X,
  Loader2,
  CheckCircle2,
  Copy,
  Send,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [ticketId, setTicketId] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      consent: false,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Log payload (excluding file contents)
    const payload = {
      ...data,
      attachment: selectedFile
        ? {
            name: selectedFile.name,
            size: `${(selectedFile.size / 1024).toFixed(2)} KB`,
            type: selectedFile.type,
          }
        : null,
    }
    console.log("Contact form submitted:", payload)

    const newTicketId = generateTicketId()
    setTicketId(newTicketId)
    setIsSubmitting(false)
    setIsSuccess(true)
    toast.success("Message sent successfully!")

    // Reset after 10 seconds
    setTimeout(() => {
      form.reset()
      setSelectedFile(null)
      setIsSuccess(false)
      setTicketId("")
    }, 10000)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      form.setValue("attachment", e.target.files as FileList, { shouldValidate: true })
    }
  }

  const removeFile = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    form.setValue("attachment", undefined)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const copyTicketId = () => {
    navigator.clipboard.writeText(ticketId)
    toast.success("Ticket ID copied!")
  }

  return (
    <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-pc-navy mb-3">
            Send Us a Message
          </h2>
          <p className="text-pc-slate">
            Fill out the form below and we'll get back to you soon
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-pc-green/30 shadow-xl">
                <CardContent className="p-8 sm:p-12 text-center">
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                    style={{ backgroundColor: "rgba(198, 218, 131, 0.2)" }}
                  >
                    <CheckCircle2 className="w-10 h-10" style={{ color: "#C6DA83" }} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-pc-navy mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-pc-slate mb-6">
                    We've received your message and will respond within 24-48 hours.
                  </p>

                  {/* Ticket ID */}
                  <div
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-xl font-mono text-sm mb-6"
                    style={{ backgroundColor: "rgba(254, 194, 230, 0.15)" }}
                  >
                    <span className="text-pc-slate">Ticket created:</span>
                    <span className="font-bold text-pc-navy">{ticketId}</span>
                    <button
                      onClick={copyTicketId}
                      className="p-1.5 rounded-md hover:bg-white/50 transition-colors"
                    >
                      <Copy className="w-4 h-4 text-pc-slate" />
                    </button>
                  </div>

                  <p className="text-sm text-pc-slate/70">
                    This form will reset in a few seconds, or you can{" "}
                    <button
                      onClick={() => {
                        form.reset()
                        setSelectedFile(null)
                        setIsSuccess(false)
                        setTicketId("")
                      }}
                      className="text-pc-navy underline hover:no-underline"
                    >
                      send another message
                    </button>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-pc-pink/20 shadow-xl shadow-pc-pink/5">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Name & Email */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-pc-navy">Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-pc-navy">Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="you@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Topic */}
                      <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-pc-navy">Topic *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="What's this about?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {topicOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Message */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-pc-navy">Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us how we can help..."
                                rows={5}
                                {...field}
                              />
                            </FormControl>
                            <div className="flex justify-between text-xs text-pc-slate">
                              <FormMessage />
                              <span>{field.value?.length || 0}/5000</span>
                            </div>
                          </FormItem>
                        )}
                      />

                      {/* File Upload */}
                      <FormField
                        control={form.control}
                        name="attachment"
                        render={() => (
                          <FormItem>
                            <FormLabel className="text-pc-navy">
                              Attachment <span className="text-pc-slate/70">(optional)</span>
                            </FormLabel>
                            <FormControl>
                              <div>
                                <input
                                  ref={fileInputRef}
                                  type="file"
                                  accept="image/*,.pdf"
                                  onChange={handleFileChange}
                                  className="hidden"
                                  id="attachment-upload"
                                />

                                {selectedFile ? (
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center justify-between p-4 rounded-lg"
                                    style={{ backgroundColor: "rgba(254, 194, 230, 0.1)" }}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div
                                        className="p-2 rounded-lg"
                                        style={{ backgroundColor: "rgba(254, 194, 230, 0.2)" }}
                                      >
                                        <FileText className="w-5 h-5" style={{ color: "#FEC2E6" }} />
                                      </div>
                                      <div>
                                        <p className="font-medium text-sm text-pc-navy">
                                          {selectedFile.name}
                                        </p>
                                        <p className="text-xs text-pc-slate">
                                          {formatFileSize(selectedFile.size)}
                                        </p>
                                      </div>
                                    </div>
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="icon"
                                      onClick={removeFile}
                                      className="h-8 w-8"
                                    >
                                      <X className="w-4 h-4" />
                                    </Button>
                                  </motion.div>
                                ) : (
                                  <label
                                    htmlFor="attachment-upload"
                                    className={cn(
                                      "flex flex-col items-center justify-center p-6 rounded-lg border-2 border-dashed",
                                      "border-pc-pink/20 hover:border-pc-pink/40 hover:bg-pc-pink/5",
                                      "cursor-pointer transition-all duration-200"
                                    )}
                                  >
                                    <Upload className="w-6 h-6 text-pc-slate mb-2" />
                                    <p className="font-medium text-sm text-pc-navy">
                                      Click to upload
                                    </p>
                                    <p className="text-xs text-pc-slate mt-1">
                                      Images or PDF, max 5MB
                                    </p>
                                  </label>
                                )}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Consent */}
                      <FormField
                        control={form.control}
                        name="consent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm font-normal text-pc-slate">
                                I agree to be contacted back regarding my inquiry *
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      {/* Submit */}
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full rounded-full"
                        style={{ backgroundColor: "#FEC2E6", color: "#0F1455" }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
