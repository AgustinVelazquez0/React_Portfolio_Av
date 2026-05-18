/**
 * Lighthouse scores — actualizar después de cada release significativo:
 *   npx lighthouse https://react-portfolio-av.vercel.app --view --preset=desktop
 *
 * Documento manualmente porque los CI integraciones (LHCI Server, Vercel
 * Speed Insights) requieren auth y este es un portfolio público.
 */

export const LIGHTHOUSE = {
  lastChecked: "2026-05",
  performance: 98,
  accessibility: 100,
  bestPractices: 100,
  seo: 100,
  url: "https://react-portfolio-av.vercel.app",
};
