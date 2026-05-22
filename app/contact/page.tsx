import type { Metadata } from "next";
import { Suspense } from "react";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import {
  ADDRESS_LINE,
  CONTACT_EMAIL,
  getGoogleMapsEmbedSrc,
  getGoogleMapsExternalUrl,
  PHONE_GLOBE,
  PHONE_GLOBE_E164,
  PHONE_SMART,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote or consultation for marine electrical, automation, instrumentation, or engine room support.",
  openGraph: {
    title: "Contact | Lanoso Corporation",
    url: "https://lanosocorp.com/contact",
  },
};

function FormFallback() {
  return (
    <div className="animate-pulse rounded-xl border border-navy/10 bg-slate-50 p-8 text-sm text-navy/50">
      Loading form…
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Technical inquiries, mobilization windows, and quotation requests — routed directly to our engineering desk."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        imageSrc="/images/hero-ship.jpg"
        imageAlt="Commercial vessel — representative of maritime operations Lanoso supports."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-orange">
            Direct Lines
          </h2>
          <ul className="mt-6 space-y-4 text-sm text-navy/80">
            <li className="flex gap-3">
              <span className="mt-0.5 text-orange">
                <MessageCircle className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-navy">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-orange"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-orange">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-navy">
                  Globe
                </p>
                <a
                  href={`tel:+${PHONE_GLOBE_E164}`}
                  className="block font-medium text-navy/90 hover:text-orange"
                >
                  {PHONE_GLOBE}
                </a>
               
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-orange">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-navy">Smart</p>
                <a href="tel:+639610744114" className="hover:text-orange">
                  {PHONE_SMART}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-orange">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-navy">Address</p>
                <p>{ADDRESS_LINE}</p>
              </div>
            </li>
          </ul>

          <div className="mt-10 overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm">
            <iframe
              title="Office location — Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              src={getGoogleMapsEmbedSrc()}
              className="aspect-[16/12] min-h-[240px] w-full border-0 grayscale-[0.15] contrast-[0.97] sm:min-h-[288px]"
            />
            <p className="border-t border-navy/5 px-3 py-2 text-center text-[11px] text-navy/45">
              <a
                href={getGoogleMapsExternalUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-navy/60 underline-offset-2 transition hover:text-orange hover:underline"
              >
                Open in Google Maps
              </a>
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-orange">
            Inquiry Form
          </h2>
          <p className="mt-2 text-sm text-navy/70">
            Include vessel name, class society, and port of readiness where
            applicable.
          </p>
          <div className="mt-6">
            <Suspense fallback={<FormFallback />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
