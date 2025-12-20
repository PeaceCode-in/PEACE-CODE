"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Very lightweight horizontally-scrollable cards carousel inspired by Apple.com hero sections.
 * – Scroll (wheel / trackpad / touch) horizontally on mobile & desktop.
 * – Uses CSS scroll-snap and a subtle parallax / scale effect driven by the horizontal scroll progress.
 */

export interface AppleCard {
  category: string;
  title: string;
  src: string;
  content?: React.ReactNode;
}

interface CardProps {
  card: AppleCard;
  index: number;
  className?: string;
}

export function Card({ card, index, className }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Motion scroll-based transforms (parallax + scale)
  const { scrollXProgress } = useScroll({ target: ref, axis: "x" });
  const scale = useTransform(scrollXProgress, [0, 1], [0.95, 1]);
  const y = useTransform(scrollXProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, y }}
      className={cn(
        "snap-center shrink-0 w-[80vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[32vw] 2xl:w-[28vw] h-[65vh] md:h-[70vh] rounded-3xl overflow-hidden relative cursor-pointer select-none",
        className,
      )}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background image */}
      <img
        src={card.src}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        draggable={false}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />
      {/* Text */}
      <div className="absolute bottom-0 p-6 md:p-8 text-white z-10 space-y-1 md:space-y-3">
        <span className="text-xs md:text-sm uppercase tracking-wider text-white/80">
          {card.category}
        </span>
        <h3 className="text-2xl md:text-4xl font-bold leading-snug drop-shadow-lg">
          {card.title}
        </h3>
      </div>
    </motion.div>
  );
}

interface CarouselProps {
  items: React.ReactNode[];
  className?: string;
}

export function Carousel({ items, className }: CarouselProps) {
  return (
    <div
      className={cn(
        "overflow-x-auto overflow-y-hidden no-scrollbar w-full",
        className,
      )}
    >
      <div className="flex gap-6 md:gap-10 px-4 md:px-8 pb-4 scroll-pl-4 md:scroll-pl-8 snap-x snap-mandatory">
        {items}
      </div>
    </div>
  );
}

