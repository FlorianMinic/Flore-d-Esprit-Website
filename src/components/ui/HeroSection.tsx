'use client';

import { FaArrowDown } from 'react-icons/fa';
import { useLocale } from '@/hooks/useLocale';
import { Raleway } from 'next/font/google';

// Fonts
const raleway = Raleway({ weight: ['400', '600', '700'], subsets: ['latin'] });

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
      title: "Flore d'Esprit",
      description: 'Venez écouter, laissez-vous emporter.',
      buttonLabel: 'Aller à la section suivante',
    },
    en: {
      title: "Flore d'Esprit",
      description: 'Come listen, let it take you away.',
      buttonLabel: 'Go to next section',
    },
  }[locale];

  return (
    <section
      className={[
        'relative w-full',
        'overflow-hidden',
        'bg-no-repeat bg-cover',
        'bg-center md:bg-[position:center_35%] lg:bg-[position:center_25%]',
        'motion-safe:md:animate-zoom',
        'flex items-center justify-center',
      ].join(' ')}
      style={{
        backgroundImage: `url('${backgroundUrl}')`,
        minHeight: `calc(100svh - ${navbarHeightPx}px)`,
      }}
    >
      {/* Voile pour lisibilité */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/45"
        aria-hidden
      />

      {/* Contenu */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1
          className={`${raleway.className} font-bold tracking-tight mb-3 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] text-[clamp(32px,6.2vw,68px)]`}
        >
          {t.title}
        </h1>
        <p
          className={`${raleway.className} font-normal mx-auto max-w-2xl text-slate-100/90 tracking-normal drop-shadow text-[clamp(16px,3.2vw,26px)]`}
        >
          {t.description}
        </p>
      </div>

      {/* Flèche */}
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
