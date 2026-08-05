import { motion } from "framer-motion";
import Container from "../common/Container";
import { event } from "../../data/event";
import Section from "../common/Section";

export default function HeroSection() {
  return (
    <Section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero/photo1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 80%",
        }}
        animate={{
          scale: 1.08,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Overlay oscuro */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/30"
      />

      {/* Corazón decorativo gigante */}
      <div
        className="absolute top-0 translate-y-1 text-white opacity-20 text-[220px] md:text-[350px] select-none pointer-events-none"
      >
        ♡
      </div>

      {/* Contenido */}
      <Container>
        <div className="flex flex-col items-center text-center text-white">

          <p
            className="mb-8 text-sm uppercase tracking-[0.5em] text-amber-200 text-white opacity-80"
          >
            Nos Casamos
          </p>

          <h1
            className="text-1xl md:text-6xl lg:text-5xl font-light text-white opacity-80"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Jose Miguel Sanabria Mayorga
          </h1>

          <div className="my-8 text-5xl text-amber-300">
            ♡
          </div>
          
          <h1
            className="mt-20 text-1xl md:text-6xl lg:text-5xl font-light text-white opacity-80"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Valerin Lizeth Garzon Mosquera
          </h1>

          <p
            className="mt-10 text-lg tracking-[0.35em] text-white/90"
          >
            {event.date.day} · {event.date.month} · {event.date.year}
          </p>

          <button
            onClick={() =>
              document
                .getElementById("story")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="mt-14 rounded-full border border-amber-400 bg-black/20 px-8 py-4 text-white backdrop-blur-sm transition-all duration-300 hover:bg-amber-400 hover:text-black hover:scale-105"
          >
            Comenzar nuestra historia
          </button>

        </div>
      </Container>
    </Section>
  );
}