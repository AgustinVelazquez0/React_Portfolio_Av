import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const NowPage = lazy(() => import("./pages/NowPage"));
const UsesPage = lazy(() => import("./pages/UsesPage"));
const ChangelogPage = lazy(() => import("./pages/ChangelogPage"));

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScrollProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      );
    };
    window.addEventListener("scroll", handleScrollProgress, { passive: true });
    handleScrollProgress();
    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  // ⌘K → open command palette (global)
  useEffect(() => {
    const handler = (e) => {
      const isCmd = e.metaKey || e.ctrlKey;
      if (isCmd && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Easter egg: console branding (Tier 5)
  useEffect(() => {
    const styles = {
      title:
        "font-family: monospace; font-size: 14px; padding: 8px 12px; background: #09090b; color: #fbbf24; border-radius: 4px;",
      body: "font-family: monospace; font-size: 12px; color: #a1a1aa; line-height: 1.6;",
    };
    console.log("%cAV — Agustin Velazquez", styles.title);
    console.log(
      "%cFull-Stack Engineer · Montevideo, UY\n" +
        "Looking under the hood? Press ⌘K for the command palette.\n" +
        "Get in touch: agubolso2@gmail.com",
      styles.body
    );
    if (typeof window !== "undefined") {
      window.av = {
        name: "Agustin Velazquez",
        role: "Full-Stack Engineer",
        location: "Montevideo, UY",
        email: "agubolso2@gmail.com",
        github: "https://github.com/AgustinVelazquez0",
        linkedin: "https://www.linkedin.com/in/agustin-vel%C3%A1zquez-dev/",
        stack: [
          "React",
          "Next.js",
          "React Native",
          "Node",
          "PostgreSQL",
          "AI Agents",
        ],
        builtWith: "Vite + React + Tailwind + Framer Motion",
      };
    }
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        aria-hidden
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left
          transition-transform duration-fast ease-decel"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Skip-link accesible */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100]
          focus:px-3 focus:py-2 focus:rounded focus:bg-accent focus:text-accent-ink focus:font-medium"
      >
        Skip to content
      </a>

      <div className="overflow-x-hidden antialiased min-h-screen relative bg-surface-0 text-ink-primary">
        <Suspense fallback={<div className="h-24" />}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  paletteOpen={paletteOpen}
                  setPaletteOpen={setPaletteOpen}
                />
              }
            />
            <Route path="/now" element={<NowPage />} />
            <Route path="/uses" element={<UsesPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            <Route
              path="*"
              element={
                <HomePage
                  paletteOpen={paletteOpen}
                  setPaletteOpen={setPaletteOpen}
                />
              }
            />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
