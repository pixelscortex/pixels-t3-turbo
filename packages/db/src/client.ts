import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema/index";

const client = postgres(process.env.DATABASE_URL!);

export const db = drizzle(client, { schema });

export type DatabaseSchema = PostgresJsDatabase<typeof schema>;
