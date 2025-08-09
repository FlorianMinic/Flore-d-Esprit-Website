'use client';

import { FaArrowDown } from "react-icons/fa";
import { useLocale } from '@/hooks/useLocale';

export function HeroSection() {
  const { locale } = useLocale();

  const t = {
    fr: {
      title: "Bienvenue au spectacle",
      description: "Le groove déjanté de Flore d'Esprit vous attend.",
      button: "→ Découvrir l’univers",
    },
    en: {
      title: "Welcome to the show",
      description: "Flore d'Esprit’s crazy groove awaits you.",
      button: "→ Discover the world",
    },
  }[locale];

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center animate-zoom"
      style={{
        backgroundImage: "url('/images/FlorePortrait.png')",
      }}
    >
      <div className="absolute top-[20%] w-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
          {t.title}
        </h1>
        <p className="text-lg md:text-2xl drop-shadow mb-6">
          {t.description}
        </p>
      </div>

      <a
        href="#univers"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-purple-300 text-purple-900 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="Scroll vers univers"
      >
        <FaArrowDown />
      </a>
    </section>
  );
}
