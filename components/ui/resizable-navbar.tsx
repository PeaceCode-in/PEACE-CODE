"use client";

import React, { createContext, useContext, useMemo } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/components/ui/use-scroll";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";

type NavItem = { name: string; link: string };

type NavbarContextValue = {
  scrolled: boolean;
};

const NavbarContext = createContext<NavbarContextValue | null>(null);

function useNavbarContext() {
  const ctx = useContext(NavbarContext);
  if (!ctx) throw new Error("ResizableNavbar components must be used inside <Navbar>.");
  return ctx;
}

type NavbarProps = React.PropsWithChildren<{
  className?: string;
  /**
   * Scroll threshold (px) after which navbar “shrinks”.
   */
  shrinkAfter?: number;
}>;

export function Navbar({ children, className, shrinkAfter = 12 }: NavbarProps) {
  const scrolled = useScroll(shrinkAfter);
  const value = useMemo(() => ({ scrolled }), [scrolled]);

  return (
    <NavbarContext.Provider value={value}>
      <motion.nav
        className={cn("fixed top-0 inset-x-0 z-50", className)}
        initial={false}
        animate={{
          height: scrolled ? 100 : 120,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        <div
          className={cn(
            "absolute inset-0 transition-colors duration-300",
            scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-200" : "bg-transparent",
          )}
        />
        <div className="relative h-full">{children}</div>
      </motion.nav>
    </NavbarContext.Provider>
  );
}

type NavBodyProps = React.PropsWithChildren<{ className?: string }>;

export function NavBody({ children, className }: NavBodyProps) {
  const { scrolled } = useNavbarContext();
  return (
    <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full", className)}>
      <div className={cn("h-full flex items-center justify-between gap-4", scrolled ? "py-2" : "py-3")}>
        {children}
      </div>
    </div>
  );
}

type NavbarLogoProps = {
  href?: string;
  className?: string;
  children?: React.ReactNode;
};

export function NavbarLogo({ href = "/", className, children }: NavbarLogoProps) {
  return (
    <Link href={href} className={cn("flex items-center gap-2 font-bold text-gray-900", className)}>
      {children ?? <span>Logo</span>}
    </Link>
  );
}

type NavItemsProps = {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
};

export function NavItems({ items, className, onItemClick }: NavItemsProps) {
  return (
    <div className={cn("hidden md:flex items-center gap-8", className)}>
      {items.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          onClick={onItemClick}
          className="text-sm font-medium text-gray-900/90 hover:text-sky-700 transition-colors relative"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

type NavbarButtonProps = React.ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function NavbarButton({ className, variant = "primary", ...props }: NavbarButtonProps) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors",
        variant === "primary"
          ? "bg-sky-600 text-white hover:bg-sky-700"
          : "bg-gray-100 text-gray-900 hover:bg-gray-200",
        className,
      )}
    />
  );
}

type MobileNavProps = React.PropsWithChildren<{ className?: string }>;

export function MobileNav({ children, className }: MobileNavProps) {
  return <div className={cn("md:hidden h-full", className)}>{children}</div>;
}

type MobileNavHeaderProps = React.PropsWithChildren<{ className?: string }>;

export function MobileNavHeader({ children, className }: MobileNavHeaderProps) {
  return <div className={cn("h-full flex items-center justify-between", className)}>{children}</div>;
}

type MobileNavToggleProps = {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
};

export function MobileNavToggle({ isOpen, onClick, className }: MobileNavToggleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100", className)}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <MenuToggleIcon open={isOpen} className="h-6 w-6 text-gray-900" duration={300} />
    </button>
  );
}

type MobileNavMenuProps = React.PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}>;

export function MobileNavMenu({ isOpen, onClose, children, className }: MobileNavMenuProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={cn(
              "fixed top-20 left-4 right-4 z-[90] rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden",
              className,
            )}
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <div className="p-5 space-y-4">{children}</div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}


