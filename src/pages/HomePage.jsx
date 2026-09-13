import { lazy, Suspense, useState, useEffect, useRef } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Hero from "../components/sections/Hero";
import CommandPalette from "../components/features/CommandPalette.jsx";
import FileIndex from "../components/sections/FileIndex.jsx";

const Bento = lazy(() => import("../components/sections/Bento"));
const Technologies = lazy(() => import("../components/sections/Technologies"));
const Experience = lazy(() => import("../components/sections/Experience"));
const Projects = lazy(() => import("../components/sections/Projects"));
const CaseStudies = lazy(() => import("../components/sections/CaseStudies"));
const Contact = lazy(() => import("../components/sections/Contact"));
const EvidenceMatrix = lazy(() => import("../components/sections/EvidenceMatrix"));
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
  const reachedRef = useRef(new Set());

  // Profundidad de scroll. Sin esto, recortar secciones es adivinar: la
  // decisión de qué sacar de la home sale de acá, no de la intuición.
  // Va por Umami porque los eventos personalizados de Vercel son de plan Pro.
  useEffect(() => {
    const milestones = [25, 50, 75, 100];
    const onScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;
      for (const m of milestones) {
        if (pct >= m && !reachedRef.current.has(m)) {
          reachedRef.current.add(m);
          window.umami?.track("scroll_depth", { depth: `${m}%` });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Debe seguir el orden de render de <main> para que el scroll-spy acierte.
    const sectionIds = [
      "hero",
      "evidence-matrix",
      "case-studies",
      "projects",
      "experience",
      "bento",
      "technologies",
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

      <main className="paper-margin container mx-auto px-6 lg:px-8">
        <Hero />
        <FileIndex />
        <Suspense fallback={<Loading />}>
          <EvidenceMatrix />
          <CaseStudies />
          <Projects />
          <Experience />
          <Bento />
          <Technologies />
          <Certifications />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
