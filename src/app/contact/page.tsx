'use client';

import { useLocale } from '@/hooks/useLocale';

export default function ContactPage() {
  const { locale } = useLocale();

  const t = {
    fr: {
      title: "Contact",
      subtitle: "Entrer en contact avec Flore d'Esprit",
      content: `Pour toute demande de collaboration, de presse ou d'informations,
      n'hésitez pas à me contacter via les réseaux sociaux ou par e-mail.`,
    },
    en: {
      title: "Contact",
      subtitle: "Get in touch with Flore d'Esprit",
      content: `For any collaboration, press, or information requests,
      feel free to contact me via social media or email.`,
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
