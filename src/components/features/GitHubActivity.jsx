import { useEffect, useMemo, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../context/ThemeContext";
import {
  FaGithub,
  FaCodeCommit,
  FaCodePullRequest,
  FaCodeBranch,
  FaStar,
  FaFire,
} from "react-icons/fa6";
import { FaEye, FaBug } from "react-icons/fa";

/**
 * GitHubActivity — live mini-dashboard de GitHub orientado a recruiter / AI agent.
 *
 * Fuente de datos PRIMARIA: nuestro backend (/api/github-contributions) que usa
 * la GraphQL API oficial con un PAT. Esto trae:
 *   - Heatmap COMPLETO (incluye commits a repos privados)
 *   - Métricas de actividad: commits, PRs, reviews, issues, repos contribuidos,
 *     restricted (commits a privados sin revelar repo)
 *   - Streak actual + récord histórico
 *   - Distribución de lenguajes con porcentajes (top 10)
 *   - Organizaciones a las que pertenece (incluye Mental)
 *   - Top 5 repos por commits
 *   - Total stars recibidas
 *
 * Fallback: jogruber.de (solo público) si el backend no responde.
 *
 * Los pushes recientes (lista al pie) siguen usando la API pública de eventos.
 */

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

// Paleta amber del branding (5 niveles vacío → máximo)
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
        // 1) Heatmap + stats desde nuestro backend (privados incluidos).
        //    Si API_BASE está vacío, usamos path relativo /api/... que en dev
        //    se proxea via vite.config a localhost:5050 y en prod resuelve al
        //    mismo dominio Vercel (la serverless function /api/github-contributions).
        //    Fallback a jogruber.de (solo público) si el backend no responde.
        const contribPromise = (async () => {
          try {
            const r = await fetch(
              `${API_BASE}/api/github-contributions?username=${username}`
            );
            if (r.ok) {
              const j = await r.json();
              if (j?.ok && j.contributions) return j;
            }
          } catch {
            /* fall through */
          }
          const r = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${username}`
          );
          return r.ok ? await r.json() : null;
        })();

        const [userRes, eventsRes, contrib] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            headers: { Accept: "application/vnd.github+json" },
          }),
          fetch(`https://api.github.com/users/${username}/events/public`, {
            headers: { Accept: "application/vnd.github+json" },
          }),
          contribPromise,
        ]);

        if (!userRes.ok) throw new Error("user fetch failed");

        const user = await userRes.json();
        const events = eventsRes.ok ? await eventsRes.json() : [];

        if (cancelled) return;

        setProfile(user);
        if (contrib?.contributions) setContributions(contrib);

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

  // Stat agregados — solo cuando vienen del backend nuestro
  const stats = contributions?.stats;
  // Filtramos orgs con nombres rotos (alguna org de prueba con login tipo URL)
  const orgs = (contributions?.organizations || []).filter(
    (o) => o?.login && !o.login.startsWith("https-")
  );
  const languages = contributions?.languages || [];

  // El calendar se ve denso solo si pasamos ~1 año de datos. Más años → cuadritos
  // diminutos y casi todos vacíos. Replicamos el comportamiento default de GitHub:
  // mostrar los últimos 365 días.
  const calendarData = useMemo(() => {
    if (!contributions?.contributions) return null;
    const all = contributions.contributions;
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 365);
    const cutoffStr = cutoff.toISOString().slice(0, 10);
    return all.filter((c) => c.date >= cutoffStr);
  }, [contributions]);

  // Total de los últimos 365 días (lo que se ve en el heatmap)
  const lastYearTotal = useMemo(() => {
    if (!calendarData) return null;
    return calendarData.reduce((acc, c) => acc + (c.count || 0), 0);
  }, [calendarData]);

  // Total all-time (suma de todos los años traídos por el backend)
  const allTimeTotal = useMemo(() => {
    if (!contributions?.total) return null;
    if (typeof contributions.total.all === "number") {
      return contributions.total.all;
    }
    // Fallback jogruber.de: sumamos los años numéricos
    const years = Object.keys(contributions.total).filter((k) =>
      /^\d{4}$/.test(k)
    );
    return years.reduce((acc, y) => acc + (contributions.total[y] || 0), 0);
  }, [contributions]);

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

      {/* Profile stats — Repos / Followers / Stars / Últimos 12 meses */}
      {profile ? (
        <div className="flex items-center gap-5 mb-4 flex-wrap">
          <Stat
            label={language === "es" ? "Repos" : "Repos"}
            value={stats?.publicReposCount ?? profile.public_repos}
          />
          <Stat
            label={language === "es" ? "Seguidores" : "Followers"}
            value={profile.followers}
          />
          {stats?.totalStars != null ? (
            <Stat
              label={language === "es" ? "Stars" : "Stars"}
              value={stats.totalStars}
            />
          ) : null}
          {lastYearTotal != null ? (
            <Stat
              label={language === "es" ? "Últ. 12 meses" : "Last 12 mo"}
              value={lastYearTotal.toLocaleString()}
              hint={
                allTimeTotal && allTimeTotal !== lastYearTotal
                  ? `${allTimeTotal.toLocaleString()} ${
                      language === "es" ? "histórico" : "all time"
                    }`
                  : null
              }
            />
          ) : null}
        </div>
      ) : (
        !error && (
          <div className="h-10 bg-surface-0 rounded animate-pulse mb-4" />
        )
      )}

      {/* Contribution heatmap — solo últimos 365 días para que se vea denso */}
      <div className="mb-4 overflow-hidden">
        {calendarData ? (
          <ActivityCalendar
            data={calendarData}
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
                  ? "{{count}} contribuciones · últimos 12 meses"
                  : "{{count}} contributions · last 12 months",
            }}
            style={{ color: "var(--ink-faint)" }}
          />
        ) : (
          !error && (
            <div className="h-[120px] bg-surface-0 rounded animate-pulse" />
          )
        )}
      </div>

      {/* Activity metrics — solo se muestran chips con valor > 0.
          El de streak siempre aparece (es señal fuerte aunque sea 0). */}
      {stats ? (
        <div className="mb-4 flex flex-wrap gap-2">
          <MetricChip
            icon={FaCodeCommit}
            label={language === "es" ? "commits" : "commits"}
            value={(
              stats.commits + (stats.restrictedContributions || 0)
            ).toLocaleString()}
            hint={
              stats.restrictedContributions
                ? language === "es"
                  ? `${stats.restrictedContributions} en privados`
                  : `${stats.restrictedContributions} private`
                : language === "es"
                  ? "últ. 12m"
                  : "last 12mo"
            }
          />
          {stats.reposContributedTo > 0 ? (
            <MetricChip
              icon={FaCodeBranch}
              label={language === "es" ? "repos activos" : "active repos"}
              value={stats.reposContributedTo}
            />
          ) : null}
          {stats.pullRequests > 0 ? (
            <MetricChip
              icon={FaCodePullRequest}
              label="PRs"
              value={stats.pullRequests}
            />
          ) : null}
          {stats.reviews > 0 ? (
            <MetricChip
              icon={FaEye}
              label={language === "es" ? "reviews" : "reviews"}
              value={stats.reviews}
            />
          ) : null}
          {stats.issues > 0 ? (
            <MetricChip
              icon={FaBug}
              label={language === "es" ? "issues" : "issues"}
              value={stats.issues}
            />
          ) : null}
          <MetricChip
            icon={FaFire}
            label={language === "es" ? "racha" : "streak"}
            value={`${stats.currentStreak}d`}
            hint={
              stats.longestStreak
                ? language === "es"
                  ? `máx ${stats.longestStreak}d`
                  : `best ${stats.longestStreak}d`
                : null
            }
            accent
          />
        </div>
      ) : null}

      {/* Languages bar — top 5 con colores nativos de GitHub */}
      {languages.length > 0 ? (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
              {language === "es" ? "Lenguajes" : "Languages"}
            </span>
            <span className="font-mono text-2xs text-ink-faint">
              {language === "es" ? "top 5" : "top 5"}
            </span>
          </div>
          <LanguagesBar languages={languages.slice(0, 5)} />
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            {languages.slice(0, 5).map((l) => (
              <span
                key={l.name}
                className="inline-flex items-center gap-1.5 text-2xs font-mono text-ink-muted"
              >
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ background: l.color || "#888" }}
                />
                {l.name}
                <span className="text-ink-faint">{l.percent}%</span>
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {/* Organizations — chips con avatar */}
      {orgs.length > 0 ? (
        <div className="mb-4">
          <div className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-1.5">
            {language === "es" ? "Organizaciones" : "Organizations"}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {orgs.map((o) => (
              <a
                key={o.login}
                href={o.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md
                  bg-surface-0 border border-line-subtle hover:border-line-DEFAULT
                  text-2xs font-mono text-ink-secondary hover:text-ink-primary
                  transition-colors duration-fast"
                title={o.name || o.login}
              >
                {o.avatarUrl ? (
                  <img
                    src={o.avatarUrl}
                    alt=""
                    className="w-4 h-4 rounded-sm"
                    loading="lazy"
                  />
                ) : null}
                {o.login}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {/* Last pushes */}
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

function Stat({ label, value, hint }) {
  return (
    <div>
      <div className="font-display text-2xl text-ink-primary leading-none">
        {value ?? "—"}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-mono text-ink-faint mt-1">
        {label}
        {hint ? <span className="ml-1 text-ink-faint/70">· {hint}</span> : null}
      </div>
    </div>
  );
}

function MetricChip({ icon: Icon, label, value, hint, accent = false }) {
  return (
    <div
      className={[
        "flex items-center gap-2 px-2.5 py-2 rounded-md border",
        accent
          ? "bg-accent/[0.05] border-accent/30"
          : "bg-surface-0 border-line-subtle",
      ].join(" ")}
    >
      <Icon
        className={`shrink-0 text-sm ${
          accent ? "text-accent" : "text-ink-faint"
        }`}
      />
      <div className="min-w-0 flex-1">
        <div
          className={`font-display text-base leading-none ${
            accent ? "text-accent" : "text-ink-primary"
          }`}
        >
          {value ?? "—"}
        </div>
        <div className="font-mono text-[9px] uppercase tracking-mono text-ink-faint mt-0.5 truncate">
          {hint ? `${label} · ${hint}` : label}
        </div>
      </div>
    </div>
  );
}

function LanguagesBar({ languages }) {
  // Re-normalizar a 100% sobre el top N (para que la barra ocupe todo el ancho)
  const total = languages.reduce((acc, l) => acc + l.percent, 0) || 1;
  return (
    <div className="h-2 w-full rounded-full overflow-hidden bg-surface-0 flex">
      {languages.map((l) => (
        <div
          key={l.name}
          style={{
            width: `${(l.percent / total) * 100}%`,
            background: l.color || "#888",
          }}
          title={`${l.name} ${l.percent}%`}
        />
      ))}
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
