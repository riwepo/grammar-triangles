import "./globals.css";

import { Rubik } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-[0.8rem] lg:text-[0.9rem] 2xl:text-[1rem]">
      <body
        className={`${rubik.className} text-greys-200 grid min-h-svh grid-rows-[auto_1fr_auto]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
