import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ command, mode }) => {
  // 1. Load env variables properly
  const env = loadEnv(mode, process.cwd(), '');
  
  // 2. Reliable Detection Logic
  // Vercel always sets 'VERCEL' to '1'
  const isVercel = env.VERCEL === '1';
  
  // 3. GitHub Pages usually sets 'BASE_URL' or you can infer it
  // If not Vercel and building for production, assume GitHub Pages
  const isProduction = mode === 'production';
  
  // LOGIC:
  // - Vercel: Always '/'
  // - Local Dev: Always '/'
  // - GitHub Actions (Production): '/my-portfolio/'
  
  const base = isVercel ? '/' : (isProduction ? '/my-portfolio/' : '/');

  console.log(`[Vite Build] Mode: ${mode}, IsVercel: ${isVercel}, Base Path: ${base}`);

  return {
    base: base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Ensure API folder doesn't confuse the frontend build
    build: {
      outDir: 'dist',
    }
  };
});