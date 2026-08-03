import Container from "../common/Container";
import Section from "../common/Section";

export default function HeroSection() {
  return (
    <Section className="min-h-screen flex items-center bg-slate-950">
      <Container>
        <div className="flex flex-col items-center text-center text-white">

          <p className="mb-8 max-w-xl text-sm uppercase tracking-[0.4em] text-slate-400 md:text-base">
            Nuestra Historia
          </p>

          <h1 className="text-5xl font-light md:text-7xl">
            Jose
          </h1>

          <div className="my-6 text-3xl text-blue-400">
            ♡
          </div>

          <h1 className="text-5xl font-light md:text-7xl">
            Valerin
          </h1>

          <p className="mt-10 text-lg tracking-[0.25em] text-slate-300">
            19 · Diciembre · 2026
          </p>

          <button
            className="
              mt-14
              rounded-full
              border
              border-blue-500
              px-8
              py-4
              transition
              duration-300
              hover:bg-blue-600
            "
          >
            Comenzar nuestra historia
          </button>

        </div>
      </Container>
    </Section>
  );
}