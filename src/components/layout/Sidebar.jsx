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

function Sidebar({ onSectionChange }) {
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
      {/* Botón toggle mejorado con efecto 3D - ahora en esquina superior izquierda */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-20 z-50
        bg-neutral-900 dark:bg-white
        text-white dark:text-neutral-900
        p-3 rounded-xl
        backdrop-blur-sm
        border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]
        overflow-hidden
        group"
        whileHover={{ 
          scale: 1.1,
          rotateY: 5,
          rotateX: -5,
          boxShadow: "0 0 25px rgba(34,211,238,0.7)",
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.3
        }}
        style={{ perspective: 1000 }}
        aria-label="Toggle menu"
      >
        {/* Efecto de brillo animado */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-neutral-900/20 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        />
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? (
            <FaTimes className="w-5 h-5 relative z-10" />
          ) : (
            <FaBars className="w-5 h-5 relative z-10" />
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
                
                {/* Efecto de partículas animadas de fondo */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(50)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full
                      bg-black/30 dark:bg-white/20"
                      style={{
                        width: `${Math.random() * 12 + 6}px`,
                        height: `${Math.random() * 12 + 6}px`,
                      }}
                      initial={{
                        x: Math.random() * 320,
                        y: Math.random() * window.innerHeight,
                        scale: Math.random() * 0.5 + 0.5,
                      }}
                      animate={{
                        y: [null, Math.random() * window.innerHeight],
                        x: [null, Math.random() * 320],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [null, Math.random() * 1.5 + 0.5],
                      }}
                      transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5,
                      }}
                    />
                  ))}
                </div>

                {/* Contenido del sidebar */}
                <div className="relative h-full overflow-y-auto
                  scrollbar-thin scrollbar-thumb-neutral-500/50 scrollbar-track-transparent">
                  <div className="p-8">
                    {/* Header mejorado */}
                    <motion.div 
                      className="mb-8 pb-6 relative"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                      }}
                      transition={{ delay: 0.2 }}
                    >
                      {/* Borde */}
                      <div className="absolute bottom-0 left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-600 to-transparent" />
                      
                      <div className="absolute inset-0 bg-gradient-to-r 
                        from-neutral-200/10 dark:from-neutral-700/10
                        blur-xl" />
                      
                      {/* Título con animación de levitación palabra por palabra */}
                      <h3 className="text-2xl font-bold
                        text-neutral-900 dark:text-white mb-2 relative z-10">
                        {t("nav.navigation").split(" ").map((word, index, array) => (
                          <motion.span
                            key={index}
                            className="inline-block"
                            animate={{
                              y: [0, -3, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.2,
                            }}
                          >
                            {word}{index < array.length - 1 && "\u00A0"}
                          </motion.span>
                        ))}
                      </h3>
                      
                      {/* Subtítulo con animación de levitación palabra por palabra */}
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 relative z-10">
                        {t("nav.sectionsDescription").split(" ").map((word, index, array) => (
                          <motion.span
                            key={index}
                            className="inline-block"
                            animate={{
                              y: [0, -2, 0],
                            }}
                            transition={{
                              duration: 3.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.15 + 0.3,
                            }}
                          >
                            {word}{index < array.length - 1 && "\u00A0"}
                          </motion.span>
                        ))}
                      </p>
                    </motion.div>
                    
                    {/* Navegación con efectos 3D */}
                    <nav className="space-y-2">
                      {sections.map((section, index) => (
                        <motion.button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className="w-full text-left px-5 py-4 rounded-xl
                          text-base font-medium
                          text-neutral-700 dark:text-neutral-300
                          relative overflow-hidden
                          group
                          backdrop-blur-sm
                          border border-transparent
                          hover:border-neutral-400 dark:hover:border-neutral-600
                          transition-all duration-300"
                          whileHover={{ 
                            x: 8,
                            scale: 1.02,
                            rotateY: 2,
                          }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ 
                            opacity: 0, 
                            x: -30,
                            rotateY: -10,
                          }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            rotateY: 0,
                          }}
                          transition={{ 
                            delay: index * 0.08 + 0.3,
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                          }}
                        >
                          {/* Fondo con gradiente animado */}
                          <motion.div
                            className="absolute inset-0
                            bg-neutral-100/0 dark:bg-black/0
                            group-hover:bg-neutral-100/50 dark:group-hover:bg-black/30
                            transition-all duration-300"
                          />
                          
                          {/* Efecto de brillo al hover */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r 
                            from-transparent via-white/30 dark:via-neutral-700/30 to-transparent
                            -translate-x-full group-hover:translate-x-full
                            transition-transform duration-700"
                          />
                          
                          {/* Contenido del botón */}
                          <div className="relative z-10 flex items-center gap-3">
                            <motion.div
                              className="text-xl text-cyan-400 dark:text-cyan-400"
                              animate={{
                                rotate: [0, 5, -5, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut",
                              }}
                            >
                              {section.icon && <section.icon />}
                            </motion.div>
                            <span className="group-hover:text-neutral-900 dark:group-hover:text-white
                              transition-all duration-300">
                              {section.label}
                            </span>
                          </div>
                          
                          {/* Indicador de selección */}
                          <motion.div
                            className="absolute left-0 top-1/2 -translate-y-1/2
                            w-1 h-0 rounded-r-full
                            bg-neutral-900 dark:bg-white
                            group-hover:h-full
                            transition-all duration-300"
                          />
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
