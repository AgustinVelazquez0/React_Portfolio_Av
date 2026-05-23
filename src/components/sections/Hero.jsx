import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { fadeUp, stagger, transitions } from "../../lib/motion";
import Button from "../ui/Button";
import Tag from "../ui/Tag";
import { CV_URL_ES, CV_URL_EN } from "../../constants";
import { FaArrowRight, FaGithub } from "react-icons/fa";

function Hero() {
  const { t, language } = useTranslation();
  const cvUrl = language === "es" ? CV_URL_ES : CV_URL_EN;

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="pt-28 pb-16 lg:pb-24 min-h-[88vh] flex items-center"
    >
      <div className="w-full max-w-4xl">
        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* Eyebrow mono — location + niche */}
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
            <Tag variant="live" size="sm" dot>
              {t("hero.eyebrowStatus")}
            </Tag>
            <span className="font-mono text-2xs uppercase tracking-mono text-ink-muted">
              {t("hero.eyebrowLocation")}
            </span>
          </motion.div>

          {/* Display name — Instrument Serif, jumbo */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(3.25rem,8vw,7rem)] leading-none tracking-tightest
              text-ink-primary mb-6"
          >
            Agustin{" "}
            <span className="italic text-ink-secondary">Velazquez</span>
          </motion.h1>

          {/* Subhead with voice — 1 línea con punto de vista */}
          <motion.p
            variants={fadeUp}
            className="text-xl lg:text-2xl font-medium tracking-snug
              text-ink-secondary max-w-2xl mb-6 leading-snug"
          >
            {t("hero.subheadLead")}{" "}
            <span className="text-ink-primary">{t("hero.subheadAccent")}</span>
          </motion.p>

          {/* Body copy — bio corta */}
          <motion.p
            variants={fadeUp}
            className="text-base lg:text-lg max-w-xl text-ink-muted leading-relaxed mb-8"
          >
            {t("hero.content")}
          </motion.p>

          {/* Proof bar — métricas reales en mono */}
          <motion.dl
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-10
              font-mono text-2xs uppercase tracking-mono text-ink-muted"
          >
            <ProofMetric value="1" label={t("hero.proof.stores")} />
            <span className="hidden sm:inline text-ink-faint">·</span>
            <ProofMetric value="5+" label={t("hero.proof.projects")} />
            <span className="hidden sm:inline text-ink-faint">·</span>
            <ProofMetric value="2yr" label={t("hero.proof.production")} />
            <span className="hidden sm:inline text-ink-faint">·</span>
            <ProofMetric
              value="Mental"
              label={t("hero.proof.workingAt")}
              accent
            />
          </motion.dl>

          {/* CTA jerárquico — 1 primario, 1 secundario, 1 link */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3"
          >
            <Button
              variant="primary"
              size="lg"
              trailingIcon={FaArrowRight}
              onClick={() => scrollToSection("contact")}
            >
              {t("hero.ctaPrimary")}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              {t("hero.ctaSecondary")}
            </Button>
            <div className="flex items-center gap-1 ml-2">
              <Button
                variant="link"
                size="md"
                as="a"
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download={`Agustin-Velazquez-CV-${language.toUpperCase()}.pdf`}
              >
                {t("hero.ctaCV")}
              </Button>
              <span className="text-ink-faint">·</span>
              <Button
                variant="link"
                size="md"
                as="a"
                href="https://github.com/AgustinVelazquez0"
                target="_blank"
                rel="noopener noreferrer"
                leadingIcon={FaGithub}
              >
                GitHub
              </Button>
            </div>
          </motion.div>

          {/* Hint de command palette — pista signature */}
          <motion.p
            variants={fadeUp}
            transition={{ ...transitions.standard, delay: 0.4 }}
            className="mt-12 font-mono text-2xs uppercase tracking-mono text-ink-faint"
          >
            {t("hero.cmdkHint")}{" "}
            <kbd
              className="ml-1 inline-flex items-center px-1.5 h-5 rounded
              border border-line-DEFAULT bg-surface-1 text-ink-secondary
              font-mono text-[10px] tracking-normal"
            >
              ⌘K
            </kbd>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function ProofMetric({ value, label, accent = false }) {
  return (
    <div className="flex items-baseline gap-2">
      <span
        className={`font-display text-lg lowercase tracking-snug ${
          accent ? "text-accent" : "text-ink-primary"
        }`}
      >
        {value}
      </span>
      <span className="text-ink-muted">{label}</span>
    </div>
  );
}

export default Hero;
