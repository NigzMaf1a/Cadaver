import React from "react";

interface CadaverSelectProps {
  values: string[] | number[];
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
  defaultValue?: string;
}

const CadaverSelect: React.FC<CadaverSelectProps> = ({
  values,
  onChange,
  className = "",
  style,
  defaultValue,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <select
      className={`block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm 
        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none
        dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 dark:focus:border-rose-500 dark:focus:ring-2 dark:focus:ring-rose-500
        ${className}`}
      style={style}
      defaultValue={defaultValue || ""}
      onChange={handleChange}
    >
      <option value="" disabled>
        -- Type --
      </option>
      {values.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default CadaverSelect;
