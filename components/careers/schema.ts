import { z } from "zod"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]

export const applicationSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name is too long"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .min(10, "Please enter a valid phone number")
      .max(15, "Phone number is too long")
      .regex(/^[+]?[\d\s-]+$/, "Please enter a valid phone number"),
    college: z
      .string()
      .min(2, "Please enter your college/university name")
      .max(200, "College name is too long"),
    yearSemester: z.string().optional(),
    roleInterest: z.enum(
      ["product-engineering", "student-psych-team", "campus-ambassador"],
      {
        required_error: "Please select a role",
      }
    ),
    subRole: z
      .enum(["frontend", "backend", "machine-learning"])
      .optional(),
    githubUrl: z
      .string()
      .url("Please enter a valid URL")
      .optional()
      .or(z.literal("")),
    linkedinUrl: z
      .string()
      .url("Please enter a valid URL")
      .optional()
      .or(z.literal("")),
    portfolioUrl: z
      .string()
      .url("Please enter a valid URL")
      .optional()
      .or(z.literal("")),
    whyPeaceCode: z
      .string()
      .min(50, "Please write at least 50 characters about why you want to join")
      .max(2000, "Please keep your response under 2000 characters"),
    availability: z.enum(["5-hrs", "10-hrs", "15-plus-hrs"], {
      required_error: "Please select your availability",
    }),
    resume: z
      .custom<FileList>()
      .refine((files) => files?.length === 1, "Resume is required")
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        "Max file size is 5MB"
      )
      .refine(
        (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
        "Only .pdf, .doc, .docx files are accepted"
      ),
    consent: z.boolean().refine((val) => val === true, {
      message: "You must confirm that your details are accurate",
    }),
  })
  .refine(
    (data) => {
      // If product engineering is selected, subRole should be provided
      if (data.roleInterest === "product-engineering") {
        return !!data.subRole
      }
      return true
    },
    {
      message: "Please select a sub-role for Product Engineering",
      path: ["subRole"],
    }
  )

export type ApplicationFormData = z.infer<typeof applicationSchema>

export const roleOptions = [
  { value: "product-engineering", label: "Product Engineering" },
  { value: "student-psych-team", label: "Student Psych Team" },
  { value: "campus-ambassador", label: "Campus Ambassador" },
] as const

export const subRoleOptions = [
  { value: "frontend", label: "Frontend Engineer" },
  { value: "backend", label: "Backend Engineer" },
  { value: "machine-learning", label: "Machine Learning Engineer" },
] as const

export const availabilityOptions = [
  { value: "5-hrs", label: "~5 hours/week" },
  { value: "10-hrs", label: "~10 hours/week" },
  { value: "15-plus-hrs", label: "15+ hours/week" },
] as const
