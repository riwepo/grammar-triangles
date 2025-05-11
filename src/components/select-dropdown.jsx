import { useState } from "react";

function SelectDropdown({ options, onSelect }) {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div>
      <label htmlFor="dropdown">Choose a boss verb:</label>
      <select id="dropdown" value={selected} onChange={handleChange}>
        <option value="" disabled>
          Select one...
        </option>
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
