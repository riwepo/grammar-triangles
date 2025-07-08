"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Nav from "@/components/header/nav";
import logo from "@/public/logo.png";

function Header() {
  return (
    <header className="grid-cols-grid-cols-[auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto] grid h-16 min-w-0 items-center gap-x-4 px-8 py-0 print:hidden">
      <Link href="/" prefetch={false} className="col-start-1">
        <Image
          alt="Grammmar Triangles logo"
          src={logo}
          className="h-16 w-auto"
        />
      </Link>
      <div className="col-start-2 min-w-0 overflow-hidden"></div>
      <Nav className="col-start-3" />
      <div className="col-start-4 min-w-0 overflow-hidden"></div>
    </header>
  );
}

export default Header;
