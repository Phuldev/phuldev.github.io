import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Since your repo is phuldev.github.io, use "/"
  plugins: [react()]
});
