'use client';

import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { FaYoutube, FaTwitter, FaInstagram, FaTiktok, FaSpotify, FaDeezer } from 'react-icons/fa';
import { HiOutlineMusicalNote } from 'react-icons/hi2';
import { LanguageSwitcher } from '@/components/ui/languageSwitcher';
import { useLocale } from '@/hooks/useLocale';
import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

/* -------- Mini lecteur audio compact -------- */
function MiniAudioPlayer({
  src = '/audio/extrait.mp3',
  title,
}: {
  src?: string;
  title?: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    el.paused ? el.play() : el.pause();
  };

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = () => el.duration && setProgress(el.currentTime / el.duration);

    el.addEventListener('play', onPlay);
    el.addEventListener('pause', onPause);
    el.addEventListener('timeupdate', onTime);
    el.addEventListener('ended', onPause);
    return () => {
      el.removeEventListener('play', onPlay);
      el.removeEventListener('pause', onPause);
      el.removeEventListener('timeupdate', onTime);
      el.removeEventListener('ended', onPause);
    };
  }, []);

  return (
    <div className="hidden sm:flex items-center gap-3">
      <button
        onClick={toggle}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        aria-label={playing ? 'Pause' : 'Play'}
      >
        {playing ? '❚❚' : '▶'}
      </button>
      <div className="w-28 select-none">
        {title && (
          <div className="text-[11px] text-gray-500 dark:text-gray-400 leading-none mb-1 truncate">
            {title}
          </div>
        )}
        <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500 transition-[width]"
            style={{ width: `${Math.max(0, Math.min(1, progress)) * 100}%` }}
          />
        </div>
      </div>
      <audio ref={audioRef} src={src} preload="none" />
    </div>
  );
}

/* --------------------- NavBar --------------------- */
export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useLocale();

  const t = {
    fr: {
      home: 'Accueil',
      news: 'Actualités',
      presskit: 'Press Kit',
      about: 'À propos',
      partners: 'Partenaires',
      contact: 'Contact',
      nowPlaying: "Écoute : Extrait",
    },
    en: {
      home: 'Home',
      news: 'News',
      presskit: 'Press Kit',
      about: 'About',
      partners: 'Partners',
      contact: 'Contact',
      nowPlaying: 'Now playing: Preview',
    },
  }[locale];

  return (
    <nav className="bg-white/85 dark:bg-black/70 backdrop-blur-md shadow-md fixed w-full z-10">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* GAUCHE : Lecteur audio + Logo */}
          <div className="flex items-center gap-4">
            <MiniAudioPlayer src="/audio/extrait.mp3" title={t.nowPlaying} />
            <Link href="/" className="flex-shrink-0">
              <span
                className={`${audiowide.className} text-[18px] sm:text-xl tracking-wide text-purple-700 dark:text-purple-300`}
              >
                Flore d&apos;Esprit
              </span>
            </Link>
          </div>

          {/* MENU Desktop */}
          <div className="hidden sm:flex items-center gap-2 md:gap-4">
            {[
              { label: t.home, href: '/' },
              { label: t.news, href: '/news' },
              { label: t.presskit, href: '/presskit' },
              { label: t.about, href: '/about' },
              { label: t.partners, href: '/partners' },
              { label: t.contact, href: '/contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-2 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white group"
              >
                {item.label}
                <span className="pointer-events-none absolute left-1/2 -bottom-0.5 h-0.5 w-0 -translate-x-1/2 bg-purple-500 transition-all duration-300 group-hover:w-full rounded"></span>
              </Link>
            ))}

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3 pl-2 md:pl-4">
              <Link href="https://youtube.com" target="_blank" aria-label="YouTube" className="social-link"><FaYoutube /></Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter/X" className="social-link"><FaTwitter /></Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="social-link"><FaInstagram /></Link>
              <Link href="https://tiktok.com" target="_blank" aria-label="TikTok" className="social-link"><FaTiktok /></Link>
              <Link href="https://spotify.com" target="_blank" aria-label="Spotify" className="social-link"><FaSpotify /></Link>
              <Link href="https://deezer.com" target="_blank" aria-label="Deezer" className="social-link"><FaDeezer /></Link>
              <Link href="https://app.suno.ai/profile/FloreDesprit" target="_blank" aria-label="Suno" className="social-link"><HiOutlineMusicalNote /></Link>
            </div>

            <LanguageSwitcher />
          </div>

          {/* BOUTON Mobile */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-purple-700 dark:text-purple-300 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENU Mobile */}
      {isOpen && (
        <div className="sm:hidden bg-white/95 dark:bg-black/90 backdrop-blur-md" id="mobile-menu">
          <div className="px-4 pt-3 pb-4 space-y-2">
            <MiniAudioPlayer src="/audio/extrait.mp3" title={t.nowPlaying} />
            {[
              { label: t.home, href: '/' },
              { label: t.news, href: '/news' },
              { label: t.presskit, href: '/presskit' },
              { label: t.about, href: '/about' },
              { label: t.partners, href: '/partners' },
              { label: t.contact, href: '/contact' },
            ].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                <span className="block text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium">
                  {item.label}
                </span>
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}

      {/* Styles utilitaires pour les icônes */}
      <style jsx global>{`
        .social-link {
          display: inline-flex; align-items: center; justify-content: center;
          color: rgb(147 51 234); /* purple-600 */
        }
        .dark .social-link { color: rgb(216 180 254); } /* purple-300 */
        .social-link:hover { transform: scale(1.1); transition: transform 150ms; }
      `}</style>
    </nav>
  );
}
