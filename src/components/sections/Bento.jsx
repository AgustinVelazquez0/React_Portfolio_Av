import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { fadeUp, stagger, viewport } from "../../lib/motion";
import AskMyCV from "../features/AskMyCV";
import Tag from "../ui/Tag";
import GitHubActivity from "../features/GitHubActivity";
import LighthouseCard from "../features/LighthouseCard";
import {
  FaQuoteLeft,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiOpenai,
} from "react-icons/si";

/**
 * AV Bento — proof grid asimétrico (Apple/Vercel style).
 * Reemplaza el approach de "lista de logos" por un grid editorial que
 * comunica 6-8 conceptos sin scrollear.
 *
 * Layout desktop (4 columnas × 4 rows):
 *   ┌──────────────────┬─────────┬─────────┐
 *   │                  │  Now    │  Stack  │
 *   │   Ask my CV      ├─────────┴─────────┤
 *   │   (2×2 hero)     │      GitHub       │
 *   ├──────────────────┼─────────┬─────────┤
 *   │   Testimonial    │  Light  │  Philo  │
 *   │   (2 cols)       │  house  │  sophy  │
 *   ├──────────────────┴─────────┴─────────┤
 *   │           Status (CTA full)          │
 *   └──────────────────────────────────────┘
 *
 * Las filas usan minmax para crecer con el contenido (no se cortan).
 */
export default function Bento() {
  const { language } = useTranslation();

  return (
    <section
      id="bento"
      className="border-t border-line-subtle pt-16 pb-12"
    >
      <header className="mb-10">
        <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-3">
          01 — {language === "es" ? "Pruebas" : "Proof"}
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
              No te lo cuento.{" "}
              <span className="italic text-ink-secondary">Te lo muestro.</span>
            </>
          ) : (
            <>
              Don&apos;t take my word for it.{" "}
              <span className="italic text-ink-secondary">See it live.</span>
            </>
          )}
        </motion.h2>
      </header>

      <motion.div
        variants={stagger(0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]"
      >
        {/* Ask my CV — 2 col × 2 rows (hero piece) */}
        <BentoCell
          className="sm:col-span-2 lg:col-span-2 lg:row-span-2 p-6"
          accent
        >
          <AskMyCV />
        </BentoCell>

        {/* Now */}
        <BentoCell className="p-5">
          <CellLabel>Now</CellLabel>
          <p className="font-display text-xl leading-tight text-ink-primary mt-2">
            {language === "es"
              ? "Shippeando en Mental"
              : "Shipping at Mental"}
          </p>
          <p className="text-xs text-ink-muted mt-2 leading-relaxed">
            {language === "es"
              ? "Onboarding multi-step, suscripciones, evals de agentes."
              : "Multi-step onboarding, subscriptions, agent evals."}
          </p>
          <a
            href="/now"
            className="mt-auto inline-flex items-center gap-1 text-xs text-accent hover:underline"
          >
            /now →
          </a>
        </BentoCell>

        {/* Stack signature — solo 6 logos */}
        <BentoCell className="p-5">
          <CellLabel>Stack signature</CellLabel>
          <div className="mt-3 grid grid-cols-3 gap-3 text-xl text-ink-secondary">
            <StackIcon icon={SiNextdotjs} label="Next.js" />
            <StackIcon icon={FaReact} label="React" />
            <StackIcon icon={SiTypescript} label="TypeScript" />
            <StackIcon icon={FaNodeJs} label="Node" />
            <StackIcon icon={SiPostgresql} label="Postgres" />
            <StackIcon icon={SiOpenai} label="OpenAI" />
          </div>
          <p className="mt-auto text-2xs font-mono uppercase tracking-mono text-ink-faint">
            {language === "es" ? "+ herramientas" : "+ tooling"}
          </p>
        </BentoCell>

        {/* GitHub activity (live) — 2 col */}
        <BentoCell className="sm:col-span-2 p-5">
          <GitHubActivity username="AgustinVelazquez0" />
        </BentoCell>

        {/* Testimonial — 2 col */}
        <BentoCell className="sm:col-span-2 p-6">
          <FaQuoteLeft
            className="text-accent text-lg mb-3 opacity-60"
            aria-hidden
          />
          <p className="font-display text-lg lg:text-xl leading-snug text-ink-primary italic">
            {language === "es" ? (
              <>
                &ldquo;Agustin entrega calidad de producto donde otros entregan
                features. Le importa el detalle.&rdquo;
              </>
            ) : (
              <>
                &ldquo;Agustin ships product-grade quality where others ship
                features. He cares about the detail.&rdquo;
              </>
            )}
          </p>
          <footer className="mt-3 text-2xs font-mono uppercase tracking-mono text-ink-faint">
            {language === "es"
              ? "— colega de equipo · 2025"
              : "— teammate · 2025"}
          </footer>
        </BentoCell>

        {/* Lighthouse live */}
        <BentoCell className="p-5">
          <LighthouseCard />
        </BentoCell>

        {/* Philosophy */}
        <BentoCell className="p-5" accent>
          <CellLabel>Philosophy</CellLabel>
          <p className="font-display text-lg lg:text-xl leading-tight text-ink-primary mt-2 italic">
            {language === "es"
              ? "Code is the medium. Detail is the difference."
              : "Code is the medium. Detail is the difference."}
          </p>
        </BentoCell>

        {/* Availability — CTA full-width último row */}
        <BentoCell
          className="sm:col-span-2 lg:col-span-4 p-6 lg:p-8"
          accent
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <CellLabel>Status</CellLabel>
                <Tag variant="live" size="xs" dot>
                  {language === "es" ? "Disponible" : "Available"}
                </Tag>
              </div>
              <p className="font-display text-2xl lg:text-3xl text-ink-primary leading-tight">
                {language === "es"
                  ? "Disponible para nuevos proyectos"
                  : "Available for new projects"}
              </p>
              <p className="text-sm text-ink-muted mt-1.5 leading-relaxed">
                {language === "es"
                  ? "Full-time o por proyecto. Remoto desde Montevideo, Uruguay."
                  : "Full-time or project work. Remote from Montevideo, Uruguay."}
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center justify-center gap-2
                px-5 h-11 rounded-md font-mono text-xs uppercase tracking-mono
                bg-accent text-accent-ink hover:bg-accent-soft
                transition-colors duration-fast"
            >
              {language === "es" ? "Contactar" : "Get in touch"}
              <span aria-hidden>→</span>
            </a>
          </div>
        </BentoCell>
      </motion.div>
    </section>
  );
}

function BentoCell({ children, className = "", accent = false }) {
  return (
    <motion.div
      variants={fadeUp}
      className={[
        "relative flex flex-col rounded-xl border overflow-hidden",
        "transition-colors duration-base ease-standard",
        accent
          ? "bg-accent/[0.04] border-accent/30 hover:border-accent/50"
          : "bg-surface-1 border-line-DEFAULT hover:border-line-strong",
        className,
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
}

function CellLabel({ children }) {
  return (
    <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
      {children}
    </p>
  );
}

function StackIcon({ icon: Icon, label }) {
  return (
    <div
      className="flex items-center justify-center aspect-square rounded-md
        bg-surface-0 border border-line-subtle text-ink-secondary
        hover:text-ink-primary hover:border-line-DEFAULT
        transition-colors duration-fast"
      title={label}
    >
      <Icon aria-label={label} />
    </div>
  );
}
