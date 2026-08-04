import type { Guest } from "../../types/guest";

interface Props {
  guests: Guest[];
}

export default function GuestTable({ guests }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-6 py-4 text-left">Nombre</th>

            <th className="px-6 py-4">Estado</th>

            <th className="px-6 py-4">Personas</th>

            <th className="px-6 py-4">Mesa</th>

          </tr>

        </thead>

        <tbody>

          {guests.map((guest) => (

            <tr
              key={guest.id}
              className="border-t hover:bg-slate-50 transition"
            >

              <td className="px-6 py-4">

                {guest.fullName}

              </td>

              <td className="text-center">

                {guest.confirmed ? "✅" : "❌"}

              </td>

              <td className="text-center">

                {guest.guests}

              </td>

              <td className="text-center">

                {guest.table ?? "-"}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}