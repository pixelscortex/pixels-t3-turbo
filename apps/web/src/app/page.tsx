"use client";

import React, { useEffect } from "react";

import { api } from "~/trpc/react";

export default function Home() {
  const test = api.test.test.useQuery();

  useEffect(() => {
    console.log(test.data);
  }, [test]);

  return <>{test.data?.message}asd</>;
}
