import { useState } from "react";

import { cn } from "@/lib/utils/css-class";

function SelectDropdown({ options, onSelect, className }) {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div className={cn(className, "flex flex-row items-center gap-2")}>
      <label htmlFor="dropdown">Boss Verb: </label>
      <select
        id="dropdown"
        value={selected}
        onChange={handleChange}
        className="rounded-sm border border-black p-2"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectDropdown;
