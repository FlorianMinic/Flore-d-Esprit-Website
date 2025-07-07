export interface NewsItem {
  id: string;
  category: { fr: string; en: string };
  tag: { fr: string; en: string };
  title: { fr: string; en: string };
  date: string;
  time: string;
  comments: number;
  image: string;
  excerpt: { fr: string; en: string };
}

export const newsList: NewsItem[] = [
  {
    id: "lueur-single",
    category: { fr: "Musique", en: "Music" },
    tag: { fr: "Sortie", en: "Release" },
    title: {
      fr: "Sortie de mon nouveau single 'Lueur'",
      en: "Release of my new single 'Lueur'",
    },
    date: "2025-07-07",
    time: "10:30",
    comments: 0,
    image: "/news/lueur.jpg",
    excerpt: {
      fr: "Découvrez mon nouveau single électro-pop onirique disponible sur toutes les plateformes.",
      en: "Discover my new dreamy electro-pop single available on all platforms.",
    },
  },
  // ➕ Ajoute d'autres news ici
];
