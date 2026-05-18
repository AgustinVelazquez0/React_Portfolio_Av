import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import { fadeUp, stagger } from "../lib/motion";
import { FaArrowLeft } from "react-icons/fa6";

/**
 * /uses — convención de la comunidad indie hackers (usesthis.com).
 * Lista deliberada de hardware, software y servicios.
 */
const USES = [
  {
    category: { es: "Hardware", en: "Hardware" },
    items: [
      { label: "MacBook Pro 14” M3 Pro", note: "" },
      { label: "Monitor LG UltraFine 27” 4K", note: "" },
      { label: "Keychron K2 (Brown switches)", note: "" },
      { label: "Logitech MX Master 3S", note: "" },
      { label: "iPhone 14 + iPad mini", note: { es: "para testing y reading", en: "for testing & reading" } },
    ],
  },
  {
    category: { es: "Editor & Terminal", en: "Editor & Terminal" },
    items: [
      { label: "Cursor IDE", note: { es: "primary; Composer + Claude 4.6", en: "primary; Composer + Claude 4.6" } },
      { label: "VS Code", note: { es: "backup", en: "backup" } },
      { label: "Warp", note: { es: "modern terminal", en: "modern terminal" } },
      { label: "Geist Sans + JetBrains Mono", note: "" },
      { label: "Theme: One Dark Pro Darker", note: "" },
    ],
  },
  {
    category: { es: "Stack diario", en: "Daily stack" },
    items: [
      { label: "React 18 + Next.js 14/15", note: "" },
      { label: "TypeScript", note: { es: "estricto", en: "strict" } },
      { label: "Tailwind CSS + shadcn/ui", note: "" },
      { label: "Prisma + PostgreSQL", note: "" },
      { label: "Supabase", note: { es: "para multi-tenant + RLS", en: "for multi-tenant + RLS" } },
      { label: "Vercel", note: { es: "deploy + cron + AI Gateway", en: "deploy + cron + AI Gateway" } },
      { label: "OpenAI · gpt-4o-mini · gpt-4o", note: "" },
    ],
  },
  {
    category: { es: "Mobile", en: "Mobile" },
    items: [
      { label: "Expo + React Native", note: "" },
      { label: "EAS Build + EAS Submit", note: "" },
      { label: "TestFlight + Google Play Console", note: "" },
      { label: "RevenueCat", note: { es: "subscriptions", en: "subscriptions" } },
      { label: "OneSignal", note: { es: "push", en: "push" } },
      { label: "Sentry", note: { es: "obs día 1", en: "obs from day 1" } },
    ],
  },
  {
    category: { es: "Productividad", en: "Productivity" },
    items: [
      { label: "Linear", note: { es: "tracking de todo", en: "tracking everything" } },
      { label: "Raycast", note: { es: "launcher", en: "launcher" } },
      { label: "Arc Browser", note: "" },
      { label: "Notion", note: { es: "knowledge base", en: "knowledge base" } },
      { label: "Figma", note: { es: "diseño y mockups", en: "design and mockups" } },
    ],
  },
];

export default function UsesPage() {
  const { language } = useTranslation();

  return (
    <main className="container mx-auto px-6 lg:px-8 pt-24 pb-20 max-w-4xl">
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
          /uses
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl lg:text-7xl text-ink-primary tracking-tightest leading-none"
        >
          {language === "es" ? (
            <>
              Lo que uso para{" "}
              <span className="italic text-ink-secondary">shippear.</span>
            </>
          ) : (
            <>
              What I use to{" "}
              <span className="italic text-ink-secondary">ship.</span>
            </>
          )}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base text-ink-muted leading-relaxed max-w-2xl"
        >
          {language === "es"
            ? "Lista deliberada. Si una herramienta no aparece acá, es porque la probé y no la uso. Pregunto a colegas y sigo /uses pages — funciona."
            : "A deliberate list. If a tool isn't here, I tried it and didn't keep it. I ask peers and follow /uses pages — it works."}
        </motion.p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16">
        {USES.map((section) => (
          <section key={section.category.en}>
            <h2 className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-5">
              {section.category[language]}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item) => {
                const note =
                  typeof item.note === "string"
                    ? item.note
                    : item.note?.[language] || "";
                return (
                  <li
                    key={item.label}
                    className="flex items-baseline justify-between gap-4 text-base text-ink-secondary
                      border-b border-line-subtle pb-3"
                  >
                    <span className="text-ink-primary">{item.label}</span>
                    {note ? (
                      <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint shrink-0">
                        {note}
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-16 text-sm text-ink-faint">
        →{" "}
        <Link to="/now" className="underline underline-offset-4 hover:text-ink-primary">
          /now
        </Link>
      </p>
    </main>
  );
}
