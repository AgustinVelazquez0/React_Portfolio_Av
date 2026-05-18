import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import { useTranslation } from "../../hooks/useTranslation";
import { CONTACT } from "../../constants";
import AVLogo from "../brand/AVLogo";

const FOOTER_LINKS = [
  { to: "/now", label: "/now" },
  { to: "/uses", label: "/uses" },
  { to: "/changelog", label: "/changelog" },
];

function Footer() {
  const { t, language } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-DEFAULT py-12 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Brand + tagline */}
        <div className="flex flex-col gap-3">
          <div className="text-ink-primary">
            <AVLogo variant="monogram" className="w-10 h-auto" />
          </div>
          <p className="font-display text-base text-ink-secondary leading-snug max-w-xs italic">
            Code is the medium. Detail is the difference.
          </p>
          <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint mt-1">
            AV — Agustin Velazquez · Montevideo, UY
          </p>
        </div>

        {/* Links pages */}
        <div className="flex flex-col gap-2 md:items-center">
          <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-2">
            {language === "es" ? "Páginas" : "Pages"}
          </span>
          {FOOTER_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Social + copyright */}
        <div className="flex flex-col gap-3 md:items-end">
          <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-1">
            {t("footer.links")}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-md inline-flex items-center justify-center
                border border-line-subtle text-ink-secondary
                hover:border-line-DEFAULT hover:text-ink-primary
                transition-colors duration-fast"
            >
              <FaGithub />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-md inline-flex items-center justify-center
                border border-line-subtle text-ink-secondary
                hover:border-line-DEFAULT hover:text-ink-primary
                transition-colors duration-fast"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-md inline-flex items-center justify-center
                border border-line-subtle text-ink-secondary
                hover:border-line-DEFAULT hover:text-ink-primary
                transition-colors duration-fast"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-xs text-ink-muted mt-2">
            © {year} Agustin Velazquez.
          </p>
          <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
            Built with React · Vite · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
