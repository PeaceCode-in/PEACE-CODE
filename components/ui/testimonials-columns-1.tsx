"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 12,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={cn("w-80", className)}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {new Array(2).fill(0).map((_, loopIdx) => (
          <React.Fragment key={loopIdx}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={`${loopIdx}-${i}`}
                className="p-6 md:p-10 rounded-3xl border border-primary/20 dark:border-primary/30 bg-white dark:bg-neutral-900 shadow-lg shadow-primary/10 max-w-xs w-full"
              >
                <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{text}</p>
                <div className="flex items-center gap-3 mt-6">
                  <img src={image} alt={name} className="h-10 w-10 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-50 text-sm leading-5">
                      {name}
                    </span>
                    <span className="text-xs leading-5 opacity-70 text-neutral-600 dark:text-neutral-400">
                      {role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

