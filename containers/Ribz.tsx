import React, { ReactNode } from "react";

interface RibzProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function Ribz({
  children,
  onClick,
  className = "",
  style = {},
}: RibzProps) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-row w-full lg:w-full rounded ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
