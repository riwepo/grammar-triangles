"use client";

import NavLink from "@/components/ui/navlink";
import { useRouter } from "next/navigation";

function Nav2({ isNavOpen, onClick }) {
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

  // when we are on small screen, the navbar is moved off to the side and hidden when not open
  // note that these classes get overridden below for larger screens
  const navOpenClosedClasses = isNavOpen
    ? "translate-x-0 opacity-100 block pointer-events-auto"
    : "translate-x-full opacity-0 hidden pointer-events-none";

  // this is used as a signal to close the mobile navigation
  const handleClick = async function (e) {
    onClick();
    router.push(e.target.href);
  };

  return (
    <nav
      className={`${navOpenClosedClasses} absolute top-0 left-0 flex h-[100vh] w-full items-center justify-center bg-[rgba(255,255,0,0.5)] backdrop-blur transition-all duration-500 md:pointer-events-auto md:relative md:block md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:opacity-100 md:backdrop-blur-none`}
    >
      <ul className="flex list-none flex-col items-center gap-8 md:flex-row xl:gap-12">
        {navLinkData.map((link) => {
          return (
            <li key={link.key}>
              <NavLink
                className={({ isActive }) =>
                  "focus:shadow-orange text-xl font-medium hover:text-[#4C0000] focus:outline-none active:text-[#990000] " +
                  (isActive ? "border-b-2 border-orange-500" : "")
                }
                href={link.href}
                onClick={handleClick}
                prefetch={false}
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

export default Nav2;
