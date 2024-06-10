import Link from "next/link";
import { Button } from "@repo/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@repo/ui/sheet";
import { BoxIcon, MoreHorizontal } from "lucide-react";

export default function Sidebar() {
  return (
    <>
      <nav className="h-mnav hidden w-48 border-r sm:block">
        <ul className="flex flex-col gap-2 px-2 py-2 text-sm">
          <li>
            <Link href="#" className="flex items-center gap-0.5">
              <BoxIcon className="text-brand-primary size-5" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-0.5">
              <BoxIcon className="text-brand-primary size-5" />
              Products
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-0.5">
              <BoxIcon className="text-brand-primary size-5" />
              Orders
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
