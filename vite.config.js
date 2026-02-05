import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  // Load all env variables including VERCEL ones
  const env = loadEnv(mode, process.cwd(), '');
  
  // Vercel sets VERCEL=1; GitHub Actions typically doesn't.
  // This ensures Vercel and Local Dev use '/', while GitHub Pages uses your subfolder.
  const isVercel = env.VERCEL === '1' || process.env.VERCEL === '1';
  const base = isVercel ? '/' : '/my-portfolio/';

  return {
    base: base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'dist',
    }
  };
});