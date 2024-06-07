import type { TRPCRouterRecord } from "@trpc/server";

import { protectedProcedure, publicProcedure } from "../trpc";

export const testRouter = {
  test: publicProcedure.query(() => {
    return {
      message: "Hello world",
    };
  }),
  protected: protectedProcedure.query(() => {
    return {
      message: "Hello world Protected",
    };
  }),
} satisfies TRPCRouterRecord;
