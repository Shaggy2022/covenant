import { motion } from "framer-motion";

export default function IntroSection() {

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="max-w-3xl text-center"
      >
        <p
          className="mb-8 text-2xl leading-relaxed md:text-4xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          "Y sobre todas estas cosas vestíos de amor,
          que es el vínculo perfecto."
        </p>

        <span className="tracking-[0.4em] uppercase text-gray-400">
          Colosenses 3:14
        </span>
      </motion.div>
    </section>
  );
}