import { useContext } from "react";
import { LanguageContext } from "../context/LenguageContext.jsx";
import en from "../locales/en.json";
import es from "../locales/es.json";

const translations = { en, es };

export const useTranslation = () => {
  const { language, setLanguage, toggleLanguage } = useContext(LanguageContext);

  const t = (key) => {
    const keys = key.split(".");
    const value = keys.reduce(
      (obj, k) => (obj && obj[k] !== undefined ? obj[k] : undefined),
      translations[language]
    );
    return value !== undefined ? value : key;
  };

  return { t, language, setLanguage, toggleLanguage };
};
