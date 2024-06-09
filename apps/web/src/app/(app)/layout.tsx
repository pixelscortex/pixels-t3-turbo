import { Navbar } from "~/components/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col">
      <Navbar />
      {children}
    </main>
  );
}
