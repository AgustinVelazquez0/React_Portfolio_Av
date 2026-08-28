/**
 * generate-cv-pdf.mjs — imprime cv.html y cv-en.html a PDF.
 *
 * Outputs:
 *   public/cv/Agustin-Velazquez-CV-EN.pdf
 *   public/cv/Agustin-Velazquez-CV-ES.pdf
 *
 * Uso:
 *   npm run dev            (en otra terminal)
 *   npm run cv
 *
 * Notas:
 *   - Usa un Chromium ya instalado en el sistema en vez de descargar el de
 *     Playwright. Si no tenés Brave, pasá CV_CHROMIUM con la ruta a Chrome.
 *   - satori (el de generate-og.mjs) no sirve acá: no hace PDF multipágina.
 */

import { chromium } from "playwright";

const BASE = process.env.CV_BASE_URL ?? "http://localhost:5173";
const OUT_DIR = "public/cv";
const PAGES = [
  { file: "cv-en.html", out: "Agustin-Velazquez-CV-EN.pdf" },
  { file: "cv.html", out: "Agustin-Velazquez-CV-ES.pdf" },
];

// Reutiliza un Chromium del sistema para no descargar el de Playwright.
const SYSTEM_CHROMIUM =
  process.env.CV_CHROMIUM ??
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser";

const browser = await chromium.launch({
  executablePath: SYSTEM_CHROMIUM,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();

for (const { file, out } of PAGES) {
  await page.goto(`${BASE}/${file}`, { waitUntil: "load", timeout: 30000 });
  // Las fuentes vienen de Google Fonts; sin esto el PDF sale con la fallback.
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: `${OUT_DIR}/${out}`,
    printBackground: true,
    preferCSSPageSize: true,
  });
  console.log(`ok ${out}`);
}

await browser.close();
