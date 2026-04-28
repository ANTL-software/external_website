import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function MetaTags() {
  const { t } = useTranslation();

  useEffect(function() {
    document.title = t("meta.title");

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", t("meta.description"));
    }

    // Update meta keywords
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute("content", t("meta.keywords"));
    }

    // Update Open Graph title
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute("content", t("meta.title"));
    }

    // Update Open Graph description
    const ogDescription = document.querySelector("meta[property='og:description']");
    if (ogDescription) {
      ogDescription.setAttribute("content", t("meta.description"));
    }
  }, [t]);

  return null;
}
