import { FaMapMarkerAlt } from "react-icons/fa";
import { event } from "../../../data/event";

export default function LocationSection() {
  return (
    <section className="py-32 bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <FaMapMarkerAlt
          className="mx-auto mb-6 text-amber-500"
          size={40}
        />

        <h2
          className="mb-5 text-5xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Lugar del Evento
        </h2>

        <p className="text-xl">
          {event.city}
        </p>

        <p className="mb-8 text-lg text-slate-300">
          {event.venue}
        </p>

        <div className="mx-auto mb-10 max-w-2xl rounded-3xl bg-white p-6 shadow-sm">
          <p className="leading-7 text-slate-700">
            📍 <strong>Referencia:</strong> Ingresa por el portón verde
            ubicado al lado de las canchas del polideportivo que cuentan
            con el domo.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <a
            href={event.maps.google}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Google Maps
          </a>

          <a
            href={event.maps.waze}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
          >
            Waze
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Recomendamos utilizar una aplicación de navegación como Waze o Google Maps para llegar
          fácilmente al lugar de la celebración.
        </p>
      </div>
    </section>
  );
}