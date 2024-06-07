import { createId } from "@paralleldrive/cuid2";
import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const TestSchema = pgTable("test", {
  id: varchar("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  text: varchar("text"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});
