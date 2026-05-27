"use client"

import { motion } from "framer-motion"
import { Heart, Mail, Linkedin, Globe, Sparkles, Brain, Award, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const teamCategories = [
  {
    title: "Leadership & Vision",
    description: "Guiding our mission to democratize student mental wellness.",
    members: [
      {
        name: "Jai Mann",
        role: "Founder & Product Lead",
        bio: "Pre-final year student passionate about building human-centric technology that solves real-world campus accessibility challenges.",
        image: "/confident-young-man-student-mental-health-recovery.jpg",
        links: { linkedin: "#", email: "jai@peacecode.com" },
        badge: "Vision",
        icon: Sparkles
      },
      {
        name: "Dr. Anjali Sharma",
        role: "Head of Clinical Psychology",
        bio: "Clinical psychologist with 12+ years of experience specializing in student mental health, cognitive behavioral therapy, and campus wellness initiatives.",
        image: "/happy-young-woman-student-cultural-diversity-menta.jpg",
        links: { linkedin: "#", email: "anjali@peacecode.com" },
        badge: "Clinical Lead",
        icon: Brain
      }
    ]
  },
  {
    title: "Clinical Advisory & Support",
    description: "Ensuring all self-help and expert care features are evidence-based.",
    members: [
      {
        name: "Sarah Jenkins",
        role: "Community Director",
        bio: "Advocating for student-peer counseling groups and designing safe, inclusive online spaces for diverse student populations.",
        image: "/peaceful-young-woman-student-smiling-hope-recovery.jpg",
        links: { linkedin: "#", email: "sarah@peacecode.com" },
        badge: "Advocacy",
        icon: Heart
      },
      {
        name: "Rohan Malhotra",
        role: "Lead Platform Engineer",
        bio: "Specializing in secure, low-latency, and HIPAA-compliant WebRTC architectures for peer support groups and video therapy sessions.",
        image: "/placeholder-user.jpg",
        links: { linkedin: "#", email: "rohan@peacecode.com" },
        badge: "Security",
        icon: Shield
      }
    ]
  }
]

export default function TeamPage() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-tr from-[#fbfaff] via-[#f5f0ff] to-[#fcfcff] overflow-hidden text-slate-800 pb-24">
      {/* Grainy Noise Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #9667e0 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #d4bbfc 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-[#ebd9fc] backdrop-blur-md text-xs font-semibold text-[#9667e0] mb-6">
            <Heart className="w-3.5 h-3.5 fill-[#9667e0]" />
            The Minds Behind Peace Code
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-normal tracking-tight text-slate-900 mb-6">
            Meet Our <span className="italic text-[#9667e0]">Compassionate</span> Team
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            We are a multidisciplinary team of technologists, psychological experts, and student advocates 
            dedicated to making mental health support universally accessible and free of stigma.
          </p>
        </motion.div>

        {/* Team Categories */}
        {teamCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-b border-[#ebd9fc]/60 pb-4 mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-normal text-slate-800">
                {category.title}
              </h2>
              <p className="text-sm text-slate-500 mt-1 font-light">{category.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.members.map((member, memberIdx) => {
                const IconComponent = member.icon
                return (
                  <motion.div
                    key={memberIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: memberIdx * 0.1 }}
                    className="group relative rounded-3xl bg-white/40 border border-white/60 backdrop-blur-xl p-6 md:p-8 hover:bg-white/60 hover:border-white/80 hover:shadow-2xl hover:shadow-[#9667e0]/5 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
                  >
                    {/* Member Image */}
                    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden flex-shrink-0 border border-[#ebd9fc] shadow-md">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Member Content */}
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-2xs font-semibold uppercase tracking-wider bg-[#f2ebfb] text-[#9667e0] border border-[#ebd9fc]/40">
                            <IconComponent className="w-3 h-3" />
                            {member.badge}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#9667e0] transition-colors duration-200">
                          {member.name}
                        </h3>
                        <p className="text-sm font-semibold text-slate-500 mb-3">{member.role}</p>
                        <p className="text-sm text-slate-600 leading-relaxed font-light mb-4">
                          {member.bio}
                        </p>
                      </div>

                      {/* Member Links */}
                      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-slate-100/50">
                        <Link 
                          href={`mailto:${member.links.email}`}
                          className="p-2 rounded-full bg-white/80 border border-[#ebd9fc]/40 hover:bg-[#9667e0] hover:text-white transition-all duration-200"
                        >
                          <Mail className="w-4 h-4" />
                        </Link>
                        <Link 
                          href={member.links.linkedin}
                          className="p-2 rounded-full bg-white/80 border border-[#ebd9fc]/40 hover:bg-[#9667e0] hover:text-white transition-all duration-200"
                        >
                          <Linkedin className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-tr from-[#9667e0] to-[#7c5acf] text-white p-8 md:p-12 text-center relative overflow-hidden shadow-xl"
        >
          {/* Overlay Grid */}
          <div 
            className="absolute inset-0 z-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "20px 20px"
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-playfair font-normal mb-4">Want to help build Peace Code?</h2>
            <p className="text-white/80 leading-relaxed mb-6 font-light">
              We're always looking for clinical experts, passionate software engineers, and student leaders to join us.
            </p>
            <Link 
              href="/about/careers"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#9667e0] hover:bg-white/95 font-semibold text-sm transition-all duration-200 shadow-md hover:scale-[1.02]"
            >
              Explore Careers
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
