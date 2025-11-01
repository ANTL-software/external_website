import type { ReactElement } from "react";
import { useLoader } from "../../context/loaderContext/Loader.context";
import "./loader.scss";

export default function Loader(): ReactElement {
  const { isLoading } = useLoader();

  if (!isLoading) return <></>;

  return (
    <aside
      id="loaderComponent"
      className="loaderOverlay"
      role="status"
      aria-live="polite"
      aria-label="Chargement en cours"
    >
      <section className="loaderContainer">
        <figure className="loaderSpinner" aria-hidden="true">
          <div className="spinner"></div>
        </figure>
        <p className="loaderText">Chargement en cours...</p>
      </section>
    </aside>
  );
}
