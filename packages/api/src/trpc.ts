import { type getAuth } from "@clerk/nextjs/server";
import { DatabaseSchema, db } from "@repo/db/client";
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

type AuthObject = ReturnType<typeof getAuth>;

export type TRPCContext = {
  auth: AuthObject;
  db: DatabaseSchema;
};

export const createTRPCContext = async (opts: {
  headers: Headers;
  auth: AuthObject;
}): Promise<TRPCContext> => {
  return {
    db,
    ...opts,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter: ({ shape, error }) => ({
    ...shape,
    data: {
      ...shape.data,
      zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
    },
  }),
});

export const createCallerFactory = t.createCallerFactory;

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.auth.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  // Make ctx.userId non-nullable in protected procedures
  return next({ ctx: { userId: ctx.auth.userId } });
});

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
