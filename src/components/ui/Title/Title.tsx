import type { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <h2
      className="mb-6 text-center text-5xl"
      style={{ fontFamily: "Cormorant Garamond" }}
    >
      {children}
    </h2>
  );
}