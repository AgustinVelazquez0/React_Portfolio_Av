import { lazy, Suspense, useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import Hero from "./components/sections/Hero";
import { LanguageProvider } from "./context/LenguageContext.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Technologies = lazy(() => import("./components/sections/Technologies"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Certifications = lazy(() =>
  import("./components/sections/Certifications.jsx")
);

const Loading = () => (
  <div className="flex justify-center items-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
  </div>
);

function App() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "technologies", "experience", "certifications", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          if (currentSection !== sections[i]) {
            setCurrentSection(sections[i]);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  const handleSectionChange = (sectionId) => {
    setIsTransitioning(true);
    
    // Scroll suave con offset
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 70;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setCurrentSection(sectionId);
    }
    
    // Duración de la animación
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <LanguageProvider>
      <div
        className="overflow-x-hidden antialiased
        selection:bg-cyan-300 selection:text-cyan-900
        text-text-light dark:text-text-dark
        bg-background-light dark:bg-black
        min-h-screen relative"
      >
        <Sidebar onSectionChange={handleSectionChange} />
        
        {/* Animación de cambio de página tipo libro - suave y elegante */}
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              initial={{ 
                opacity: 0
              }}
              animate={{ 
                opacity: 0.7
              }}
              exit={{ 
                opacity: 0
              }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="fixed inset-0 z-[100] pointer-events-none
              bg-white dark:bg-neutral-900
              backdrop-blur-[2px]"
            >
              {/* Efecto de sombra sutil en el borde derecho */}
              <div className="absolute right-0 top-0 bottom-0 w-2
              bg-gradient-to-r from-black/10 via-black/5 to-transparent
              dark:from-white/5 dark:via-white/2 dark:to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="fixed top-0 -z-10 h-full w-full">
          <div
            className="absolute top-0 z-[-2] h-screen w-screen
            bg-background-dark/90 dark:bg-black"
          ></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <Suspense fallback={<Loading />}>
            <Technologies />
            <Experience />
            <Certifications />
            <Projects />
            <Contact />
          </Suspense>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
