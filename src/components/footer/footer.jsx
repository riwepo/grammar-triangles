"use client";
import Image from "next/image";

function Footer() {
  const handlePrintClick = () => {
    window.print();
  };
  return (
    <footer className="grid h-16 w-full grid-cols-[1fr_auto] items-center justify-center px-8 py-2 print:hidden">
      <button
        className="col-start-2 cursor-pointer rounded-sm border bg-gray-200 p-1 hover:bg-gray-100 focus:ring-2 focus:ring-blue-300"
        onClick={handlePrintClick}
      >
        <Image
          src="/print.png"
          alt="Button Icon"
          width={24}
          height={24}
          className=""
        />
      </button>
    </footer>
  );
}

export default Footer;
