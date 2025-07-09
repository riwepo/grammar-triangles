import Image from "next/image";

import { cn } from "@/lib/utils/css-class";

function PrintableDiagram({ heading, className, children }) {
  return (
    <div
      className={cn(
        "relative grid h-screen w-full grid-rows-[auto_1fr] gap-4 overflow-visible border bg-gray-300",
        className,
      )}
    >
      <p className="row-start-1 mx-auto pt-8 text-2xl font-bold">{heading}</p>
      <div className="row-start-2 mx-2">{children}</div>
      <button
        className="absolute right-2 bottom-2 cursor-pointer rounded-sm border bg-gray-200 p-1 hover:bg-gray-100 focus:ring-2 focus:ring-blue-300"
        onClick={() => window.print()}
      >
        <Image
          src="/print.png"
          alt="Button Icon"
          width={24}
          height={24}
          className=""
        />
      </button>
    </div>
  );
}

export default PrintableDiagram;
