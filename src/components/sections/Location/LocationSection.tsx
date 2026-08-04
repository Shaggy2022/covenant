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

        <p className="mb-10">

          {event.venue}

        </p>

        <div className="flex justify-center gap-4">

          <button className="rounded-full bg-slate-700 px-8 py-4 text-white">

            Google Maps

          </button>

          <button className="rounded-full bg-slate-700 px-8 py-4 text-white">

            Waze

          </button>

        </div>

      </div>

    </section>

  );

}