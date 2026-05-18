import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
