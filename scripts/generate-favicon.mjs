import { existsSync, writeFileSync, copyFileSync } from "fs";

const source = "public/favicon.png";
const target = "public/favicon.ico";

if (!existsSync(source)) {
  console.warn("[favicon] public/favicon.png introuvable, génération ignorée.");
  process.exit(0);
}

try {
  const pngToIco = (await import("png-to-ico")).default;
  const ico = await pngToIco(source);
  writeFileSync(target, ico);
  console.log("[favicon] public/favicon.ico généré (format ICO)");
} catch {
  copyFileSync(source, target);
  console.log("[favicon] public/favicon.ico copié depuis favicon.png (secours)");
}
