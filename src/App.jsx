import { lazy, Suspense } from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero";
import { LanguageProvider } from "./context/LenguageContext.jsx";

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
  return (
    <LanguageProvider>
      <div
        className="overflow-x-hidden antialiased
        selection:bg-cyan-300 selection:text-cyan-900
        text-text-light dark:text-text-dark
        bg-background-light dark:bg-background-dark
        min-h-screen"
      >
        <div className="fixed top-0 -z-10 h-full w-full">
          <div
            className="absolute top-0 z-[-2] h-screen w-screen
            bg-background-dark/90 dark:bg-background-light/10
            bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
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
