import { lazy, Suspense, useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Hero from "../components/sections/Hero";
import CommandPalette from "../components/features/CommandPalette.jsx";

const Bento = lazy(() => import("../components/sections/Bento"));
const Technologies = lazy(() => import("../components/sections/Technologies"));
const Experience = lazy(() => import("../components/sections/Experience"));
const Projects = lazy(() => import("../components/sections/Projects"));
const CaseStudies = lazy(() => import("../components/sections/CaseStudies"));
const Contact = lazy(() => import("../components/sections/Contact"));
const Certifications = lazy(() =>
  import("../components/sections/Certifications.jsx")
);

const Loading = () => (
  <div className="flex justify-center items-center py-12" aria-hidden>
    <div className="h-8 w-8 rounded-full border-2 border-line-DEFAULT border-t-accent animate-spin" />
  </div>
);

export default function HomePage({
  paletteOpen,
  setPaletteOpen,
}) {
  const [currentSection, setCurrentSection] = useState("hero");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const sectionIds = [
      "hero",
      "bento",
      "technologies",
      "experience",
      "case-studies",
      "projects",
      "certifications",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          if (currentSection !== sectionIds[i]) {
            setCurrentSection(sectionIds[i]);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  const handleSectionChange = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const navbarOffset = 96;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setCurrentSection(sectionId);
  };

  return (
    <>
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        onSectionChange={handleSectionChange}
        currentSection={currentSection}
      />

      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      <CommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        onSectionChange={handleSectionChange}
      />

      <main className="container mx-auto px-6 lg:px-8">
        <Hero />
        <Suspense fallback={<Loading />}>
          <Bento />
          <Technologies />
          <Experience />
          <CaseStudies />
          <Certifications />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
