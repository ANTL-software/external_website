import type { CookieConsentContent } from "../../../types";
import { useCookiePreferences } from "../../../hooks";
import "./CookieConsent.scss";

export function CookieConsent({ content }: {
  readonly content: CookieConsentContent;
}) {
  const consent = useCookiePreferences();
  if (!consent.isDialogOpen) return null;
  return <aside className="cookie-consent" role="dialog" aria-modal="false" aria-labelledby="cookie-consent-title" aria-describedby="cookie-consent-description">
    <div className="cookie-consent__panel">
      <div className="cookie-consent__header"><span className="cookie-consent__brand">antl</span><button type="button" className="cookie-consent__close" onClick={consent.closePreferences} aria-label={content.close}>×</button></div>
      <h2 ref={consent.title} tabIndex={-1} id="cookie-consent-title">{content.title}</h2>
      <p id="cookie-consent-description">{content.description}</p>
      {consent.customizing && <div className="cookie-consent__preferences">
        <div className="cookie-consent__preference"><div><strong>{content.requiredLabel}</strong><p>{content.requiredDescription}</p></div><span>{content.requiredStatus}</span></div>
        <label className="cookie-consent__preference"><span><strong>{content.analyticsLabel}</strong><span className="cookie-consent__detail">{content.analyticsDescription}</span></span><input type="checkbox" checked={consent.analytics} onChange={event => consent.setAnalytics(event.target.checked)} /></label>
      </div>}
      <div className="cookie-consent__actions">
        {consent.customizing ? <><button type="button" onClick={() => consent.setCustomizing(false)}>{content.back}</button><button type="button" onClick={consent.savePreferences}>{content.savePreferences}</button></> : <>
          <button type="button" onClick={consent.rejectAnalytics}>{content.reject}</button><button type="button" onClick={consent.acceptAnalytics}>{content.accept}</button>
          <button type="button" className="cookie-consent__customize" onClick={() => consent.setCustomizing(true)}>{content.customize}</button>
        </>}
      </div>
      <a className="cookie-consent__privacy" href="https://antl.fr/legal#confidentialite">{content.privacyLink}</a>
    </div>
  </aside>;
}
