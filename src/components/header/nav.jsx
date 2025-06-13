"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils/css-class";

function Nav({ className }) {
  const router = useRouter();
  const navLinkData = [
    {
      key: 1,
      href: `/triangles`,
      name: "Triangles",
    },
    {
      key: 2,
      href: `/pattern`,
      name: "Pattern",
    },
    {
      key: 3,
      href: `/modals`,
      name: "Modals",
    },
    {
      key: 4,
      href: `/tenses`,
      name: "Tenses",
    },
  ];

  // this is used as a signal to close the mobile navigation
  const handleClick = async function (e) {
    router.push(e.target.href);
  };

  return (
    <nav className={cn(className, "items-center justify-center")}>
      <ul className="flex list-none flex-row items-center gap-8">
        {navLinkData.map((link) => {
          return (
            <li key={link.key}>
              <Link
                className="hover:text-burnt-orange-200 active:text-burnt-orange-200 text-xl font-medium focus:shadow-[0_0_0_0.5rem_rgba(230,125,34,0.5)] focus:outline-none"
                href={link.href}
                onClick={handleClick}
                prefetch={false}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
