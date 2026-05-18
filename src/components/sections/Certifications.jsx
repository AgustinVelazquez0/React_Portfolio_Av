import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { fadeUp, stagger, viewport } from "../../lib/motion";
import Tag from "../ui/Tag";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

/**
 * AV Credentials — replaces old Certifications grid of glowing cards.
 *
 * Approach editorial:
 *   - 2 featured (BIOS Full Stack + Santander Data Science): cards principales
 *     con título display + tags neutros + link a credencial.
 *   - El resto en una grid densa de filas: institution / cert / year, con
 *     accordion para expandir todas las FreeCodeCamp.
 *
 * Mantiene las URLs y assets originales pero reescribe el shell visual al
 * sistema de tokens (surfaces, tags, motion presets, sin glow shadows ni
 * spring animations sobre-excitadas).
 */

const FEATURED = [
  {
    institution: "Instituto BIOS",
    title: { es: "Diplomado Full Stack Developer", en: "Full Stack Developer Diploma" },
    year: "2024 — 2025",
    blurb: {
      es: "MERN completo · React, Node, Express, MongoDB · proyectos de cliente real.",
      en: "Complete MERN · React, Node, Express, MongoDB · real-client projects.",
    },
    tags: ["React", "Node.js", "MongoDB", "Express", "MERN"],
    url: "https://drive.google.com/file/d/1YKgsHIwNC8eGZc2k1cErBzAJJR2tgwSl/view?usp=drive_link",
  },
  {
    institution: "Santander Open Academy",
    title: { es: "Introducción a Data Science", en: "Introduction to Data Science" },
    year: "2024",
    blurb: {
      es: "Fundamentos analíticos, Python, metodologías y visualización de datos.",
      en: "Analytical foundations, Python, methodologies and data viz.",
    },
    tags: ["Data Science", "Python", "Analytics"],
    url: "https://drive.google.com/file/d/12z8akRooJ2q7XJXj5sp1TANJkpEZTOeo/view",
  },
];

// Orden replica el portfolio original:
// primero los que eran "always visible" en cada bloque institucional
// (BIOS → FCC → Santander), después los que requerían expandir.
const OTHER = [
  // ---- Originalmente always-visible ----
  {
    institution: "Instituto BIOS",
    title: { es: "Habilidades digitales profesionales", en: "Digital skills for the workplace" },
    year: "2024",
    url: "https://drive.google.com/file/d/1FmlQ96_KjTt2A2_-JaCKlljDAejCCyYy/view",
  },
  {
    institution: "FreeCodeCamp",
    title: { es: "Back End Development and APIs", en: "Back End Development and APIs" },
    year: "2024",
    url: "https://www.freecodecamp.org/certification/AgustinVelazquez/back-end-development-and-apis",
  },
  {
    institution: "FreeCodeCamp",
    title: { es: "Relational Database", en: "Relational Database" },
    year: "2024",
    url: "https://www.freecodecamp.org/certification/AgustinVelazquez/relational-database-v8",
  },
  {
    institution: "Santander Open Academy",
    title: { es: "English Essentials for Professional Growth", en: "English Essentials for Professional Growth" },
    year: "2024",
    url: "https://drive.google.com/file/d/1-wnjPOFy7Ujb_G7PwPGAUiqQ_imwr6Dx/view",
  },
  // ---- Originalmente expandibles (FCC + Santander) ----
  {
    institution: "FreeCodeCamp",
    title: { es: "JavaScript Algorithms & Data Structures", en: "JavaScript Algorithms & Data Structures" },
    year: "2024",
    url: "https://www.freecodecamp.org/certification/AgustinVelazquez/javascript-algorithms-and-data-structures-v8",
  },
  {
    institution: "FreeCodeCamp",
    title: { es: "Quality Assurance", en: "Quality Assurance" },
    year: "2024",
    url: "https://www.freecodecamp.org/certification/AgustinVelazquez/quality-assurance-v7",
  },
  {
    institution: "FreeCodeCamp",
    title: { es: "Data Visualization", en: "Data Visualization" },
    year: "2024",
    url: "https://www.freecodecamp.org/certification/AgustinVelazquez/data-visualization",
  },
  {
    institution: "FreeCodeCamp",
    title: { es: "Responsive Web Design", en: "Responsive Web Design" },
    year: "2023",
    url: "https://www.freecodecamp.org/certification/AgustinVelazquez/responsive-web-design",
  },
  {
    institution: "FreeCodeCamp",
    title: { es: "Front End Development Libraries", en: "Front End Development Libraries" },
    year: "2023",
    url: "https://www.freecodecamp.org/certification/AgustinVelazquez/front-end-development-libraries",
  },
  {
    institution: "Santander Open Academy",
    title: { es: "Python Programming", en: "Python Programming" },
    year: "2024",
    url: "https://drive.google.com/file/d/1ArqH7x6Owqm3Z6Tb3DATVXj9p258XeSJ/view",
  },
  {
    institution: "Santander Open Academy",
    title: { es: "ChatGPT para profesionales", en: "ChatGPT for professionals" },
    year: "2024",
    url: "https://drive.google.com/file/d/1HmojqKuGJJPOL6PuTFZmB1cGFd-WACJ7/view",
  },
];

