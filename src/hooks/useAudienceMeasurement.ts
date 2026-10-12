import type { BeforeSendEvent } from "@vercel/analytics";
import { useEffect } from "react";
import { startAnalytics, stopAnalytics, trackPageView, isAnalyticsEnabled, publicPageUrl } from "../services";
import { useCookieConsent } from "./useCookieConsent";
export function useAudienceMeasurement() {
  const { status } = useCookieConsent();
  useEffect(() => {
    if (status === "accepted") { startAnalytics(); trackPageView(); }
    else stopAnalytics();
  }, [status]);
  const beforeSend = (event: BeforeSendEvent) => isAnalyticsEnabled() ? { ...event, url: publicPageUrl(event.url) } : null;
  return { allowed: status === "accepted", beforeSend };
}
