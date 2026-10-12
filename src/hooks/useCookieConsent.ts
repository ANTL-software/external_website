import { useContext } from "react";
import { CookieConsentContext } from "../context";
export function useCookieConsent() {
  const value = useContext(CookieConsentContext);
  if (!value) throw new Error("CookieConsentProvider is required");
  return value;
}
