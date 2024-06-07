import { cache } from "react";
import { headers } from "next/headers";
import { createCaller, createTRPCContext } from "@repo/api";
import { Session } from "@supabase/supabase-js";

import supabaseServerClient from "~/lib/supabase/server";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(async () => {
  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");

  const supabase = supabaseServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return createTRPCContext({
    headers: heads,
    session: session as Session,
  });
});

export const api = createCaller(createContext);
