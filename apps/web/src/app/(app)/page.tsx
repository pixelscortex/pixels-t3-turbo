import { Badge } from "@repo/ui/badge";
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <main className="container flex flex-col">
      <section className="h-mnav flex items-center justify-between gap-2">
        <div className="w-1/2">
          <h1 className="text-5xl font-medium uppercase">The Starter</h1>
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground">
              the pre configured T3 Project,
              <span className="text-brand-primary px-2">
                Next Dream Project
              </span>
              the best of the best. boilerplate for your next project. big
              thing.
            </p>
            <div className="flex gap-0.5">
              <Badge variant={"brand"}>TurboRepo</Badge>
              <Badge variant={"outline"}>Nextjs</Badge>
              <Badge variant={"outline"}>Tailwind</Badge>
              <Badge variant={"outline"}>TypeScript</Badge>
              <Badge variant={"outline"}>TRPC</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant={"brand"}>Call To Action #1</Button>
              <Button variant={"outline"}>Call To Action #2</Button>
            </div>
          </div>
        </div>
        <div className="h-full w-1/2 py-12 ">
          <div className="from-brand-primary to-brand-secondary h-full w-full rounded-lg bg-gradient-to-b" />
        </div>
      </section>
      <section className="h-mnav "></section>
    </main>
  );
}
