import "./jobApplication.scss";

import type { ReactElement } from "react";
import { useState } from "react";
import Select from "react-select";

interface CivilityOption {
  value: string;
  label: string;
}

export default function JobApplication(): ReactElement {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    civility: null as CivilityOption | null,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    cv: null as File | null,
    coverLetter: null as File | null
  });

  const civilityOptions: CivilityOption[] = [
    { value: "monsieur", label: "Monsieur" },
    { value: "madame", label: "Madame" }
  ];

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData(function(prev) {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function handleCivilityChange(option: CivilityOption | null) {
    setFormData(function(prev) {
      return {
        ...prev,
        civility: option
      };
    });
  }

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>, field: "cv" | "coverLetter") {
    const file = event.target.files?.[0] || null;
    setFormData(function(prev) {
      return {
        ...prev,
        [field]: file
      };
    });
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>, field: "cv" | "coverLetter") {
    event.preventDefault();
    const file = event.dataTransfer.files[0] || null;
    setFormData(function(prev) {
      return {
        ...prev,
        [field]: file
      };
    });
  }

  function isFormValid(): boolean {
    return !!(
      formData.civility &&
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.phone.trim() &&
      formData.email.trim() &&
      formData.cv &&
      formData.coverLetter
    );
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (isFormValid()) {
      console.log("Application submitted:", formData);
    }
  }

  return (
    <section id="jobApplicationComponent" data-aos="fade-up" data-aos-duration="800" aria-labelledby="job-heading">
      <header className="jobHeader">
        <h2 id="job-heading">Rejoignez notre équipe</h2>
        <p className="jobSubtitle">Découvrez nos opportunités et rejoignez une équipe en pleine croissance</p>
      </header>

      <div className={`jobContent ${showForm ? "formVisible" : ""}`}>
        <article className="jobOffer">
          <h3>Commercial</h3>
          <div className="jobMeta">
            <span className="jobLocation"></span>
            <span className="jobType">28 heures/semaine</span>
          </div>

          <div className="jobDescription">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Vous souhaitez rejoindre une équipe dynamique et participer au développement commercial de nos clients ?
              Cette offre est faite pour vous ! Nous recherchons des profils motivés et curieux.
            </p>
            <h4>Missions principales :</h4>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
              <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco</li>
              <li>Duis aute irure dolor in reprehenderit in voluptate velit</li>
            </ul>
            <h4>Profil recherché :</h4>
            <ul>
              <li>Excepteur sint occaecat cupidatat non proident</li>
              <li>Sunt in culpa qui officia deserunt mollit anim id est laborum</li>
              <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
              <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</li>
            </ul>
            <p>
              Nous offrons un environnement de travail stimulant, des possibilités d'évolution et une formation continue.
              N'hésitez pas à nous envoyer votre candidature !
            </p>
          </div>

          {!showForm && (
            <button
              className="applyButton"
              onClick={function() { setShowForm(true); }}
              aria-label="Postuler à cette offre"
            >
              <span>Postuler !</span>
              <span className="buttonArrow">→</span>
            </button>
          )}
        </article>

        {showForm && (
          <aside className="applicationFormWrapper">
            <form className="applicationForm" onSubmit={handleSubmit}>
              <h3>Votre candidature</h3>

              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="civility">Civilité *</label>
                  <Select
                    id="civility"
                    options={civilityOptions}
                    value={formData.civility}
                    onChange={handleCivilityChange}
                    placeholder="Sélectionnez..."
                    className="reactSelect"
                    classNamePrefix="reactSelect"
                    isClearable={false}
                  />
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="firstName">Prénom *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="Jean"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="lastName">Nom *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="phone">Téléphone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="jean.dupont@email.com"
                  />
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label>CV *</label>
                  <div
                    className="fileUpload"
                    onDrop={function(e) { handleDrop(e, "cv"); }}
                    onDragOver={function(e) { e.preventDefault(); }}
                  >
                    <input
                      type="file"
                      id="cv"
                      accept=".pdf,.doc,.docx"
                      onChange={function(e) { handleFileUpload(e, "cv"); }}
                    />
                    <div className="fileUploadContent">
                      {formData.cv ? (
                        <span className="fileName">{formData.cv.name}</span>
                      ) : (
                        <>
                          <span className="uploadIcon">📄</span>
                          <span>Glissez votre CV ou cliquez pour sélectionner</span>
                          <span className="fileFormats">PDF, DOC, DOCX</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="formGroup">
                  <label>Lettre de motivation *</label>
                  <div
                    className="fileUpload"
                    onDrop={function(e) { handleDrop(e, "coverLetter"); }}
                    onDragOver={function(e) { e.preventDefault(); }}
                  >
                    <input
                      type="file"
                      id="coverLetter"
                      accept=".pdf,.doc,.docx"
                      onChange={function(e) { handleFileUpload(e, "coverLetter"); }}
                    />
                    <div className="fileUploadContent">
                      {formData.coverLetter ? (
                        <span className="fileName">{formData.coverLetter.name}</span>
                      ) : (
                        <>
                          <span className="uploadIcon">✉️</span>
                          <span>Glissez votre lettre ou cliquez pour sélectionner</span>
                          <span className="fileFormats">PDF, DOC, DOCX</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="formActions">
                <button
                  type="submit"
                  className="submitButton"
                  disabled={!isFormValid()}
                  aria-label="Envoyer ma candidature"
                >
                  <span>Envoyer ma candidature</span>
                  <span className="buttonArrow">→</span>
                </button>
              </div>
            </form>
          </aside>
        )}
      </div>
    </section>
  );
}
