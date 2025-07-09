import Image from "next/image";

function PrintableDiagram({ children }) {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-visible border bg-gray-300">
      {children}
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
