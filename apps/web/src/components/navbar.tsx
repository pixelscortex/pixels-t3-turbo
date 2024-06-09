import Link from "next/link";
import { SignInButton, UserButton, UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@repo/ui/button";

export const Navbar = () => {
  const { userId } = auth();
  return (
    <nav className="h-nav bg-red sticky top-0 z-10 border-b">
      <div className="container flex h-full items-center justify-between rounded-b-lg bg-background/90 backdrop-blur-sm">
        <Link href={"/"} className="flex flex-col gap-0">
          <h1 className="flex flex-col text-base font-black uppercase leading-4">
            The Starter
            <span className="text-brand-primary text-xs font-light">
              PixelsCortex
            </span>
          </h1>
        </Link>

        <div className="flex items-center gap-1 ">
          <ul className="mx-2 flex items-center justify-center gap-2">
            <li>
              <Link href={"#"}>Profile</Link>
            </li>
            <li>
              <Link href={"#"}>Settings</Link>
            </li>
            <li>
              <Link href={"#"}>Dashboard</Link>
            </li>
          </ul>
          {userId ? (
            <div className="mx-2 flex items-center justify-center">
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <SignInButton>
              <Button variant={"outline"}>Sign in</Button>
            </SignInButton>
          )}

          <Button variant={"brand"}>Call to Action</Button>
        </div>
      </div>
    </nav>
  );
};
