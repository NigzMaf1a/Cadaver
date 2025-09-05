import React, { ReactNode } from "react";

interface SpineOrRibProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function SpineOrRib({
  children,
  onClick,
  className = "",
  style = {},
}: SpineOrRibProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
