"use client"

import React from "react"
import Link from "next/link"
import { HoverBorderGradient } from "../ui/hover-border-gradient"

interface GetStartedButtonProps {
  href?: string
  onClick?: () => void
  className?: string
}

const PeaceCodeLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

export function GetStartedButton({ href = "/ai-support", onClick, className = "" }: GetStartedButtonProps) {
  const buttonContent = (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
      onClick={onClick}
    >
      <PeaceCodeLogo />
      <span className="text-lg font-semibold">Get Started</span>
    </HoverBorderGradient>
  )

  if (href && !onClick) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    )
  }

  return buttonContent
}

