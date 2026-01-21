import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";

function Guestbook() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState(""); // honeypot
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState({ state: "idle", error: "" }); // idle | loading | sending | error

  const apiBaseUrl = useMemo(
    () => (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, ""),
    []
  );

  const load = async () => {
    setStatus((s) => ({ ...s, state: "loading", error: "" }));
    try {
      const res = await fetch(`${apiBaseUrl}/api/guestbook?limit=20`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to load");
      setItems(Array.isArray(data.items) ? data.items : []);
      setStatus({ state: "idle", error: "" });
    } catch (e) {
      setStatus({ state: "error", error: e?.message || "Failed to load" });
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = async () => {
    if (!message.trim()) return;
    setStatus({ state: "sending", error: "" });
    try {
      const res = await fetch(`${apiBaseUrl}/api/guestbook`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message, companyWebsite }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "No se pudo enviar.");

      setName("");
      setMessage("");
      setCompanyWebsite("");
      await load();
    } catch (e) {
      setStatus({ state: "error", error: e?.message || "No se pudo enviar." });
    } finally {
      setStatus((s) => (s.state === "error" ? s : { state: "idle", error: "" }));
    }
  };

  return (
    <div id="guestbook" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-3xl font-semibold
        text-neutral-900 dark:text-white lg:text-4xl"
      >
        {t("guestbook.title") || "Guestbook"}
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* Form */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="bg-white dark:bg-neutral-900/50 rounded-md p-8
          border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]
          hover:shadow-[0_0_20px_rgba(34,211,238,0.7)]
          transition-all duration-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
              {t("guestbook.leaveTitle") || "Dejá un comentario"}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {t("guestbook.leaveDesc") ||
                "Esto se guarda en MongoDB Atlas vía mi API."}
            </p>
          </div>

          {/* Honeypot */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={companyWebsite}
            onChange={(e) => setCompanyWebsite(e.target.value)}
            className="hidden"
            aria-hidden="true"
          />

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t("guestbook.nameLabel") || "Nombre (opcional)"}
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("guestbook.namePlaceholder") || "Tu nombre"}
                className="w-full px-4 py-3 bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:border-neutral-500 dark:focus:border-neutral-600 focus:ring-2 focus:ring-neutral-400/20 dark:focus:ring-neutral-500/20 focus:outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t("guestbook.messageLabel") || "Comentario"}
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  t("guestbook.messagePlaceholder") ||
                  "Dejá feedback, una idea, o lo que te pareció el portfolio…"
                }
                rows={5}
                className="w-full px-4 py-3 bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:border-neutral-500 dark:focus:border-neutral-600 focus:ring-2 focus:ring-neutral-400/20 dark:focus:ring-neutral-500/20 focus:outline-none transition-all duration-300 resize-none"
              />
              <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">
                {t("guestbook.limit") || "Máximo 400 caracteres."}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={submit}
              disabled={!message.trim() || status.state === "sending"}
              className="w-full bg-neutral-700 hover:bg-neutral-800 dark:bg-neutral-600 dark:hover:bg-neutral-700 text-white font-semibold py-2 px-3 rounded transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.state === "sending"
                ? t("guestbook.sending") || "Enviando..."
                : t("guestbook.submit") || "Publicar"}
            </motion.button>

            {status.state === "error" && (
              <div className="text-sm text-center text-red-600">
                {status.error}
              </div>
            )}
          </div>
        </motion.div>

        {/* List */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="bg-white dark:bg-neutral-900/50 rounded-md p-8
          border border-neutral-300 dark:border-neutral-800
          shadow-[0_0_10px_rgba(0,0,0,0.08)] dark:shadow-[0_0_10px_rgba(255,255,255,0.06)]
          hover:shadow-[0_0_15px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.10)]
          transition-all duration-200"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
              {t("guestbook.latest") || "Últimos comentarios"}
            </h3>
            <button
              type="button"
              onClick={load}
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {t("guestbook.refresh") || "Actualizar"}
            </button>
          </div>

          {status.state === "loading" ? (
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              {t("guestbook.loading") || "Cargando..."}
            </div>
          ) : items.length === 0 ? (
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              {t("guestbook.empty") || "Todavía no hay comentarios. Sé el primero."}
            </div>
          ) : (
            <div className="space-y-4 max-h-[420px] overflow-auto pr-2 scrollbar-thin scrollbar-thumb-neutral-500/50 scrollbar-track-transparent">
              {items.map((it) => (
                <div
                  key={it._id}
                  className="p-4 rounded-md bg-neutral-200/60 dark:bg-neutral-800/60 border border-neutral-300/60 dark:border-neutral-700/60"
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {it.name?.trim() ? it.name : t("guestbook.anonymous") || "Anónimo"}
                    </div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">
                      {it.createdAt ? new Date(it.createdAt).toLocaleDateString() : ""}
                    </div>
                  </div>
                  <div className="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap">
                    {it.message}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Guestbook;

