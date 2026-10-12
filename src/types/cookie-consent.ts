export type CookieConsentStatus = "undecided" | "accepted" | "rejected";
export type CookieConsentChoice = Exclude<CookieConsentStatus, "undecided">;
export interface CookieConsentValue {
  readonly status: CookieConsentStatus;
  readonly isDialogOpen: boolean;
  readonly acceptAnalytics: () => void;
  readonly rejectAnalytics: () => void;
  readonly openPreferences: () => void;
  readonly closePreferences: () => void;
}
export interface CookieConsentContent {
  readonly title: string;
  readonly description: string;
  readonly accept: string;
  readonly reject: string;
  readonly customize: string;
  readonly back: string;
  readonly requiredLabel: string;
  readonly requiredDescription: string;
  readonly requiredStatus: string;
  readonly analyticsLabel: string;
  readonly analyticsDescription: string;
  readonly savePreferences: string;
  readonly privacyLink: string;
  readonly close: string;
}
