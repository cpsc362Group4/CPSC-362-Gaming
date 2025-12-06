// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import htmlPlugin from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // Ignore dependencies and build outputs
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/build/**"],
  },

  // JavaScript files
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,

      // Chill rules a little so they don't fight your game code
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-console": "off",
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
      // Start from recommended…
      ...htmlPlugin.configs.recommended.rules,

      // …but turn off the super-picky formatting rules
      "html/indent": "off",
      "html/attrs-newline": "off",
      "html/no-extra-spacing-attrs": "off",
      "html/use-baseline": "off",
      "html/require-closing-tags": "off",

      // Keep useful semantic rules if you want (you can also turn this off)
      // "html/require-lang": "error",
    },
  },
];
