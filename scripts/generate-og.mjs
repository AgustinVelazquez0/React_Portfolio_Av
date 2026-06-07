/**
 * generate-og.mjs — genera OG images para el portfolio usando satori.
 *
 * Outputs:
 *   public/og/home.png
 *   public/og/case-<slug>.png  (1 por case study en src/data/caseStudies.js)
 *   public/og/now.png
 *   public/og/uses.png
 *   public/og/changelog.png
 *
 * Uso:
 *   node scripts/generate-og.mjs
 *
 * Notas:
 *   - Esto reemplaza Tier 5 OG dinámico para SPA (sin SSR no se puede
 *     servir OG distinto por URL dinámicamente — los crawlers de
 *     LinkedIn/Twitter no ejecutan JS). Aquí los pre-generamos.
 *   - Para activar OG verdaderamente dinámico, migrar a Next.js (App Router
 *     + opengraph-image.tsx por ruta). Está como TODO arch-next-migration.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// ---- Load font (Instrument Serif via Google Fonts CSS) ----
async function loadGoogleFont(family, weight = 400) {
  // satori requires TTF/OTF, not WOFF2. Force an older UA so Google Fonts
  // serves us the truetype variant.
  const cssUrl = `https://fonts.googleapis.com/css?family=${family.replace(/ /g, "+")}:${weight}&display=swap`;
  const css = await (
    await fetch(cssUrl, {
      headers: {
        // IE9 UA forces .ttf
        "User-Agent": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)",
      },
    })
  ).text();
  const fontUrl = css.match(/src: url\((https?:[^)]+)\)/)?.[1];
  if (!fontUrl) throw new Error(`Could not extract font URL for ${family}`);
  const fontBuf = await (await fetch(fontUrl)).arrayBuffer();
  return Buffer.from(fontBuf);
}

const PALETTE = {
  bg: "#09090b",
  surface: "#18181b",
  ink: "#fafaf9",
  inkMuted: "#a1a1aa",
  accent: "#fbbf24",
  border: "rgba(250,250,249,0.12)",
};

function ogTemplate({ eyebrow, title, italicTail = "", subtitle, badge }) {
  return {
    type: "div",
    props: {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: PALETTE.bg,
        padding: "70px 80px",
        fontFamily: "Geist",
        color: PALETTE.ink,
        position: "relative",
      },
      children: [
        // Top bar: AV + badge
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 18,
              color: PALETTE.inkMuted,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            },
            children: [
              {
                type: "div",
                props: {
                  style: { display: "flex", alignItems: "center", gap: 14 },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: {
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          background: PALETTE.accent,
                          color: PALETTE.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 18,
                          fontWeight: 700,
                          letterSpacing: 0,
                        },
                        children: "AV",
                      },
                    },
                    "Agustin Velazquez — Full-Stack Engineer",
                  ],
                },
              },
              badge
                ? {
                    type: "div",
                    props: {
                      style: {
                        padding: "6px 14px",
                        borderRadius: 999,
                        border: `1px solid ${PALETTE.accent}`,
                        color: PALETTE.accent,
                        fontSize: 14,
                        letterSpacing: "0.16em",
                      },
                      children: badge,
                    },
                  }
                : "",
            ],
          },
        },

        // Middle: eyebrow + display title
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: 18 },
            children: [
              eyebrow
                ? {
                    type: "div",
                    props: {
                      style: {
                        fontSize: 18,
                        color: PALETTE.inkMuted,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                      },
                      children: eyebrow,
                    },
                  }
                : "",
              {
                type: "div",
                props: {
                  style: {
                    fontFamily: "Instrument Serif",
                    fontSize: 96,
                    lineHeight: 1.02,
                    letterSpacing: "-0.04em",
                    color: PALETTE.ink,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 16,
                  },
                  children: [
                    title,
                    italicTail
                      ? {
                          type: "span",
                          props: {
                            style: { color: PALETTE.inkMuted, fontStyle: "italic" },
                            children: italicTail,
                          },
                        }
                      : "",
                  ],
                },
              },
              subtitle
                ? {
                    type: "div",
                    props: {
                      style: {
                        fontSize: 24,
                        color: PALETTE.inkMuted,
                        maxWidth: 880,
                        lineHeight: 1.35,
                      },
                      children: subtitle,
                    },
                  }
                : "",
            ],
          },
        },

        // Bottom: brand line
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: `1px solid ${PALETTE.border}`,
              paddingTop: 22,
              fontSize: 16,
              color: PALETTE.inkMuted,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            },
            children: [
              "Montevideo · UY · Remote global",
              { type: "div", props: { children: "react-portfolio-av.vercel.app" } },
            ],
          },
        },
      ],
    },
  };
}

async function render(element, outPath) {
  const fonts = [
    {
      name: "Geist",
      data: await loadGoogleFont("Geist", 400),
      weight: 400,
      style: "normal",
    },
    {
      name: "Geist",
      data: await loadGoogleFont("Geist", 600),
      weight: 600,
      style: "normal",
    },
    {
      name: "Instrument Serif",
      data: await loadGoogleFont("Instrument Serif", 400),
      weight: 400,
      style: "normal",
    },
  ];

  const svg = await satori(element, {
    width: 1200,
    height: 630,
    fonts,
  });
  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } });
  const png = resvg.render().asPng();
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, png);
  console.log(`✓ ${outPath.replace(root + "/", "")}`);
}

// ---- generate ----
async function main() {
  const outDir = join(root, "public", "og");

  await render(
    ogTemplate({
      eyebrow: "Selected work · 2026",
      title: "Shipping",
      italicTail: "to production.",
      subtitle:
        "Full-stack engineer building apps for the App Store, Play Store and the web. Production-grade SaaS — and AI agents when the problem calls for it.",
      badge: "Available",
    }),
    join(outDir, "home.png")
  );

  await render(
    ogTemplate({
      eyebrow: "/now",
      title: "What I'm",
      italicTail: "up to.",
      subtitle:
        "A monthly log of what I'm building, learning and open to. Updated by hand.",
    }),
    join(outDir, "now.png")
  );

  await render(
    ogTemplate({
      eyebrow: "/uses",
      title: "What I use to",
      italicTail: "ship.",
      subtitle:
        "A deliberate list of hardware, editor, stack and tooling I rely on every day.",
    }),
    join(outDir, "uses.png")
  );

  await render(
    ogTemplate({
      eyebrow: "/changelog",
      title: "What I changed,",
      italicTail: "in order.",
      subtitle:
        "Public timeline of updates to this portfolio. Cadence over polish.",
    }),
    join(outDir, "changelog.png")
  );

  // Case studies — hardcoded para evitar parsear JSX/imports en Node
  const caseStudies = [
    {
      slug: "whatsapp-ai-saas",
      tagLabel: "Agentic AI",
      title: "WhatsApp AI SaaS —",
      italic: "agents with real tool use",
      subtitle:
        "SaaS where the AI agent autonomously decides which tools to call, not following a fixed workflow. Up to 10 iterations per message.",
      badge: "10x",
    },
    {
      slug: "mental",
      tagLabel: "Mobile · Cross-platform",
      title: "Mental —",
      italic: "cross-platform hypnosis",
      subtitle:
        "React Native + React Native Web with dynamic AI voice (ElevenLabs), offline audio, subscriptions. Live on App Store and Play Store.",
      badge: "2 stores",
    },
    {
      slug: "arbix",
      tagLabel: "SaaS · Scraping",
      title: "Arbix —",
      italic: "Alibaba / Amazon arbitrage",
      subtitle:
        "5 fault-tolerant scrapers, multi-marketplace calculator across 9 countries, 4 Vercel cron jobs and educational mode.",
      badge: "9 markets",
    },
  ];
  for (const cs of caseStudies) {
    await render(
      ogTemplate({
        eyebrow: `Case study · ${cs.tagLabel}`,
        title: cs.title,
        italicTail: cs.italic,
        subtitle: cs.subtitle,
        badge: cs.badge,
      }),
      join(outDir, `case-${cs.slug}.png`)
    );
  }

  console.log("\nDone. Generated OG images live in public/og/.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
