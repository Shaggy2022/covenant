import { Shirt, Sparkles } from "lucide-react";

export default function DressCodeSection() {
  return (
    <section className="bg-white py-32">
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
              className="mx-auto mb-6 text-slate-700"
              size={50}
            />

            <h3 className="mb-4 text-2xl">
              Caballeros
            </h3>

            <p className="text-slate-600">
              Traje formal o semi formal.
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

            <p className="text-slate-600">
              Vestido formal o elegante.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}