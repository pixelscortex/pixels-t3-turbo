import baseConfig, { restrictEnvAccess } from "@repo/eslint-config/base.js";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...restrictEnvAccess,
];
