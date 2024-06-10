import { redirect } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@repo/ui/button";

import { Navbar } from "~/components/navbar";
import Sidebar from "~/components/sidebar";
import { api } from "~/trpc/server";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const { isAuthorized } = await api.auth.isAuthorized();

    console.log("isAuthorized", isAuthorized);

    if (!isAuthorized) {
      return (
        <div className="h-mnav flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Unauthorized</h1>
          <p>
            You are not authorized to access this website, if you think this is
            an error please contact support. Thank you.
          </p>
          <SignOutButton>
            <Button variant={"brand"}>Sign Out</Button>
          </SignOutButton>
        </div>
      );
    }

    return (
      <main className="flex flex-col">
        <Navbar />
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </main>
    );
  } catch (error) {
    auth().protect();
  }
}
