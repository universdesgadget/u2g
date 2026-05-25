import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { FAVICON_PATH } from "@/lib/constants";
import "./index.css";

/** Garantit le favicon (logo 3) sur le domaine principal après navigation SPA. */
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
