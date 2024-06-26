import { defineConfig } from "drizzle-kit";

import { env } from "./env";

export default defineConfig({
  schema: "./src/schema/index.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DIRECT_DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
});
