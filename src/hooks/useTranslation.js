import { useContext } from "react";
import { LanguageContext } from "../context/LenguageContext.jsx";
import en from "../locales/en.json";
import es from "../locales/es.json";

const translations = { en, es };

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  const t = (key) => {
    const keys = key.split(".");
    return keys.reduce(
      (obj, k) => (obj && obj[k] ? obj[k] : key),
      translations[language]
    );
  };

  return { t, language };
};
