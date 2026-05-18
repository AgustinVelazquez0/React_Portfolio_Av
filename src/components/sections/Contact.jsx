import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaPaperPlane,
  FaCopy,
} from "react-icons/fa6";
import { CONTACT } from "../../constants";
import { useTranslation } from "../../hooks/useTranslation";
import { fadeUp, viewport, transitions } from "../../lib/motion";
import Button from "../ui/Button";
import Surface from "../ui/Surface";

/**
 * Contact — refactor con sistema de diseño.
 * Sin glow neón. Editorial, dos columnas, jerarquía clara.
 */
function Contact() {
  const { t, language } = useTranslation();
  const [message, setMessage] = useState("");
  const [copiedField, setCopiedField] = useState(null);

  const phoneRaw = "59898661715";

  const sendMessage = () => {
    window.open(
      `https://wa.me/${phoneRaw}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openWhatsApp = () =>
    window.open(
      `https://wa.me/${phoneRaw}`,
      "_blank",
      "noopener,noreferrer"
    );

  const openEmail = () => window.open(`mailto:${CONTACT.email}`, "_blank");

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1800);
  };

  return (
    <section
      id="contact"
      className="border-t border-line-subtle pt-16 pb-20 relative"
    >
      <AnimatePresence>
        {copiedField ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={transitions.fast}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-3 h-9
              inline-flex items-center rounded-md
              bg-ink-primary text-surface-0 font-medium text-sm shadow-elevated"
          >
            {t("contact.copied")}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <header className="mb-12">
        <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-3">
          06 — {t("contact.title")}
        </p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="font-display text-4xl lg:text-5xl text-ink-primary tracking-tightest leading-none mb-4"
        >
          {language === "es" ? (
            <>
              Hablemos de tu{" "}
              <span className="italic text-ink-secondary">próximo proyecto.</span>
            </>
          ) : (
            <>
              Let&apos;s talk about your{" "}
              <span className="italic text-ink-secondary">next project.</span>
            </>
          )}
        </motion.h2>
        <p className="max-w-xl text-base text-ink-muted leading-relaxed">
          {t("contact.contactDescription")}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Card izquierda — Info */}
        <Surface tone="raised" padding="lg" radius="lg">
          <div className="space-y-3">
            <ContactItem
              icon={FaLocationDot}
              label={language === "es" ? "Ubicación" : "Location"}
              value={CONTACT.address}
              onClick={() => copyToClipboard(CONTACT.address, "address")}
            />
            <ContactItem
              icon={FaPhone}
              label={language === "es" ? "Teléfono" : "Phone"}
              value={CONTACT.phoneNo}
              onClick={() => copyToClipboard(CONTACT.phoneNo, "phone")}
            />
            <ContactItem
              icon={FaEnvelope}
              label="Email"
              value={CONTACT.email}
              onClick={openEmail}
              actionIcon={FaCopy}
              onAction={() => copyToClipboard(CONTACT.email, "email")}
            />
            <ContactItem
              icon={FaLinkedin}
              label="LinkedIn"
              value={t("contact.linkedin")}
              href={CONTACT.linkedin}
              accent
            />
            <ContactItem
              icon={FaGithub}
              label="GitHub"
              value="@AgustinVelazquez0"
              href={CONTACT.github}
            />
          </div>

          <div className="mt-6 pt-6 border-t border-line-subtle">
            <Button
              variant="primary"
              size="lg"
              onClick={openWhatsApp}
              leadingIcon={FaWhatsapp}
              className="w-full"
            >
              {t("contact.openWhatsApp")}
            </Button>
          </div>
        </Surface>

        {/* Card derecha — Form WhatsApp */}
        <Surface tone="raised" padding="lg" radius="lg">
          <h3 className="font-display text-2xl text-ink-primary tracking-tightest leading-tight mb-2">
            {t("contact.sendMessage")}
          </h3>
          <p className="text-sm text-ink-muted mb-6">
            {t("contact.messageDescription")}
          </p>

          <label className="block text-xs font-mono uppercase tracking-mono text-ink-faint mb-2">
            {t("contact.messageLabel")}
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("contact.placeholder")}
            rows={6}
            className="w-full px-4 py-3 rounded-md resize-none
              bg-surface-0 border border-line-DEFAULT
              focus:border-accent focus:ring-2 focus:ring-accent/20
              text-sm text-ink-primary placeholder-ink-faint
              outline-none transition-colors duration-fast"
          />

          <Button
            variant="accent"
            size="lg"
            onClick={sendMessage}
            disabled={!message.trim()}
            trailingIcon={FaPaperPlane}
            className="w-full mt-4"
          >
            {t("contact.submitButton")}
          </Button>

          <div className="mt-6 pt-4 border-t border-line-subtle space-y-1">
            <p className="text-xs text-ink-secondary">
              {t("contact.responseTime")}
            </p>
            <p className="text-2xs font-mono uppercase tracking-mono text-ink-faint">
              {t("contact.workingHours")}
            </p>
          </div>
        </Surface>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  onClick,
  href,
  accent,
  actionIcon: ActionIcon,
  onAction,
}) {
  const Component = href ? "a" : "button";
  const componentProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { type: "button", onClick };

  return (
    <div
      className={`flex items-center gap-4 p-3 rounded-md
        border ${accent ? "border-accent/30 hover:border-accent/60" : "border-line-subtle hover:border-line-DEFAULT"}
        transition-colors duration-fast group`}
    >
      <Component
        {...componentProps}
        className="flex-1 flex items-center gap-4 text-left
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
      >
        <span
          className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0
            ${accent ? "bg-accent/15 text-accent" : "bg-surface-0 text-ink-secondary"}
            border border-line-subtle group-hover:border-line-DEFAULT
            transition-colors duration-fast`}
        >
          <Icon />
        </span>
        <div className="flex-1 min-w-0">
          <div className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
            {label}
          </div>
          <div className="text-sm text-ink-primary truncate">{value}</div>
        </div>
      </Component>
      {ActionIcon ? (
        <button
          type="button"
          onClick={onAction}
          className="p-2 rounded-md text-ink-faint hover:text-ink-primary hover:bg-surface-0 transition-colors duration-fast"
          aria-label="Copy"
        >
          <ActionIcon className="text-xs" />
        </button>
      ) : null}
    </div>
  );
}

export default Contact;
