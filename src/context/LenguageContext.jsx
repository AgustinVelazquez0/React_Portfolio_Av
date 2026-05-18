import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const STORAGE_KEY = "av:lang";
const SUPPORTED = ["es", "en"];

const detectInitial = () => {
  if (typeof window === "undefined") return "es";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch {
    // ignore storage errors
  }
  const browser = (navigator.language || "es").slice(0, 2).toLowerCase();
  return SUPPORTED.includes(browser) ? browser : "es";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(detectInitial);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language;
    } catch {
      // ignore
    }
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
