import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../context/ThemeContext";
import { FaGithub, FaCodeCommit } from "react-icons/fa6";

/**
 * GitHubActivity — live mini-dashboard de GitHub.
 *
 * Datos:
 *   - users/{u}                                  — perfil
 *   - users/{u}/events/public                    — últimos PushEvents (solo SHAs)
 *   - repos/{repo}/compare/{before}...{head}     — count real + mensajes
 *   - github-contributions-api.jogruber.de/v4    — heatmap anual
 *
 * IMPORTANTE: la API de eventos públicos ya NO incluye payload.commits[]
 * ni payload.size — solo trae los SHAs `before` y `head`. Para obtener
 * el conteo real y los mensajes, hay que hacer fetch al endpoint
 * `compare` por cada push. Por eso el "0 commits" anterior.
 *
 * El heatmap usa colores del branding (amber) en vez del verde default
 * de GitHub, manteniendo coherencia con el resto del bento.
 */

// Paletas para el calendar — 5 niveles (vacío → máximo)
const CALENDAR_THEME = {
  dark: ["#1a1a1a", "#451a03", "#92400e", "#d97706", "#fbbf24"],
  light: ["#f5f5f4", "#fef3c7", "#fcd34d", "#d97706", "#92400e"],
};

export default function GitHubActivity({ username }) {
  const { language } = useTranslation();
  const { isDarkMode } = useTheme();
  const [profile, setProfile] = useState(null);
  const [pushes, setPushes] = useState([]);
  const [contributions, setContributions] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const [userRes, eventsRes, contribRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            headers: { Accept: "application/vnd.github+json" },
          }),
          fetch(`https://api.github.com/users/${username}/events/public`, {
            headers: { Accept: "application/vnd.github+json" },
          }),
          fetch(
            `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
          ),
        ]);

        if (!userRes.ok) throw new Error("user fetch failed");

        const user = await userRes.json();
        const events = eventsRes.ok ? await eventsRes.json() : [];
        const contrib = contribRes.ok ? await contribRes.json() : null;

        if (cancelled) return;

        setProfile(user);
        if (contrib?.contributions) setContributions(contrib);

        // Pushes: la API pública ya no trae commits[] ni size, solo SHAs.
        // Hacemos fetch a /compare por cada push para obtener count + mensaje.
        const recentPushes = events
          .filter((e) => e.type === "PushEvent")
          .slice(0, 3);

        const enriched = await Promise.all(
          recentPushes.map(async (e) => {
            const repoFull = e.repo.name;
            const before = e.payload?.before;
            const head = e.payload?.head;
            const base = {
              repo: repoFull.replace(`${username}/`, ""),
              when: relativeTime(e.created_at, language),
              count: 0,
              message: "",
            };

            // Si before es null o todo ceros (branch nuevo), no podemos comparar
            if (!before || !head || /^0+$/.test(before)) return base;

            try {
              const cmp = await fetch(
                `https://api.github.com/repos/${repoFull}/compare/${before}...${head}`,
                { headers: { Accept: "application/vnd.github+json" } }
              );
              if (!cmp.ok) return base;
              const data = await cmp.json();
              return {
                ...base,
                count: data.total_commits ?? data.commits?.length ?? 0,
                message:
                  data.commits?.[data.commits.length - 1]?.commit?.message
                    ?.split("\n")[0] || "",
              };
            } catch {
              return base;
            }
          })
        );

        if (!cancelled) setPushes(enriched);
      } catch (err) {
        if (!cancelled) setError(err.message);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [username, language]);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
          {language === "es" ? "Actividad GitHub" : "GitHub activity"}
        </span>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-ink-secondary hover:text-accent transition-colors"
        >
          <FaGithub />@{username}
        </a>
      </div>

      {error ? (
        <p className="text-xs text-ink-faint">
          {language === "es"
            ? "No se pudo cargar (rate-limit GitHub)."
            : "Could not load (GitHub rate-limit)."}
        </p>
      ) : null}

      {/* Stats */}
      {profile ? (
        <div className="flex items-center gap-5 mb-4">
          <Stat
            label={language === "es" ? "Repos" : "Repos"}
            value={profile.public_repos}
          />
          <Stat
            label={language === "es" ? "Seguidores" : "Followers"}
            value={profile.followers}
          />
          {contributions?.total ? (
            <Stat
              label={language === "es" ? "Año actual" : "This year"}
              value={
                contributions.total[
                  Object.keys(contributions.total).sort().reverse()[0]
                ]
              }
            />
          ) : (
            <Stat
              label={language === "es" ? "Desde" : "Since"}
              value={new Date(profile.created_at).getFullYear()}
            />
          )}
        </div>
      ) : (
        !error && <div className="h-10 bg-surface-0 rounded animate-pulse mb-4" />
      )}

      {/* Contribution heatmap — branded amber */}
      <div className="mb-4 overflow-hidden">
        {contributions?.contributions ? (
          <ActivityCalendar
            data={contributions.contributions}
            theme={CALENDAR_THEME}
            colorScheme={isDarkMode ? "dark" : "light"}
            blockSize={9}
            blockMargin={2.5}
            blockRadius={2}
            fontSize={10}
            hideTotalCount
            hideColorLegend
            hideMonthLabels={false}
            labels={{
              months:
                language === "es"
                  ? [
                      "Ene", "Feb", "Mar", "Abr", "May", "Jun",
                      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
                    ]
                  : undefined,
              weekdays:
                language === "es"
                  ? ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
                  : undefined,
              totalCount:
                language === "es"
                  ? "{{count}} contribuciones en {{year}}"
                  : "{{count}} contributions in {{year}}",
            }}
            style={{ color: "var(--ink-faint)" }}
          />
        ) : (
          !error && (
            <div className="h-[120px] bg-surface-0 rounded animate-pulse" />
          )
        )}
      </div>

      {/* Last pushes — más compactos */}
      <div className="flex-1 space-y-1.5 overflow-hidden">
        {pushes.length > 0
          ? pushes.map((evt, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs text-ink-secondary font-mono"
              >
                <FaCodeCommit className="text-ink-faint shrink-0" />
                <span className="text-ink-primary font-medium truncate">
                  {evt.repo}
                </span>
                <span className="text-ink-faint">·</span>
                <span className="text-ink-muted truncate flex-1">
                  {evt.message ||
                    `${evt.count} commit${evt.count !== 1 ? "s" : ""}`}
                </span>
                <span className="text-ink-faint shrink-0">{evt.when}</span>
              </div>
            ))
          : !error && (
              <div className="space-y-1.5">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="h-3 bg-surface-0 rounded animate-pulse"
                  />
                ))}
              </div>
            )}
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="font-display text-2xl text-ink-primary leading-none">
        {value ?? "—"}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-mono text-ink-faint mt-1">
        {label}
      </div>
    </div>
  );
}

function relativeTime(iso, lang = "es") {
  const diff = (Date.now() - new Date(iso).getTime()) / 1000;
  if (diff < 60) return lang === "es" ? "ahora" : "now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  return `${Math.floor(diff / 86400)}d`;
}
