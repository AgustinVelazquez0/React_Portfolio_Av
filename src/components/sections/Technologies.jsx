import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { fadeUp, stagger, viewport } from "../../lib/motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiOpenai,
  SiPrisma,
  SiExpo,
  SiVercel,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";

/**
 * AV Stack — spec-sheet editorial (Pentagram/Linear style).
 *
 * Filosofía: en lugar de un grid con 60 logos coloridos ("logo soup",
 * patrón de portfolios junior), se muestra el stack como una hoja técnica:
 *   - 8 iconos signature al inicio (los que importan)
 *   - 6 categorías con listas tipográficas mono (no iconos por tech)
 *   - Una línea por herramienta, descripción corta en gris
 *
 * Las certificaciones específicas viven en Credentials. El catálogo
 * exhaustivo de herramientas (incluyendo Canva, WeTransfer, etc.) vive
 * en /uses.
 */

const SIGNATURE_ICONS = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: FaReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiPrisma, name: "Prisma" },
  { icon: SiOpenai, name: "OpenAI" },
  { icon: SiExpo, name: "Expo" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiVercel, name: "Vercel" },
];

const STACK_GROUPS = {
  es: [
    {
      label: "Frontend",
      items: [
        ["React · React Native", "componentes, hooks, perf"],
        ["Next.js 14 / 15", "App Router, RSC, server actions"],
        ["TypeScript", "tipos estrictos en producción"],
        ["Tailwind · shadcn/ui", "design systems escalables"],
        ["React Native Web", "single codebase iOS · Android · Web"],
      ],
    },
    {
      label: "Backend",
      items: [
        ["Node.js · Express", "APIs REST, middlewares, rate limit"],
        ["Prisma ORM", "schemas, migraciones, type-safe queries"],
        ["NextAuth.js", "OAuth, sesiones, multi-tenant"],
        ["Microservicios", "boundaries claras, escalabilidad horizontal"],
      ],
    },
    {
      label: "AI · Agentes",
      items: [
        ["OpenAI · Groq · Gemini", "LLMs con tool use real"],
        ["Loops agénticos", "hasta 10 iteraciones autónomas por mensaje"],
        ["ElevenLabs", "síntesis de voz dinámica"],
        ["Prompt engineering", "system design para producción"],
        ["Vercel AI SDK", "streaming, tools, multi-step"],
      ],
    },
    {
      label: "Mobile",
      items: [
        ["Expo · EAS", "builds, OTA updates, submit"],
        ["App Store Connect", "TestFlight, releases, reviews"],
        ["Google Play Console", "internal/beta tracks, rollouts"],
        ["RevenueCat", "suscripciones in-app, paywalls"],
        ["OneSignal", "push notifications segmentadas"],
      ],
    },
    {
      label: "Data",
      items: [
        ["PostgreSQL · Supabase", "RLS, índices, particionado"],
        ["MongoDB", "esquemas flexibles, agregaciones"],
        ["Recharts · D3", "visualizaciones interactivas"],
      ],
    },
    {
      label: "Ops · Tooling",
      items: [
        ["Vercel · Render", "deploys, cron jobs, edge functions"],
        ["Sentry", "errors, performance, source maps"],
        ["Docker · Linux", "containers, dev parity"],
        ["Git · GitHub", "trunk-based, PR reviews"],
        ["Cursor · Claude", "AI-pair programming"],
      ],
    },
  ],
  en: [
    {
      label: "Frontend",
      items: [
        ["React · React Native", "components, hooks, perf"],
        ["Next.js 14 / 15", "App Router, RSC, server actions"],
        ["TypeScript", "strict types in production"],
        ["Tailwind · shadcn/ui", "scalable design systems"],
        ["React Native Web", "single codebase iOS · Android · Web"],
      ],
    },
    {
      label: "Backend",
      items: [
        ["Node.js · Express", "REST APIs, middlewares, rate limits"],
        ["Prisma ORM", "schemas, migrations, type-safe queries"],
        ["NextAuth.js", "OAuth, sessions, multi-tenant"],
        ["Microservices", "clear boundaries, horizontal scale"],
      ],
    },
    {
      label: "AI · Agents",
      items: [
        ["OpenAI · Groq · Gemini", "LLMs with real tool use"],
        ["Agentic loops", "up to 10 autonomous iterations per message"],
        ["ElevenLabs", "dynamic voice synthesis"],
        ["Prompt engineering", "system design for production"],
        ["Vercel AI SDK", "streaming, tools, multi-step"],
      ],
    },
    {
      label: "Mobile",
      items: [
        ["Expo · EAS", "builds, OTA updates, submit"],
        ["App Store Connect", "TestFlight, releases, reviews"],
        ["Google Play Console", "internal/beta tracks, rollouts"],
        ["RevenueCat", "in-app subscriptions, paywalls"],
        ["OneSignal", "segmented push notifications"],
      ],
    },
    {
      label: "Data",
      items: [
        ["PostgreSQL · Supabase", "RLS, indexes, partitioning"],
        ["MongoDB", "flexible schemas, aggregations"],
        ["Recharts · D3", "interactive visualizations"],
      ],
    },
    {
      label: "Ops · Tooling",
      items: [
        ["Vercel · Render", "deploys, cron jobs, edge functions"],
        ["Sentry", "errors, performance, source maps"],
        ["Docker · Linux", "containers, dev parity"],
        ["Git · GitHub", "trunk-based, PR reviews"],
        ["Cursor · Claude", "AI-pair programming"],
      ],
    },
  ],
};

