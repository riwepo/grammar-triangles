import { useState } from "react";

import { cn } from "@/lib/utils/css-class";

function SelectDropdownVerb({ title, options, onSelect, className }) {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (event) => {
    const key = event.target.value;
    const option = options.filter((option) => option.key === key)[0];
    setSelected(option);
    if (onSelect) {
      onSelect(key);
    }
  };

  const getSelectDisplay = (option) =>
    option.isRegular ? option.value : option.value + " (Irregular)";

  return (
    <div className={cn(className, "flex flex-row items-center gap-2")}>
      <label htmlFor="dropdown">{title}</label>
      <select
        id="dropdown"
        value={selected.key}
        onChange={handleChange}
        className={`rounded-sm border border-black p-2`}
      >
        {options.map((option) => (
          <option
            key={option.key}
            value={option.key}
            className={option.isRegular ? "text-green-500" : "text-blue-500"}
          >
            {getSelectDisplay(option)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectDropdownVerb;
