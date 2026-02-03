import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

// FORCE DEPLOY: Fixing white screen on Vercel
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  // Check if we are running on Vercel
  const isVercel = process.env.VERCEL === '1';

  return {
    // If Vercel -> use "/"
    // If GitHub -> use "/my-portfolio/"
    base: isVercel ? '/' : (mode === 'production' ? '/my-portfolio/' : '/'),

    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});