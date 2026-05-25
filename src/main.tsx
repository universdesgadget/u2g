import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

/** Garantit le favicon (favicon.png = logo 3) après navigation SPA. */
function ensureFavicon() {
  const href = "/favicon.png";
  document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]').forEach((el) => {
    (el as HTMLLinkElement).href = href;
  });
}

ensureFavicon();

createRoot(document.getElementById("root")!).render(<App />);
