import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import ThemeToggle from "../features/ThemeToggle";
import LanguageToggle from "../features/LenguageToggle";
import { useState, useEffect } from "react";

function NavBar() {
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-lg border-b border-neutral-200 dark:border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo a la izquierda */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">AV</span>
            </div>
          </motion.div>

          {/* Iconos sociales y controles a la derecha */}
          <div className="flex items-center gap-4">
            {/* Iconos sociales con mejor diseño */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://www.linkedin.com/in/agustin-vel%C3%A1zquez-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>

              <motion.a
                href="https://github.com/AgustinVelazquez0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-900 dark:hover:bg-neutral-700 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
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
