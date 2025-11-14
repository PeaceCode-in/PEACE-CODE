'use client';

import { cn } from '@/lib/utils';

interface GradientTextProps {
  text: string;
  className?: string;
}

export const GradientText = ({ text, className }: GradientTextProps) => {
  return (
    <span
      className={cn(
        "relative inline-block",
        "bg-gradient-to-r from-[#000B18] via-[#00172D] via-[#003366] to-[#0052CC]",
        "bg-[length:200%_auto] bg-clip-text text-transparent",
        "animate-text-gradient",
        className
      )}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </span>
  );
};
