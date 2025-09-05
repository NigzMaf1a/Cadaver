import React, { ReactNode } from "react";

interface SpineProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function Spine({
  children,
  onClick,
  className = "",
  style = {},
}: SpineProps) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col w-full lg:w-full rounded ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
