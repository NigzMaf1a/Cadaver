import React from "react";

interface CoffinProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Coffin: React.FC<CoffinProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  className = "",
  style = {},
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`
        w-full px-3 py-2 rounded-md
        border border-gray-300 bg-white text-gray-900 text-sm shadow-sm
        focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500
        dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100
        dark:focus:border-rose-500 dark:focus:ring-rose-500
        transition duration-200 ease-in-out
        ${className}
      `}
      style={style}
    />
  );
};

export default Coffin;
