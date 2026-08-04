import { Gift } from "lucide-react";

export default function GiftSection() {
  return (
    <section className="bg-[#FFCCFF] py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <Gift
          size={50}
          className="mx-auto mb-8 text-amber-500"
        />

        <h2
          className="mb-8 text-5xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Lluvia de Sobres
        </h2>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
          El mejor regalo es poder compartir este día tan especial contigo.
          Sin embargo, si deseas tener un detalle con nosotros,
          agradecemos tu generosidad mediante una lluvia de sobres.
        </p>

      </div>
    </section>
  );
}