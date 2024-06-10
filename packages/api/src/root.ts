import { authRouter } from "./router/auth";
import { testRouter } from "./router/test";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  test: testRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
