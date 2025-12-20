"use client";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials: Testimonial[] = [
  {
    text: "Peace Code helped me through my darkest moments. The AI support was there when I needed it most, and the breathing exercises became my daily ritual.",
    image: "/happy-young-woman-student-cultural-diversity-menta.jpg",
    name: "Priya",
    role: "Engineering Student",
  },
  {
    text: "The community support and professional counseling changed my perspective on mental health. I'm no longer afraid to seek help.",
    image: "/confident-young-man-student-mental-health-recovery.jpg",
    name: "Arjun",
    role: "Medical Student",
  },
  {
    text: "Having resources in my language made all the difference. Finally, support that understands my culture.",
    image: "/peaceful-young-woman-student-smiling-hope-recovery.jpg",
    name: "Meera",
    role: "Arts Student",
  },
  {
    text: "The focus timer keeps me productive and balanced during exam weeks!",
    image: "/focused-study-environment-productivity-timer-ambie.jpg",
    name: "Rahul",
    role: "Commerce Student",
  },
  {
    text: "I love journaling in Peace Code – it's my safe space online.",
    image: "/peaceful-writing-desk-with-journal-soft-lighting-m.jpg",
    name: "Aisha",
    role: "Psychology Student",
  },
  {
    text: "Counselors here truly listen and guide without judgement.",
    image: "/professional-counselor-therapy-session-mental-heal.jpg",
    name: "Karan",
    role: "MBA Student",
  },
  {
    text: "Gratitude wall boosts my mood every morning!",
    image: "/community-gratitude-wall-positive-messages-hope-in.jpg",
    name: "Sneha",
    role: "Law Student",
  },
  {
    text: "Peace Code's AI feels like a friend who's always awake at 3 AM.",
    image: "/bot.jpg",
    name: "Vikash",
    role: "Design Student",
  },
  {
    text: "Joining peer groups made me realise I'm not alone in this journey.",
    image: "/diverse-group-students-supporting-each-other-commu.jpg",
    name: "Ritu",
    role: "Pharmacy Student",
  },
];

const first = testimonials.slice(0, 3);
const second = testimonials.slice(3, 6);
const third = testimonials.slice(6, 9);

export default function TestimonialsSection() {
  return (
    <section className="bg-background relative py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto"
        >
          <div className="border py-1 px-4 rounded-lg text-sm text-primary font-medium">Testimonials</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mt-5">
            What our users say
          </h2>
          <p className="text-center mt-4 text-neutral-600 dark:text-neutral-400 max-w-xl">
            Real stories from students finding peace and strength with Peace Code.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={first} duration={15} />
          <TestimonialsColumn testimonials={second} duration={19} className="hidden md:block" />
          <TestimonialsColumn testimonials={third} duration={17} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

