'use client';

import { useLocale } from '@/hooks/useLocale';

export default function AboutPage() {
  const { locale } = useLocale();

  const t = {
    fr: {
      title: "À propos",
      subtitle: "Découvre l'univers de Flore d'Esprit",
      content: `Flore d'Esprit est un projet musical mêlant électro, groove et paillettes,
      visant à libérer les esprits par la danse et la créativité. Derrière chaque morceau
      se cache une invitation à explorer un monde intérieur vibrant et coloré.`,
    },
    en: {
      title: "About",
      subtitle: "Discover the world of Flore d'Esprit",
      content: `Flore d'Esprit is a musical project blending electro, groove, and glitter,
      aiming to free minds through dance and creativity. Behind each track lies an invitation
      to explore a vibrant and colorful inner world.`,
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
