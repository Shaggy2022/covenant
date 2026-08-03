import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
}

export default function GlassCard({ children }: GlassCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/20
        bg-white/10
        p-8
        backdrop-blur-xl
        shadow-xl
      "
    >
      {children}
    </div>
  );
}