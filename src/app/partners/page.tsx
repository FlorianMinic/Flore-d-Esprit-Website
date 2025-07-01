'use client';

import { useLocale } from '@/hooks/useLocale';

export default function PartnersPage() {
  const { locale } = useLocale();

  const t = {
    fr: {
      title: "Partenaires",
      subtitle: "Ils soutiennent Flore d'Esprit",
      content: `Découvrez les partenaires et collaborations qui accompagnent Flore d'Esprit
      dans son voyage musical et créatif.`,
    },
    en: {
      title: "Partners",
      subtitle: "They support Flore d'Esprit",
      content: `Discover the partners and collaborations supporting Flore d'Esprit
      in its musical and creative journey.`,
    },
  }[locale];

  return (
    <main className="min-h-screen bg-white text-black px-6 py-20 md:px-20 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">{t.title}</h1>
      <p className="max-w-xl text-lg md:text-xl text-gray-700 mb-10">{t.subtitle}</p>
      <p className="max-w-2xl text-lg text-gray-800 whitespace-pre-line">{t.content}</p>
    </main>
  );
}
