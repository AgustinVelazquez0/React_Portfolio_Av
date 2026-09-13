import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // La carátula del expediente muestra cuándo se publicó esta versión.
    // Se inyecta en build para que la fecha no se pueda quedar vieja a mano.
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
  server: {
    proxy: {
      // Forward /api/* to the Express server (server/) in dev
      "/api": {
        target: "http://localhost:5050",
        changeOrigin: true,
      },
    },
  },
  build: {
    // Keep CSS in one chunk for faster initial paint
    cssCodeSplit: false,
  },
});
