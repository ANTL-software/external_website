import { useEffect, useRef, useState } from "react";
import { useCookieConsent } from "./useCookieConsent";

export function useCookiePreferences() {
  const consent = useCookieConsent();
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const title = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (consent.isDialogOpen) {
      setCustomizing(false);
      setAnalytics(consent.status === "accepted");
      title.current?.focus({ preventScroll: true });
    }
    return () => { if (consent.isDialogOpen) previousFocus?.focus({ preventScroll: true }); };
  }, [consent.isDialogOpen, consent.status]);
  return { ...consent, customizing, setCustomizing, analytics, setAnalytics, title,
    savePreferences: () => analytics ? consent.acceptAnalytics() : consent.rejectAnalytics(),
  };
}
