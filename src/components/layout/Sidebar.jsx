import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { FaBars, FaTimes } from "react-icons/fa";

function Sidebar({ onSectionChange }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "hero", label: t("nav.home") },
    { id: "technologies", label: t("nav.technologies") },
    { id: "experience", label: t("nav.experience") },
    { id: "certifications", label: t("nav.certifications") },
    { id: "projects", label: t("nav.projects") },
    { id: "contact", label: t("nav.contact") },
  ];

  const scrollToSection = (sectionId) => {
    // Cerrar el sidebar
    setIsOpen(false);
    
    // Llamar a la función de cambio de sección con animación
    if (onSectionChange) {
      onSectionChange(sectionId);
    } else {
      // Fallback si no hay función de animación
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      }
    }
  };

  return (
    <>
      {/* Botón toggle fijo */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50
        bg-neutral-900 dark:bg-white
        border border-r border-neutral-800 dark:border-neutral-300
        text-white dark:text-neutral-900
        p-3 rounded-r-lg
        shadow-md hover:shadow-lg
        transition-all duration-200
        hover:bg-neutral-800 dark:hover:bg-neutral-100"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <FaTimes className="w-5 h-5" />
        ) : (
          <FaBars className="w-5 h-5" />
        )}
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel lateral */}
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 h-full w-64 z-50
              bg-white dark:bg-neutral-900
              border-r border-neutral-200 dark:border-neutral-800
              shadow-xl
              overflow-y-auto"
            >
              <div className="p-6">
                <div className="mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                  <h3 className="text-base font-semibold
                  text-neutral-900 dark:text-white mb-1">
                    {t("nav.navigation")}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {t("nav.sectionsDescription")}
                  </p>
                </div>
                
                <nav className="space-y-1">
                  {sections.map((section, index) => (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="w-full text-left px-4 py-2.5 rounded-md
                      text-sm
                      text-neutral-700 dark:text-neutral-300
                      hover:bg-neutral-100 dark:hover:bg-neutral-800
                      active:bg-neutral-200 dark:active:bg-neutral-700
                      transition-colors duration-150
                      font-medium"
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.2 }}
                    >
                      {section.label}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
