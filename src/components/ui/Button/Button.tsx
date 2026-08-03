import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "rounded-full px-8 py-4 transition-all duration-300 font-medium";

  const variants = {
    primary:
      "bg-blue-900 text-white hover:scale-105 hover:shadow-xl",

    secondary:
      "border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}