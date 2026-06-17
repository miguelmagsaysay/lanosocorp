import Link from "next/link";
import {
  ADDRESS_LINE,
  CONTACT_EMAIL,
  FOOTER_SERVICES,
  NAV_LINKS,
  PHONE_GLOBE,
  PHONE_SMART,
  REGULATORY_DISCLAIMER,
} from "@/lib/constants";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
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
            <p className="text-sm font-medium text-orange">
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
            <p className="text-sm font-medium text-orange">
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
            <p className="text-sm font-medium text-orange">
              Contact
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_GLOBE}`}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {PHONE_GLOBE} (Globe)
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_SMART}`}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {PHONE_SMART} (Smart)
                </a>
              </li>
              <li className="pt-2 text-sm leading-relaxed text-white/65">
                {ADDRESS_LINE}
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-10 text-xs leading-relaxed text-white/45">
          <span className="font-medium text-white/55">Disclaimer:</span>{" "}
          {REGULATORY_DISCLAIMER}
        </p>

        <ul className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <li className="text-xs text-white/55">
            © {new Date().getFullYear()} Lanoso Corporation. All rights reserved.
          </li>
          <li className="text-xs font-normal tracking-normal text-white/50">
            Reliable · Compliant · Efficient · Global
          </li>
        </ul>
      </div>
    </footer>
  );
}
