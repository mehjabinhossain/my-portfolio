import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url"; // ✅ Import this

// ✅ Create __dirname manually (required for "type": "module")
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => ({
  // If running locally -> use "/"
  // If building for GitHub -> use "/my-portfolio/"
  base: mode === 'production' ? '/my-portfolio/' : '/',

  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));