import type { CookieConsentChoice, CookieConsentStatus } from "../types";

export const COOKIE_CONSENT_STORAGE_KEY = "antl-cookie-consent-v1";
export const COOKIE_CONSENT_VERSION = 1;

export function consentExpiresAt(now: number): number {
  const date = new Date(now);
  const day = date.getUTCDate();
  date.setUTCDate(1);
  date.setUTCMonth(date.getUTCMonth() + 6);
  const lastDay = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0)).getUTCDate();
  date.setUTCDate(Math.min(day, lastDay));
  return date.getTime();
}

export function getStoredCookieConsent(now = Date.now()): CookieConsentStatus {
  if (typeof window === "undefined") return "undecided";
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return "undecided";
    const stored: unknown = JSON.parse(raw);
    if (typeof stored !== "object" || stored === null) return "undecided";
    if (!("version" in stored) || stored.version !== COOKIE_CONSENT_VERSION) return "undecided";
    if (!("status" in stored) || (stored.status !== "accepted" && stored.status !== "rejected")) return "undecided";
    if (!("createdAt" in stored) || typeof stored.createdAt !== "number" || !Number.isFinite(stored.createdAt) || stored.createdAt > now) return "undecided";
    if (!("expiresAt" in stored) || typeof stored.expiresAt !== "number" || !Number.isFinite(stored.expiresAt) || stored.expiresAt <= now || stored.expiresAt > consentExpiresAt(stored.createdAt)) return "undecided";
    return stored.status;
  } catch { return "undecided"; }
}

export function saveCookieConsent(status: CookieConsentChoice, now = Date.now()): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify({
      version: COOKIE_CONSENT_VERSION, status, createdAt: now, expiresAt: consentExpiresAt(now),
    }));
  } catch { /* Storage may be unavailable; the choice still applies to this visit. */ }
}
