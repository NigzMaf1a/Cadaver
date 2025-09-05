"use client";
import React, { ReactNode } from "react";

interface SkeletonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function Skeleton({
  children,
  onClick,
  className = "",
  style = {},
}: SkeletonProps) {
  return (
    <section
      onClick={onClick}
      className={`container mx-auto w-full py-4 min-h-screen flex flex-col ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
