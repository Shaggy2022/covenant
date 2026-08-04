import type { Guest } from "../types/guest";

export const guests: Guest[] = [
  {
    id: "1",
    fullName: "Carlos Rodríguez",
    family: "Rodríguez",
    confirmed: true,
    guests: 4,
    table: 12,
  },
  {
    id: "2",
    fullName: "Laura Gómez",
    family: "Gómez",
    confirmed: false,
    guests: 0,
  },
  {
    id: "3",
    fullName: "Andrés Pérez",
    family: "Pérez",
    confirmed: true,
    guests: 2,
    table: 6,
  },
];