import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { CASE_STUDIES } from "../../data/caseStudies";
import { fadeUp, viewport, transitions } from "../../lib/motion";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaAppStoreIos,
  FaGooglePlay,
  FaXmark,
  FaChevronRight,
} from "react-icons/fa6";

/**
 * CaseStudies — sección con 3 estudios profundos.
 *
 * UX:
 *   - Grid de 3 cards resumidas (problema + métrica firma + 1 frase).
 *   - Click → expandir a vista detallada en modal-like overlay con scroll propio.
 *   - URL hash sincronizado (#case-study/<slug>) para shareable.
 *
 * Estructura editorial inspirada en paco.me + brittanychiang.com.
 */
export default function CaseStudies() {
  const { language } = useTranslation();
  const [activeSlug, setActiveSlug] = useState(null);

  // Listen to hash + custom event so Projects.jsx puede abrir uno directo
  useEffect(() => {
    const fromHash = () => {
      const m = window.location.hash.match(/^#case-study\/(.+)$/);
      if (m) setActiveSlug(m[1]);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);

    const onOpen = (e) => setActiveSlug(e.detail?.slug || null);
    window.addEventListener("av:open-case-study", onOpen);

    return () => {
      window.removeEventListener("hashchange", fromHash);
      window.removeEventListener("av:open-case-study", onOpen);
    };
  }, []);

  // Update hash when activeSlug changes
  useEffect(() => {
    if (activeSlug) {
      window.history.replaceState(null, "", `#case-study/${activeSlug}`);
      document.body.style.overflow = "hidden";
    } else {
      if (window.location.hash.startsWith("#case-study/")) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeSlug]);

  const active = CASE_STUDIES.find((cs) => cs.slug === activeSlug);

  return (
    <section
      id="case-studies"
      className="border-t border-line-subtle pt-16 pb-12"
    >
      <header className="mb-12">
        <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-3">
          03 — Case studies
        </p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="font-display text-4xl lg:text-5xl text-ink-primary tracking-tightest leading-none mb-4"
        >
          {language === "es" ? (
            <>
              Cómo construí, qué decidí,{" "}
              <span className="italic text-ink-secondary">qué aprendí.</span>
            </>
          ) : (
            <>
              How I built it, what I decided,{" "}
              <span className="italic text-ink-secondary">what I learned.</span>
            </>
          )}
        </motion.h2>
        <p className="max-w-2xl text-sm text-ink-muted leading-relaxed">
          {language === "es"
            ? "3 proyectos en profundidad con contexto, decisiones técnicas, métricas y aprendizajes — no solo screenshots."
            : "3 projects in depth with context, technical decisions, metrics and learnings — not just screenshots."}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {CASE_STUDIES.map((cs, idx) => (
          <CaseStudyCard
            key={cs.slug}
            cs={cs}
            index={idx + 1}
            language={language}
            onOpen={() => setActiveSlug(cs.slug)}
          />
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <CaseStudyOverlay
            cs={active}
            language={language}
            onClose={() => setActiveSlug(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function CaseStudyCard({ cs, index, language, onOpen }) {
  return (
    <motion.button
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      onClick={onOpen}
      className="group relative flex flex-col text-left h-full p-6 rounded-xl
        bg-surface-1 border border-line-DEFAULT
        hover:border-line-strong hover:bg-surface-2
        transition-colors duration-base ease-standard
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
          {String(index).padStart(2, "0")}
        </span>
        <Tag variant={cs.tag.variant} size="xs">
          {cs.tag.label}
        </Tag>
      </div>

      <h3 className="font-display text-2xl text-ink-primary tracking-tightest leading-tight mb-3">
        {cs.title[language]}
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-5">
        {cs.summary[language]}
      </p>

      {/* Hero metric */}
      <div className="mt-auto flex items-end justify-between">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-4xl text-accent leading-none">
            {cs.metrics[0].value}
          </span>
          <span className="font-mono text-2xs uppercase tracking-mono text-ink-muted">
            {cs.metrics[0].label[language]}
          </span>
        </div>
        <span
          className="inline-flex items-center gap-1 text-xs text-ink-secondary
            group-hover:text-accent group-hover:translate-x-0.5
            transition-all duration-fast"
        >
          {language === "es" ? "Leer" : "Read"} <FaChevronRight />
        </span>
      </div>
    </motion.button>
  );
}

function CaseStudyOverlay({ cs, language, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transitions.standard}
      className="fixed inset-0 z-[70] bg-ink-primary/40 backdrop-blur-sm flex justify-center"
      onClick={onClose}
    >
      <motion.article
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={transitions.slow}
        onClick={(e) => e.stopPropagation()}
        className="mt-12 mb-8 mx-4 w-full max-w-4xl
          bg-surface-0 border border-line-DEFAULT rounded-xl
          shadow-elevated overflow-hidden flex flex-col max-h-[calc(100vh-6rem)]"
      >
        {/* Header bar (sticky) */}
        <header className="flex items-center justify-between gap-4 px-6 py-4
          border-b border-line-DEFAULT bg-surface-0 sticky top-0 z-10">
          <div className="flex items-center gap-3 min-w-0">
            <Tag variant={cs.tag.variant} size="xs">
              {cs.tag.label}
            </Tag>
            <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint truncate">
              /case-study/{cs.slug}
            </span>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-md
              text-ink-muted hover:text-ink-primary hover:bg-surface-1
              transition-colors duration-fast"
            aria-label="Close"
          >
            <FaXmark />
          </button>
        </header>

        {/* Content (scrollable) */}
        <div className="flex-1 overflow-y-auto scrollbar-thin">
          {/* Hero image */}
          <div className="relative h-56 sm:h-72 bg-surface-2 overflow-hidden">
            <img
              src={cs.image}
              alt={cs.title[language]}
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-0 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="font-display text-3xl lg:text-5xl text-ink-primary tracking-tightest leading-tight">
                {cs.title[language]}
              </h1>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 lg:px-10 py-8 space-y-10">
            {/* Metrics grid */}
            <div className="grid grid-cols-3 gap-4 -mt-2">
              {cs.metrics.map((m) => (
                <div
                  key={m.value}
                  className="p-4 rounded-lg bg-surface-1 border border-line-subtle"
                >
                  <div className="font-display text-3xl text-accent leading-none">
                    {m.value}
                  </div>
                  <div className="font-mono text-2xs uppercase tracking-mono text-ink-muted mt-2">
                    {m.label[language]}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <p className="text-base lg:text-lg text-ink-secondary leading-relaxed">
              {cs.summary[language]}
            </p>

            {/* Sections */}
            {cs.sections.map((section) => (
              <section key={section.heading[language]}>
                <h2 className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-3">
                  {section.heading[language]}
                </h2>
                {section.body ? (
                  <p className="text-base text-ink-secondary leading-relaxed">
                    {section.body[language]}
                  </p>
                ) : null}
                {section.bullets ? (
                  <ul className="space-y-3">
                    {section.bullets.map((b) => (
                      <li
                        key={b[language]}
                        className="flex gap-3 text-base text-ink-secondary leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>{b[language]}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {/* Stack */}
            <section>
              <h2 className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-3">
                Stack
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {cs.stack.map((s) => (
                  <Tag key={s} variant="neutral" size="xs">
                    {s}
                  </Tag>
                ))}
              </div>
            </section>

            {/* CTAs */}
            <footer className="flex flex-wrap gap-2 pt-6 border-t border-line-subtle">
              {cs.links.demo ? (
                <Button
                  variant="primary"
                  size="md"
                  as="a"
                  href={cs.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  trailingIcon={FaArrowUpRightFromSquare}
                >
                  {language === "es" ? "Ver demo en vivo" : "View live demo"}
                </Button>
              ) : null}
              {cs.links.web ? (
                <Button
                  variant="primary"
                  size="md"
                  as="a"
                  href={cs.links.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  trailingIcon={FaArrowUpRightFromSquare}
                >
                  {language === "es" ? "Ver web" : "View web"}
                </Button>
              ) : null}
              {cs.links.appStore ? (
                <Button
                  variant="secondary"
                  size="md"
                  as="a"
                  href={cs.links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  leadingIcon={FaAppStoreIos}
                >
                  App Store
                </Button>
              ) : null}
              {cs.links.playStore ? (
                <Button
                  variant="secondary"
                  size="md"
                  as="a"
                  href={cs.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  leadingIcon={FaGooglePlay}
                >
                  Play Store
                </Button>
              ) : null}
              {cs.links.code ? (
                <Button
                  variant="secondary"
                  size="md"
                  as="a"
                  href={cs.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  leadingIcon={FaGithub}
                >
                  GitHub
                </Button>
              ) : null}
            </footer>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
