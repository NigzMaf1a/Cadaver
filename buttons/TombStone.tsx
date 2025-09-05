import React from "react";

interface TombstoneProps {
  htmlType?: "button" | "submit" | "reset"; // HTML button type
  type?: "primary" | "secondary" | "danger" | "ghost"; // style variant
  label: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onHover?: () => void;
  onLeave?: () => void;
}

const Tombstone: React.FC<TombstoneProps> = ({
  htmlType = "button",
  type = "primary",
  label,
  className = "",
  style = {},
  onClick,
  onHover,
  onLeave,
}) => {
  // style variants
  const baseStyles = `
    inline-flex items-center justify-center
    px-4 py-2 mx-2 rounded-md text-sm font-medium
    transition duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const variants: Record<string, string> = {
    primary: `
      bg-indigo-600 text-white shadow-sm
      hover:bg-indigo-700 hover:shadow-md
      focus:ring-indigo-500
      dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-rose-500
    `,
    secondary: `
      bg-gray-200 text-gray-800
      hover:bg-gray-300
      focus:ring-gray-400
      dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600
    `,
    danger: `
      bg-rose-600 text-white shadow-sm
      hover:bg-rose-700 hover:shadow-md
      focus:ring-rose-500
      dark:bg-rose-700 dark:text-gray-100 dark:hover:bg-rose-600
    `,
    ghost: `
      bg-transparent text-gray-700 border border-gray-300
      hover:bg-gray-100
      focus:ring-gray-400
      dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-800
    `,
  };

  return (
    <button
      type={htmlType}
      className={`${baseStyles} ${variants[type]} ${className}`}
      style={style}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {label}
    </button>
  );
};

export default Tombstone;
