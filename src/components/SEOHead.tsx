import { useEffect } from "react";
import { SITE_URL, FAVICON_PATH } from "@/lib/constants";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const ensureMeta = (attr: "name" | "property", key: string, content: string) => {
  if (typeof document === "undefined") return;
  const selector = `meta[${attr}='${key}']`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const ensureLink = (rel: string, href: string, attributes: Record<string, string> = {}) => {
  if (typeof document === "undefined") return;
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel='${rel}']${href ? `[href='${href}']` : ""}`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    element.href = href;
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    document.head.appendChild(element);
  } else {
    element.href = href;
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  }
};

const SEOHead = ({
  title = "Univers des Gadgets — Impression Laser & Personnalisation à Douala, Cameroun",
  description = "Univers des Gadgets : impression laser, gravure, personnalisation d'objets, bâches, roll-up et sérigraphie à Douala. Services professionnels d'impression pour entreprises et particuliers au Cameroun.",
  keywords = "gadgets technologiques au Cameroun, objets publicitaires personnalisés à Yaoundé, impression sur gourdes, cadeaux d'entreprise personnalisés, accessoires informatiques à Yaoundé, cadeaux promotionnels Cameroun, impression laser douala, gravure douala, personnalisation objets cameroun, impression professionnelle, sérigraphie douala, bâches publicitaires, roll-up, gravure sur bois, marquage industriel, univers des gadgets",
  image = "/og-image.jpg",
  url = `${SITE_URL}/`,
  type = "website"
}: SEOHeadProps) => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.title = title;
    ensureMeta("name", "description", description);
    ensureMeta("name", "keywords", keywords);
    ensureMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    ensureMeta("name", "googlebot", "index, follow");
    ensureMeta("name", "bingbot", "index, follow");

    ensureLink("canonical", url);
    ensureLink("icon", FAVICON_PATH, { type: "image/png", sizes: "32x32" });
    ensureLink("icon", "/favicon.ico", { sizes: "any" });

    ensureMeta("property", "og:type", type);
    ensureMeta("property", "og:title", title);
    ensureMeta("property", "og:description", description);
    ensureMeta("property", "og:url", url);
    ensureMeta("property", "og:site_name", "Univers des Gadgets");
    ensureMeta("property", "og:locale", "fr_FR");
    ensureMeta("property", "og:image", image);
    ensureMeta("property", "og:image:width", "1200");
    ensureMeta("property", "og:image:height", "630");
    ensureMeta("property", "og:image:alt", "Univers des Gadgets - Services d'impression et personnalisation à Douala");
    ensureMeta("name", "twitter:card", "summary_large_image");
    ensureMeta("name", "twitter:title", title);
    ensureMeta("name", "twitter:description", description);
    ensureMeta("name", "twitter:image", image);
    ensureMeta("name", "twitter:image:alt", "Univers des Gadgets - Services d'impression et personnalisation à Douala");
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEOHead;
