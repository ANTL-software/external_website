import "./languageSelector.scss";

import { useTranslation } from "react-i18next";
import type { ReactElement } from "react";

export default function LanguageSelector(): ReactElement {
  const { i18n } = useTranslation();

  function changeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div className="languageSelector">
      <select
        className="languageSelect"
        value={i18n.language}
        onChange={changeLanguage}
        aria-label="Select language"
      >
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}
