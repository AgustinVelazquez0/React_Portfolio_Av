import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import { fadeUp, stagger } from "../lib/motion";
import { FaArrowLeft } from "react-icons/fa6";
import Tag from "../components/ui/Tag";

/**
 * /changelog — timeline público de updates del portfolio.
 * Inspirado en linear.app/changelog y vercel.com/changelog.
 * Demuestra cadencia de release.
 */
const ENTRIES = [
  {
    version: "2.0.0",
    date: "2026-05-17",
    type: "release",
    title: { es: "Rebrand editorial v2", en: "Editorial rebrand v2" },
    bullets: {
      es: [
        "Sistema de diseño completo (tokens, motion, primitives).",
        "Tipografía editorial: Instrument Serif + Geist + JetBrains Mono.",
        "Acento amber editorial — fuera el cyan neón.",
        "Bento grid de prueba con métricas live (GitHub + Lighthouse).",
        "Command Palette ⌘K estilo Linear/Raycast.",
        "Agente AskMyCV con tool use real (fallback local sin LLM).",
        "3 case studies con context/role/decisiones/métricas/aprendizajes.",
        "Páginas /now, /uses, /changelog.",
      ],
      en: [
        "Full design system (tokens, motion, primitives).",
        "Editorial typography: Instrument Serif + Geist + JetBrains Mono.",
        "Editorial amber accent — neon cyan is gone.",
        "Bento grid of proof with live metrics (GitHub + Lighthouse).",
        "Linear/Raycast-style ⌘K Command Palette.",
        "AskMyCV agent with real tool use (local fallback without LLM).",
        "3 case studies with context/role/decisions/metrics/learnings.",
        "Pages /now, /uses, /changelog.",
      ],
    },
  },
  {
    version: "1.4.0",
    date: "2026-03-18",
    type: "improvement",
    title: { es: "Refinamientos visuales", en: "Visual refinements" },
    bullets: {
      es: [
        "Hero con CTAs, métricas y badge de disponibilidad.",
        "Sidebar con indicador de sección activa.",
        "Scroll progress bar superior.",
        "Hover elevado en cards de proyectos.",
      ],
      en: [
        "Hero with CTAs, metrics and availability badge.",
        "Sidebar with active-section indicator.",
        "Top scroll progress bar.",
        "Elevated hover on project cards.",
      ],
    },
  },
  {
    version: "1.0.0",
    date: "2025-01-18",
    type: "release",
    title: { es: "Lanzamiento inicial", en: "Initial launch" },
    bullets: {
      es: [
        "React 18 + Vite + Tailwind + Framer Motion + i18n.",
        "Secciones: Hero, Technologies, Experience, Projects, Contact.",
        "Toggle de tema oscuro/claro y de idioma ES/EN.",
      ],
      en: [
        "React 18 + Vite + Tailwind + Framer Motion + i18n.",
        "Sections: Hero, Technologies, Experience, Projects, Contact.",
        "Dark/light theme + ES/EN language toggle.",
      ],
    },
  },
];

const typeVariant = {
  release: "accent",
  improvement: "neutral",
  fix: "neutral",
};

export default function ChangelogPage() {
  const { language } = useTranslation();

  return (
    <main className="container mx-auto px-6 lg:px-8 pt-24 pb-20 max-w-3xl">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink-primary mb-12 transition-colors"
      >
        <FaArrowLeft />
        <span>{language === "es" ? "Volver al portfolio" : "Back to portfolio"}</span>
      </Link>

      <motion.header
        variants={stagger(0.05)}
        initial="hidden"
        animate="visible"
        className="mb-16"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-3"
        >
          /changelog
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl lg:text-7xl text-ink-primary tracking-tightest leading-none"
        >
          {language === "es" ? (
            <>
              Lo que cambié,{" "}
              <span className="italic text-ink-secondary">en orden.</span>
            </>
          ) : (
            <>
              What I changed,{" "}
              <span className="italic text-ink-secondary">in order.</span>
            </>
          )}
        </motion.h1>
      </motion.header>

      <div className="space-y-14">
        {ENTRIES.map((entry) => (
          <motion.article
            key={entry.version}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l border-line-DEFAULT"
          >
            <span
              className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-accent"
              aria-hidden
            />
            <header className="flex items-center gap-3 flex-wrap mb-3">
              <span className="font-mono text-xs text-ink-primary">
                v{entry.version}
              </span>
              <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
                {entry.date}
              </span>
              <Tag variant={typeVariant[entry.type]} size="xs">
                {entry.type}
              </Tag>
            </header>
            <h2 className="font-display text-2xl text-ink-primary tracking-tightest leading-tight mb-4">
              {entry.title[language]}
            </h2>
            <ul className="space-y-2">
              {entry.bullets[language].map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-sm text-ink-secondary leading-relaxed"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-ink-faint shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
