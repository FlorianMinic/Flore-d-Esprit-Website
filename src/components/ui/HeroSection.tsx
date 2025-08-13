'use client';

import { FaArrowDown } from 'react-icons/fa';
import { useLocale } from '@/hooks/useLocale';

type HeroSectionProps = {
  nextSectionId?: string;
  backgroundUrl?: string;
  /** Hauteur de ta navbar fixe en px (56 = h-14). */
  navbarHeightPx?: number;
};

export function HeroSection({
  nextSectionId = 'ai',
  backgroundUrl = '/images/FlorePortrait.png',
  navbarHeightPx = 56,
}: HeroSectionProps) {
  const { locale } = useLocale();

  const t = {
    fr: {
      title: 'Bienvenue au spectacle',
      description: "Le groove déjanté de Flore d'Esprit vous attend.",
      buttonLabel: 'Aller à la section suivante',
    },
    en: {
      title: 'Welcome to the show',
      description: 'Flore d’ Esprit’s crazy groove awaits you.',
      buttonLabel: 'Go to next section',
    },
  }[locale];

  return (
    <section
      className={[
        'relative w-full',
        // Hauteur = viewport - navbar ; svh corrige iOS
        'overflow-hidden',
        'bg-no-repeat bg-cover',
        // Cadrage : mobile centré, tablette/desktop légèrement relevé
        'bg-center md:bg-[position:center_35%] lg:bg-[position:center_25%]',
        // Anim: OFF mobile, ON ≥ md
        'motion-safe:md:animate-zoom',
        'flex items-center justify-center',
      ].join(' ')}
      style={{
        backgroundImage: `url('${backgroundUrl}')`,
        minHeight: `calc(100svh - ${navbarHeightPx}px)`,
      }}
    >
      {/* voile pour lisibilité */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/45"
        aria-hidden
      />

      {/* contenu */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="font-bold mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] text-[clamp(28px,6vw,64px)]">
          {t.title}
        </h1>
        <p className="mx-auto max-w-2xl text-slate-100/90 drop-shadow text-[clamp(16px,3.6vw,28px)]">
          {t.description}
        </p>
      </div>

      {/* flèche : anim ON ≥ md seulement */}
      <a
        href={`#${nextSectionId}`}
        aria-label={t.buttonLabel}
        className={[
          'group inline-flex items-center justify-center leading-none',
          'w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full',
          'text-slate-100 border border-white/10 bg-white/10 backdrop-blur-md',
          'shadow-[0_0_0_1px_rgba(255,255,255,0.03)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70',
          'focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
          'transition-transform duration-300 hover:scale-110 hover:bg-white/20',
          'absolute bottom-6 left-1/2 -translate-x-1/2',
          'motion-safe:md:animate-[bounce_2s_ease-in-out_infinite]',
        ].join(' ')}
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
