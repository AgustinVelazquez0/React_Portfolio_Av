import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import ThemeToggle from "../features/ThemeToggle";
import LanguageToggle from "../features/LenguageToggle";
import { useState, useEffect } from "react";
import { useTranslation } from "../../hooks/useTranslation";

function NavBar({ sidebarOpen, setSidebarOpen }) {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-lg border-b border-neutral-200 dark:border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between py-4">
          {/* Menú secciones a la izquierda del logo AV */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
              bg-white/90 dark:bg-neutral-800/90
              text-neutral-600 dark:text-neutral-300
              border border-neutral-300 dark:border-neutral-600
              hover:bg-neutral-100 dark:hover:bg-neutral-700
              hover:text-neutral-900 dark:hover:text-white
              hover:border-neutral-400 dark:hover:border-neutral-500
              hover:scale-[1.02] active:scale-[0.98]
              backdrop-blur-sm
              transition-transform duration-200 ease-out
              group animate-sidebar-btn-entrance"
              aria-expanded={sidebarOpen}
              aria-controls="portfolio-sections-menu"
              aria-label={t("nav.menuToggle")}
            >
              <span
                className={`flex items-center justify-center transition-transform duration-200 ease-out ${sidebarOpen ? "rotate-90" : ""}`}
                aria-hidden
              >
                {sidebarOpen ? (
                  <FaTimes className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                ) : (
                  <FaBars className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                )}
              </span>
            </button>
            <motion.div
              className="flex items-center gap-2 sm:gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">AV</span>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium
                bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {t("nav.availability")}
              </span>
            </motion.div>
          </div>

          {/* Iconos sociales - más grandes en desktop */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <motion.a
                href="https://www.linkedin.com/in/agustin-vel%C3%A1zquez-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 lg:p-2.5"
                whileHover={{ scale: 1.08, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl lg:text-2xl" />
              </motion.a>

              <motion.a
                href="https://github.com/AgustinVelazquez0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-900 dark:hover:bg-neutral-700 hover:text-white transition-all duration-300 lg:p-2.5"
                whileHover={{ scale: 1.08, rotate: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <FaGithub className="text-xl lg:text-2xl" />
              </motion.a>
            </div>

            {/* Separador */}
            <div className="h-8 w-px bg-neutral-300 dark:bg-neutral-700" />

            {/* Toggles */}
            <div className="flex gap-3 items-center">
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
