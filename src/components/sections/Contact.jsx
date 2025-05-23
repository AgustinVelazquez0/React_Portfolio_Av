import { CONTACT } from "../../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";

function Contact() {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const phoneNumber = "+59898661715"; // Número de teléfono sin espacios
    // Abre una nueva ventana de WhatsApp con el número y mensaje
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const openWhatsApp = () => {
    // Abre una nueva ventana de WhatsApp con el número predefinido
    window.open("https://wa.me/+59898661715", "_blank");
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        {t("contact.title")}
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>

        <div className="mt-8">
          <h3 className="text-xl">WhatsApp</h3>
          <p>{t("contact.messageLabel")}</p>
          <button
            onClick={openWhatsApp}
            className="mt-2 bg-cyan-500 text-white rounded px-4 py-2"
          >
            {t("contact.buttonLabel")}
          </button>
          <div className="mt-4">
            <motion.h4
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
            >
              {t("contact.submitButton")}
            </motion.h4>
            <motion.input
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("contact.placeholder")}
              className="border rounded p-2"
            />
            <motion.button
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
              onClick={sendMessage}
              className="ml-2 bg-cyan-500 text-white rounded px-4 py-2"
            >
              {t("contact.submitButton")}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
