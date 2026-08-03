import { FaUsers } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaChair } from "react-icons/fa";
import { useState } from "react";

import SearchBar from "../components/SearchBar";

import GuestTable from "../components/GuestTable";

import StatCard from "../components/StatCard";

import { guests } from "../../data/guests";

export default function Dashboard() {
 
  const [search, setSearch] = useState("");
  const filteredGuests = guests.filter((guest) =>
    guest.fullName.toLowerCase().includes(search.toLowerCase())
  );

  const totalGuests = guests.length;

  const confirmed = guests.filter(
    guest => guest.confirmed
  ).length;

  const pending = guests.filter(
    guest => !guest.confirmed
  ).length;

  const tables = 20;

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-5xl font-serif mb-10">

        Covenant Admin

      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <StatCard
          title="Confirmados"
          value={confirmed}
          icon={<FaHeart />}
          color="bg-emerald-500"
        />

        <StatCard
          title="Invitados"
          value={totalGuests}
          icon={<FaUsers />}
          color="bg-blue-500"
        />

        <StatCard
          title="Pendientes"
          value={pending}
          icon={<FaClock />}
          color="bg-yellow-500"
        />

        <StatCard
          title="Mesas"
          value={tables}
          icon={<FaChair />}
          color="bg-purple-500"
        />

      </div>

      <div className="mt-10">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

      </div>

      <div className="mt-6">

        <GuestTable
          guests={filteredGuests}
        />

      </div>

    </div>
  );
}