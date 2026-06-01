"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SERVICES } from "@/lib/constants";
import { PRODUCT_CATEGORIES } from "@/lib/products";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ButtonLink } from "@/components/ui/button-link";

const NAVBAR_LINKS = NAV_LINKS.filter((link) => link.href !== "/contact");

const menuEase = [0.22, 1, 0.36, 1] as const;

type NavBarLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
};

function NavBarLink({
  href,
  label,
  onClick,
  className,
}: NavBarLinkProps) {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "whitespace-nowrap py-1 text-[15px] font-normal tracking-normal transition-colors duration-200",
        isActive
          ? "font-medium text-orange"
          : "text-white/85 hover:text-white",
        className,
      )}
    >
      {label}
    </Link>
  );
}

/**
 * Navbar layout:
 * - < md: logo (left) + hamburger (right). Links live in the slide-down drawer.
 * - ≥ md: [ logo | text links | spacer ] — equal flex-1 wings keep the link cluster visually centered.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<"services" | "products" | null>(
    null,
  );
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const desktopMenuRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const showSolidNav = !isHome || scrolled;

  const serviceDropdownItems = useMemo(
    () =>
      SERVICES.map((s) => ({
        href: `/services#${s.slug}`,
        label: s.title,
      })),
    [],
  );

  const productDropdownItems = useMemo(
    () =>
      PRODUCT_CATEGORIES.filter((c) => c.slug !== "all").map((c) => ({
        href: `/products?category=${c.slug}`,
        label: c.label,
      })),
    [],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!desktopMenu) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (desktopMenuRef.current && !desktopMenuRef.current.contains(target)) {
        setDesktopMenu(null);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDesktopMenu(null);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [desktopMenu]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setMobileServicesOpen(false);
      setMobileProductsOpen(false);
    }
  }, [open]);

  const servicesActive = pathname === "/services" || pathname.startsWith("/services/");
  const productsActive = pathname === "/products" || pathname.startsWith("/products/");

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: menuEase }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300",
        showSolidNav
          ? "border-white/15 bg-navy shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-transparent bg-transparent shadow-none backdrop-blur-0",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center gap-3 px-4 transition-[height] duration-300 sm:gap-4 sm:px-6 lg:px-8",
          showSolidNav ? "h-14" : "h-16",
        )}
      >
        <div className="flex min-w-0 flex-1 items-center justify-start">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Logo priority inverted className="shrink-0" />
          </motion.div>
        </div>

        <nav
          className="hidden shrink-0 items-center gap-6 md:flex lg:gap-8"
          aria-label="Primary"
          ref={desktopMenuRef}
        >
          {NAVBAR_LINKS.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.05, duration: 0.35, ease: menuEase }}
            >
              {link.href === "/services" || link.href === "/products" ? (
                <div className="relative flex items-center gap-1">
                  <Link
                    href={link.href}
                    onClick={() => setDesktopMenu(null)}
                    className={cn(
                      "inline-flex items-center whitespace-nowrap py-1 text-[15px] font-normal tracking-normal transition-colors duration-200",
                      (link.href === "/services" ? servicesActive : productsActive)
                        ? "font-medium text-orange"
                        : "text-white/85 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      setDesktopMenu((v) =>
                        v === (link.href === "/services" ? "services" : "products")
                          ? null
                          : link.href === "/services"
                            ? "services"
                            : "products",
                      )
                    }
                    aria-label={`${link.label} menu`}
                    aria-haspopup="menu"
                    aria-expanded={
                      desktopMenu ===
                      (link.href === "/services" ? "services" : "products")
                    }
                    className="inline-flex items-center justify-center rounded-md p-1 text-white/85 transition hover:bg-white/10 hover:text-white"
                  >
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        desktopMenu ===
                          (link.href === "/services" ? "services" : "products") &&
                          "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>

                  <AnimatePresence>
                    {desktopMenu ===
                    (link.href === "/services" ? "services" : "products") ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: menuEase }}
                        className="absolute top-full left-1/2 z-50 mt-4 w-[20rem] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/15 bg-navy-light/95 shadow-xl shadow-black/30 backdrop-blur-md"
                        role="menu"
                        aria-label={`${link.label} menu`}
                      >
                        <div className="p-2">
                          <div className="max-h-[min(18rem,60vh)] overflow-y-auto pr-1">
                            {(link.href === "/services"
                              ? serviceDropdownItems
                              : productDropdownItems
                            ).map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block rounded-xl px-3 py-2.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                                role="menuitem"
                                onClick={() => setDesktopMenu(null)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <NavBarLink href={link.href} label={link.label} />
              )}
            </motion.div>
          ))}
        </nav>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
          <ButtonLink
            href="/contact"
            variant="outlineLight"
            className="hidden shrink-0 rounded-full border border-white/70 px-4 py-2 text-sm md:inline-flex lg:px-5"
          >
            Talk to an Expert
          </ButtonLink>
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            className={cn(
              "inline-flex shrink-0 items-center justify-center rounded-md p-2 transition-colors md:hidden",
              "text-white hover:bg-white/10",
            )}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex"
                >
                  <X className="h-6 w-6" aria-hidden />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex"
                >
                  <Menu className="h-6 w-6" aria-hidden />
                </motion.span>
              )}
            </AnimatePresence>
            <span className="sr-only">Toggle menu</span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: menuEase }}
            className="overflow-hidden border-t border-white/10 bg-navy/95 shadow-lg backdrop-blur-md md:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-4 py-4"
              aria-label="Mobile primary"
            >
              {NAVBAR_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.05, duration: 0.25, ease: menuEase }}
                >
                  {link.href === "/services" ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-submenu"
                        className={cn(
                          "flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-[15px] transition-colors",
                          servicesActive
                            ? "font-medium text-orange"
                            : "text-white/85 hover:bg-white/10 hover:text-white",
                        )}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            mobileServicesOpen && "rotate-180",
                          )}
                          aria-hidden
                        />
                      </button>
                      {mobileServicesOpen ? (
                        <div
                          id="mobile-services-submenu"
                          className="mt-1 space-y-1 border-l border-white/10 pl-3"
                        >
                          {serviceDropdownItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                              onClick={() => setOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : link.href === "/products" ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setMobileProductsOpen((v) => !v)}
                        aria-expanded={mobileProductsOpen}
                        aria-controls="mobile-products-submenu"
                        className={cn(
                          "flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-[15px] transition-colors",
                          productsActive
                            ? "font-medium text-orange"
                            : "text-white/85 hover:bg-white/10 hover:text-white",
                        )}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            mobileProductsOpen && "rotate-180",
                          )}
                          aria-hidden
                        />
                      </button>
                      {mobileProductsOpen ? (
                        <div
                          id="mobile-products-submenu"
                          className="mt-1 space-y-1 border-l border-white/10 pl-3"
                        >
                          {productDropdownItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                              onClick={() => setOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <NavBarLink
                      href={link.href}
                      label={link.label}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 hover:bg-white/10"
                    />
                  )}
                </motion.div>
              ))}
              <div className="mt-4 px-3 pb-2">
                <ButtonLink
                  href="/contact"
                  variant="outlineLight"
                  className="w-full justify-center rounded-full border border-white/70"
                  onClick={() => setOpen(false)}
                >
                  Talk to an Expert
                </ButtonLink>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
