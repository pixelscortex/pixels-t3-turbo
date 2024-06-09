"use client";

import { useLogger } from "next-axiom";

export default function ProtectedPage() {
  const logger = useLogger({ source: "ProtectedPage" });

  logger.info("Protected page accessed");

  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is protected.</p>
    </div>
  );
}
