"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, className, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const resolvedClassName =
    typeof className === "function" ? className({ isActive }) : className;

  return (
    <Link href={href} className={resolvedClassName}>
      {children}
    </Link>
  );
}
