import { motion } from "framer-motion";

interface IntroSectionProps {
  onEnter: () => void;
}

export default function IntroSection({
  onEnter,
}: IntroSectionProps) {
  const handleEnter = async () => {
    window.dispatchEvent(new Event("startMusic"));
    onEnter();
  };

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

        <div className="mt-12">
          <button
            onClick={handleEnter}
            className="
              rounded-full
              border
              border-amber-400
              px-10
              py-4
              text-amber-300
              transition-all
              duration-300
              hover:bg-amber-400
              hover:text-black
            "
          >
            ♡ Entrar a la invitación ♡
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          🎵 Activa el sonido para vivir la experiencia completa
        </p>

      </motion.div>

    </section>
  );
}