import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import {
  ADDRESS_LINE,
  CONTACT_EMAIL,
  FOOTER_SERVICES,
  NAV_LINKS,
  PHONE_GLOBE,
  PHONE_SMART,
  SITE_URL,
} from "@/lib/constants";
import { Logo } from "./logo";

const telGlobe = "+639455496162";
const telSmart = "+639610744114";
const siteHost = SITE_URL.replace(/^https?:\/\//, "");

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo inverted />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              <span className="font-semibold text-white">Smart Solutions</span>{" "}
              <span className="text-white/80">for</span>{" "}
              <span className="font-semibold text-orange">Smarter Seas</span>
              . Marine systems integration with IMO, SOLAS, and MARINA alignment.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-orange">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-orange">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-orange">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                Globe:{" "}
                <a href={`tel:${telGlobe}`} className="hover:text-white">
                  {PHONE_GLOBE}
                </a>
              </li>
              <li>
                Smart:{" "}
                <a href={`tel:${telSmart}`} className="hover:text-white">
                  {PHONE_SMART}
                </a>
              </li>
              <li className="pt-1 text-white/60">{ADDRESS_LINE}</li>
            </ul>
          </div>
        </div>

        <ul className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <li className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5">
              <Globe className="h-4 w-4 text-orange" aria-hidden />
            </span>
            <a
              href={SITE_URL}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {siteHost}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5">
              <Mail className="h-4 w-4 text-orange" aria-hidden />
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5">
              <Phone className="h-4 w-4 text-orange" aria-hidden />
            </span>
            <a
              href={`tel:${telGlobe}`}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              +63 945 549 6162
            </a>
          </li>
          <li className="flex items-start gap-3 sm:max-w-xs">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/5">
              <MapPin className="h-4 w-4 text-orange" aria-hidden />
            </span>
            <span className="text-sm leading-snug text-white/80">
              {ADDRESS_LINE}
            </span>
          </li>
        </ul>
      </div>

      <div className="border-t border-orange bg-navy">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Lanoso Corporation. All rights reserved.</p>
          <p className="font-medium uppercase tracking-wide text-white/50">
            Reliable · Compliant · Efficient · Global
          </p>
        </div>
      </div>
    </footer>
  );
}
