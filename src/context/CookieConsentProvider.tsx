import { useCallback, useEffect, useMemo, useState, useRef, type PropsWithChildren } from "react";
import { getStoredCookieConsent, saveCookieConsent, stopAnalytics } from "../services";
import type { CookieConsentChoice, CookieConsentStatus } from "../types";
import { CookieConsentContext } from "./cookie-consent.context";

export function CookieConsentProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<CookieConsentStatus>("undecided");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const currentStatus = useRef<CookieConsentStatus>("undecided");
  useEffect(() => {
    const sync = () => {
      const choice = getStoredCookieConsent();
      if (currentStatus.current === "accepted" && choice !== "accepted") {
        stopAnalytics();
        window.location.reload();
        return;
      }
      currentStatus.current = choice;
      setStatus(choice);
      setIsDialogOpen(choice === "undecided");
    };
    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  const saveStatus = useCallback((choice: CookieConsentChoice) => {
    saveCookieConsent(choice);
    if (currentStatus.current === "accepted" && choice === "rejected") {
      stopAnalytics();
      window.location.reload();
      return;
    }
    currentStatus.current = choice;
    setStatus(choice);
    setIsDialogOpen(false);
  }, []);
  const value = useMemo(() => ({
    status, isDialogOpen,
    acceptAnalytics: () => saveStatus("accepted"),
    rejectAnalytics: () => saveStatus("rejected"),
    openPreferences: () => setIsDialogOpen(true),
    closePreferences: () => setIsDialogOpen(false),
  }), [status, isDialogOpen, saveStatus]);
  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}
