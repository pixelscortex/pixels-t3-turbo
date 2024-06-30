"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@repo/ui/button";
import {
  HomeIcon,
  ImagesIcon,
  Laptop2Icon,
  ListOrderedIcon,
} from "lucide-react";

interface NavItem {
  regex: RegExp;
  href: string;
  item: (isMatched: boolean) => JSX.Element;
}

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = useMemo<NavItem[]>(
    () => [
      {
        regex: /^\/$/,
        href: "/",
        item: (isMatched) => (
          <Button
            variant={isMatched ? "brand" : "ghost"}
            size={"sm"}
            className="w-full justify-start gap-2"
          >
            <HomeIcon className="size-4" />
            Home
          </Button>
        ),
      },
      {
        regex: /^\/order.*$/,
        href: "/order",
        item: (isMatched) => (
          <Button
            variant={isMatched ? "brand" : "ghost"}
            size={"sm"}
            className="w-full justify-start gap-2"
          >
            <ListOrderedIcon className="size-4" />
            Orders
          </Button>
        ),
      },
      {
        regex: /^\/laptop.*$/,
        href: "/laptop",
        item: (isMatched) => (
          <Button
            variant={isMatched ? "brand" : "ghost"}
            size={"sm"}
            className="w-full justify-start gap-2"
          >
            <Laptop2Icon className="size-4" />
            Laptops
          </Button>
        ),
      },
      {
        regex: /^\/design.*$/,
        href: "/design",
        item: (isMatched) => (
          <Button
            variant={isMatched ? "brand" : "ghost"}
            size={"sm"}
            className="w-full justify-start gap-2"
          >
            <ImagesIcon className="size-4" />
            Designs
          </Button>
        ),
      },
    ],
    [],
  );

  return (
    <>
      <nav className=" hidden h-screen w-48 shrink-0 border-r p-4 sm:block">
        <Link href={"/"} className="mb-4 flex flex-col gap-0">
          <h1 className="flex flex-col text-lg font-black uppercase leading-4">
            GAIMIZ
            <span className="text-brand-primary font-mono text-sm font-light">
              Dashboard
            </span>
          </h1>
        </Link>
        <ul className="flex flex-col gap-2 text-sm">
          {navItems.map((navItem, index) => (
            <li key={index}>
              <Link href={navItem.href}>
                {navItem.item(navItem.regex.test(pathname))}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
