import { z } from "zod";

const trimmedString = (label: string, max: number) =>
  z
    .string()
    .trim()
    .min(1, `${label} is required`)
    .max(max, `${label} must be at most ${max} characters`);

export const contactFormSchema = z.object({
  name: trimmedString("Name", 120),
  company: trimmedString("Company", 160),
  email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .max(254, "Email is too long"),
  phone: trimmedString("Phone", 40),
  service: z.enum(
    ["electrical", "automation", "instrumentation", "engine-room", "general"],
    { message: "Select a service category" },
  ),
  message: trimmedString("Message", 4000),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
