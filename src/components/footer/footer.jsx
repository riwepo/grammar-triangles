import Link from "next/link";
import Image from "next/image";
import React from "react";

import logo from "@/public/logo.png";
import WebDesignBy from "@/components/footer/web-design-by";
import ThankRita from "@/components/footer/thank_rita";

function Footer() {
  return (
    <footer className="justify-centerxx grid h-24 w-full grid-cols-[auto_1fr_auto_1fr_auto] items-center border-t px-4 py-2 md:px-8 print:hidden">
      <Link href="/" prefetch={false} className="col-start-1">
        <Image
          alt="Grammmar Triangles logo"
          src={logo}
          className="h-16 w-auto"
        />
      </Link>
      <ThankRita className="col-start-3" />
      <WebDesignBy className="col-start-5" />
    </footer>
  );
}

export default Footer;
