const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

type Bucket = { count: number; resetAt: number };

const store = new Map<string, Bucket>();

export function checkRateLimit(ip: string): {
  allowed: boolean;
  retryAfterSec?: number;
} {
  const now = Date.now();
  const key = ip || "unknown";
  const existing = store.get(key);

  if (!existing || now > existing.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (existing.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  return { allowed: true };
}
