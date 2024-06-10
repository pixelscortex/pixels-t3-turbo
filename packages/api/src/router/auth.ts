import type { TRPCRouterRecord } from "@trpc/server";
import { clerkClient } from "@clerk/nextjs/server";

import { protectedProcedure } from "../trpc";

export const authRouter = {
  isAuthorized: protectedProcedure.query(async ({ ctx }) => {
    const user = await clerkClient.users.getUser(ctx.userId);

    if (user.privateMetadata.role !== "admin") {
      return {
        isAuthorized: false,
      };
    }

    return {
      isAuthorized: true,
    };
  }),
} satisfies TRPCRouterRecord;
