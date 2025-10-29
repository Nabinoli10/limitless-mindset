import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // ✅ Ensures Vercel (and Netlify) handle it correctly as a single-page app
  base: "/",
  build: {
    outDir: "dist", // default, but keep it explicit
  },
  server: {
    host: true, // allows external preview (optional but helpful)
  },
});
