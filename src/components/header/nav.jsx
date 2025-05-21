"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Nav() {
  const router = useRouter();
  const navLinkData = [
    { key: 1, href: `/`, name: "Home" },

    {
      key: 2,
      href: `/the-triangles`,
      name: "The Triangles",
    },
    {
      key: 3,
      href: `/the-pattern`,
      name: "The Pattern",
    },
    {
      key: 4,
      href: `/modal-verbs`,
      name: "Modal Verbs",
    },
    {
      key: 5,
      href: `/tenses`,
      name: "Tenses",
    },
  ];

  // this is used as a signal to close the mobile navigation
  const handleClick = async function (e) {
    router.push(e.target.href);
  };

  return (
    <nav className="absolute top-0 left-0 flex h-[100vh] w-full items-center justify-center bg-[rgba(255,255,255,0.5)] backdrop-blur transition-all duration-500 md:pointer-events-auto md:relative md:block md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:opacity-100 md:backdrop-blur-none">
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
