import { useEffect, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { FaGithub, FaCodeCommit } from "react-icons/fa6";

/**
 * GitHubActivity — pequeño dashboard live de actividad GitHub.
 * Usa la API pública (sin token) — quedan 60 req/hora/IP, suficiente.
 *
 * Muestra: avatar, public repos, last 5 push events con fecha y repo.
 */
export default function GitHubActivity({ username }) {
  const { language } = useTranslation();
  const [data, setData] = useState({ user: null, events: [], error: null });

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const [userRes, eventsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            headers: { Accept: "application/vnd.github+json" },
          }),
          fetch(`https://api.github.com/users/${username}/events/public`, {
            headers: { Accept: "application/vnd.github+json" },
          }),
        ]);
        if (!userRes.ok) throw new Error("user fetch failed");
        const user = await userRes.json();
        const events = eventsRes.ok ? await eventsRes.json() : [];
        if (!cancelled) {
          const pushes = events
            .filter((e) => e.type === "PushEvent")
            .slice(0, 4)
            .map((e) => ({
              repo: e.repo.name.replace(`${username}/`, ""),
              commits: (e.payload?.commits || []).length,
              when: relativeTime(e.created_at, language),
              message: e.payload?.commits?.[0]?.message?.split("\n")[0] || "",
            }));
          setData({ user, events: pushes, error: null });
        }
      } catch (err) {
        if (!cancelled)
          setData({ user: null, events: [], error: err.message });
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [username, language]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
          {language === "es" ? "Actividad GitHub" : "GitHub activity"}
        </span>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-ink-secondary hover:text-ink-primary"
        >
          <FaGithub />
          @{username}
        </a>
      </div>

      {data.error ? (
        <p className="text-xs text-ink-faint">
          {language === "es"
            ? "No se pudo cargar (rate-limit GitHub)."
            : "Could not load (GitHub rate-limit)."}
        </p>
      ) : null}

      {data.user ? (
        <div className="flex items-center gap-4 mb-3">
          <Stat label={language === "es" ? "Repos" : "Repos"} value={data.user.public_repos} />
          <Stat label={language === "es" ? "Seguidores" : "Followers"} value={data.user.followers} />
          <Stat
            label={language === "es" ? "Desde" : "Since"}
            value={new Date(data.user.created_at).getFullYear()}
          />
        </div>
      ) : (
        !data.error && <div className="h-10 bg-surface-0 rounded animate-pulse mb-3" />
      )}

      <div className="flex-1 space-y-1.5 overflow-hidden">
        {data.events.length > 0 ? (
          data.events.map((evt, i) => (
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
                {evt.message || `${evt.commits} commit${evt.commits > 1 ? "s" : ""}`}
              </span>
              <span className="text-ink-faint shrink-0">{evt.when}</span>
            </div>
          ))
        ) : (
          !data.error && (
            <div className="space-y-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-3 bg-surface-0 rounded animate-pulse" />
              ))}
            </div>
          )
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
  if (diff < 3600)
    return `${Math.floor(diff / 60)}${lang === "es" ? "m" : "m"}`;
  if (diff < 86400)
    return `${Math.floor(diff / 3600)}${lang === "es" ? "h" : "h"}`;
  return `${Math.floor(diff / 86400)}${lang === "es" ? "d" : "d"}`;
}
