"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Nav from "@/components/header/nav";
import logo from "@/public/logo.png";

function Header() {
  return (
    <header className="z-40 flex h-32 flex-row items-center justify-between px-8 py-0">
      <Link href="/" prefetch={false}>
        <Image
          alt="Grammmar Triangles logo"
          src={logo}
          className="h-32 w-auto"
        />
      </Link>
      <div className="flex flex-row items-center gap-8">
        <Nav />
      </div>
    </header>
  );
}

export default Header;
