interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Buscar invitado..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="
        w-full
        rounded-xl
        border
        border-slate-300
        px-5
        py-3
        shadow-sm
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
      "
    />
  );
}