import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";
import { CONTACT } from "../../constants";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 mt-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {t("footer.copyright")}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
              {t("footer.madeWith")}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-500 uppercase tracking-wider">
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
