/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    reporters: process.env.CI ? ["default", "junit"] : "default",
    outputFile: "./test-results.xml",
  },
});
