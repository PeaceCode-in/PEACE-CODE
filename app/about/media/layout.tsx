import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Media & Press | Peace Code",
  description: "Read the latest press releases, news highlights, and media kits from Peace Code, India's most compassionate campus mental health initiative.",
}

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return children
}