export default function Technologies() {
  const { language } = useTranslation();
  const groups = STACK_GROUPS[language] || STACK_GROUPS.es;

  return (
    <section
      id="technologies"
      className="border-t border-line-subtle pt-16 pb-12"
    >
      <header className="mb-12">
        <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-3">
          05 — {language === "es" ? "Stack" : "Stack"}
        </p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="font-display text-4xl lg:text-5xl text-ink-primary tracking-tightest leading-none"
        >
          {language === "es" ? (
            <>
              Herramientas que <span className="italic text-ink-secondary">elijo a diario</span>.
            </>
          ) : (
            <>
              Tools I <span className="italic text-ink-secondary">reach for daily</span>.
            </>
          )}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-4 text-base text-ink-muted max-w-xl leading-relaxed"
        >
          {language === "es"
            ? "No es una lista exhaustiva ni una colección de logos. Son las herramientas que conozco a fondo y elijo cuando importa."
            : "Not an exhaustive list nor a logo collection. These are the tools I know deeply and pick when it matters."}
        </motion.p>
      </header>

      {/* Signature icons — compendio visual mínimo */}
      <motion.div
        variants={stagger(0.03)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex flex-wrap gap-2 mb-14 max-w-3xl"
      >
        {SIGNATURE_ICONS.map(({ icon: Icon, name }) => (
          <motion.div
            key={name}
            variants={fadeUp}
            className="flex items-center justify-center w-12 h-12 rounded-md
              bg-surface-1 border border-line-subtle text-ink-secondary
              hover:text-ink-primary hover:border-line-DEFAULT
              transition-colors duration-fast"
            title={name}
          >
            <Icon className="text-xl" aria-label={name} />
          </motion.div>
        ))}
      </motion.div>

      {/* Spec sheet — listas editoriales */}
      <motion.div
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
      >
        {groups.map((group) => (
          <motion.div key={group.label} variants={fadeUp}>
            <h3 className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-5 pb-3 border-b border-line-subtle">
              {group.label}
            </h3>
            <ul className="space-y-3.5">
              {group.items.map(([name, desc]) => (
                <li key={name} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="font-mono text-sm text-ink-primary shrink-0 min-w-[180px]">
                    {name}
                  </span>
                  <span className="text-sm text-ink-muted leading-snug">
                    {desc}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
