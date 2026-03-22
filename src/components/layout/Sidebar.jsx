import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaCode, 
  FaBriefcase, 
  FaGraduationCap, 
  FaRocket, 
  FaEnvelope 
} from "react-icons/fa";

// Partículas más abajo para no tapar el texto (nav ocupa ~250px arriba)
const PARTICLES = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: (i * 7.3) % 300,
  y: 320 + (i * 11.7) % 500,
  size: 10 + (i % 4) * 5,
  duration: 10 + (i % 6),
  delay: (i * 0.7) % 5,
  cyan: i % 5 === 0,
}));

function Sidebar({ onSectionChange, currentSection = "hero" }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sections = [
    { id: "hero", label: t("nav.home"), icon: FaHome },
    { id: "technologies", label: t("nav.technologies"), icon: FaCode },
    { id: "experience", label: t("nav.experience"), icon: FaBriefcase },
    { id: "certifications", label: t("nav.certifications"), icon: FaGraduationCap },
    { id: "projects", label: t("nav.projects"), icon: FaRocket },
    { id: "contact", label: t("nav.contact"), icon: FaEnvelope },
  ];

  // Efecto de "hinchado" para el sidebar
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);
  const scaleXSpring = useSpring(scaleX, { stiffness: 200, damping: 25 });
  const scaleYSpring = useSpring(scaleY, { stiffness: 200, damping: 25 });

  useEffect(() => {
    if (!isOpen) return;

    const handleMouseMove = (e) => {
      const sidebar = document.querySelector('[data-sidebar]');
      if (!sidebar) return;
      
      const rect = sidebar.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Calcular la distancia del mouse al centro del sidebar
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distanceX = Math.abs(mouseX - centerX);
      const distanceY = Math.abs(mouseY - centerY);
      
      // Normalizar la distancia (0 = centro, 1 = borde)
      const normalizedX = distanceX / centerX;
      const normalizedY = distanceY / centerY;
      
      // El efecto es más fuerte cuando el mouse está más cerca del centro
      // Invertir para que se "hinche" más cerca del mouse
      const proximityX = 1 - Math.min(normalizedX, 1);
      const proximityY = 1 - Math.min(normalizedY, 1);
      
      // Escala máxima de hinchado (1.05 = 5% más grande)
      const maxScale = 1.08;
      const minScale = 1.0;
      
      // Calcular escala basada en la proximidad
      const scaleXValue = minScale + (maxScale - minScale) * proximityX * 0.6;
      const scaleYValue = minScale + (maxScale - minScale) * proximityY * 0.4;
      
      scaleX.set(scaleXValue);
      scaleY.set(scaleYValue);
    };

    const handleMouseLeave = () => {
      // Volver a la escala normal cuando el mouse sale del sidebar
      scaleX.set(1);
      scaleY.set(1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const sidebar = document.querySelector('[data-sidebar]');
    if (sidebar) {
      sidebar.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (sidebar) {
        sidebar.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isOpen, scaleX, scaleY]);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    
    if (onSectionChange) {
      onSectionChange(sectionId);
    } else {
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
      {/* Botón toggle minimalista - integrado con el diseño */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-20 z-50
        p-2.5 rounded-lg
        bg-white/90 dark:bg-neutral-800/90
        text-neutral-600 dark:text-neutral-300
        border border-neutral-300 dark:border-neutral-600
        hover:bg-neutral-100 dark:hover:bg-neutral-700
        hover:text-neutral-900 dark:hover:text-white
        hover:border-neutral-400 dark:hover:border-neutral-500
        backdrop-blur-sm
        transition-all duration-200
        group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.3
        }}
        aria-label="Toggle menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {isOpen ? (
            <FaTimes className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
          ) : (
            <FaBars className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
          )}
        </motion.div>
      </motion.button>

      {/* Sidebar con efectos 3D */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay con blur y efecto de profundidad */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel lateral con efecto de hinchado */}
            <motion.div
              data-sidebar
              initial={{ 
                x: -400,
                opacity: 0,
              }}
              animate={{ 
                x: 0,
                opacity: 1,
              }}
              exit={{ 
                x: -400,
                opacity: 0,
              }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 200,
                mass: 0.8
              }}
              className="fixed left-0 top-0 h-full w-80 z-50
              overflow-hidden"
              style={{
                transformOrigin: "left center",
                scaleX: scaleXSpring,
                scaleY: scaleYSpring,
              }}
            >
              {/* Fondo con glassmorphism */}
              <div className="absolute inset-0
                bg-white/95 dark:bg-black/95
                backdrop-blur-xl
                border-r border-neutral-200 dark:border-neutral-700
                shadow-2xl">
                
                {/* Efecto de partículas - visibles con glow sutil y flotación */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {PARTICLES.map((p) => (
                    <motion.div
                      key={p.id}
                      className={`absolute rounded-full blur-[0.5px]
                        ${p.cyan 
                          ? "bg-cyan-400/60 dark:bg-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.6)]" 
                          : "bg-neutral-400/55 dark:bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                        }`}
                      style={{
                        width: p.size,
                        height: p.size,
                        left: p.x,
                        top: p.y,
                      }}
                      animate={{
                        y: [0, -80, 0],
                        x: [0, ((p.id % 3) - 1) * 12, 0],
                        opacity: [0.5, 0.9, 0.5],
                      }}
                      transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: p.delay,
                      }}
                    />
                  ))}
                </div>

                {/* Contenido del sidebar */}
                <div className="relative h-full overflow-y-auto
                  scrollbar-thin scrollbar-thumb-neutral-500/50 scrollbar-track-transparent">
                  <div className="p-6">
                    {/* Header compacto */}
                    <motion.div 
                      className="mb-4 pb-4 relative"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="absolute bottom-0 left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-600 to-transparent" />
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-0.5">
                        {t("nav.navigation")}
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {t("nav.sectionsDescription")}
                      </p>
                    </motion.div>
                    
                    {/* Navegación compacta */}
                    <nav className="space-y-1">
                      {sections.map((section, index) => (
                        <motion.button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg
                          text-sm font-medium font-sans
                          relative overflow-hidden group
                          transition-all duration-200
                          ${currentSection === section.id
                            ? "text-cyan-600 dark:text-cyan-400 bg-cyan-500/15 dark:bg-cyan-500/15 shadow-sm"
                            : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-white"
                          }`}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.99 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 + 0.2, duration: 0.25 }}
                        >
                          {/* Indicador activo - barra izquierda */}
                          {currentSection === section.id && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-cyan-500" />
                          )}
                          <div className="relative z-10 flex items-center gap-2.5">
                            <span className={`text-base ${currentSection === section.id ? "text-cyan-500" : "text-neutral-400 group-hover:text-cyan-400"}`}>
                              {section.icon && <section.icon />}
                            </span>
                            <span>{section.label}</span>
                          </div>
                        </motion.button>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
