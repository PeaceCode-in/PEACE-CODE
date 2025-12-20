"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface Psychologist {
  name: string;
  title: string;
  specialization: string;
  experience: string;
  languages: string[];
  image: string;
  description: string;
}

interface ExpandCardsProps {
  psychologists?: Psychologist[];
  className?: string;
}

const defaultPsychologists: Psychologist[] = [
  {
    name: "Dr. Ananya Sharma",
    title: "Clinical Psychologist",
    specialization: "Anxiety & Depression",
    experience: "12+ years",
    languages: ["English", "Hindi", "Marathi"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    description: "Specializes in cognitive behavioral therapy for students dealing with academic stress, anxiety disorders, and depression. Known for her empathetic approach.",
  },
  {
    name: "Dr. Rajesh Kumar",
    title: "Counseling Psychologist",
    specialization: "Career Counseling",
    experience: "8+ years",
    languages: ["English", "Hindi", "Tamil"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    description: "Expert in helping students navigate career decisions, academic pressure, and finding their true calling. Uses a holistic approach to mental wellness.",
  },
  {
    name: "Dr. Priya Menon",
    title: "Child & Adolescent Specialist",
    specialization: "Youth Mental Health",
    experience: "10+ years",
    languages: ["English", "Hindi", "Malayalam"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    description: "Focuses on helping young adults transition through challenging life phases. Expertise in peer relationships, identity issues, and self-esteem building.",
  },
  {
    name: "Dr. Arun Patel",
    title: "Psychiatric Consultant",
    specialization: "Stress Management",
    experience: "15+ years",
    languages: ["English", "Hindi", "Gujarati"],
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face",
    description: "Renowned for his integrative approach combining modern psychiatry with mindfulness. Helps students develop resilience and coping mechanisms.",
  },
  {
    name: "Dr. Kavitha Reddy",
    title: "Trauma Specialist",
    specialization: "PTSD & Trauma Recovery",
    experience: "9+ years",
    languages: ["English", "Hindi", "Telugu"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face",
    description: "Specialized in trauma-informed care and EMDR therapy. Creates safe spaces for healing from past experiences and building emotional strength.",
  },
  {
    name: "Dr. Mohammed Iqbal",
    title: "Family Therapist",
    specialization: "Relationship Counseling",
    experience: "11+ years",
    languages: ["English", "Hindi", "Urdu"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    description: "Expert in family dynamics and interpersonal relationships. Helps students navigate conflicts with parents, peers, and romantic relationships.",
  },
  {
    name: "Dr. Sneha Iyer",
    title: "Behavioral Therapist",
    specialization: "OCD & Phobias",
    experience: "7+ years",
    languages: ["English", "Hindi", "Kannada"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    description: "Uses evidence-based approaches like ERP and CBT for anxiety disorders. Known for her patient and methodical treatment style.",
  },
  {
    name: "Dr. Vikram Singh",
    title: "Addiction Counselor",
    specialization: "Behavioral Addictions",
    experience: "13+ years",
    languages: ["English", "Hindi", "Punjabi"],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    description: "Specializes in digital addiction, gaming disorders, and substance use prevention. Champions a non-judgmental, supportive recovery approach.",
  },
  {
    name: "Dr. Lakshmi Nair",
    title: "Mindfulness Coach",
    specialization: "Holistic Wellness",
    experience: "10+ years",
    languages: ["English", "Hindi", "Tamil"],
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face",
    description: "Combines traditional psychology with mindfulness and yoga practices. Helps students achieve balance in academic and personal life.",
  },
];

export function ExpandCards({ psychologists = defaultPsychologists, className }: ExpandCardsProps) {
  const [active, setActive] = useState<Psychologist | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null), Boolean(active));

  return (
    <div className={cn("w-full", className)}>
      {/* Backdrop */}
      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 h-full w-full z-[90]"
          />
        ) : null}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] px-4">
            <motion.button
              key={`close-${active.name}-${id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-9 w-9 shadow-lg"
              onClick={() => setActive(null)}
              aria-label="Close profile"
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.name}-${id}`}>
                <img
                  width={1200}
                  height={800}
                  src={active.image}
                  alt={active.name}
                  className="w-full h-72 md:h-80 object-cover object-top"
                />
              </motion.div>

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      className="font-bold text-neutral-900 dark:text-neutral-100 text-xl"
                    >
                      {active.name}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.specialization}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 mt-1"
                    >
                      {active.title} • {active.specialization} • {active.experience}
                    </motion.p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href="/ai-support/chat"
                      className="px-4 py-2 text-sm rounded-full font-bold bg-sky-600 hover:bg-sky-700 text-white"
                    >
                      Talk to them
                    </Link>
                    <Link
                      href="/counseling"
                      className="px-4 py-2 text-sm rounded-full font-bold bg-emerald-500 hover:bg-emerald-600 text-white"
                    >
                      Book session
                    </Link>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {active.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 rounded-full text-xs border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-5 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed max-h-60 overflow-auto pr-1"
                >
                  {active.description}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* List */}
      <ul className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {psychologists.map((p) => (
          <motion.li
            key={`card-${p.name}-${id}`}
            layoutId={`card-${p.name}-${id}`}
            onClick={() => setActive(p)}
            className="p-4 flex gap-4 items-center rounded-2xl cursor-pointer border border-sky-100 bg-white hover:bg-sky-50 transition-colors"
          >
            <motion.div layoutId={`image-${p.name}-${id}`} className="shrink-0">
              <img
                width={96}
                height={96}
                src={p.image}
                alt={p.name}
                className="h-20 w-20 rounded-xl object-cover object-top"
              />
            </motion.div>

            <div className="min-w-0 flex-1">
              <motion.h3
                layoutId={`title-${p.name}-${id}`}
                className="font-semibold text-neutral-900 truncate"
              >
                {p.name}
              </motion.h3>
              <motion.p
                layoutId={`description-${p.specialization}-${id}`}
                className="text-sm text-neutral-600 truncate"
              >
                {p.title} • {p.specialization}
              </motion.p>
              <p className="text-xs text-neutral-500 mt-1">{p.experience}</p>
            </div>

            <motion.button
              layoutId={`button-${p.name}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-sky-600 hover:text-white text-black"
              onClick={(e) => {
                e.stopPropagation();
                setActive(p);
              }}
            >
              View profile
            </motion.button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default ExpandCards;

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

