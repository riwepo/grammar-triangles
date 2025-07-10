"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

import Nav from "@/components/header/nav";
import logo from "@/public/logo.png";
import ScreenSize from "@/components/ui/screen-size";
import MobileMenuButton from "@/components/header/mobile-menu-button";

function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleNavOpenScrollLock = () => {
    setIsNavOpen((prev) => {
      const updated = !prev;
      if (updated) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
      return updated;
    });
  };

  const closeNavOpenScrollLock = () => {
    document.body.classList.remove("overflow-hidden");
    setIsNavOpen(false);
  };

  const handleMobileMenuClick = function (e) {
    toggleNavOpenScrollLock();
  };

  const handleNavClick = function (href) {
    // this is a fallback to close nav
    // if the path doesn't change from the click
    if (href === pathname) {
      closeNavOpenScrollLock(false);
    }
  };

  React.useEffect(() => {
    //close nav on path change
    closeNavOpenScrollLock(false);
  }, [pathname]);

  return (
    <header className="grid h-24 min-w-0 grid-cols-[auto_1fr_auto_1fr_auto] items-center gap-x-4 px-2 py-2 md:px-8 print:hidden">
      <Link href="/" prefetch={false} className="col-start-1">
        <Image
          alt="Grammmar Triangles logo"
          src={logo}
          className="h-16 w-auto"
        />
      </Link>
      <ScreenSize className="col-start-2" />
      <Nav
        isNavOpen={isNavOpen}
        onClick={handleNavClick}
        className="col-start-3"
      />
      <MobileMenuButton
        isNavOpen={isNavOpen}
        onClick={handleMobileMenuClick}
        className="col-start-5"
      />
    </header>
  );
}

export default Header;
