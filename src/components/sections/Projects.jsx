import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { PROJECTS, PROJECT_GROUPS } from "../../data/projects";
import { CASE_STUDIES } from "../../data/caseStudies";
import { fadeUp, viewport } from "../../lib/motion";
import ProjectCard from "../ui/ProjectCard";
import Button from "../ui/Button";

/**
 * Projects — refactor data-driven.
 * Pasó de ~880 líneas con duplicación a este componente compacto.
 * Ahora cada card vive en src/data/projects.js.
 */
function Projects() {
  const { t } = useTranslation();
  const [expandedGroups, setExpandedGroups] = useState({});

  const caseSlugs = useMemo(
    () => new Set(CASE_STUDIES.map((cs) => cs.slug)),
    []
  );

  const grouped = useMemo(() => {
    const map = new Map(PROJECT_GROUPS.map((g) => [g.id, []]));
    for (const p of PROJECTS) {
      if (!map.has(p.group)) map.set(p.group, []);
      map.get(p.group).push(p);
    }
    return map;
  }, []);

  const toggleGroup = (groupId) =>
    setExpandedGroups((prev) => ({ ...prev, [groupId]: !prev[groupId] }));

  const openCaseStudy = (slug) => {
    requestAnimationFrame(() => {
      document
        .getElementById("case-studies")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.dispatchEvent(
        new CustomEvent("av:open-case-study", { detail: { slug } })
      );
    });
  };

  return (
    <section
      id="projects"
      className="border-t border-line-subtle pt-16 pb-12"
    >
      {/* Section header — editorial */}
      <header className="mb-12 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-3">
            04 — {t("projects.eyebrow")}
          </p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="font-display text-4xl lg:text-5xl text-ink-primary tracking-tightest leading-none"
          >
            {t("projects.title")}
          </motion.h2>
        </div>
        <p className="max-w-md text-sm text-ink-muted leading-relaxed">
          {t("projects.description")}
        </p>
      </header>

      <div className="space-y-16">
        {PROJECT_GROUPS.map((group) => {
          const items = grouped.get(group.id) || [];
          if (items.length === 0) return null;

          const collapsedItems = items.filter((p) => p.collapsed);
          const visibleItems = items.filter((p) => !p.collapsed);
          const isExpanded = expandedGroups[group.id];
          const showItems = isExpanded
            ? [...visibleItems, ...collapsedItems]
            : visibleItems;

          return (
            <div key={group.id}>
              <h3 className="mb-6 flex items-center gap-3 text-ink-secondary">
                <span className="h-px flex-1 bg-line-DEFAULT" />
                <span className="font-mono text-2xs uppercase tracking-mono text-ink-muted">
                  {t(group.titleKey)}
                </span>
                <span className="h-px flex-1 bg-line-DEFAULT" />
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {showItems.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    onOpenCaseStudy={
                      caseSlugs.has(project.slug) ? openCaseStudy : undefined
                    }
                  />
                ))}
              </div>

              {collapsedItems.length > 0 ? (
                <div className="text-center mt-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleGroup(group.id)}
                  >
                    {isExpanded
                      ? t("projects.showLess")
                      : t("projects.showMore").replace(
                          "{count}",
                          String(collapsedItems.length)
                        )}
                  </Button>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
