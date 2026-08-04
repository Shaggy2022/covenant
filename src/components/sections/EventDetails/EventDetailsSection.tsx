import { Calendar, Clock, MapPin } from "lucide-react";
import { event } from "../../../data/event";

export default function EventDetailsSection() {
  return (
    <section className="bg-[#FFCCFF] py-32">
      <div className="mx-auto max-w-5xl px-6">

        <h2
          className="mb-16 text-center text-5xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Detalles del Evento
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border p-8 text-center bg-[#FF99FF]">
            <Calendar className="mx-auto mb-4 text-blue-400" />
            <h3 className="mb-2 text-xl">Fecha</h3>
            <p>
              {event.date.day} de {event.date.month} de {event.date.year}
            </p>
          </div>

          <div className="rounded-3xl border p-8 text-center bg-[#FF99FF]">
            <Clock className="mx-auto mb-4 text-blue-400" />
            <h3 className="mb-2 text-xl">Hora</h3>
            <p>{event.date.time}</p>
          </div>

          <div className="rounded-3xl border p-8 text-center bg-[#FF99FF]">
            <MapPin className="mx-auto mb-4 text-blue-400" />
            <h3 className="mb-2 text-xl">Lugar</h3>
            <p>{event.venue}</p>
          </div>

        </div>

      </div>
    </section>
  );
}