"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Nav from "@/components/header/nav";
import logo from "@/public/logo.png";
import ScreenSize from "@/components/ui/screen-size";

function Header() {
  return (
    <header className="grid h-16 min-w-0 grid-cols-[auto_1fr_auto_1fr] items-center gap-x-4 px-8 py-0 print:hidden">
      <Link href="/" prefetch={false} className="col-start-1">
        <Image
          alt="Grammmar Triangles logo"
          src={logo}
          className="h-16 w-auto"
        />
      </Link>
      <ScreenSize className="col-start-2" />
      <Nav className="col-start-3" />
    </header>
  );
}

export default Header;
