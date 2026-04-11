// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettier,
  ...eslintPluginAstro.configs.recommended,
];
