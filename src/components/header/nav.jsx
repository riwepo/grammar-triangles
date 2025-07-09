"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils/css-class";

import NavLink from "@/components/ui/navlink";

function Nav({ className }) {
  const router = useRouter();
  const navLinkData = [
    {
      key: 1,
      href: `/triangles`,
      //name: "Triangles",
      name: "T",
    },
    {
      key: 2,
      href: `/pattern`,
      //name: "Pattern",
      name: "P",
    },
    {
      key: 3,
      href: `/modals`,
      //name: "Modals",
      name: "M",
    },
    {
      key: 4,
      href: `/tenses`,
      //name: "Tenses",
      name: "T",
    },
  ];

  // this used to be used as a signal to close the mobile navigation
  const handleClick = async function (e) {
    router.push(e.target.href);
  };

  return (
    <nav className={cn(className, "items-center justify-center")}>
      <ul className="flex list-none flex-row items-center gap-8">
        {navLinkData.map((link) => {
          return (
            <li key={link.key}>
              <NavLink
                href={link.href}
                className={({ isActive }) =>
                  "focus:shadow-orange text-xl font-medium hover:text-[#4C0000] focus:outline-none active:text-[#990000] " +
                  (isActive ? "border-b-2 border-orange-500" : "")
                }
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
