"use client";
import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
  clockwise?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Tag = "div",
  duration = 1,
  clockwise = true,
  ...props
}: Props) => {
  return (
    <Tag
      className={cn(
        "group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-100 to-purple-100 p-[2px] transition-all duration-300 hover:from-blue-200 hover:to-purple-200 hover:shadow-lg",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "relative z-10 flex h-full w-full items-center justify-center rounded-full bg-white text-sm font-medium transition-all duration-300",
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
};
