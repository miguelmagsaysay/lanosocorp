import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendContactEmail } from "@/lib/resend";

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "https://lanosocorp.com",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function clientIp(request: Request): string {
  const xf = request.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function POST(request: Request) {
  if (request.headers.get("content-type") !== "application/json") {
    return NextResponse.json(
      { error: "Content-Type must be application/json" },
      { status: 400, headers: corsHeaders },
    );
  }

  const ip = clientIp(request);
  const limit = checkRateLimit(ip);
  if (!limit.allowed) {
    return NextResponse.json(
      {
        error: `Too many requests. Try again in ${limit.retryAfterSec} seconds.`,
      },
      { status: 429, headers: corsHeaders },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400, headers: corsHeaders },
    );
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    const msg = parsed.error.issues.map((e) => e.message).join(" ");
    return NextResponse.json({ error: msg }, { status: 400, headers: corsHeaders });
  }

  const to =
    process.env.CONTACT_EMAIL?.trim() || "info@lanosocorp.com";

  try {
    await sendContactEmail(parsed.data, to);
  } catch {
    return NextResponse.json(
      { error: "Unable to send message at this time." },
      { status: 500, headers: corsHeaders },
    );
  }

  return NextResponse.json({ success: true }, { status: 200, headers: corsHeaders });
}
