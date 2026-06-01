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
import { MotionSection } from "@/components/sections/motion-section";
import { OperationsSection } from "@/components/sections/operations-section";
import { FlankedHeading } from "@/components/ui/flanked-heading";
import { cn } from "@/lib/utils";

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
    body: "We align our work with IMO, SOLAS, MARINA, and class requirements, with documentation to match.",
    icon: Scale,
  },
  {
    title: "Commitment",
    body: "We are dedicated to our clients and the success of their operations.",
    icon: Handshake,
  },
] as const;

function RingIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-navy text-navy sm:h-14 sm:w-14",
        className,
      )}
    >
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 maritime-waves opacity-35"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-6xl space-y-20 px-4 pb-16 pt-20 sm:px-6 lg:space-y-24 lg:px-8 lg:pb-20 lg:pt-24">
          <MotionSection>
            <section className="mx-auto max-w-3xl lg:max-w-4xl">
              <h2 className="text-2xl font-light tracking-tight text-navy sm:text-3xl">
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
                <p className="text-3xl font-light text-orange sm:text-4xl">
                  2012
                </p>
                <h3 className="mt-3 text-lg font-medium text-navy sm:text-xl">
                  Founded as Lanoso Marine Repair Services
                </h3>
                <p className="mt-3 text-base leading-relaxed text-navy/70 sm:text-lg">
                  A sole proprietorship: one owner, one team. Supply and service
                  of marine electronics, navigational aids, and electrical
                  systems across Philippine waters.
                </p>
              </article>
              <article className="relative border-l-2 border-navy/15 pl-8 sm:pl-10">
                <p className="text-3xl font-light text-navy sm:text-4xl">
                  Today
                </p>
                <h3 className="mt-3 text-lg font-medium text-navy sm:text-xl">
                  Lanoso Corporation
                </h3>
                <p className="mt-3 text-base leading-relaxed text-navy/70 sm:text-lg">
                  Nationwide presence across 7+ regions (Metro Manila, Visayas,
                  and Mindanao), delivering integrated marine automation and
                  monitoring solutions.
                </p>
              </article>
            </div>
          </MotionSection>

          <MotionSection>
            <section className="mx-auto flex max-w-4xl flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:gap-14">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl sm:max-w-sm lg:mx-0 lg:max-w-[280px] lg:shrink-0 xl:max-w-xs">
                <Image
                  src="/images/president-lanoso.png"
                  alt="Alejandro V. Gubat, President of Lanoso Corporation."
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 280px, 320px"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <div className="min-w-0 text-center lg:text-left">
                <p className="text-xs font-medium tracking-wide text-orange">
                  Leadership
                </p>
                <h3 className="mt-3 text-2xl font-light tracking-tight text-navy sm:text-3xl">
                  Alejandro V. Gubat
                </h3>
                <p className="mt-1 text-sm text-navy/60">President</p>
                <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-navy/70 lg:mx-0">
                  Leading Lanoso with the same hands-on accountability that
                  defined the company from its founding: engineering judgment,
                  class awareness, and direct client engagement.
                </p>
              </div>
            </section>
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
                    <RingIcon className="mx-auto">
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </RingIcon>
                    <h3 className="mt-5 text-lg font-medium text-navy">
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
            <div className="mx-auto mt-10 grid max-w-5xl gap-x-8 gap-y-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <article key={v.title} className="flex gap-4 sm:gap-5">
                    <RingIcon className="mt-0.5">
                      <Icon
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </RingIcon>
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-navy sm:text-base">
                        {v.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy/65">
                        {v.body}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </MotionSection>
        </div>
      </div>

      <OperationsSection />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <MotionSection>
          <div className="rounded-xl border border-navy/10 bg-stone-50 py-6 text-center text-sm font-semibold tracking-wide text-navy/75">
            Reliable · Compliant · Efficient · Global
          </div>
        </MotionSection>
      </div>
    </>
  );
}
