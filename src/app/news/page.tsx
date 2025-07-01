'use client';

import { useLocale } from '@/hooks/useLocale';

export default function NewsPage() {
  const { locale } = useLocale();

  const t = {
    fr: {
      title: "Actualités",
      subtitle: "Reste informé des dernières nouvelles de Flore d'Esprit",
      comingSoon: "Les actualités arrivent bientôt, reste à l'écoute !",
    },
    en: {
      title: "News",
      subtitle: "Stay updated with the latest news from Flore d'Esprit",
      comingSoon: "News is coming soon, stay tuned!",
    },
  }[locale];

  return (
    <main className="min-h-screen bg-white text-black px-6 py-20 md:px-20 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">{t.title}</h1>
      <p className="max-w-xl text-lg md:text-xl text-gray-700 mb-10">{t.subtitle}</p>

      {/* Zone d'actualités (placeholder pour l'instant) */}
      <div className="bg-purple-100 rounded-lg p-8 shadow-md max-w-2xl">
        <p className="text-lg text-gray-800">{t.comingSoon}</p>
      </div>
    </main>
  );
}
