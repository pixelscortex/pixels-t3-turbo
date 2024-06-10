"use client";

import React from "react";
import { Toaster } from "@repo/ui/sonner";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { TRPCReactProvider } from "~/trpc/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TRPCReactProvider>
      {children}
      <Toaster />

      {process.env.NODE_ENV !== "production" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </TRPCReactProvider>
  );
};

export default Providers;
