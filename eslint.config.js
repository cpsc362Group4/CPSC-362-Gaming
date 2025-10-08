import js from "@eslint/js";
import pluginHtml from "eslint-plugin-html";
import pluginCss from "eslint-plugin-css";

export default [
  {
    files: ["**/*.{js,html,css}"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: 2021
    },
    plugins: {
      html: pluginHtml,
      css: pluginCss
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "warn",
      "semi": ["warn", "always"],
      "quotes": ["warn", "double"]
    }
  }
];
