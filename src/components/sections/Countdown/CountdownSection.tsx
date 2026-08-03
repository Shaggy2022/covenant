import { motion } from "framer-motion";
import { useCountdown } from "../../../hooks/useCountdown";

export default function CountdownSection() {
  const { days, hours, minutes, seconds } = useCountdown();

  const items = [
    { label: "Días", value: days },
    { label: "Horas", value: hours },
    { label: "Minutos", value: minutes },
    { label: "Segundos", value: seconds },
  ];

  return (
    <section className="bg-slate-950 py-32 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-5 text-5xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Nuestro Gran Día
        </motion.h2>

        <p className="mb-20 tracking-[0.35em] uppercase text-gray-400">
          19 de diciembre de 2026 · 4:00 PM
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {items.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
            >
              <h3 className="text-5xl font-bold text-amber-300">
                {String(item.value).padStart(2, "0")}
              </h3>

              <p className="mt-4 uppercase tracking-[0.3em] text-gray-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}