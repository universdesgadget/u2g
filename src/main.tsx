import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { FAVICON_PATH, SITE_URL } from "@/lib/constants";
import "./index.css";

/** Quitte u2g.vercel.app vers le domaine principal (secours si vercel.json non appliqué). */
function redirectLegacyDomain() {
  const host = window.location.hostname;
  if (host === "u2g.vercel.app" || host.endsWith(".vercel.app")) {
    const target = new URL(window.location.pathname + window.location.search + window.location.hash, SITE_URL);
    window.location.replace(target.toString());
  }
}

redirectLegacyDomain();

/** Garantit le favicon (logo 3) après navigation SPA. */
function ensureFavicon() {
  const links = document.querySelectorAll<HTMLLinkElement>(
    'link[rel="icon"], link[rel="shortcut icon"]'
  );
  if (links.length === 0) {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.sizes = "32x32";
    link.href = FAVICON_PATH;
    document.head.prepend(link);
    return;
  }
  links.forEach((link) => {
    link.href = FAVICON_PATH;
  });
}

ensureFavicon();

createRoot(document.getElementById("root")!).render(<App />);
