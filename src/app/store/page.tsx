'use client';

import { useLocale } from '@/hooks/useLocale';
import Head from 'next/head';

export default function StorePage() {
  const { locale } = useLocale();

  const t = {
    fr: {
      title: "Boutique",
      subtitle: "Découvre les produits officiels de Flore d'Esprit.",
      comingSoon: "La boutique sera disponible prochainement, reste connecté !",
    },
    en: {
      title: "Store",
      subtitle: "Discover Flore d'Esprit's official products.",
      comingSoon: "The store will be available soon, stay tuned!",
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

        {/* Placeholder temporaire */}
        <div className="bg-purple-100 rounded-lg p-6 shadow-md max-w-md text-center">
          <p className="text-gray-800">{t.comingSoon}</p>
        </div>
      </main>
    </>
  );
}
