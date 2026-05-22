import { Resend } from "resend";
import type { ContactFormInput } from "@/lib/validations";

let client: Resend | null = null;

function getClient(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  if (!client) {
    client = new Resend(key);
  }
  return client;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function serviceLabel(service: ContactFormInput["service"]): string {
  const map: Record<ContactFormInput["service"], string> = {
    electrical: "Electrical Solutions",
    automation: "Automation Systems",
    instrumentation: "Instrumentation & Calibration",
    "engine-room": "Engine Room Machinery Support",
    general: "General Inquiry",
  };
  return map[service];
}

export async function sendContactEmail(
  data: ContactFormInput,
  to: string,
): Promise<void> {
  const resend = getClient();
  const subject = `Website inquiry — ${serviceLabel(data.service)} — ${data.company}`;

  const rows = [
    ["Name", data.name],
    ["Company", data.company],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Service", serviceLabel(data.service)],
    ["Message", data.message],
  ] as const;

  const html = `
    <table style="font-family:system-ui,sans-serif;border-collapse:collapse;max-width:640px">
      <tbody>
        ${rows
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb">${escapeHtml(k)}</td>
            <td style="padding:8px 12px;border:1px solid #e5e7eb;white-space:pre-wrap">${escapeHtml(v)}</td>
          </tr>`,
          )
          .join("")}
      </tbody>
    </table>
  `;

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "Lanoso Website <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }
}
