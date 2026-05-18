import { motion, AnimatePresence } from "framer-motion";
import {
  FaHouse,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaRocket,
  FaEnvelope,
  FaSquarePollHorizontal,
} from "react-icons/fa6";
import { useTranslation } from "../../hooks/useTranslation";
import { transitions } from "../../lib/motion";

/**
 * Sidebar — simplificado.
 * Sin spring + sin efecto "hinchado" siguiendo al mouse.
 * Editorial: slide-in con easing standard, indicador activo claro.
 */
function Sidebar({ isOpen, setIsOpen, onSectionChange, currentSection = "hero" }) {
  const { t } = useTranslation();

  const sections = [
    { id: "hero", label: t("nav.home"), icon: FaHouse },
    { id: "bento", label: "Proof", icon: FaSquarePollHorizontal },
    { id: "technologies", label: t("nav.technologies"), icon: FaCode },
    { id: "experience", label: t("nav.experience"), icon: FaBriefcase },
    { id: "case-studies", label: "Case studies", icon: FaRocket },
    { id: "certifications", label: t("nav.certifications"), icon: FaGraduationCap },
    { id: "projects", label: t("nav.projects"), icon: FaRocket },
    { id: "contact", label: t("nav.contact"), icon: FaEnvelope },
  ];

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    if (onSectionChange) onSectionChange(sectionId);
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transitions.standard}
            className="fixed inset-0 bg-ink-primary/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />

          <motion.aside
            id="portfolio-sections-menu"
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={transitions.slow}
            className="fixed left-0 top-[4.5rem] h-[calc(100dvh-4.5rem)] w-72 z-[45]
              bg-surface-0 border-r border-line-DEFAULT
              shadow-elevated overflow-hidden flex flex-col"
          >
            <header className="px-6 py-5 border-b border-line-subtle">
              <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
                {t("nav.navigation")}
              </p>
              <p className="text-xs text-ink-muted mt-1">
                {t("nav.sectionsDescription")}
              </p>
            </header>

            <nav className="flex-1 overflow-y-auto scrollbar-thin p-3">
              <ol className="space-y-0.5">
                {sections.map((section, idx) => {
                  const Icon = section.icon;
                  const active = currentSection === section.id;
                  return (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={[
                          "w-full text-left px-3 py-2.5 rounded-md",
                          "flex items-center gap-3 relative",
                          "text-sm font-medium",
                          "transition-colors duration-fast ease-standard",
                          active
                            ? "bg-accent/10 text-ink-primary"
                            : "text-ink-secondary hover:bg-surface-1 hover:text-ink-primary",
                        ].join(" ")}
                      >
                        {active ? (
                          <span
                            aria-hidden
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full bg-accent"
                          />
                        ) : null}
                        <span className="font-mono text-2xs text-ink-faint w-6">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <Icon
                          className={
                            active ? "text-accent" : "text-ink-faint"
                          }
                          aria-hidden
                        />
                        <span className="flex-1">{section.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>

            <footer className="px-6 py-4 border-t border-line-subtle">
              <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
                ⌘K — open palette
              </p>
            </footer>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default Sidebar;
