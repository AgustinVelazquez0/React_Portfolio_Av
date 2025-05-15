import { useLanguage } from "../../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage} className="p-2">
      {language === "es" ? "EN" : "ES"}
    </button>
  );
};

export default LanguageToggle;
