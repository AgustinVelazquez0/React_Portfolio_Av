import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "../../hooks/useTranslation";
import { CONTACT, CV_URL_ES, CV_URL_EN } from "../../constants";
import {
  FaHouse,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaRocket,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFilePdf,
  FaSun,
  FaMoon,
  FaLanguage,
  FaCopy,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

/**
 * AV Command Palette — ⌘K
 *
 * Inspirado en Linear / Vercel / Raycast.
 * Toda la app es navegable por teclado.
 */
export default function CommandPalette({ open, onOpenChange, onSectionChange }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useTranslation();
  const cvUrl = language === "es" ? CV_URL_ES : CV_URL_EN;
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!open) setSearch("");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const close = () => onOpenChange(false);

  const goSection = (id) => {
    close();
    if (onSectionChange) onSectionChange(id);
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openExternal = (url) => {
    close();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const downloadFile = (url, filename) => {
    close();
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    close();
  };

  const toggleLang = () => {
    close();
    toggleLanguage();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center pt-24
        bg-ink-primary/40 backdrop-blur-sm
        animate-[fadeIn_120ms_ease-out]"
      onClick={close}
    >
      <div
        className="w-full max-w-xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Command
          label="Command Menu"
          className="rounded-xl overflow-hidden border border-line-strong
            bg-surface-0 shadow-elevated"
          loop
        >
          <div className="flex items-center gap-2 px-4 border-b border-line-DEFAULT">
            <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint shrink-0">
              ⌘K
            </span>
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder={
                language === "es"
                  ? "Buscar comando o sección…"
                  : "Search a command or section…"
              }
              className="w-full bg-transparent py-4 text-sm
                text-ink-primary placeholder-ink-faint
                outline-none border-0"
              autoFocus
            />
            <kbd className="hidden sm:inline-flex items-center px-1.5 h-5 rounded
              border border-line-DEFAULT bg-surface-1 text-ink-faint
              font-mono text-[10px]">
              ESC
            </kbd>
          </div>

          <Command.List className="max-h-[380px] overflow-y-auto scrollbar-thin p-2">
            <Command.Empty className="p-6 text-center text-sm text-ink-muted">
              {language === "es" ? "Sin resultados." : "No results found."}
            </Command.Empty>

            <Command.Group
              heading={language === "es" ? "Navegar" : "Navigate"}
              className="text-ink-faint text-2xs uppercase tracking-mono"
            >
              <Item icon={FaHouse} onSelect={() => goSection("hero")}>
                {t("nav.home")}
              </Item>
              <Item icon={FaCode} onSelect={() => goSection("technologies")}>
                {t("nav.technologies")}
              </Item>
              <Item icon={FaBriefcase} onSelect={() => goSection("experience")}>
                {t("nav.experience")}
              </Item>
              <Item
                icon={FaGraduationCap}
                onSelect={() => goSection("certifications")}
              >
                {t("nav.certifications")}
              </Item>
              <Item icon={FaRocket} onSelect={() => goSection("projects")}>
                {t("nav.projects")}
              </Item>
              <Item icon={FaRocket} onSelect={() => goSection("case-studies")}>
                Case Studies
              </Item>
              <Item icon={FaEnvelope} onSelect={() => goSection("contact")}>
                {t("nav.contact")}
              </Item>
            </Command.Group>

            <Command.Separator className="my-2 h-px bg-line-DEFAULT" />

            <Command.Group
              heading={language === "es" ? "Acciones" : "Actions"}
              className="text-ink-faint text-2xs uppercase tracking-mono"
            >
              <Item icon={FaCopy} onSelect={() => copy(CONTACT.email)}>
                {language === "es" ? "Copiar email" : "Copy email"}
                <span className="ml-auto font-mono text-2xs text-ink-faint">
                  {CONTACT.email}
                </span>
              </Item>
              <Item
                icon={FaFilePdf}
                onSelect={() =>
                  downloadFile(
                    cvUrl,
                    `Agustin-Velazquez-CV-${language.toUpperCase()}.pdf`
                  )
                }
              >
                {language === "es"
                  ? "Descargar CV (PDF)"
                  : "Download CV (PDF)"}
                <span className="ml-auto font-mono text-2xs text-ink-faint">
                  {language.toUpperCase()}
                </span>
              </Item>
              <Item
                icon={isDarkMode ? FaSun : FaMoon}
                onSelect={() => {
                  toggleTheme();
                  close();
                }}
              >
                {isDarkMode
                  ? language === "es"
                    ? "Cambiar a modo claro"
                    : "Switch to light mode"
                  : language === "es"
                    ? "Cambiar a modo oscuro"
                    : "Switch to dark mode"}
              </Item>
              <Item icon={FaLanguage} onSelect={toggleLang}>
                {language === "es"
                  ? "Switch to English"
                  : "Cambiar a Español"}
              </Item>
            </Command.Group>

            <Command.Separator className="my-2 h-px bg-line-DEFAULT" />

            <Command.Group
              heading={language === "es" ? "Enlaces" : "Links"}
              className="text-ink-faint text-2xs uppercase tracking-mono"
            >
              <Item
                icon={FaGithub}
                onSelect={() => openExternal(CONTACT.github)}
              >
                GitHub
                <FaArrowUpRightFromSquare className="ml-auto text-ink-faint text-[10px]" />
              </Item>
              <Item
                icon={FaLinkedin}
                onSelect={() => openExternal(CONTACT.linkedin)}
              >
                LinkedIn
                <FaArrowUpRightFromSquare className="ml-auto text-ink-faint text-[10px]" />
              </Item>
              <Item
                icon={FaRocket}
                onSelect={() =>
                  openExternal("https://whatsapp-ai-saas-1zya.vercel.app")
                }
              >
                Demo · WhatsApp AI SaaS
                <FaArrowUpRightFromSquare className="ml-auto text-ink-faint text-[10px]" />
              </Item>
              <Item
                icon={FaRocket}
                onSelect={() => openExternal("https://getarbix.com")}
              >
                Demo · Arbix
                <FaArrowUpRightFromSquare className="ml-auto text-ink-faint text-[10px]" />
              </Item>
            </Command.Group>
          </Command.List>

          <div className="px-4 py-2 border-t border-line-DEFAULT
            flex items-center gap-3 text-2xs font-mono uppercase tracking-mono text-ink-faint">
            <span>↑↓ navegar</span>
            <span>↵ seleccionar</span>
            <span className="ml-auto">AV — ⌘K</span>
          </div>
        </Command>
      </div>
    </div>
  );
}

function Item({ icon: Icon, children, onSelect, value }) {
  return (
    <Command.Item
      value={value || (typeof children === "string" ? children : undefined)}
      onSelect={onSelect}
      className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
        text-sm text-ink-secondary
        data-[selected=true]:bg-surface-1 data-[selected=true]:text-ink-primary
        aria-selected:bg-surface-1 aria-selected:text-ink-primary
        transition-colors duration-fast"
    >
      {Icon ? <Icon className="text-ink-muted shrink-0" /> : null}
      {children}
    </Command.Item>
  );
}
