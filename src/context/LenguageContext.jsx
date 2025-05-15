import { createContext, useContext, useState } from "react";

// Creamos el contexto con valores por defecto
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Estado que maneja el idioma actual
  const [language, setLanguage] = useState("es");

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  // Lo que va a estar disponible para los consumidores
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto más fácil
export const useLanguage = () => useContext(LanguageContext);
