import { useTranslation } from "../../hooks/useTranslation";

/**
 * LighthouseCard — score Lighthouse (estático, actualizado manualmente).
 *
 * IMPORTANTE: estos valores deben refrescarse después de cada release significativo
 * corriendo `npx lighthouse https://react-portfolio-av.vercel.app --view`.
 * Actualizar en src/data/lighthouse.js.
 */
import { LIGHTHOUSE } from "../../data/lighthouse";

export default function LighthouseCard() {
  const { language } = useTranslation();

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
          Lighthouse
        </span>
        <span className="font-mono text-2xs text-ink-faint">
          {LIGHTHOUSE.lastChecked}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 flex-1">
        <ScoreRing
          label={language === "es" ? "Performance" : "Performance"}
          value={LIGHTHOUSE.performance}
        />
        <ScoreRing label="A11y" value={LIGHTHOUSE.accessibility} />
        <ScoreRing
          label={language === "es" ? "Best Pr." : "Best Pr."}
          value={LIGHTHOUSE.bestPractices}
        />
        <ScoreRing label="SEO" value={LIGHTHOUSE.seo} />
      </div>
    </div>
  );
}

function ScoreRing({ label, value }) {
  const color =
    value >= 90
      ? "var(--signal-success)"
      : value >= 60
        ? "var(--signal-warning)"
        : "var(--signal-danger)";
  const dash = (value / 100) * 100;

  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 36 36"
        width="40"
        height="40"
        className="shrink-0"
        aria-label={`${label} ${value}`}
      >
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="var(--border-default)"
          strokeWidth="2.5"
        />
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeDasharray={`${dash}, 100`}
          strokeLinecap="round"
          transform="rotate(-90 18 18)"
        />
        <text
          x="18"
          y="20.5"
          textAnchor="middle"
          fill="var(--ink-primary)"
          style={{
            fontSize: "10px",
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
          }}
        >
          {value}
        </text>
      </svg>
      <span className="text-xs text-ink-secondary leading-tight">{label}</span>
    </div>
  );
}
