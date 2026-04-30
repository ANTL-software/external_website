import "./getInTouch.scss";

import type { ReactElement } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { sendDevisEmail } from "../../services/emailjs.service";

export default function GetInTouch(): ReactElement {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData(function(prev) {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const success = await sendDevisEmail({
      company: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    });

    if (success) {
      setSubmitStatus('success');
      setFormData({
        companyName: "",
        email: "",
        phone: "",
        message: ""
      });
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);

    setTimeout(() => setSubmitStatus('idle'), 5000);
  }

  function isFormValid(): boolean {
    return !!(
      formData.companyName.trim() &&
      formData.email.trim() &&
      formData.message.trim()
    );
  }

  return (
    <section id="getInTouchComponent" data-aos="fade-up" data-aos-duration="800" aria-labelledby="contact-heading">
      <header className="getInTouchHeader">
        <h2 id="contact-heading">{t("getInTouch.title")}</h2>
        <p>{t("getInTouch.subtitle")}</p>
      </header>

      <div className="getInTouchContent">
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="companyName">{t("getInTouch.form.company")}</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              placeholder={t("getInTouch.form.placeholderCompany")}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email">{t("getInTouch.form.email")}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder={t("getInTouch.form.placeholderEmail")}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="phone">{t("getInTouch.form.phone")}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={t("getInTouch.form.placeholderPhone")}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="message">{t("getInTouch.form.message")}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              placeholder={t("getInTouch.form.placeholderMessage")}
            />
          </div>

          <div className="formActions">
            <button type="submit" className="submitButton" disabled={!isFormValid() || isSubmitting}>
              <span>{t("getInTouch.form.submit")}</span>
              <span className="buttonArrow">→</span>
            </button>
            {submitStatus === 'success' && (
              <p className="successMessage">{t("getInTouch.form.success")}</p>
            )}
            {submitStatus === 'error' && (
              <p className="errorMessage">{t("getInTouch.form.error")}</p>
            )}
          </div>
        </form>

        <aside className="contactCard">
          <div className="cardContent">
            <h3>{t("getInTouch.contactInfo.title")}</h3>

            <div className="contactInfo">
              <div className="contactItem">
                <h4>{t("getInTouch.contactInfo.emailLabel")}</h4>
                <a href={`mailto:${t("getInTouch.contactInfo.email")}`} aria-label={`Envoyer un email à ${t("getInTouch.contactInfo.email")}`}>
                  {t("getInTouch.contactInfo.email")}
                </a>
              </div>

              <div className="contactItem">
                <h4>{t("getInTouch.contactInfo.phoneLabel")}</h4>
                <a href={`tel:${t("getInTouch.contactInfo.phone")}`} aria-label={`Appeler le ${t("getInTouch.contactInfo.phone")}`}>
                  {t("getInTouch.contactInfo.phone")}
                </a>
              </div>

              <div className="contactItem">
                <h4>{t("getInTouch.contactInfo.addressLabel")}</h4>
                <address>
                  {t("getInTouch.contactInfo.address")}
                </address>
                <div className="mapLinks">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=48b+avenue+Charles+De+Gaulle+17300+ROCHEFORT"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ouvrir dans Google Maps"
                  >
                    Google Maps
                  </a>
                  <span className="separator">•</span>
                  <a
                    href="https://maps.apple.com/?q=48b+avenue+Charles+De+Gaulle+17300+ROCHEFORT"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ouvrir dans Apple Plans"
                  >
                    Apple Plans
                  </a>
                  <span className="separator">•</span>
                  <a
                    href="https://ul.waze.com/ul?place=IkU0OGIgYXZlbnVlIENoYXJsZSBEZSBHYXVsbGUsIDE3MzAwIFJvY2hlZm9ydCwgRnJhbmNlIjQsGm2Y7zUY6zu%2Bk%2FIg672M7uM"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ouvrir dans Waze"
                  >
                    Waze
                  </a>
                </div>
                <div className="socialIcons">
                  <a href="#" aria-label="Suivez-nous sur Facebook" rel="noopener noreferrer">
                    <FaFacebookF aria-hidden="true" />
                  </a>
                  <a href="#" aria-label="Suivez-nous sur X" rel="noopener noreferrer">
                    <FaXTwitter aria-hidden="true" />
                  </a>
                  <a href="#" aria-label="Suivez-nous sur Instagram" rel="noopener noreferrer">
                    <FaInstagram aria-hidden="true" />
                  </a>
                  <a href="#" aria-label="Suivez-nous sur TikTok" rel="noopener noreferrer">
                    <FaTiktok aria-hidden="true" />
                  </a>
                  <a href="#" aria-label="Connectez-vous sur LinkedIn" rel="noopener noreferrer">
                    <FaLinkedinIn aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
