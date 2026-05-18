import { useTranslation } from "../../hooks/useTranslation";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useTranslation();
  const other = language === "es" ? "EN" : "ES";

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 h-9 px-2.5 rounded-md
        text-ink-secondary hover:text-ink-primary hover:bg-surface-1
        font-mono text-2xs uppercase tracking-mono
        transition-colors duration-fast
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <span className="text-ink-primary">{language.toUpperCase()}</span>
      <span className="text-ink-faint">/</span>
      <span>{other}</span>
    </button>
  );
}
