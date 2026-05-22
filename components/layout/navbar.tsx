"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";
import { Logo } from "./logo";

/**
 * Navbar layout:
 * - < md: logo (left) + hamburger (right). Links + “Get a Quote” live in the slide-down drawer.
 * - ≥ md: [ logo | text links | Get a Quote ] — equal flex-1 wings keep the link cluster visually centered.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        solid
          ? "border-navy-dark/15 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-navy/10 bg-white/80 shadow-sm backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        {/* Left: logo and reserved space for nav balance */}
        <div className="flex min-w-0 flex-1 items-center justify-start">
          <Logo priority className="shrink-0" />
        </div>

        {/* Desktop primary links — driven by NAV_LINKS in lib/constants.ts */}
        <nav
          className="hidden shrink-0 items-center gap-6 md:flex lg:gap-8"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium uppercase tracking-wide text-navy/90 transition hover:text-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right wing: CTA (desktop) + hamburger (mobile) */}
        <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
          <ButtonLink
            href="/contact"
            variant="primary"
            className="hidden !px-4 !py-2 text-xs font-semibold uppercase tracking-wide md:inline-flex"
          >
            Get a Quote
          </ButtonLink>

          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center rounded-md p-2 text-navy md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-navy/10 bg-white shadow-lg md:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-4 py-4"
              aria-label="Mobile primary"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wide text-navy hover:bg-navy/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <ButtonLink
                href="/contact"
                variant="primary"
                className="mt-2 justify-center text-center"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </ButtonLink>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
