'use client';

import { FaArrowDown } from "react-icons/fa";
import { useLocale } from '@/hooks/useLocale';

type HeroSectionProps = {
  nextSectionId?: string;
  backgroundUrl?: string;
};

export function HeroSection({
  nextSectionId = 'ai',
  backgroundUrl = "/images/FlorePortrait.png",
}: HeroSectionProps) {
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
      style={{ backgroundImage: `url('${backgroundUrl}')` }}
    >
      <div className="absolute top-[20%] w-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
          {t.title}
        </h1>
        <p className="text-lg md:text-2xl drop-shadow mb-6">
          {t.description}
        </p>
      </div>

      {/* Flèche harmonisée avec la home */}
      <a
        href={`#${nextSectionId}`}
        aria-label="Scroll to next section"
        className={[
          // verre + border comme sur la home
          "group inline-flex items-center justify-center leading-none",
          "w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full",
          "text-slate-100 border border-white/10 bg-white/10 backdrop-blur-md",
          "shadow-[0_0_0_1px_rgba(255,255,255,0.03)]",
          // focus ring comme sur la home
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2",
          "focus-visible:ring-offset-slate-950",
          // animations identiques à la home
          "transition-transform duration-300 hover:scale-110 hover:bg-white/20",
          "motion-safe:animate-[bounce_2s_ease-in-out_infinite]",
          "hover:animate-bounce-cartoon",
          // position
          "absolute bottom-6 left-1/2 -translate-x-1/2"
        ].join(" ")}
      >
        <FaArrowDown
          size={22}
          className="shrink-0 leading-none transition-transform duration-300 ease-out group-hover:scale-110"
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
