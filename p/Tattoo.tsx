import React from "react";

type TextValue = string | number;

interface TattooProps {
  text: TextValue;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export default function Tattoo({
  text,
  className = "",
  style = {},
  color = "",
}: TattooProps) {
  return (
    <p
      className={`m-0 ${color} ${className}`}
      style={style}
    >
      {text}
    </p>
  );
}
