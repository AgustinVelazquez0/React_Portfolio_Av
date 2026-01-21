import { CONTACT } from "../../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../context/ThemeContext";

function Contact() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const phoneNumber = "+59898661715";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/+59898661715", "_blank");
  };

  const openEmail = () => {
    window.open(`mailto:${CONTACT.email}`, "_blank");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Aquí podrías agregar una notificación de "copiado"
  };

  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-3xl font-semibold
        text-neutral-900 dark:text-white lg:text-4xl"
      >
        {t("contact.title")}
      </motion.h2>

      {/* Grid Layout Responsivo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* Card Izquierda - Información de Contacto */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className={`rounded-md p-8 border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition-all duration-200 ${isDarkMode ? "bg-black" : "bg-white"}`}
        >
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
                {t("contact.getInTouch") || "¡Hablemos!"}
              </h3>
              <p className={isDarkMode ? "text-white" : "text-neutral-600"}>
                {t("contact.contactDescription") ||
                  "Estoy disponible para nuevas oportunidades y colaboraciones"}
              </p>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-4">
              {/* Ubicación */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex items-center p-4 rounded-md transition-all duration-300 group cursor-pointer ${isDarkMode ? "bg-black hover:bg-neutral-900" : "bg-white hover:bg-neutral-100 border border-neutral-200"}`}
                onClick={() => copyToClipboard(CONTACT.address)}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${isDarkMode ? "bg-neutral-800 group-hover:bg-neutral-700" : "bg-neutral-600 group-hover:bg-neutral-500"}`}>
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className={`font-semibold ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
                    Ubicación
                  </p>
                  <p className={isDarkMode ? "text-white" : "text-neutral-600"}>
                    {CONTACT.address}
                  </p>
                </div>
              </motion.div>

              {/* Teléfono */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex items-center p-4 rounded-md transition-all duration-300 group cursor-pointer ${isDarkMode ? "bg-black hover:bg-neutral-900" : "bg-white hover:bg-neutral-100 border border-neutral-200"}`}
                onClick={() => copyToClipboard(CONTACT.phoneNo)}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${isDarkMode ? "bg-neutral-800 group-hover:bg-neutral-700" : "bg-neutral-600 group-hover:bg-neutral-500"}`}>
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className={`font-semibold ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
                    Teléfono
                  </p>
                  <p className={isDarkMode ? "text-white" : "text-neutral-600"}>
                    {CONTACT.phoneNo}
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex items-center p-4 rounded-md transition-all duration-300 group cursor-pointer ${isDarkMode ? "bg-black hover:bg-neutral-900" : "bg-white hover:bg-neutral-100 border border-neutral-200"}`}
                onClick={openEmail}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${isDarkMode ? "bg-neutral-800 group-hover:bg-neutral-700" : "bg-neutral-600 group-hover:bg-neutral-500"}`}>
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className={`font-semibold ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
                    Email
                  </p>
                  <p className={isDarkMode ? "text-white" : "text-neutral-600"}>
                    {CONTACT.email}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Botón WhatsApp Principal */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              className={`w-full mt-6 font-semibold py-2 px-3 rounded transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg ${
                isDarkMode
                  ? "bg-white hover:bg-neutral-100 text-black"
                  : "bg-black hover:bg-neutral-800 text-white"
              }`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span>{t("contact.openWhatsApp") || "Abrir WhatsApp"}</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Card Derecha - Formulario WhatsApp */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="bg-white dark:bg-neutral-900/50 rounded-md p-8 
          border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]
          hover:shadow-[0_0_20px_rgba(34,211,238,0.7)]
          transition-all duration-200"
        >
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
              {t("contact.sendMessage") || "Envía un Mensaje"}
            </h3>
            <p className={isDarkMode ? "text-white" : "text-neutral-600"}>
              {t("contact.messageDescription") ||
                "Escribe tu mensaje y te contactaremos por WhatsApp"}
            </p>
          </div>

          <div className="space-y-6">
            {/* Textarea para el mensaje */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-white" : "text-neutral-700"}`}>
                {t("contact.messageLabel") || "Tu mensaje"}
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  t("contact.placeholder") ||
                  "Hola! Me interesa saber más sobre tus servicios..."
                }
                rows={6}
                className={`w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-2 focus:outline-none transition-all duration-300 resize-none focus:border-neutral-500 dark:focus:border-neutral-600 focus:ring-neutral-400/20 dark:focus:ring-neutral-500/20 ${
                  isDarkMode
                    ? "bg-black text-white placeholder-neutral-400"
                    : "bg-white text-neutral-900 placeholder-neutral-500"
                }`}
              />
            </div>

            {/* Botón Enviar Mensaje */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={sendMessage}
              disabled={!message.trim()}
              className={`w-full font-semibold py-2 px-3 rounded transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                isDarkMode
                  ? "bg-white hover:bg-neutral-100 text-black"
                  : "bg-black hover:bg-neutral-800 text-white"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span>{t("contact.submitButton") || "Enviar Mensaje"}</span>
            </motion.button>

            {/* Información adicional */}
            <div
              className={`mt-6 p-4 rounded-md border-l-4 border-neutral-400 dark:border-neutral-600 ${
                isDarkMode ? "bg-black" : "bg-white"
              }`}
            >
              <div className="flex items-start">
                <svg
                  className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${isDarkMode ? "text-white" : "text-neutral-600"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className={`text-sm ${isDarkMode ? "text-white" : "text-neutral-700"}`}>
                    {t("contact.responseTime") ||
                      "Tiempo de respuesta: 2-4 horas"}
                  </p>
                  <p className={`text-xs mt-1 ${isDarkMode ? "text-white" : "text-neutral-600"}`}>
                    {t("contact.workingHours") ||
                      "Horario de atención: Lun-Vie 9:00-18:00 (GMT-3)"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
