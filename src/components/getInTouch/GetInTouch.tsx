import "./getInTouch.scss";

import type { ReactElement } from "react";
import { useState } from "react";

export default function GetInTouch(): ReactElement {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    message: ""
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData(function(prev) {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (isFormValid()) {
      console.log("Form submitted:", formData);
    }
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
        <h2 id="contact-heading">Demande de devis</h2>
        <p>Remplissez le formulaire ci-dessous et notre équipe vous recontactera dans les plus brefs délais.</p>
      </header>

      <div className="getInTouchContent">
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="companyName">Nom de l'entreprise *</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              placeholder="Votre entreprise"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email">Email professionnel *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="contact@entreprise.com"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+33 1 23 45 67 89"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              placeholder="Décrivez votre besoin et nous vous recontacterons..."
            />
          </div>

          <button type="submit" className="submitButton" disabled={!isFormValid()}>
            <span>Envoyer ma demande</span>
            <span className="buttonArrow">→</span>
          </button>
        </form>

        <aside className="contactCard">
          <div className="cardContent">
            <h3>Nos coordonnées</h3>

            <div className="contactInfo">
              <div className="contactItem">
                <h4>Email</h4>
                <a href="mailto:contact@antl.fr" aria-label="Envoyer un email à contact@antl.fr">
                  contact@antl.fr
                </a>
              </div>

              <div className="contactItem">
                <h4>Téléphone</h4>
                <a href="tel:+33123456789" aria-label="Appeler le +33 1 23 45 67 89">
                  +33 1 23 45 67 89
                </a>
              </div>

              <div className="contactItem">
                <h4>Adresse</h4>
                <address>
                  48b avenue Charles De Gaulle<br />
                  17300 ROCHEFORT
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
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
