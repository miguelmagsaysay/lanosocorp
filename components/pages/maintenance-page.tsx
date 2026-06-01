import Image from "next/image";
import { Anchor, Mail, Phone } from "lucide-react";
import {
  CONTACT_EMAIL,
  PHONE_GLOBE,
  PHONE_GLOBE_E164,
} from "@/lib/constants";

const telHref = `tel:+${PHONE_GLOBE_E164}`;

export function MaintenancePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-navy-dark">
      <div
        className="pointer-events-none absolute inset-0 maritime-waves opacity-50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-navy-dark/80 to-navy-dark"
        aria-hidden
      />

      <main className="relative z-10 mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:px-8">
        <div className="relative h-12 w-[148px] sm:h-14 sm:w-[168px]">
          <Image
            src="/images/lanoso-logo.png"
            alt="Lanoso Corporation"
            fill
            className="object-contain object-center brightness-0 invert"
            priority
            sizes="168px"
          />
        </div>

        <p className="mt-10 text-xs font-medium tracking-wide text-orange">
          Site update in progress
        </p>
        <h1 className="mt-4 text-3xl font-light tracking-tight text-white sm:text-4xl">
          Under Maintenance
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
          We are preparing an improved online experience. Our team remains
          available for vessel support, quotes, and mobilizations.
        </p>

        <div className="mt-10 flex items-center gap-2 text-white/50">
          <Anchor className="h-4 w-4 shrink-0 text-orange" aria-hidden />
          <span className="text-xs font-semibold tracking-normal">
            Smart Solutions for Smarter Seas
          </span>
        </div>

        <ul className="mt-10 w-full max-w-sm space-y-3 text-left">
          <li>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-orange/40 hover:bg-white/10"
            >
              <Mail className="h-4 w-4 shrink-0 text-orange" aria-hidden />
              <span>{CONTACT_EMAIL}</span>
            </a>
          </li>
          <li>
            <a
              href={telHref}
              className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-orange/40 hover:bg-white/10"
            >
              <Phone className="h-4 w-4 shrink-0 text-orange" aria-hidden />
              <span>{PHONE_GLOBE}</span>
            </a>
          </li>
        </ul>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} Lanoso Corporation. All rights reserved.
      </footer>
    </div>
  );
}
