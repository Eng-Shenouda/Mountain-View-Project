import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? "/Mountain-View-Project/" : "/",
  server: {
    port: 5173,
  },
});
