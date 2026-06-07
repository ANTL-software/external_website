import { StrictMode } from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import "./i18n/config";

interface RenderOptions {
  path: string;
}

export function render({ path }: RenderOptions) {
  return ReactDOMServer.renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}
