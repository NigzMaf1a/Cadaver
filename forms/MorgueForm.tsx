import React, { ReactNode } from "react";

interface MorgueFormProps {
  title?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode; // 🔥 required
}

const MorgueForm: React.FC<MorgueFormProps> = ({
  title = "Blank Form",
  onSubmit,
  className = "",
  style,
  children,
}) => {
  return (
    <div
      className={`
        w-full max-w-lg mx-auto p-6 rounded-2xl shadow-md
        bg-white dark:bg-gray-900
        ${className}
      `}
      style={style}
    >
      {/* Title */}
      {title && (
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
          {title}
        </h2>
      )}

      {/* Form */}
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        {children}
      </form>
    </div>
  );
};

export default MorgueForm;
