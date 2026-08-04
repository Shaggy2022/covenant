import type { ReactNode } from "react";
import MusicPlayer from "../components/common/MusicPlayer";
import FallingPetals from "../components/effects/FallingPetals";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {children}
      <FallingPetals />
      <MusicPlayer />
    </main>
  );
}