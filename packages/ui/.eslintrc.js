import baseConfig from "@repo/eslint-config/base.js";
import reactConfig from "@repo/eslint-config/react.js";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];
