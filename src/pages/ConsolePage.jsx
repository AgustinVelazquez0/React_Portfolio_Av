import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { PROJECTS } from "../data/projects";
import { CASE_STUDIES } from "../data/caseStudies";
import { EXPERIENCES, CONTACT, CV_URL_ES, CV_URL_EN } from "../constants";
import { useTranslation } from "../hooks/useTranslation";
import { useTheme } from "../context/ThemeContext";

/**
 * /consola — anexo interactivo del expediente.
 *
 * Por qué vive en su propia ruta y no en la portada: una consola obliga a
 * escribir para obtener información, y quien revisa candidatos no escribe,
 * escanea. Forzarla en el home cuesta candidaturas. Como anexo opcional
 * suma: quien quiera hurgar, hurga, y el resto no paga el peaje.
 *
 * Tampoco imita un CRT verde sobre negro. Es una terminal impresa en papel,
 * con la misma tinta que el resto del expediente.
 */

/** Consulta el catálogo real: si un proyecto cambia, la consola cambia sola. */
function useCommands() {
  const { t, language } = useTranslation();
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();
  const es = language === "es";

  return useMemo(() => {
    const titleOf = (p) => t(p.titleKey);

    const commands = {
      help: {
        help: es ? "lista de comandos" : "list commands",
        run: () => [
          es ? "Comandos disponibles:" : "Available commands:",
          "",
          ...Object.entries(commands).map(
            ([name, c]) => `  ${name.padEnd(12)}${c.help}`
          ),
          "",
          es
            ? "Tab autocompleta · ↑ ↓ recorre el historial"
            : "Tab autocompletes · ↑ ↓ walks history",
        ],
      },

      whoami: {
        help: es ? "quién firma este expediente" : "who signs this file",
        run: () => [
          "Agustin Velazquez — Full-Stack Developer",
          es ? "Montevideo, Uruguay · remoto global" : "Montevideo, Uruguay · remote global",
          "",
          es
            ? "Web, mobile y SaaS. Del esquema de la base al deploy."
            : "Web, mobile and SaaS. From database schema to deploy.",
        ],
      },

      ls: {
        help: es ? "lista los anexos del expediente" : "list the file exhibits",
        run: () => [
          `${"FILE".padEnd(6)}${(es ? "EVIDENCIA" : "EVIDENCE").padEnd(12)}${es ? "ANEXO" : "EXHIBIT"}`,
          "─".repeat(52),
          ...PROJECTS.map(
            (p) =>
              `${String(p.file).padEnd(6)}${String(p.evidence).padEnd(12)}${titleOf(p)}  (${p.slug})`
          ),
          "",
          es
            ? `${PROJECTS.length} anexos · ${CASE_STUDIES.length} con caso documentado`
            : `${PROJECTS.length} exhibits · ${CASE_STUDIES.length} with documented case`,
        ],
      },

      cat: {
        help: es ? "cat <slug|file> — abre un anexo" : "cat <slug|file> — read an exhibit",
        run: (arg) => {
          if (!arg) return [es ? "uso: cat <slug|file>" : "usage: cat <slug|file>"];
          const p = PROJECTS.find(
            (x) => x.slug === arg || String(x.file) === arg.padStart(2, "0")
          );
          if (!p)
            return [
              es ? `no existe el anexo "${arg}"` : `no exhibit named "${arg}"`,
              es ? 'probá "ls"' : 'try "ls"',
            ];
          return [
            `FILE ${p.file} — ${titleOf(p)}`,
            "─".repeat(52),
            t(p.descriptionKey),
            "",
            `${es ? "evidencia" : "evidence"}: ${p.evidence}`,
            `stack: ${p.tech.join(", ")}`,
            ...(p.links?.demo ? [`demo: ${p.links.demo}`] : []),
            ...(p.links?.repo ? [`repo: ${p.links.repo}`] : []),
          ];
        },
      },

      exp: {
        help: es ? "registros de trabajo" : "work records",
        run: () =>
          EXPERIENCES.flatMap((e, i) => [
            `${t(`experience.items.${i}.year`)} — ${t(`experience.items.${i}.company`)}`,
            `  ${t(`experience.items.${i}.role`)}`,
            ...(e.redactedClient
              ? [`  [${"█".repeat(9)}] ${t("experience.redacted.reason")}`]
              : []),
            "",
          ]),
      },

      evidence: {
        help: es ? "cómo se gradúa cada afirmación" : "how each claim is graded",
        run: () => [
          es ? "Escala de evidencia declarada:" : "Declared evidence scale:",
          "",
          `  production  ${t("projects.evidence.productionNote")}`,
          `  live        ${t("projects.evidence.liveNote")}`,
          `  exercise    ${t("projects.evidence.exerciseNote")}`,
          "",
          es
            ? "Un ejercicio de clase y un producto con clientes que pagan no"
            : "A class exercise and a product with paying customers do not",
          es
            ? "valen lo mismo, y este sitio no los presenta igual."
            : "weigh the same, and this site does not present them alike.",
        ],
      },

      cv: {
        help: es ? "descarga el CV en PDF" : "download the CV as PDF",
        run: () => {
          window.open(es ? CV_URL_ES : CV_URL_EN, "_blank", "noopener,noreferrer");
          return [es ? "descargando CV…" : "downloading CV…"];
        },
      },

      contact: {
        help: es ? "cómo escribirme" : "how to reach me",
        run: () => [
          `email     ${CONTACT.email}`,
          `linkedin  ${CONTACT.linkedin}`,
          `github    ${CONTACT.github}`,
        ],
      },

      open: {
        help: es ? "open <slug> — abre la demo en vivo" : "open <slug> — open the live demo",
        run: (arg) => {
          const p = PROJECTS.find((x) => x.slug === arg);
          if (!p?.links?.demo)
            return [es ? "ese anexo no tiene demo pública" : "that exhibit has no public demo"];
          window.open(p.links.demo, "_blank", "noopener,noreferrer");
          return [`→ ${p.links.demo}`];
        },
      },

      // submit() intercepta "clear" antes de llegar acá; figura para que
      // aparezca listado en help como cualquier otro comando.
      clear: {
        help: es ? "vacía la pantalla" : "wipe the screen",
        run: () => [],
      },

      theme: {
        help: es ? "alterna claro / oscuro" : "toggle light / dark",
        run: () => {
          toggleTheme();
          return ["ok"];
        },
      },

      exit: {
        help: es ? "vuelve al expediente" : "back to the file",
        run: () => {
          navigate("/");
          return [];
        },
      },
    };

    return commands;
  }, [t, es, toggleTheme, navigate]);
}

