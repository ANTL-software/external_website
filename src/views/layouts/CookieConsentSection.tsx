import { useTranslation } from "react-i18next";
import { CookieConsent } from "../components";
export function CookieConsentSection() {
  const { t } = useTranslation();
  const content = {
    title: t("cookieConsent.title"), description: t("cookieConsent.description"),
    accept: t("cookieConsent.accept"), reject: t("cookieConsent.reject"),
    customize: t("cookieConsent.customize"), back: t("cookieConsent.back"),
    requiredLabel: t("cookieConsent.requiredLabel"), requiredDescription: t("cookieConsent.requiredDescription"),
    requiredStatus: t("cookieConsent.requiredStatus"), analyticsLabel: t("cookieConsent.analyticsLabel"),
    analyticsDescription: t("cookieConsent.analyticsDescription"), savePreferences: t("cookieConsent.savePreferences"),
    privacyLink: t("cookieConsent.privacyLink"), close: t("cookieConsent.close"),
  };
  return <CookieConsent content={content} />;
}
