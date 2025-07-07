'use client';

import { useLocale } from '@/hooks/useLocale';
import Head from 'next/head';

export default function EventsPage() {
  const { locale } = useLocale();

  const t = {
    fr: {
      title: "Événements",
      subtitle: "Retrouve les prochains événements de Flore d'Esprit.",
      comingSoon: "Les événements seront affichés ici prochainement, reste à l'écoute !",
    },
    en: {
      title: "Events",
      subtitle: "Find Flore d'Esprit's upcoming events here.",
      comingSoon: "Events will be displayed here soon, stay tuned!",
    },
  }[locale];

  return (
    <>
      <Head>
        <title>{t.title} | Flore d'Esprit</title>
        <meta name="description" content={t.subtitle} />
      </Head>

      <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">{t.title}</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl text-center">{t.subtitle}</p>

        {/* Zone placeholder pour événements à venir */}
        <div className="bg-purple-100 rounded-lg p-6 shadow-md max-w-md text-center">
          <p className="text-gray-800">{t.comingSoon}</p>
        </div>
      </main>
    </>
  );
}
