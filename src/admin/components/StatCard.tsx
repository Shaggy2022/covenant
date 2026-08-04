import type { ReactNode } from "react";

interface Props {
  title: string;
  value: number | string;
  icon: ReactNode;
  color: string;
}

export default function StatCard({
  title,
  value,
  icon,
  color,
}: Props) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      shadow-lg
      p-6
      transition
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
    "
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 uppercase tracking-widest text-sm">

            {title}

          </p>

          <h2 className="text-4xl font-bold mt-3">

            {value}

          </h2>

        </div>

        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl ${color}`}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}