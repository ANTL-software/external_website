import "./jobApplication.scss";

import type { ReactElement } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";

interface CivilityOption {
  value: string;
  label: string;
}

export default function JobApplication(): ReactElement {
  const { t } = useTranslation();
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
    { value: "madame", label: "Madame" },
    { value: "monsieur", label: "Monsieur" }
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
        <h2 id="job-heading">{t("jobApplication.title")}</h2>
        <p className="jobSubtitle">{t("jobApplication.subtitle")}</p>
      </header>

      <div className={`jobContent ${showForm ? "formVisible" : ""}`}>
        <article className="jobOffer">
          <h3>{t("jobApplication.offer.title")}</h3>
          <div className="jobMeta">
            <span className="jobLocation">{t("jobApplication.offer.location")}</span>
            <span className="jobType">{t("jobApplication.offer.type")}</span>
          </div>

          <div className="jobDescription">
            <p>{t("jobApplication.offer.description")}</p>

            <h4>{t("jobApplication.offer.missions.title")}</h4>
            <ul>
              {t("jobApplication.offer.missions.items", { returnObjects: true }) as Array<string>}
            </ul>

            <h4>{t("jobApplication.offer.profile.title")}</h4>
            <ul>
              {t("jobApplication.offer.profile.items", { returnObjects: true }) as Array<string>}
            </ul>

            <p>{t("jobApplication.offer.benefits.title")}</p>
          </div>

          {!showForm && (
            <button
              className="applyButton"
              onClick={function() { setShowForm(true); }}
              aria-label={t("jobApplication.apply")}
            >
              <span>{t("jobApplication.apply")}</span>
              <span className="buttonArrow">→</span>
            </button>
          )}
        </article>

        {showForm && (
          <aside className="applicationFormWrapper">
            <form className="applicationForm" onSubmit={handleSubmit}>
              <h3>{t("jobApplication.form.title")}</h3>

              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="civility">{t("jobApplication.form.civility")}</label>
                  <Select
                    id="civility"
                    options={civilityOptions}
                    value={formData.civility}
                    onChange={handleCivilityChange}
                    placeholder={t("jobApplication.form.selectPlaceholder")}
                    className="reactSelect"
                    classNamePrefix="reactSelect"
                    isClearable={false}
                  />
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="firstName">{t("jobApplication.form.firstName")}</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder={t("jobApplication.form.placeholderFirstName")}
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="lastName">{t("jobApplication.form.lastName")}</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder={t("jobApplication.form.placeholderLastName")}
                  />
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="phone">{t("jobApplication.form.phone")}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder={t("jobApplication.form.placeholderPhone")}
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email">{t("jobApplication.form.email")}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={t("jobApplication.form.placeholderEmail")}
                  />
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label>{t("jobApplication.form.cv")} *</label>
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
                          <span>{t("jobApplication.form.cvText")}</span>
                          <span className="fileFormats">{t("jobApplication.form.fileFormats")}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="formGroup">
                  <label>{t("jobApplication.form.coverLetter")} *</label>
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
                          <span>{t("jobApplication.form.coverLetterText")}</span>
                          <span className="fileFormats">{t("jobApplication.form.fileFormats")}</span>
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
                  aria-label={t("jobApplication.form.submit")}
                >
                  <span>{t("jobApplication.form.submit")}</span>
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
