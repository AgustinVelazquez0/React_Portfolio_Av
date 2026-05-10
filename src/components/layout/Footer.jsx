import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";
import { CONTACT } from "../../constants";
import AVLogo from "../brand/AVLogo";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10 mt-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="text-cyan-500 dark:text-cyan-400">
              <AVLogo variant="monogram" className="w-12 h-auto" />
            </div>
            <p className="font-display text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-xs">
              <span className="text-neutral-900 dark:text-white">Code is the medium.</span>{" "}
              <span className="text-cyan-600 dark:text-cyan-400">Detail is the difference.</span>
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
              AV — Agustin Velazquez
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col gap-1 md:items-center text-center">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {t("footer.copyright")}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
              {t("footer.madeWith")}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500">
              {t("footer.links")}
            </span>
            <div className="flex gap-4">
              <a
                href="https://github.com/AgustinVelazquez0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/agustin-vel%C3%A1zquez-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
