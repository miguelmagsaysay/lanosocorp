import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  Eye,
  Gem,
  Handshake,
  Lightbulb,
  Scale,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { MotionSection } from "@/components/sections/motion-section";
import { OperationsSection } from "@/components/sections/operations-section";
import { FlankedHeading } from "@/components/ui/flanked-heading";
import {
  ADDRESS_LINE,
  CONTACT_EMAIL,
  PHONE_PRESIDENT,
} from "@/lib/constants";

const presidentTelHref = `tel:+63${PHONE_PRESIDENT.replace(/\D/g, "").slice(1)}`;

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in September 2012 as Lanoso Marine Repair Services, Lanoso Corporation now delivers integrated marine automation and monitoring solutions nationwide.",
  openGraph: {
    title: "About Lanoso Corporation",
    url: "https://lanosocorp.com/about",
  },
};

const mvb = [
  {
    title: "Our Mission",
    body: "To deliver reliable, innovative and compliant marine solutions that enhance safety, efficiency and operational performance.",
    icon: Target,
  },
  {
    title: "Our Vision",
    body: "To be a leading provider of smart marine solutions-recognized for engineering excellence, innovation and contribution to the advancement of the maritime industry.",
    icon: Eye,
  },
  {
    title: "Our Core Belief",
    body: "Strong systems are built on proper understanding and disciplined execution. Leadership drives results.",
    icon: Gem,
  },
] as const;

const values = [
  {
    title: "Integrity",
    body: "We do the right thing, always",
    icon: ShieldCheck,
  },
  {
    title: "Teamwork",
    body: "We collaborate and support each other to succeed.",
    icon: Users,
  },
  {
    title: "Excellence",
    body: "We pursue quality and continuous improvement.",
    icon: Award,
  },
  {
    title: "Innovation",
    body: "We embrace technology and new ideas to create better solutions.",
    icon: Lightbulb,
  },
  {
    title: "Compliance",
    body: "We align our work with IMO, SOLAS, MARINA, and class requirements — with documentation to match.",
    icon: Scale,
  },
  {
    title: "Commitment",
    body: "We are dedicated to our clients and the success of their operations.",
    icon: Handshake,
  },
] as const;

function RingIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-navy text-navy">
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Who We Are"
        subtitle="Integrated marine electrical, automation, and monitoring solutions — engineered for class requirements and life at sea."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        imageSrc="/images/hero-ship.jpg"
        imageAlt="Commercial vessel at sea — representative of maritime operations Lanoso supports."
      />

      <div className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 maritime-waves opacity-35"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:space-y-24 lg:px-8 lg:py-20">
          <MotionSection>
            <section className="mx-auto max-w-3xl lg:max-w-4xl">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-navy sm:text-3xl">
                Built from the Ground Up
              </h2>
              <div className="mt-4 h-1 w-14 bg-orange" aria-hidden />
              <div className="mt-8 space-y-6 text-base leading-relaxed text-navy/75 sm:text-lg">
                <p>
                LANOSO CORPORATION is a Philippine-based engineering company that delivers integrated marine electrical, automation and monitoring solutions for the maritime industry.
                </p>
                <p>
                  We are committed to providing reliable systems and long-term support that improve vessel safety, efficiency and operational performance.
                </p>
                <p className="font-medium text-navy">
                  Specializing in marine electronics and electrical technology,
                  Lanoso concentrated on delivering navigational aids,
                  communications equipment, switchboards, power management
                  systems, engine room general alarms, monitoring systems, and
                  electronic safety devices.
                </p>
                <p className="font-medium text-navy">
                  That spirit of hands-on expertise and direct
                  accountability remains the DNA of Lanoso Corporation today.
                </p>
              </div>
            </section>
          </MotionSection>

          <MotionSection>
            <div className="mx-auto max-w-3xl space-y-0 lg:max-w-4xl">
              <article className="relative border-l-2 border-orange/40 pb-12 pl-8 sm:pl-10">
                <p className="font-display text-3xl font-bold text-orange sm:text-4xl">
                  2012
                </p>
                <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide text-navy sm:text-xl">
                  Founded as Lanoso Marine Repair Services
                </h3>
                <p className="mt-3 text-base leading-relaxed text-navy/70 sm:text-lg">
                  A sole proprietorship — one owner, one team. Supply and service
                  of marine electronics, navigational aids, and electrical
                  systems across Philippine waters.
                </p>
              </article>
              <article className="relative border-l-2 border-navy/15 pl-8 sm:pl-10">
                <p className="font-display text-3xl font-bold text-navy sm:text-4xl">
                  Today
                </p>
                <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide text-navy sm:text-xl">
                  Lanoso Corporation
                </h3>
                <p className="mt-3 text-base leading-relaxed text-navy/70 sm:text-lg">
                  Nationwide presence across 7+ regions — Metro Manila, Visayas,
                  and Mindanao — delivering integrated marine automation and
                  monitoring solutions.
                </p>
              </article>
            </div>
          </MotionSection>

          <MotionSection>
            <div className="grid gap-8 md:grid-cols-3">
              {mvb.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="flex flex-col rounded-2xl border border-navy/10 bg-white/90 p-8 text-center shadow-sm"
                  >
                    <RingIcon>
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </RingIcon>
                    <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/70">
                      {item.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </MotionSection>

          <MotionSection>
            <FlankedHeading>Our Core Values</FlankedHeading>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <article
                    key={v.title}
                    className="flex flex-col text-center"
                  >
                    <RingIcon>
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </RingIcon>
                    <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-navy">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-navy/65">
                      {v.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </MotionSection>
        </div>
      </div>

      <OperationsSection />

      <div className="mx-auto max-w-6xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
        <MotionSection>
          <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-lg">
            <div className="grid md:grid-cols-2 md:min-h-[448px]">
              <div className="relative min-h-[384px] md:min-h-0 md:h-full">
                <Image
                  src="/images/president-lanoso.png"
                  alt="Alejandro V. Gubat, President of Lanoso Corporation."
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="relative z-10 flex flex-col justify-center p-8 sm:p-10 md:h-full">
                <p className="text-xs font-bold uppercase tracking-widest text-orange">
                  Leadership
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase text-navy">
                  Alejandro V. Gubat
                </h3>
                <p className="mt-1 text-sm text-navy/60">President</p>
                <div className="mt-6 space-y-2 text-sm">
                  <a
                    href={presidentTelHref}
                    className="block font-medium text-navy transition hover:text-orange"
                  >
                    {PHONE_PRESIDENT}
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="block font-medium text-navy/80 transition hover:text-orange"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <p className="mt-6 text-xs leading-relaxed text-navy/50">
                  {ADDRESS_LINE}
                </p>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection>
          <div className="rounded-xl border border-navy/10 bg-stone-50 py-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-navy/75">
            Reliable · Compliant · Efficient · Global
          </div>
        </MotionSection>
      </div>
    </>
  );
}
