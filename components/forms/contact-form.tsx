"use client";

import { useEffect, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";
import { SERVICES } from "@/lib/constants";
import type { ServiceSlug } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS: { value: ServiceSlug; label: string }[] = [
  ...SERVICES.map((s) => ({
    value: s.slug,
    label: s.title,
  })),
  { value: "general", label: "General Inquiry" },
];

function parseServiceParam(raw: string | null): ServiceSlug {
  const allowed = new Set(SERVICE_OPTIONS.map((o) => o.value));
  if (raw && allowed.has(raw as ServiceSlug)) return raw as ServiceSlug;
  return "general";
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<ServiceSlug>("general");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setService(parseServiceParam(searchParams.get("service")));
  }, [searchParams]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            company,
            email,
            phone,
            service,
            message,
          }),
        });
        const data = (await res.json()) as { success?: boolean; error?: string };

        if (!res.ok) {
          setError(data.error ?? "Something went wrong. Please try again.");
          return;
        }

        setSuccess(true);
        sendGAEvent("event", "form_submit", { form_name: "contact" });
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setMessage("");
        setService(parseServiceParam(searchParams.get("service")));
      } catch {
        setError("Network error. Please check your connection and retry.");
      }
    });
  }

  if (success) {
    return (
      <div
        className="rounded-xl border border-orange/30 bg-orange/5 p-8 text-center"
        role="status"
      >
        <p className="font-display text-lg font-bold uppercase text-navy">
          Message received
        </p>
        <p className="mt-2 text-sm text-navy/70">
          Our technical team will respond within 24 hours on business days.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setSuccess(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy">
          Name
          <input
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            autoComplete="name"
          />
        </label>
        <label className="block text-sm font-medium text-navy">
          Company
          <input
            required
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputClass}
            autoComplete="organization"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy">
          Email
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            autoComplete="email"
          />
        </label>
        <label className="block text-sm font-medium text-navy">
          Phone
          <input
            required
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
            autoComplete="tel"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-navy">
        Service Needed
        <select
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value as ServiceSlug)}
          className={cn(inputClass, "appearance-none bg-white")}
        >
          {SERVICE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium text-navy">
        Message
        <textarea
          required
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className={cn(inputClass, "resize-y")}
        />
      </label>

      {error ? (
        <p className="text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <Button type="submit" className="w-full sm:w-auto" disabled={isPending}>
        {isPending ? "Sending…" : "Submit inquiry"}
      </Button>
      <p className="text-xs text-navy/55">
        Typically responds within 24 hours. By submitting, you agree we may
        contact you regarding this inquiry.
      </p>
    </form>
  );
}

const inputClass =
  "mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm text-navy outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/25";
