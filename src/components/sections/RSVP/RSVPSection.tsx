import { motion } from "framer-motion";
import { event } from "../../../data/event";

export default function RSVPSection() {
  const link = `https://wa.me/${event.rsvp.phone}`;

  return (
    <section className="bg-slate-950 py-32 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-5xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Confirma tu asistencia
        </motion.h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300">
          Tu presencia hará este día aún más especial para nosotros.
          Por favor confirma tu asistencia.
        </p>

        <a
          href={`${link}?text=Hola,%20confirmo%20mi%20asistencia%20a%20su%20matrimonio`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-green-600 px-8 py-4 text-lg font-semibold transition hover:bg-green-500"
        >
          Confirmar por WhatsApp
        </a>

      </div>
    </section>
  );
}