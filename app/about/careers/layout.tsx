import { Metadata } from "next"

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

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
