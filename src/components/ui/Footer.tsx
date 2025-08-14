'use client';

import Link from 'next/link';
import {
  FaYoutube,
  FaTiktok,
  FaSpotify,
  FaDeezer,
  FaInstagram,
} from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // Logo officiel de X
import { HiOutlineMusicalNote } from 'react-icons/hi2'; // Icône Suno
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
    'w-11 h-11 text-2xl sm:w-12 sm:h-12 sm:text-3xl md:w-12 md:h-12 md:text-3xl';

  const iconHover =
    'motion-safe:hover:scale-110 hover:-translate-y-[1px]';

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 md:py-12">
        <h2 className="text-lg sm:text-xl font-semibold text-center mb-6 sm:mb-8">
          {t.heading}
        </h2>

        <nav
          aria-label={t.heading}
          className="mx-auto max-w-3xl flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5"
        >
          <Link
            href="https://www.youtube.com/@FloredEsprit-k7cX"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className={`${iconBase} ${iconSize} ${iconHover} text-white/80 hover:text-red-500`}
          >
            <FaYoutube />
          </Link>

          <Link
            href="https://x.com/FloreD72226"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className={`${iconBase} ${iconSize} ${iconHover} text-white/80 hover:text-sky-400`}
          >
            <SiX />
          </Link>

          <Link
            href="https://www.instagram.com/flore_desprit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`${iconBase} ${iconSize} ${iconHover} text-white/80 hover:text-pink-500`}
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://www.tiktok.com/@floredesprit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className={`${iconBase} ${iconSize} ${iconHover} text-white/80 hover:text-white`}
          >
            <FaTiktok />
          </Link>

          <Link
            href="https://open.spotify.com/intl-fr/artist/7FVerziPMd52srNMLo14FU"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            className={`${iconBase} ${iconSize} ${iconHover} text-white/80 hover:text-green-400`}
          >
            <FaSpotify />
          </Link>

          <Link
            href="https://www.deezer.com/en/artist/281712681"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Deezer"
            className={`${iconBase} ${iconSize} ${iconHover} text-white/80 hover:text-purple-400`}
          >
            <FaDeezer />
          </Link>

          <Link
            href="https://suno.com/@flordesprit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Suno"
            className={`${iconBase} ${iconSize} ${iconHover} text-white/80 hover:text-yellow-400`}
          >
            <HiOutlineMusicalNote />
          </Link>
        </nav>

        <div className="mt-8 sm:mt-10 h-px w-full bg-white/10" />
        <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-white/60">
          {t.copyright}
        </p>
      </div>
    </footer>
  );
}
