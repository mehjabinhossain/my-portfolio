import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  // 1. Check if we are currently building on Vercel
  const isVercel = process.env.VERCEL === '1';

  return {
    // 2. Dynamic Logic:
    // If Vercel -> Use "/"
    // If Production (GitHub Pages) -> Use "/my-portfolio/"
    // If Localhost -> Use "/"
    base: isVercel ? '/' : (mode === 'production' ? '/my-portfolio/' : '/'),

    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});