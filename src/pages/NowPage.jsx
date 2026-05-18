import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/motion";
import { FaArrowLeft } from "react-icons/fa6";

/**
 * /now — convención de Derek Sivers (https://nownownow.com).
 * Demuestra: estás vivo, sabés qué priorizar, escribís en primera persona.
 */
const NOW_DATA = {
  updated: "Mayo 2026",
  city: "Montevideo, UY",
  blocks: [
    {
      heading: { es: "Trabajando en", en: "Working on" },
      items: {
        es: [
          "WhatsApp AI SaaS — evals automatizadas para tool-use agents.",
          "Arbix — estudiando analíticas de mercado y cómo encontrar la mejor estrategia de compra-venta.",
        ],
        en: [
          "WhatsApp AI SaaS — automated evals for tool-use agents.",
          "Arbix — studying market analytics and how to find the best buy-sell strategy.",
        ],
      },
    },
    {
      heading: { es: "Aprendiendo", en: "Learning" },
      items: {
        es: [
          "Creación de agentes de IA — arquitecturas con tool use real y loops agénticos.",
          "Creación de negocios — del problema al producto, validación y monetización.",
          "Marketing digital — funnels, copy y growth para productos SaaS.",
        ],
        en: [
          "Building AI agents — architectures with real tool use and agentic loops.",
          "Building businesses — from problem to product, validation and monetization.",
          "Digital marketing — funnels, copy and growth for SaaS products.",
        ],
      },
    },
    {
      heading: { es: "Disponible para", en: "Open to" },
      items: {
        es: [
          "Roles full-time en producto con IA agéntica (remoto LATAM/EU).",
          "Consultoría puntual: arquitectura AI agents, refactor a Next 14/15.",
          "Pair programming sobre código real — siempre aprendo algo.",
        ],
        en: [
          "Full-time product roles working with agentic AI (remote LATAM/EU).",
          "Punctual consulting: AI agent architecture, refactor to Next 14/15.",
          "Pair programming on real code — I always learn something.",
        ],
      },
    },
  ],
};

export default function NowPage() {
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
        className="mb-12"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-3"
        >
          /now — {NOW_DATA.updated} · {NOW_DATA.city}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl lg:text-7xl text-ink-primary tracking-tightest leading-none"
        >
          {language === "es" ? (
            <>
              Lo que tengo entre manos{" "}
              <span className="italic text-ink-secondary">ahora.</span>
            </>
          ) : (
            <>
              What I&apos;m up to{" "}
              <span className="italic text-ink-secondary">now.</span>
            </>
          )}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base text-ink-muted leading-relaxed max-w-xl"
        >
          {language === "es"
            ? "Inspirado por la convención /now de Derek Sivers. Actualizado manualmente cada mes — si esta página está desactualizada, considerá que estoy demasiado ocupado shippeando."
            : "Inspired by Derek Sivers' /now convention. Updated manually every month — if this page is stale, assume I'm too busy shipping."}
        </motion.p>
      </motion.header>

      <div className="space-y-12">
        {NOW_DATA.blocks.map((block) => (
          <motion.section
            key={block.heading.en}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-4">
              {block.heading[language]}
            </h2>
            <ul className="space-y-3">
              {block.items[language].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base lg:text-lg text-ink-secondary leading-relaxed"
                >
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>

      <p className="mt-16 text-sm text-ink-faint">
        ←{" "}
        <Link to="/uses" className="underline underline-offset-4 hover:text-ink-primary">
          /uses
        </Link>
      </p>
    </main>
  );
}
