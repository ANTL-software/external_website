import { createContext } from "react";
import type { CookieConsentValue } from "../types";
export const CookieConsentContext = createContext<CookieConsentValue | null>(null);
