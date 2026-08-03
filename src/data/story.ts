export interface StoryEvent {
  id: number;
  year: string;
  title: string;
  description: string;
}

export const story: StoryEvent[] = [
  {
    id: 1,
    year: "Desde pequeños",
    title: "Nuestros caminos se cruzaron",
    description:
      "Nos conocimos desde niños gracias a que estudié con el hermano de Valerin. Sin saberlo, Dios ya estaba escribiendo nuestra historia.",
  },

  {
    id: 2,
    year: "15 años",
    title: "Todo comenzó a cambiar",
    description:
      "En la celebración de sus quince años empecé a verla con otros ojos. Fue el momento en que nació una admiración muy especial por ella.",
  },

  {
    id: 3,
    year: "Nuestro primer beso",
    title: "Calisa",
    description:
      "Cuando Valerin cumplió 18 años vivimos uno de los momentos más importantes de nuestra historia: nuestro primer beso en la discoteca Calisa.",
  },

  {
    id: 4,
    year: "29 Abril 2023",
    title: "Comenzó nuestra historia",
    description:
      "Ese día iniciamos oficialmente nuestro noviazgo y comenzamos a escribir juntos el capítulo más bonito de nuestras vidas.",
  },

  {
    id: 5,
    year: "Nuestro hogar",
    title: "Construyendo un futuro",
    description:
      "Cuando empezamos a vivir juntos comprendimos que queríamos compartir el resto de nuestra vida y construir un hogar con la ayuda de Dios.",
  },

  {
    id: 6,
    year: "Octubre",
    title: "La propuesta",
    description:
      "Entre risas, emociones y algunos sustos en el Festival del Terror de Salitre Mágico llegó la pregunta más importante de nuestras vidas.",
  },
];