export default function ConsolePage() {
  const { language } = useTranslation();
  const es = language === "es";
  const commands = useCommands();
  const inputRef = useRef(null);
  const endRef = useRef(null);

  const [lines, setLines] = useState(() => [
    { kind: "out", text: "AV-2026 — " + (es ? "consola del expediente" : "file console") },
    {
      kind: "out",
      text: es
        ? 'Escribí "help" para ver los comandos. "exit" vuelve al sitio.'
        : 'Type "help" for commands. "exit" returns to the site.',
    },
    { kind: "out", text: "" },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [histIndex, setHistIndex] = useState(-1);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [lines]);

  const submit = (raw) => {
    const input = raw.trim();
    const next = [{ kind: "in", text: input }];

    if (input) {
      const [name, ...rest] = input.split(/\s+/);
      const cmd = commands[name.toLowerCase()];
      if (name.toLowerCase() === "clear") {
        setLines([]);
        setValue("");
        setHistory((h) => [input, ...h]);
        setHistIndex(-1);
        return;
      }
      if (cmd) {
        next.push(...cmd.run(rest.join(" ")).map((text) => ({ kind: "out", text })));
      } else {
        next.push({
          kind: "err",
          text: es
            ? `comando desconocido: ${name} — probá "help"`
            : `unknown command: ${name} — try "help"`,
        });
      }
      next.push({ kind: "out", text: "" });
      setHistory((h) => [input, ...h]);
    }

    setLines((l) => [...l, ...next]);
    setValue("");
    setHistIndex(-1);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      submit(value);
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const match = Object.keys(commands).find((c) => c.startsWith(value.trim()));
      if (match) setValue(match + " ");
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = Math.min(histIndex + 1, history.length - 1);
      if (i >= 0) {
        setHistIndex(i);
        setValue(history[i]);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = histIndex - 1;
      setHistIndex(i);
      setValue(i >= 0 ? history[i] : "");
    }
  };

  return (
    <main className="container mx-auto px-6 lg:px-8 py-16 min-h-screen">
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-mono text-ink-faint hover:text-ink-primary transition-colors"
      >
        <FaArrowLeft aria-hidden /> {es ? "Volver al expediente" : "Back to the file"}
      </Link>

      <header className="mt-8 mb-6">
        <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-3">
          {es ? "Anexo interactivo" : "Interactive exhibit"}
        </p>
        <h1 className="font-display text-4xl lg:text-5xl text-ink-primary tracking-tightest leading-none">
          {es ? "Consola" : "Console"}
        </h1>
        <p className="mt-4 max-w-xl text-sm text-ink-muted leading-relaxed">
          {es
            ? "Los mismos datos del sitio, consultables por teclado. Está acá y no en la portada a propósito: nadie debería tener que escribir un comando para saber a qué me dedico."
            : "The same data as the site, queryable from the keyboard. It lives here and not on the home page on purpose: nobody should have to type a command to learn what I do."}
        </p>
      </header>

      {/* Clic en cualquier parte del panel devuelve el foco al prompt.
          El input sigue siendo el control real, así que el teclado no pierde nada. */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="rounded-lg border border-line-DEFAULT bg-surface-1 p-4 lg:p-6 font-mono text-xs lg:text-sm leading-relaxed"
      >
        <div className="max-h-[60vh] overflow-y-auto scrollbar-thin">
          {lines.map((line, i) => (
            <div
              key={i}
              className={
                line.kind === "in"
                  ? "text-ink-primary"
                  : line.kind === "err"
                    ? "text-signal-danger"
                    : "text-ink-secondary"
              }
            >
              {line.kind === "in" ? (
                <>
                  <span className="text-accent">av&nbsp;›&nbsp;</span>
                  {line.text}
                </>
              ) : (
                <span className="whitespace-pre-wrap">{line.text || "\u00A0"}</span>
              )}
            </div>
          ))}

          <div className="flex items-center">
            <label htmlFor="av-console" className="text-accent shrink-0">
              av&nbsp;›&nbsp;
            </label>
            <input
              id="av-console"
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck="false"
              autoComplete="off"
              aria-label={es ? "Entrada de la consola" : "Console input"}
              className="flex-1 bg-transparent text-ink-primary outline-none"
            />
          </div>
          <div ref={endRef} />
        </div>
      </div>

      <p className="mt-4 font-mono text-2xs uppercase tracking-mono text-ink-faint">
        help · ls · cat · exp · evidence · cv · contact · exit
      </p>
    </main>
  );
}
