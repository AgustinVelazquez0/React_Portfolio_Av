import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaBars, FaXmark } from "react-icons/fa6";
import { useTranslation } from "../../hooks/useTranslation";
import { transitions } from "../../lib/motion";
import ThemeToggle from "../features/ThemeToggle";
import LanguageToggle from "../features/LenguageToggle";
import AVLogo from "../brand/AVLogo";
import Tag from "../ui/Tag";

function NavBar({ sidebarOpen, setSidebarOpen, onOpenPalette }) {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transitions.slow}
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "transition-colors duration-base ease-standard",
        scrolled
          ? "bg-surface-overlay backdrop-blur-xl border-b border-line-subtle"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-3.5">
          {/* Left: menu + logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="h-9 w-9 inline-flex items-center justify-center rounded-md
                bg-surface-1 border border-line-subtle
                text-ink-secondary hover:text-ink-primary hover:border-line-DEFAULT
                transition-colors duration-fast
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={sidebarOpen}
              aria-controls="portfolio-sections-menu"
              aria-label={t("nav.menuToggle")}
            >
              {sidebarOpen ? (
                <FaXmark className="w-4 h-4" />
              ) : (
                <FaBars className="w-4 h-4" />
              )}
            </button>

            <a
              href="#hero"
              className="flex items-center gap-2.5 group"
              aria-label="AV — Agustin Velazquez"
            >
              <AVLogo
                variant="icon"
                className="w-9 h-9 rounded-lg"
              />
              <span className="hidden sm:flex">
                <Tag variant="live" size="xs" dot>
                  {t("nav.availability")}
                </Tag>
              </span>
            </a>
          </div>

          {/* Right: command k + socials + toggles */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* CMD+K trigger */}
            {onOpenPalette ? (
              <button
                type="button"
                onClick={onOpenPalette}
                className="hidden md:inline-flex items-center gap-2 h-9 pl-3 pr-1.5 rounded-md
                  bg-surface-1 border border-line-subtle
                  text-ink-muted hover:text-ink-primary hover:border-line-DEFAULT
                  transition-colors duration-fast
                  text-sm"
                aria-label="Open command palette"
              >
                <span>Buscar…</span>
                <kbd className="font-mono text-2xs px-1.5 h-5 inline-flex items-center
                  rounded border border-line-DEFAULT bg-surface-0 text-ink-faint">
                  ⌘K
                </kbd>
              </button>
            ) : null}

            <div className="flex items-center gap-1.5">
              <a
                href="https://www.linkedin.com/in/agustin-vel%C3%A1zquez-dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 inline-flex items-center justify-center rounded-md
                  text-ink-secondary hover:text-ink-primary hover:bg-surface-1
                  transition-colors duration-fast"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href="https://github.com/AgustinVelazquez0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 inline-flex items-center justify-center rounded-md
                  text-ink-secondary hover:text-ink-primary hover:bg-surface-1
                  transition-colors duration-fast"
              >
                <FaGithub className="text-base" />
              </a>
            </div>

            <div className="h-6 w-px bg-line-DEFAULT mx-1" aria-hidden />

            <div className="flex items-center gap-1.5">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
