import Link from "next/link";
import Image from "next/image";
import React from "react";

import ritaTeaching from "@/public/rita-teaching.png";

function RitaBaker() {
  return (
    <div className="flex flex-col items-center gap-8 px-8 pt-8">
      <p className="text-center">
        Rita Baker developed this method of teaching English grammar with
        triangles over a period of 30 years.
      </p>
      <p>
        She called her system{" "}
        <a
          href="https://theglobalapproach.co.uk/index.html"
          target="_blank"
          className="text-blue-500 underline visited:text-purple-600"
        >
          The Global Approach
        </a>
      </p>
      <p>
        Here is a link to{" "}
        <a
          href="https://theglobalapproach.co.uk/videos-1.html"
          target="_blank"
          className="text-blue-500 underline visited:text-purple-600"
        >
          some of her videos
        </a>{" "}
        explaining her system.
      </p>
      <Link
        href="https://theglobalapproach.co.uk/rita.html"
        prefetch={false}
        target="_blank"
        className="text-blue-500 underline visited:text-purple-600"
      >
        <div className="flex flex-col items-center">
          <Image
            alt="Rita Baker teaching"
            src={ritaTeaching}
            className="h-32 w-auto"
          />
          <p>Rita Baker</p>
        </div>
      </Link>

      <p>This website is in no way affiliated with Rita Baker.</p>
    </div>
  );
}

export default RitaBaker;
