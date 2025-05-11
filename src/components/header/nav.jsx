"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Nav({ isNavOpen, onClick }) {
  const router = useRouter();
  const navLinkData = [
    { key: 1, href: `/`, name: "Home" },

    {
      key: 2,
      href: `/upload`,
      name: "Upload",
    },
    {
      key: 3,
      href: `/admin`,
      name: "Admin",
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
      className={`${navOpenClosedClasses} absolute left-0 top-0 flex h-[100vh] w-full items-center justify-center bg-[rgba(255,255,255,0.5)] backdrop-blur transition-all duration-500 md:pointer-events-auto md:relative md:block md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:opacity-100 md:backdrop-blur-none`}
    >
      <ul className="flex list-none flex-col items-center gap-8 md:flex-row xl:gap-12">
        {navLinkData.map((link) => {
          return (
            <li key={link.key}>
              <Link
                className="hover:text-burnt-orange-200 active:text-burnt-orange-200 text-3xl font-medium focus:shadow-[0_0_0_0.5rem_rgba(230,125,34,0.5)] focus:outline-none md:text-lg"
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
