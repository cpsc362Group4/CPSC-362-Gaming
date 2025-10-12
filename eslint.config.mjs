// eslint.config.mjs
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import htmlPlugin from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";

export default defineConfig([
  // JS & TS files
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // HTML files
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: htmlParser,
    },
    plugins: {
      html: htmlPlugin,
    },
    rules: {
      ...htmlPlugin.configs.recommended.rules,
      "html/require-img-alt": "error", // your custom rule
    },
  },
]);
