CREATE TABLE IF NOT EXISTS "test" (
	"id" varchar PRIMARY KEY NOT NULL,
	"text" varchar,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
