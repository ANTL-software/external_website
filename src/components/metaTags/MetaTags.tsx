import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function MetaTags() {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(function() {
    document.title = t("meta.title");

    // URL canonique dynamique selon la route actuelle
    const canonicalUrl = `https://antl.fr${location.pathname}`;

    // Update ou créer la balise canonical
    let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

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

    // Update Open Graph URL avec la route actuelle
    const ogUrl = document.querySelector("meta[property='og:url']");
    if (ogUrl) {
      ogUrl.setAttribute("content", canonicalUrl);
    }
  }, [t, location]);

  return null;
}
