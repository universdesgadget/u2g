import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { OG_IMAGE } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleImageFallback(
  img: HTMLImageElement,
  fallback: string = OG_IMAGE
) {
  if (img.dataset.fallbacked === "true") return;
  const currentPath = new URL(img.src, window.location.href).pathname;
  if (currentPath.endsWith(fallback)) return;

  img.dataset.fallbacked = "true";
  img.onerror = null;
  img.src = fallback;
}
