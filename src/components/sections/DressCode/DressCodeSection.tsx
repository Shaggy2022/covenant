import { Shirt, Sparkles } from "lucide-react";

export default function DressCodeSection() {
  return (
    <section className="py-32 bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6">

        <h2
          className="mb-16 text-center text-5xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Código de Vestimenta
        </h2>

        <div className="grid gap-10 md:grid-cols-2">

          <div className="rounded-3xl border p-10 text-center">
            <Shirt
              className="mx-auto mb-6 text-amber-500"
              size={50}
            />

            <h3 className="mb-4 text-2xl">
              Caballeros
            </h3>

            <p className="text-slate-600 text-white">
              Traje formal o elegante.
            </p>
          </div>

          <div className="rounded-3xl border p-10 text-center">
            <Sparkles
              className="mx-auto mb-6 text-amber-500"
              size={50}
            />

            <h3 className="mb-4 text-2xl">
              Damas
            </h3>

            <p className="text-slate-600 text-white">
              Vestido formal o elegante.
            </p>
          </div>

        </div>

        <h2
          className="mb-5 text-center p-10 text-2xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Los colores Azules y Blancos en todas sus tonalidades se reservan exclusivamente para los esposos, esperamos que comprendan muchas gracias.
        </h2>

      </div>
    </section>
  );
}