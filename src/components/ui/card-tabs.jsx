import { useState } from "react";

import { cn } from "@/lib/utils/css-class";

function CardTabs({ tabs, children, className }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const selectedClasses = "bg-white";
  const unselectedClasses = "bg-gray-100 border-b";
  const handleClick = (index) => {
    setSelectedTabIndex(index);
  };
  return (
    <div className={cn("relative rounded-lg p-4 shadow-md", className)}>
      <div className="absolute top-0 left-0 flex w-full flex-row">
        {tabs.map((tab, index) => {
          const tabClasses =
            index === selectedTabIndex ? selectedClasses : unselectedClasses;
          return (
            <button
              className={`cursor-pointer rounded-t-sm border-t border-r border-l px-2 py-1 hover:bg-amber-100 ${tabClasses}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {tab}
            </button>
          );
        })}
        <div className="flex-grow-1 border-b"></div>
      </div>
      <div className="mt-10 flex w-full flex-row items-center justify-center">
        {children[selectedTabIndex]}
      </div>
    </div>
  );
}
export default CardTabs;
