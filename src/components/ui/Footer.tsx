'use client';

import Link from 'next/link';
import {
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaSpotify,
  FaDeezer,
  FaInstagram,
} from 'react-icons/fa';
import { useLocale } from '@/hooks/useLocale';

export function Footer() {
  const { locale } = useLocale();

  const t = {
    fr: {
      heading: 'Retrouvez-moi sur les réseaux',
      copyright: `© ${new Date().getFullYear()} Flore d’Esprit`,
    },
    en: {
      heading: 'Find me on social media',
      copyright: `© ${new Date().getFullYear()} Flore d’Esprit`,
    },
  }[locale];

  const iconBase =
    'inline-flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition transform will-change-transform';

  const iconSize =
    // tailles progressives + cibles tactiles confortables
    'w-11 h-11 text-2xl sm:w-12 sm:h-12 sm:text-3xl md:w-12 md:h-12 md:text-3xl';

  const iconHover =
    // animations douces + respect reduced-motion
    'motion-safe:hover:scale-110 hover:-translate-y-[1px]';

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 md:py-12">
        {/* Titre centré, marges adaptées */}
        <h2 className="text-lg sm:text-xl font-semibold text-center mb-6 sm:mb-8">
          {t.heading}
        </h2>

        {/* Icônes responsives : wrap sur mobile, gap fluide */}
        <nav
          aria-label={t.heading}
          className="mx-auto max-w-3xl flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5"
        >
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className={`${iconBase} ${iconSize} ${iconHover} text-white/80 hover:text-red-500`}
          >
            <FaYoutube />
          </Link>

          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className={`${iconBase} ${iconSize} ${iconHover} text-white/80 hover:text-sky-400`}
          >
            <FaTwitter />
          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`${iconBase} ${iconSize} ${iconHover} text-white/80 hover:text-pink-500`}
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className={`${iconBase} ${iconSize} ${iconHover} text-white/80 hover:text-white`}
          >
            <FaTiktok />
          </Link>

          <Link
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            className={`${iconBase} ${iconSize} ${iconHover} text-white/80 hover:text-green-400`}
          >
            <FaSpotify />
          </Link>

          <Link
            href="https://deezer.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Deezer"
            className={`${iconBase} ${iconSize} ${iconHover} text-white/80 hover:text-purple-400`}
          >
            <FaDeezer />
          </Link>
        </nav>

        {/* Fine séparation + copyright */}
        <div className="mt-8 sm:mt-10 h-px w-full bg-white/10" />
        <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-white/60">
          {t.copyright}
        </p>
      </div>
    </footer>
  );
}
