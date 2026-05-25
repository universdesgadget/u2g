import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const FAVICON_HREF = "/favicon.png?v=3";

/** Garantit le favicon (logo 3) après navigation SPA. */
function ensureFavicon() {
  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"][type="image/png"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.sizes = "32x32";
    document.head.prepend(link);
  }
  link.href = FAVICON_HREF;
}

ensureFavicon();

createRoot(document.getElementById("root")!).render(<App />);
