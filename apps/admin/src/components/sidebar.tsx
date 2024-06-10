import Link from "next/link";
import { BoxIcon } from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="h-mnav w-48 border-r">
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
  );
}
