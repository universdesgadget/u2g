import { existsSync, writeFileSync } from "fs";
import pngToIco from "png-to-ico";

const source = "public/favicon.png";
const target = "public/favicon.ico";

if (!existsSync(source)) {
  console.warn("[favicon] public/favicon.png introuvable, génération ignorée.");
  process.exit(0);
}

const ico = await pngToIco(source);
writeFileSync(target, ico);
console.log("[favicon] public/favicon.ico généré depuis favicon.png");
