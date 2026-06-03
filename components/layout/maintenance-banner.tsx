import {
  CONTACT_EMAIL,
  PHONE_GLOBE,
  PHONE_GLOBE_E164,
} from "@/lib/constants";

const telHref = `tel:+${PHONE_GLOBE_E164}`;

/**
 * Centered card only — the rest of the page stays scrollable and clickable.
 * Navbar (z-50) stays above this layer (z-40).
 */
export function MaintenanceBanner() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-6"
    >
      <div className="pointer-events-auto w-full max-w-md rounded-2xl border border-navy/10 bg-white/95 px-6 py-7 text-center shadow-[0_12px_40px_rgba(27,43,94,0.12)] backdrop-blur-sm sm:max-w-lg sm:px-8 sm:py-8">
        <p className="text-xs font-medium tracking-wide text-orange">
          Site update in progress
        </p>
        <h2 className="mt-3 text-xl font-light tracking-tight text-navy sm:text-2xl">
          Under maintenance
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-navy/70">
          We are preparing an improved online experience. Our team remains
          available for vessel support, quotes, and mobilizations.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-navy/75 sm:flex-row sm:gap-5">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="transition-colors hover:text-navy"
          >
            {CONTACT_EMAIL}
          </a>
          <span
            className="hidden h-3 w-px bg-navy/20 sm:block"
            aria-hidden
          />
          <a href={telHref} className="transition-colors hover:text-navy">
            {PHONE_GLOBE}
          </a>
        </div>
      </div>
    </div>
  );
}
