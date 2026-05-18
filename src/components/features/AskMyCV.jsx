import { useState, useRef, useEffect } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { FaPaperPlane, FaWandMagicSparkles } from "react-icons/fa6";
import Tag from "../ui/Tag";

/**
 * AV AskMyCV — agente IA que responde sobre el CV de Agustin.
 *
 * Modo de funcionamiento:
 *  1) Si VITE_AI_ENDPOINT está definido, hace POST streamed a ese endpoint.
 *     (Server espera { question } y stream de chunks text/plain).
 *  2) Si no hay endpoint, usa el fallback local: recupera respuesta de
 *     src/data/cvKnowledge.js por keywords. Esto garantiza que la
 *     experiencia funcione incluso sin backend desplegado.
 *
 * El backend recomendado vive en server/src/index.js (Vercel AI Gateway).
 */
import { localAnswer, SUGGESTIONS } from "../../data/cvKnowledge";

const AI_ENDPOINT = import.meta.env.VITE_AI_ENDPOINT || "";

export default function AskMyCV() {
  const { language } = useTranslation();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [usedFallback, setUsedFallback] = useState(false);
  const abortRef = useRef(null);

  useEffect(
    () => () => {
      if (abortRef.current) abortRef.current.abort();
    },
    []
  );

  const ask = async (rawQuestion) => {
    const q = (rawQuestion ?? question).trim();
    if (!q || streaming) return;
    setStreaming(true);
    setAnswer("");
    setUsedFallback(false);

    if (!AI_ENDPOINT) {
      const text = localAnswer(q, language);
      setUsedFallback(true);
      await typewriter(text, (chunk) =>
        setAnswer((prev) => prev + chunk)
      );
      setStreaming(false);
      return;
    }

    try {
      abortRef.current = new AbortController();
      const res = await fetch(AI_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, language }),
        signal: abortRef.current.signal,
      });

      if (!res.ok || !res.body) throw new Error(`network ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setAnswer((prev) => prev + chunk);
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        const text = localAnswer(q, language);
        setUsedFallback(true);
        setAnswer(text);
      }
    } finally {
      setStreaming(false);
    }
  };

  const reset = () => {
    setQuestion("");
    setAnswer("");
    setUsedFallback(false);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FaWandMagicSparkles className="text-accent" aria-hidden />
          <h3 className="font-display text-2xl text-ink-primary tracking-tightest leading-none">
            {language === "es" ? "Preguntá sobre mi CV" : "Ask about my CV"}
          </h3>
        </div>
        <Tag variant="live" size="xs" dot>
          {language === "es" ? "AI · en vivo" : "AI · live"}
        </Tag>
      </div>

      <p className="text-sm text-ink-muted mb-4 leading-relaxed max-w-md">
        {language === "es"
          ? "Agente sobre mi experiencia, stack y proyectos. Probá:"
          : "An agent over my experience, stack and projects. Try:"}
      </p>

      {/* Suggestion chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {SUGGESTIONS[language].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setQuestion(s);
              ask(s);
            }}
            className="text-xs px-2.5 h-7 rounded-full
              bg-surface-1 hover:bg-surface-2
              border border-line-DEFAULT hover:border-line-strong
              text-ink-secondary hover:text-ink-primary
              transition-colors duration-fast"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Conversation surface */}
      <div className="flex-1 min-h-[140px] mb-4 rounded-md
        bg-surface-0 border border-line-subtle p-4
        font-mono text-sm leading-relaxed text-ink-secondary
        overflow-auto scrollbar-thin">
        {!answer && !streaming ? (
          <span className="text-ink-faint italic">
            {language === "es"
              ? "// la respuesta del agente aparece acá"
              : "// the agent's answer appears here"}
          </span>
        ) : (
          <>
            <span className="text-accent">{">"} </span>
            {answer}
            {streaming ? (
              <span className="inline-block w-2 h-4 -mb-1 ml-0.5 bg-accent animate-pulse" />
            ) : null}
            {usedFallback ? (
              <p className="mt-3 text-xs text-ink-faint">
                {language === "es"
                  ? "↳ respuesta local (sin LLM). Configurá VITE_AI_ENDPOINT para usar el agente real."
                  : "↳ local answer (no LLM). Set VITE_AI_ENDPOINT to enable the real agent."}
              </p>
            ) : null}
          </>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask();
        }}
        className="flex items-center gap-2 rounded-lg border border-line-DEFAULT
          bg-surface-0 px-3 focus-within:border-accent transition-colors"
      >
        <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
          ⌘
        </span>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={
            language === "es"
              ? "¿Qué experiencia tiene en X?"
              : "What experience does he have with X?"
          }
          disabled={streaming}
          className="flex-1 bg-transparent outline-none border-0 py-3 text-sm
            text-ink-primary placeholder-ink-faint disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={!question.trim() || streaming}
          className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-md
            bg-accent text-accent-ink disabled:opacity-40 disabled:cursor-not-allowed
            hover:bg-accent-soft transition-colors duration-fast"
          aria-label={language === "es" ? "Enviar pregunta" : "Send question"}
        >
          <FaPaperPlane className="text-xs" />
        </button>
        {answer ? (
          <button
            type="button"
            onClick={reset}
            className="text-2xs font-mono uppercase tracking-mono text-ink-faint hover:text-ink-primary"
          >
            {language === "es" ? "limpiar" : "clear"}
          </button>
        ) : null}
      </form>
    </div>
  );
}

// ---- typewriter helper ----
async function typewriter(text, onChunk) {
  const words = text.split(" ");
  for (const word of words) {
    onChunk(word + " ");
    await new Promise((r) => setTimeout(r, 18));
  }
}
