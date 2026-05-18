import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaAppStoreIos,
  FaGooglePlay,
} from "react-icons/fa6";
import { useTranslation } from "../../hooks/useTranslation";
import { fadeUp, viewport } from "../../lib/motion";
import Surface from "./Surface";
import Tag from "./Tag";
import Button from "./Button";

/**
 * AV ProjectCard — data-driven, sin glow neón.
 * Reemplaza los ~5 bloques duplicados que vivían inline en Projects.jsx.
 *
 * Props:
 *   project — entry de src/data/projects.js
 *   onOpenCaseStudy(slug) — opcional; muestra botón "Ver case study"
 */
export default function ProjectCard({ project, onOpenCaseStudy }) {
  const { t } = useTranslation();
  const { image, titleKey, descriptionKey, tag, metric, tech, links, qr } =
    project;

  const buttons = [];
  if (links.demo) {
    buttons.push({
      key: "demo",
      label: t("projects.buttonViewProject"),
      href: links.demo,
      variant: "primary",
      icon: FaArrowUpRightFromSquare,
    });
  }
  if (links.web) {
    buttons.push({
      key: "web",
      label: t("projects.buttonViewProject"),
      href: links.web,
      variant: "primary",
      icon: FaArrowUpRightFromSquare,
    });
  }
  if (links.appStore) {
    buttons.push({
      key: "appstore",
      label: t("projects.buttonAppStore"),
      href: links.appStore,
      variant: "secondary",
      icon: FaAppStoreIos,
    });
  }
  if (links.playStore) {
    buttons.push({
      key: "playstore",
      label: t("projects.buttonPlayStore"),
      href: links.playStore,
      variant: "secondary",
      icon: FaGooglePlay,
    });
  }
  if (links.code) {
    buttons.push({
      key: "code",
      label: t("projects.buttonViewCode"),
      href: links.code,
      variant: "secondary",
      icon: FaGithub,
    });
  }
  if (links.front) {
    buttons.push({
      key: "front",
      label: t("projects.buttonViewFrontCode"),
      href: links.front,
      variant: "ghost",
      icon: FaGithub,
    });
  }
  if (links.back) {
    buttons.push({
      key: "back",
      label: t("projects.buttonViewBackCode"),
      href: links.back,
      variant: "ghost",
      icon: FaGithub,
    });
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <Surface
        tone="raised"
        padding="lg"
        radius="lg"
        hoverable
        className="h-full flex flex-col gap-5"
      >
        {/* Header: thumb + title + tag */}
        <div className="flex items-start gap-4">
          {qr ? (
            <a
              href={qr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 shrink-0 group"
            >
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=0&data=${encodeURIComponent(qr.url)}`}
                alt="QR code"
                className="w-14 h-14 rounded-md border border-line-DEFAULT
                  transition-transform duration-base ease-standard
                  group-hover:scale-105"
              />
              <span className="text-[10px] text-ink-faint w-16 text-center leading-tight">
                {t(qr.labelKey)}
              </span>
            </a>
          ) : (
            <a
              href={links.demo || links.web || links.code || links.front || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 group"
            >
              <img
                src={image}
                alt={t(titleKey)}
                loading="lazy"
                width="80"
                height="80"
                className="w-20 h-20 rounded-md object-cover border border-line-DEFAULT
                  transition-transform duration-base ease-standard
                  group-hover:scale-105"
              />
            </a>
          )}

          <div className="flex-1 min-w-0">
            {tag ? (
              <div className="mb-2">
                <Tag variant={tag.variant} size="xs" dot={tag.dot}>
                  {tag.label}
                </Tag>
              </div>
            ) : null}
            <h4 className="text-lg font-semibold text-ink-primary mb-1.5 tracking-snug">
              {t(titleKey)}
            </h4>
            <p className="text-sm text-ink-muted leading-relaxed line-clamp-4">
              {t(descriptionKey)}
            </p>
          </div>
        </div>

        {/* Metric signature */}
        {metric ? (
          <div className="flex items-baseline gap-3 -mt-1
            border-l-2 border-accent pl-4 py-1">
            <span className="font-display text-3xl text-accent">
              {metric.value}
            </span>
            <span className="font-mono text-2xs uppercase tracking-mono text-ink-muted">
              {metric.unit}
            </span>
          </div>
        ) : null}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((techName) => (
            <Tag key={techName} variant="neutral" size="xs">
              {techName}
            </Tag>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-2 mt-auto pt-2">
          {buttons.map((b) => (
            <Button
              key={b.key}
              variant={b.variant}
              size="sm"
              as="a"
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              trailingIcon={b.icon}
            >
              {b.label}
            </Button>
          ))}
          {onOpenCaseStudy ? (
            <Button
              variant="link"
              size="sm"
              onClick={() => onOpenCaseStudy(project.slug)}
            >
              {t("projects.viewCaseStudy")}
            </Button>
          ) : null}
        </div>
      </Surface>
    </motion.div>
  );
}
