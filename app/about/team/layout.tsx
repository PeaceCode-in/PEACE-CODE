import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meet the Team | Peace Code",
  description: "Meet the compassionate team of technologists, psychologists, and educators behind Peace Code, working together to make mental health support accessible to every student.",
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children
}
