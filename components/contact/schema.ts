import { z } from "zod"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/webp",
  "application/pdf",
]

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  topic: z.enum(
    ["general", "bug", "feature", "partnership", "campus", "safety"],
    {
      required_error: "Please select a topic",
    }
  ),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(5000, "Message is too long"),
  attachment: z
    .custom<FileList>()
    .optional()
    .refine(
      (files) => !files || files.length === 0 || files[0].size <= MAX_FILE_SIZE,
      "Max file size is 5MB"
    )
    .refine(
      (files) =>
        !files || files.length === 0 || ACCEPTED_FILE_TYPES.includes(files[0].type),
      "Only images and PDFs are accepted"
    ),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted back",
  }),
})

export type ContactFormData = z.infer<typeof contactSchema>

// Generate a fake ticket ID
export function generateTicketId(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let id = "PC-"
  for (let i = 0; i < 6; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return id
}
