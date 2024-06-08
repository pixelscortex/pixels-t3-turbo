"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import { api } from "~/trpc/react";

export default function Home() {
  const test = api.test.test.useQuery();

  const auth = api.test.protected.useQuery();

  useEffect(() => {
    console.log(test.data);
  }, [test]);

  useEffect(() => {
    console.log(auth.data);
  }, [auth]);

  return (
    <div className="flex flex-col">
      <h1>Home</h1>
      <Link href="/auth">Auth</Link>
      <p>Public : {test.data?.message}</p>
      <p>Auth : {auth.data?.message}</p>
    </div>
  );
}