export default function Certifications() {
  const { language, t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? OTHER : OTHER.slice(0, 4);

  return (
    <section
      id="certifications"
      className="border-t border-line-subtle pt-16 pb-12"
    >
      <header className="mb-12">
        <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-3">
          06 — {language === "es" ? "Credenciales" : "Credentials"}
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
              Lo formal, <span className="italic text-ink-secondary">verificable</span>.
            </>
          ) : (
            <>
              The formal stuff, <span className="italic text-ink-secondary">verifiable</span>.
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
            ? "Estudio formal y certificaciones online. Cada link abre la credencial original."
            : "Formal education and online certifications. Every link opens the original credential."}
        </motion.p>
      </header>

      {/* Featured (2 cards principales) */}
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14"
      >
        {FEATURED.map((cert) => (
          <motion.a
            key={cert.title.en}
            variants={fadeUp}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col p-6 lg:p-7 rounded-xl
              bg-surface-1 border border-line-DEFAULT
              hover:border-accent/40 hover:bg-surface-1/80
              transition-colors duration-base ease-standard"
          >
            <div className="flex items-start justify-between mb-4">
              <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
                {cert.institution}
              </p>
              <FaArrowUpRightFromSquare
                className="text-ink-faint group-hover:text-accent transition-colors text-sm"
                aria-hidden
              />
            </div>
            <h3 className="font-display text-xl lg:text-2xl text-ink-primary leading-tight mb-3">
              {cert.title[language]}
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed mb-5">
              {cert.blurb[language]}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {cert.tags.map((tag) => (
                <Tag key={tag} variant="neutral" size="xs">
                  {tag}
                </Tag>
              ))}
            </div>
            <p className="mt-auto font-mono text-2xs uppercase tracking-mono text-ink-faint">
              {cert.year}
            </p>
          </motion.a>
        ))}
      </motion.div>

      {/* Otras — lista densa editorial.
          Cada item maneja su propia entrada (sin variants heredados) para que
          los items que aparecen al expandir también se animen correctamente. */}
      <div className="border-t border-line-subtle">
        <AnimatePresence initial={false}>
          {visible.map((cert, idx) => (
            <motion.a
              key={cert.title.en + cert.year}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.28,
                ease: [0, 0, 0.2, 1],
                delay: idx < 4 ? idx * 0.04 : (idx - 4) * 0.03,
              }}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between gap-6 py-4
                border-b border-line-subtle hover:border-line-DEFAULT
                transition-colors duration-fast"
            >
              <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint shrink-0 sm:min-w-[180px]">
                  {cert.institution}
                </span>
                <span className="text-sm lg:text-base text-ink-primary group-hover:text-accent transition-colors leading-snug">
                  {cert.title[language]}
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-mono text-2xs text-ink-faint">
                  {cert.year}
                </span>
                <FaArrowUpRightFromSquare
                  className="text-ink-faint group-hover:text-accent transition-colors text-xs"
                  aria-hidden
                />
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      {OTHER.length > 4 && (
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="font-mono text-2xs uppercase tracking-mono text-ink-muted
              hover:text-accent transition-colors"
          >
            {expanded
              ? t("certifications.showLess")
              : t("certifications.showMore").replace(
                  "{count}",
                  String(OTHER.length - 4)
                )}
          </button>
        </div>
      )}
    </section>
  );
}
