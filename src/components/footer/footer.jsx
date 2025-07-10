import Link from "next/link";
import Image from "next/image";
import React from "react";

import logo from "@/public/logo.png";
import WebDesignBy from "@/components/footer/web-design-by";

function Footer() {
  return (
    <footer className="grid h-24 w-full grid-cols-[auto_1fr_auto_1fr_auto] items-center justify-center border-t px-8 py-2 print:hidden">
      <Link href="/" prefetch={false} className="col-start-1">
        <Image
          alt="Grammmar Triangles logo"
          src={logo}
          className="h-16 w-auto"
        />
      </Link>
      <Link href="/acknowledgements" prefetch={false} className="col-start-3">
        <p>Acknowledgements</p>
      </Link>
      <WebDesignBy className="col-start-5" />
    </footer>
  );
}

export default Footer;
