const MEASUREMENT_ID = "G-47QNW9WCG8";
const SCRIPT_ID = "antl-google-analytics";
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  "ga-disable-G-47QNW9WCG8"?: boolean;
};
let enabled = false;

export function isAnalyticsEnabled(): boolean { return enabled; }
export function publicPageUrl(url: string): string {
  try { const parsed = new URL(url); return `${parsed.origin}${parsed.pathname}`; }
  catch { return ""; }
}

export function startAnalytics(): void {
  if (typeof window === "undefined") return;
  const target = window as AnalyticsWindow;
  target["ga-disable-G-47QNW9WCG8"] = false;
  if (enabled) return;
  enabled = true;
  target.dataLayer = [];
  // Google tag expects Arguments objects in its command queue.
  // eslint-disable-next-line prefer-rest-params
  target.gtag = function () { target.dataLayer?.push(arguments); };
  target.gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  target.gtag("js", new Date());
  target.gtag("config", MEASUREMENT_ID, {
    send_page_view: false, cookie_domain: window.location.hostname,
    page_location: publicPageUrl(window.location.href),
    page_referrer: publicPageUrl(document.referrer),
    cookie_expires: 60 * 60 * 24 * 180, cookie_update: false,
    allow_google_signals: false, allow_ad_personalization_signals: false,
  });
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function trackPageView(): void {
  if (!enabled || typeof window === "undefined") return;
  (window as AnalyticsWindow).gtag?.("event", "page_view", { page_location: `${window.location.origin}${window.location.pathname}`, page_title: document.title });
}

export function stopAnalytics(): void {
  if (typeof window === "undefined") return;
  const target = window as AnalyticsWindow;
  target["ga-disable-G-47QNW9WCG8"] = true;
  target.gtag?.("consent", "update", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  enabled = false;
  document.getElementById(SCRIPT_ID)?.remove();
  target.gtag = undefined;
  target.dataLayer = [];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (!name || !/^(_ga(?:_|$)|_gid$|_gat(?:_|$))/.test(name)) continue;
    for (const domain of ["", window.location.hostname, ".antl.fr"]) {
      document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ""} SameSite=Lax; Secure`;
    }
  }
}
