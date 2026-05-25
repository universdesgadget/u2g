import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

/** Garantit le favicon même après navigation SPA (React Router). */
function ensureFavicon() {
  const href = "/favicon.png";
  const existing = document.querySelector<HTMLLinkElement>('link[rel="icon"][href*="favicon"]');
  if (existing) {
    existing.href = href;
    return;
  }
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = href;
  document.head.appendChild(link);
}

ensureFavicon();

createRoot(document.getElementById("root")!).render(<App />);
