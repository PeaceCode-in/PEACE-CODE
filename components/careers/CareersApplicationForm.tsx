"use client"

import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"
import {
  applicationSchema,
  type ApplicationFormData,
  roleOptions,
  subRoleOptions,
  availabilityOptions,
} from "./schema"
import { SectionHeading } from "./SectionHeading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
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
  Mail,
  Github,
  Linkedin,
  Globe,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function CareersApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      college: "",
      yearSemester: "",
      githubUrl: "",
      linkedinUrl: "",
      portfolioUrl: "",
      whyPeaceCode: "",
      consent: false,
    },
  })

  const watchRoleInterest = form.watch("roleInterest")

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Log payload (excluding file contents)
    const payload = {
      ...data,
      resume: selectedFile
        ? {
            name: selectedFile.name,
            size: `${(selectedFile.size / 1024).toFixed(2)} KB`,
            type: selectedFile.type,
          }
        : null,
    }
    console.log("Application submitted:", payload)

    setIsSubmitting(false)
    setIsSuccess(true)
    toast.success("Application submitted successfully!", {
      description: "We'll review your application and get back to you soon.",
    })

    // Reset after showing success
    setTimeout(() => {
      form.reset()
      setSelectedFile(null)
      setIsSuccess(false)
    }, 5000)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      form.setValue("resume", e.target.files as FileList, { shouldValidate: true })
    }
  }

  const removeFile = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    form.setValue("resume", undefined as unknown as FileList)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return (
    <section id="application-form" className="py-24 px-4 sm:px-6 lg:px-8 bg-pc-offwhite">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          title="Apply to Join Us"
          subtitle="Take the first step towards building something meaningful. We review every application personally."
        />

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: 'rgba(198, 218, 131, 0.2)' }}>
                <CheckCircle2 className="w-10 h-10" style={{ color: '#C6DA83' }} />
              </div>
              <h3 className="text-2xl font-bold text-pc-navy mb-2">
                Application Received!
              </h3>
              <p className="text-pc-slate max-w-md mx-auto">
                Thank you for your interest in PeaceCode. We'll review your application and 
                get back to you within a week.
              </p>
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
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      {/* Personal Information */}
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-pc-navy border-b border-pc-pink/20 pb-2">
                          Personal Information
                        </h3>
                        
                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} />
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
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="you@example.com"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone/WhatsApp *</FormLabel>
                                <FormControl>
                                  <Input placeholder="+91 98765 43210" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="college"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>College/University *</FormLabel>
                                <FormControl>
                                  <Input placeholder="IIT Delhi" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="yearSemester"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Year/Semester</FormLabel>
                                <FormControl>
                                  <Input placeholder="3rd Year / 6th Semester" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Role Selection */}
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-pc-navy border-b border-pc-pink/20 pb-2">
                          Role Interest
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="roleInterest"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Which role interests you? *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a role" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {roleOptions.map((option) => (
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

                          <AnimatePresence>
                            {watchRoleInterest === "product-engineering" && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                              >
                                <FormField
                                  control={form.control}
                                  name="subRole"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Engineering Track *</FormLabel>
                                      <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                      >
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select a track" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          {subRoleOptions.map((option) => (
                                            <SelectItem
                                              key={option.value}
                                              value={option.value}
                                            >
                                              {option.label}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <FormField
                            control={form.control}
                            name="availability"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Weekly Availability *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select availability" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {availabilityOptions.map((option) => (
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
                        </div>
                      </div>

                      {/* Portfolio Links */}
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-pc-navy border-b border-pc-pink/20 pb-2">
                          Portfolio Links (Optional)
                        </h3>

                        <div className="grid sm:grid-cols-3 gap-6">
                          <FormField
                            control={form.control}
                            name="githubUrl"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Github className="w-4 h-4" />
                                  GitHub
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="github.com/username"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="linkedinUrl"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Linkedin className="w-4 h-4" />
                                  LinkedIn
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="linkedin.com/in/username"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="portfolioUrl"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Globe className="w-4 h-4" />
                                  Portfolio
                                </FormLabel>
                                <FormControl>
                                  <Input placeholder="yoursite.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Why PeaceCode */}
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-pc-navy border-b border-pc-pink/20 pb-2">
                          Tell Us About Yourself
                        </h3>

                        <FormField
                          control={form.control}
                          name="whyPeaceCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Why do you want to join PeaceCode? *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Share your motivation, relevant experience, and what you hope to contribute..."
                                  rows={5}
                                  {...field}
                                />
                              </FormControl>
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <FormMessage />
                                <span>{field.value?.length || 0}/2000</span>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Resume Upload */}
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-pc-navy border-b border-pc-pink/20 pb-2">
                          Resume *
                        </h3>

                        <FormField
                          control={form.control}
                          name="resume"
                          render={() => (
                            <FormItem>
                              <FormControl>
                                <div>
                                  <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="resume-upload"
                                  />
                                  
                                  {selectedFile ? (
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0.95 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      className="flex items-center justify-between p-4 rounded-lg border border-primary/30 bg-primary/5"
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                          <FileText className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                          <p className="font-medium text-sm text-foreground">
                                            {selectedFile.name}
                                          </p>
                                          <p className="text-xs text-muted-foreground">
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
                                      htmlFor="resume-upload"
                                      className={cn(
                                        "flex flex-col items-center justify-center p-8 rounded-lg border-2 border-dashed",
                                        "border-border hover:border-primary/50 hover:bg-muted/30",
                                        "cursor-pointer transition-all duration-200",
                                        form.formState.errors.resume && "border-destructive"
                                      )}
                                    >
                                      <Upload className="w-8 h-8 text-muted-foreground mb-3" />
                                      <p className="font-medium text-sm text-foreground">
                                        Click to upload resume
                                      </p>
                                      <p className="text-xs text-muted-foreground mt-1">
                                        PDF, DOC, DOCX up to 5MB
                                      </p>
                                    </label>
                                  )}
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

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
                              <FormLabel className="text-sm font-normal">
                                I confirm that all details provided are accurate and I consent 
                                to PeaceCode processing my application. *
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      {/* Submit Button */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="flex-1 sm:flex-none rounded-full px-8"
                          style={{ backgroundColor: '#FEC2E6', color: '#0F1455' }}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            "Submit Application"
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Email Fallback */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-8"
              >
                <p className="text-sm text-pc-slate flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Prefer email?{" "}
                  <a
                    href="mailto:careers@peacecode.in"
                    className="font-medium hover:underline"
                    style={{ color: '#FEC2E6' }}
                  >
                    careers@peacecode.in
                  </a>
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
