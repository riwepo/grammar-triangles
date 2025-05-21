"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Nav from "@/components/header/nav";
import logo from "@/public/logo.png";

function Header() {
  return (
    <header className="flex h-16 flex-row items-center justify-between gap-4 px-8 py-0">
      <Link href="/" prefetch={false} className="">
        <Image
          alt="Grammmar Triangles logo"
          src={logo}
          className="h-16 w-auto"
        />
      </Link>
      <Nav className="mx-auto" />
    </header>
  );
}

export default Header;
